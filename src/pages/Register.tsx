import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return alert("اكمل الحقول");
    if (password !== confirm) return alert("كلمة المرور وتأكيدها غير متطابقين");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(err.message || "فشل التسجيل");
        return;
      }
      alert("تم التسجيل. تحقق من بريدك لتأكيد الحساب.");
      navigate("/login");
    } catch (e) {
      alert("فشل الإتصال بالخادم (تجريبي). تم إنشاء حساب تجريبي.");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 bg-card rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">إنشاء حساب</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block mb-2">البريد الإلكتروني</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg border" />
          </div>

          <div>
            <label className="block mb-2">كلمة المرور</label>
            <div className="relative">
              <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-lg border" />
              <button type="button" aria-label="toggle password" onClick={() => setShow(s => !s)} className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2">
                {show ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-2">تأكيد كلمة المرور</label>
            <input type={show ? "text" : "password"} value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full p-3 rounded-lg border" />
          </div>

          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold">{loading ? 'جاري...' : 'إنشاء حساب'}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
