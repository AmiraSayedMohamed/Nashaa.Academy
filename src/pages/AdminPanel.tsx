import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin = ({ onLoginSuccess }: AdminLoginProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        toast.success("تم تسجيل الدخول بنجاح!");
        onLoginSuccess();
      } else {
        toast.error(data.message || "فشل تسجيل الدخول");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("فشل الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-2xl shadow-2xl">
        <div className="bg-primary text-primary-foreground p-8 text-center rounded-t-2xl">
          <img src={logo} alt="نشأ" className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <p className="text-primary-foreground/80 mt-2">تسجيل دخول الإدارة</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-lg font-semibold">
              اسم المستخدم
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="أدخل اسم المستخدم"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="text-lg py-6"
              dir="ltr"
            />
            <p className="text-xs text-gray-500 mt-2">
              (تجريبي: admin أو nasha)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-lg font-semibold">
              كلمة المرور
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="أدخل كلمة المرور"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="text-lg py-6"
              dir="ltr"
            />
            <p className="text-xs text-gray-500 mt-2">
              (تجريبي: admin123 أو nasha123)
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full font-bold"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <strong>🔐 بيانات تسجيل الدخول التجريبية:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Admin: admin / admin123</li>
              <li>• Nasha: nasha / nasha123</li>
            </ul>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
