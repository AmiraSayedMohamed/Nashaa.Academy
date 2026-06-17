const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const users = new Map();
const registrations = [];
const adminUsers = new Map([
  ['admin', { username: 'admin', password: 'admin123' }],
  ['nasha', { username: 'nasha', password: 'nasha123' }]
]);

const ADMIN_EMAILS = ['nasha.academy1@gmail.com', 'amira.sayedzaa@gmail.com'];

async function createTransporter() {
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email', port: 587,
    auth: { user: testAccount.user, pass: testAccount.pass }
  });
}

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'البريد/كلمة المرور مطلوبة' });
  if (users.has(email)) return res.status(400).json({ message: 'المستخدم موجود' });
  const verifyToken = crypto.randomBytes(32).toString('hex');
  users.set(email, { password, verified: false, verifyToken });
  const transporter = await createTransporter();
  const verifyUrl = `${req.headers.origin}/api/auth/verify?email=${encodeURIComponent(email)}&token=${verifyToken}`;
  await transporter.sendMail({
    from: 'no-reply@example.com',
    to: email,
    subject: 'تأكيد البريد',
    text: 'اضغط الرابط: ' + verifyUrl,
    html: '<p>اضغط <a href="' + verifyUrl + '">هنا</a> لتأكيد البريد</p>'
  });
  res.json({ ok: true, message: 'تم التسجيل، راجع البريد لتأكيد الحساب' });
});

app.get('/api/auth/verify', (req, res) => {
  const { email, token } = req.query;
  if (!email || !token) return res.status(400).send('مفقود');
  const user = users.get(email);
  if (!user || user.verifyToken !== token) return res.status(400).send('رابط غير صالح');
  user.verified = true;
  user.verifyToken = null;
  users.set(email, user);
  res.send('تم تأكيد حسابك');
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.get(email);
  if (!user) return res.status(401).json({ message: 'مستخدم غير موجود' });
  if (!user.verified) return res.status(401).json({ message: 'يرجى تأكيد البريد أولاً' });
  if (password !== user.password) return res.status(401).json({ message: 'بريد/كلمة مرور خاطئة' });
  const token = uuidv4();
  user.sessionToken = token;
  users.set(email, user);
  res.json({ token });
});

app.post('/api/auth/forgot', async (req, res) => {
  const { email } = req.body;
  const user = users.get(email);
  if (!user) return res.json({ ok: true });
  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetToken = resetToken;
  user.resetIssued = Date.now();
  users.set(email, user);
  const transporter = await createTransporter();
  const resetUrl = `${req.headers.origin}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;
  await transporter.sendMail({
    from: 'no-reply@example.com',
    to: email,
    subject: 'إعادة تعيين كلمة المرور',
    text: 'اضغط الرابط: ' + resetUrl,
    html: '<p>اضغط <a href="' + resetUrl + '">هنا</a> لإعادة تعيين كلمة المرور</p>'
  });
  res.json({ ok: true });
});

app.post('/api/auth/reset', async (req, res) => {
  const { token, password, email } = req.body;
  const entry = Array.from(users.entries()).find(([e, u]) => u.resetToken === token && e === email);
  if (!entry) return res.status(400).json({ message: 'رابط غير صالح' });
  const [userEmail, user] = entry;
  if (Date.now() - (user.resetIssued || 0) > 1000 * 60 * 60) return res.status(400).json({ message: 'انتهت صلاحية الرابط' });
  user.password = password;
  user.resetToken = null;
  user.resetIssued = null;
  users.set(userEmail, user);
  res.json({ ok: true });
});

// Learner registration
app.post('/api/registrations', async (req, res) => {
  try {
    const { learnerName, age, phone, whatsapp, governorate, school, courseType } = req.body;
    if (!learnerName || !age || !phone || !whatsapp || !governorate || !school || !courseType) {
      return res.status(400).json({ message: 'جميع الحقول مطلوبة' });
    }
    const registration = {
      id: uuidv4(),
      learnerName, age, phone, whatsapp, governorate, school, courseType,
      createdAt: new Date().toISOString()
    };
    registrations.push(registration);

    // Send email notification to admins
    try {
      const transporter = await createTransporter();
      const courseTypeNames = {
        python: 'أساسيات البايثون بطريقة ممتعة',
        ai: 'رحلة الذكاء الاصطناعي للمبدعين',
        entrepreneur: 'مغامرة ريادة الأعمال للطفل الصغير',
        pictoblox: 'مغامرة البرمجة والذكاء الاصطناعي مع PictoBlox'
      };
      const courseTypeName = courseTypeNames[courseType] || courseType;

      const emailHtml = [
        '<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8">',
        '<style>body{font-family:Arial,sans-serif;background:#f4f4f4;padding:20px}',
        '.container{background:white;border-radius:10px;padding:30px;max-width:600px;margin:0 auto;box-shadow:0 2px 10px rgba(0,0,0,.1)}',
        '.header{background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:20px;border-radius:10px;text-align:center;margin-bottom:20px}',
        '.header h1{margin:0;font-size:24px}.info-row{padding:12px;border-bottom:1px solid #eee;display:flex}',
        '.info-label{font-weight:bold;color:#667eea;min-width:120px}.info-value{color:#333}',
        '.footer{text-align:center;margin-top:20px;color:#666;font-size:14px}</style></head><body>',
        '<div class="container"><div class="header"><h1>🎓 تسجيل طالب جديد</h1></div>',
        '<h2 style="color:#667eea;text-align:center;">تفاصيل الطالب</h2>',
        '<div class="info-row"><div class="info-label">اسم المتعلم:</div><div class="info-value">' + learnerName + '</div></div>',
        '<div class="info-row"><div class="info-label">العمر:</div><div class="info-value">' + age + ' سنة</div></div>',
        '<div class="info-row"><div class="info-label">رقم الهاتف:</div><div class="info-value">' + phone + '</div></div>',
        '<div class="info-row"><div class="info-label">رقم الواتساب:</div><div class="info-value">' + whatsapp + '</div></div>',
        '<div class="info-row"><div class="info-label">المحافظة:</div><div class="info-value">' + governorate + '</div></div>',
        '<div class="info-row"><div class="info-label">المدرسة:</div><div class="info-value">' + school + '</div></div>',
        '<div class="info-row"><div class="info-label">نوع المسار:</div><div class="info-value">' + courseTypeName + '</div></div>',
        '<div class="info-row"><div class="info-label">تاريخ التسجيل:</div><div class="info-value">' + new Date(registration.createdAt).toLocaleString('ar-EG') + '</div></div>',
        '<div class="footer"><p>منصة نشأ للتعليم</p><p>هذا البريد تم إرساله تلقائياً</p></div></div></body></html>'
      ].join('');

      await transporter.sendMail({
        from: '"منصة نشأ" <no-reply@nashaa.com>',
        to: ADMIN_EMAILS.join(', '),
        subject: '🎓 تسجيل طالب جديد - نشأ',
        html: emailHtml
      });
    } catch (emailError) {
      console.error('Email failed:', emailError);
    }

    res.json({ ok: true, message: 'شكراً لك! تم استقبال بيانات التسجيل بنجاح' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'حدث خطأ' });
  }
});

// Admin routes
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'مطلوب' });
  const admin = adminUsers.get(username);
  if (!admin || admin.password !== password) return res.status(401).json({ message: 'خطأ في بيانات الدخول' });
  const token = uuidv4();
  res.json({ ok: true, token, message: 'تم تسجيل الدخول' });
});

app.get('/api/admin/registrations', (req, res) => {
  res.json({ ok: true, registrations });
});

app.delete('/api/admin/registrations/:id', (req, res) => {
  const { id } = req.params;
  const index = registrations.findIndex(r => r.id === id);
  if (index === -1) return res.status(404).json({ message: 'غير موجود' });
  registrations.splice(index, 1);
  res.json({ ok: true });
});

// Vercel serverless export
module.exports = app;
