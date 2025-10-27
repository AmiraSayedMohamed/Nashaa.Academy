import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || password !== confirm) return alert("كلمات المرور غير متطابقة");
    if (!token) return alert("رابط غير صالح");
    try {
      const res = await fetch("/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(err.message || "فشل إعادة التعيين");
        return;
      }
      alert("تم تحديث كلمة المرور، يمكنك الآن تسجيل الدخول");
      navigate("/login");
    } catch (e) {
      alert("فشل الاتصال بالخادم");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 bg-card rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">إعادة تعيين كلمة المرور</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block mb-2">كلمة المرور الجديدة</label>
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
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold">تحديث كلمة المرور</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
