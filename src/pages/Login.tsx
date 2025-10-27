import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDemo } from "@/lib/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  // immediate navigation: we won't wait for backend response
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return alert("أدخل البريد وكلمة المرور");

    // Immediately mark as logged in (in-memory) and navigate so the user sees the site
    loginDemo();
    navigate("/");

    // Fire-and-forget background login to the backend (won't block the user)
    (async () => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          console.warn("Background login failed:", err);
        } else {
          // optionally read response for audit/debug
          await res.json().catch(() => null);
        }
      } catch (err) {
        console.warn("Background login network error:", err);
      }
    })();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 bg-card rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>
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
          <div className="flex items-center justify-between">
            <a href="/reset" className="text-sm text-primary">نسيت كلمة المرور؟</a>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold">دخول</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
