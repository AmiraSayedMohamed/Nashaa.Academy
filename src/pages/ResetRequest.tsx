import { useState } from "react";

const ResetRequest = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("أدخل البريد الخاص بك");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(err.message || "خطأ");
        return;
      }
      alert("تحقق من بريدك للحصول على رابط إعادة التعيين (تجريبي)");
    } catch (e) {
      alert("فشل الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 bg-card rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">إعادة تعيين كلمة المرور</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block mb-2">البريد الإلكتروني</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg border" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold">{loading ? 'جاري...' : 'أرسل رابط إعادة التعيين'}</button>
        </form>
      </div>
    </div>
  );
};

export default ResetRequest;
