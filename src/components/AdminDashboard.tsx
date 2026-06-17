import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LogOut, Trash2, RefreshCw } from "lucide-react";
import logo from "@/assets/logo.png";

interface Registration {
  id: string;
  learnerName: string;
  age: string;
  phone: string;
  whatsapp: string;
  governorate: string;
  school: string;
  courseType: string;
  createdAt: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchRegistrations();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchRegistrations, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "/api/admin/registrations",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (data.ok) {
        setRegistrations(data.registrations);
      } else {
        toast.error("فشل في جلب البيانات");
      }
    } catch (error) {
      console.error("Error fetching registrations:", error);
      toast.error("خطأ في الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("هل تريد حذف هذا التسجيل؟")) return;

    try {
      setDeleting(id);
      const response = await fetch(
        `/api/admin/registrations/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setRegistrations((prev) => prev.filter((r) => r.id !== id));
        toast.success("تم حذف التسجيل بنجاح");
      } else {
        toast.error(data.message || "فشل الحذف");
      }
    } catch (error) {
      console.error("Error deleting registration:", error);
      toast.error("خطأ في الحذف");
    } finally {
      setDeleting(null);
    }
  };

  const courseTypeLabel = (courseType: string) => {
    const types: { [key: string]: string } = {
      python: "أساسيات البايثون",
      ai: "الذكاء الاصطناعي",
      entrepreneur: "ريادة الأعمال",
      pictoblox: "PictoBlox",
    };
    return types[courseType] || courseType;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50">
      {/* Header */}
      <div className="bg-primary text-primary-foreground sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={logo} alt="نشأ" className="h-12 w-auto" />
              <h1 className="text-3xl font-bold">لوحة التحكم الإدارية</h1>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <LogOut className="w-5 h-5 ml-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">
                {registrations.length}
              </div>
              <div className="text-gray-600 mt-2 text-lg">التسجيلات الكلية</div>
            </div>
          </Card>

          <Card className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">
                {registrations.filter((r) => r.courseType === "python").length}
              </div>
              <div className="text-gray-600 mt-2 text-lg">البايثون</div>
            </div>
          </Card>

          <Card className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500">
                {registrations.filter((r) => r.courseType === "ai").length}
              </div>
              <div className="text-gray-600 mt-2 text-lg">الذكاء الاصطناعي</div>
            </div>
          </Card>

          <Card className="bg-white p-8 rounded-2xl shadow-md">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500">
                {
                  registrations.filter((r) => r.courseType === "entrepreneur")
                    .length
                }
              </div>
              <div className="text-gray-600 mt-2 text-lg">ريادة الأعمال</div>
            </div>
          </Card>
        </div>

        {/* Refresh Button */}
        <div className="mb-8 flex justify-end gap-4">
          <Button
            onClick={fetchRegistrations}
            disabled={loading}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full"
          >
            <RefreshCw className="w-5 h-5 ml-2" />
            {loading ? "جاري التحديث..." : "تحديث البيانات"}
          </Button>
        </div>

        {/* Registrations Table */}
        <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    اسم المتعلم
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    العمر
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    الهاتف
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    الواتساب
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    المحافظة
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    المدرسة
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    المسار
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    التاريخ
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-bold">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-6 py-12 text-center">
                      <div className="text-gray-500 text-xl">
                        لا توجد تسجيلات حتى الآن
                      </div>
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => (
                    <tr
                      key={reg.id}
                      className="border-b hover:bg-slate-50 transition"
                    >
                      <td className="px-6 py-4" dir="rtl">
                        {reg.learnerName}
                      </td>
                      <td className="px-6 py-4">{reg.age}</td>
                      <td className="px-6 py-4" dir="ltr">
                        {reg.phone}
                      </td>
                      <td className="px-6 py-4" dir="ltr">
                        {reg.whatsapp}
                      </td>
                      <td className="px-6 py-4" dir="rtl">
                        {reg.governorate}
                      </td>
                      <td className="px-6 py-4" dir="rtl">
                        {reg.school}
                      </td>
                      <td className="px-6 py-4" dir="rtl">
                        {courseTypeLabel(reg.courseType)}
                      </td>
                      <td className="px-6 py-4" dir="ltr">
                        {new Date(reg.createdAt).toLocaleDateString("ar-EG")}
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          onClick={() => handleDelete(reg.id)}
                          disabled={deleting === reg.id}
                          variant="destructive"
                          size="sm"
                          className="text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
