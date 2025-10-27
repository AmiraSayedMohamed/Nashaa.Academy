const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Demo in-memory "DB" - replace with real DB in production
const users = new Map(); // email -> { passwordHash, verified, verifyToken, resetToken }

// Simple transporter - configure real SMTP in production
async function createTransporter() {
  // For demo, use ethereal.email test account
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
}

app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'البريد/كلمة المرور مطلوبة' });
  if (users.has(email)) return res.status(400).json({ message: 'المستخدم موجود' });
  const saltRounds = 10; // use 12+ in production
  const hash = await bcrypt.hash(password, saltRounds);
  const verifyToken = crypto.randomBytes(32).toString('hex');
  users.set(email, { passwordHash: hash, verified: false, verifyToken });

  // send verification email (demo)
  const transporter = await createTransporter();
  const verifyUrl = `http://localhost:8080/api/auth/verify?email=${encodeURIComponent(email)}&token=${verifyToken}`;
  const info = await transporter.sendMail({
    from: 'no-reply@example.com',
    to: email,
    subject: 'تأكيد البريد - Demo',
    text: `اضغط الرابط لتأكيد البريد: ${verifyUrl}`,
    html: `<p>اضغط الرابط لتأكيد البريد: <a href="${verifyUrl}">تأكيد</a></p>`
  });

  console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

  res.json({ ok: true, message: 'تم التسجيل، راجع البريد لتأكيد الحساب (demo)' });
});

app.get('/api/auth/verify', (req, res) => {
  const { email, token } = req.query;
  if (!email || !token) return res.status(400).send('مفقود');
  const user = users.get(email);
  if (!user || user.verifyToken !== token) return res.status(400).send('رابط غير صالح');
  user.verified = true;
  user.verifyToken = null;
  users.set(email, user);
  res.send('تم تأكيد حسابك (demo). يمكنك الآن تسجيل الدخول.');
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);
  if (!user) return res.status(401).json({ message: 'مستخدم غير موجود' });
  if (!user.verified) return res.status(401).json({ message: 'يرجى تأكيد البريد أولاً' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'بريد/كلمة مرور خاطئة' });
  // create demo token
  const token = uuidv4();
  user.sessionToken = token;
  users.set(email, user);
  res.json({ token });
});

app.post('/api/auth/forgot', async (req, res) => {
  const { email } = req.body;
  const user = users.get(email);
  if (!user) {
    // don't reveal existence
    return res.json({ ok: true });
  }
  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetToken = resetToken;
  user.resetIssued = Date.now();
  users.set(email, user);

  const transporter = await createTransporter();
  const resetUrl = `http://localhost:8080/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;
  const info = await transporter.sendMail({
    from: 'no-reply@example.com',
    to: email,
    subject: 'إعادة تعيين كلمة المرور - Demo',
    text: `اضغط الرابط لإعادة تعيين كلمة المرور: ${resetUrl}`,
    html: `<p>اضغط الرابط لإعادة تعيين كلمة المرور: <a href="${resetUrl}">إعادة التعيين</a></p>`
  });

  console.log('Reset preview URL:', nodemailer.getTestMessageUrl(info));
  res.json({ ok: true });
});

app.post('/api/auth/reset', async (req, res) => {
  const { token, password, email } = req.body;
  // find user by token
  const entry = Array.from(users.entries()).find(([e, u]) => u.resetToken === token && e === email);
  if (!entry) return res.status(400).json({ message: 'رابط إعادة التعيين غير صالح أو انتهى' });
  const [userEmail, user] = entry;
  // token expiry: 1 hour demo
  if (Date.now() - (user.resetIssued || 0) > 1000 * 60 * 60) return res.status(400).json({ message: 'انتهت صلاحية الرابط' });
  const hash = await bcrypt.hash(password, 10);
  user.passwordHash = hash;
  user.resetToken = null;
  user.resetIssued = null;
  users.set(userEmail, user);
  res.json({ ok: true });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Auth demo server running on', port));
