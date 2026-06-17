import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    learnerName: "",
    age: "",
    phone: "",
    whatsapp: "",
    governorate: "",
    school: "",
    courseType: "",
  });

  const courseTypes = [
    { id: "python", label: "أساسيات البايثون بطريقة ممتعة" },
    { id: "ai", label: "رحلة الذكاء الاصطناعي للمبدعين" },
    { id: "entrepreneur", label: "مغامرة ريادة الأعمال للطفل الصغير" },
    { id: "pictoblox", label: "مغامرة البرمجة والذكاء الاصطناعي مع PictoBlox" },
  ];

  const governorates = [
    "القاهرة",
    "الإسكندرية",
    "الجيزة",
    "أسيوط",
    "قنا",
    "الأقصر",
    "سوهاج",
    "المنيا",
    "بني سويف",
    "الفيوم",
    "المنوفية",
    "الشرقية",
    "القليوبية",
    "كفر الشيخ",
    "الدقهلية",
    "دمياط",
    "بورسعيد",
    "السويس",
    "إسماعيلية",
    "البحر الأحمر",
    "جنوب سيناء",
    "شمال سيناء",
    "الوادي الجديد",
    "مطروح",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("تم التسجيل بنجاح! شكراً لاختيارك نشأ 🎉");
        setFormData({
          learnerName: "",
          age: "",
          phone: "",
          whatsapp: "",
          governorate: "",
          school: "",
          courseType: "",
        });
        onClose();
      } else {
        toast.error(data.message || "حدث خطأ في التسجيل");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("فشل الاتصال بالخادم. تأكد من أن الخادم يعمل بشكل صحيح.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-primary text-primary-foreground p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">نموذج التسجيل</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary/80 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* الاسم */}
          <div className="space-y-2">
            <Label htmlFor="learnerName" className="text-lg font-semibold">
              اسم المتعلم *
            </Label>
            <Input
              id="learnerName"
              name="learnerName"
              placeholder="أدخل اسم المتعلم"
              value={formData.learnerName}
              onChange={handleInputChange}
              required
              dir="rtl"
              className="text-lg py-6"
            />
          </div>

          {/* العمر */}
          <div className="space-y-2">
            <Label htmlFor="age" className="text-lg font-semibold">
              العمر *
            </Label>
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="أدخل العمر"
              value={formData.age}
              onChange={handleInputChange}
              required
              min="6"
              max="17"
              className="text-lg py-6"
            />
          </div>

          {/* رقم الهاتف */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-lg font-semibold">
              رقم الهاتف *
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="أدخل رقم الهاتف"
              value={formData.phone}
              onChange={handleInputChange}
              required
              dir="ltr"
              className="text-lg py-6"
            />
          </div>

          {/* رقم الواتساب */}
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-lg font-semibold">
              رقم الواتساب *
            </Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              placeholder="أدخل رقم الواتساب"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              dir="ltr"
              className="text-lg py-6"
            />
          </div>

          {/* المحافظة */}
          <div className="space-y-2">
            <Label htmlFor="governorate" className="text-lg font-semibold">
              اسم المحافظة *
            </Label>
            <Select
              value={formData.governorate}
              onValueChange={(value) =>
                handleSelectChange("governorate", value)
              }
            >
              <SelectTrigger className="text-lg py-6" dir="rtl">
                <SelectValue placeholder="اختر المحافظة" />
              </SelectTrigger>
              <SelectContent>
                {governorates.map((gov) => (
                  <SelectItem key={gov} value={gov}>
                    {gov}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* المدرسة */}
          <div className="space-y-2">
            <Label htmlFor="school" className="text-lg font-semibold">
              اسم المدرسة *
            </Label>
            <Input
              id="school"
              name="school"
              placeholder="أدخل اسم المدرسة"
              value={formData.school}
              onChange={handleInputChange}
              required
              dir="rtl"
              className="text-lg py-6"
            />
          </div>

          {/* نوع المسار */}
          <div className="space-y-2">
            <Label htmlFor="courseType" className="text-lg font-semibold">
              نوع المسار *
            </Label>
            <Select
              value={formData.courseType}
              onValueChange={(value) => handleSelectChange("courseType", value)}
            >
              <SelectTrigger className="text-lg py-6" dir="rtl">
                <SelectValue placeholder="اختر المسار" />
              </SelectTrigger>
              <SelectContent>
                {courseTypes.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full font-bold"
            >
              {loading ? "جاري التسجيل..." : "تأكيد التسجيل"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 text-lg py-6 rounded-full font-bold"
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegistrationForm;
