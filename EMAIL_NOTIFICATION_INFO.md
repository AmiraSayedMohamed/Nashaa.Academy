# Email Notification System - Nashaa Website

## ✅ Implementation Complete

### What Was Added:
When a student registers on the website, an automatic email notification is sent to **both** admin email addresses with all the student's registration details.

### Email Recipients:
1. **nasha.academy1@gmail.com**
2. **amira.sayedzaa@gmail.com**

### Email Content Includes:
- 🎓 Student Name (اسم المتعلم)
- 📅 Age (العمر)
- 📱 Phone Number (رقم الهاتف)
- 💬 WhatsApp Number (رقم الواتساب)
- 🏛️ Governorate (المحافظة)
- 🏫 School Name (المدرسة)
- 📚 Course Type (نوع المسار):
  - أساسيات البايثون بطريقة ممتعة
  - رحلة الذكاء الاصطناعي للمبدعين
  - مغامرة ريادة الأعمال للطفل الصغير
  - مغامرة البرمجة والذكاء الاصطناعي مع PictoBlox
- ⏰ Registration Date & Time (تاريخ التسجيل)

### Email Format:
- **Subject:** 🎓 تسجيل طالب جديد - نشأ
- **Format:** Beautiful HTML email with RTL (right-to-left) Arabic support
- **Styling:** Professional gradient header with organized information rows

### Technical Details:
- **Location:** `server/index.js` (lines 154-264)
- **Email Service:** Currently using Ethereal Email for testing (demo mode)
- **Fallback:** If email fails, registration still succeeds (non-blocking)

### For Production Use:
To use real email service (Gmail, SendGrid, etc.), update the `createTransporter()` function in `server/index.js` with your SMTP credentials:

```javascript
return nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
```

### Testing:
✅ A test registration was successfully submitted and email notifications were sent to both addresses.
You can view the test email at: https://ethereal.email (check server console for preview URL)

---

## Website Access:
- **Frontend:** http://localhost:8080/
- **Backend API:** http://localhost:4000/
- **Admin Panel:** http://localhost:8080/admin

## How to Run:
1. **Start Backend Server:**
   ```
   cd "d:\projects\Nashaa Website\v4\server"
   node index.js
   ```

2. **Start Frontend Server:**
   ```
   cd "d:\projects\Nashaa Website\v4"
   npm run dev
   ```

Both servers must be running for the registration and email notification to work properly.
