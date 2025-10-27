import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Users } from "lucide-react";
import courseRobot from "@/assets/1 (1).png";

const Courses = () => {
  const courses = [
    {
      title: "رحلة الذكاء الاصطناعي للمبدعين",
      sessions: "12 حصة",
      duration: "120 دقيقة / حصة",
      age: "15 - 18 سنة",
      description: "دورة تطبيقية نغوص في تعلم الآلة وتحليل البيانات. يتطور فيها ببني مشروعاً حاصاً فيرصف في المحفظة، كمهمة قوية لدراسات علوم البيانات والذكاء الاصطناعي."
    },
    {
      title: "أساسيات البايثون بطريقة ممتعة",
      sessions: "12 حصة",
      duration: "120 دقيقة / حصة",
      age: "12 - 15 سنة",
      description: "تعرف عملي للمراهقين على لغة بايثون عبر مشاريع ممتعة: كتابة الحكايات والحلوال. مع تجهيز لطاليب للإنتقال لأدوات متقدمة في الذكاء الاصطناعي وعلوم البيانات وتعزيز التفكير المنطقي والاستقلالية."
    },
    {
      title: "مغامرة ريادة الأعمال للطفل الصغير",
      sessions: "12 حصة",
      duration: "120 دقيقة / حصة",
      age: "8 - 11 سنة",
      description: "منهج عملي يعلم الطفل حلوات توليد الفكرة وتصميم منذ مصدر الروبول والتعارف، بهدف تنمية روح المبادرة والقدرة على تعدد أفكار ملموسة."
    }
  ];

  return (
    <section id="courses" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-primary-foreground mb-16">
          مسارات التعلم
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="bg-card p-6 rounded-[2rem] shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full inline-block mb-6">
                <h3 className="text-xl font-bold">{course.title}</h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold">{course.sessions}</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">{course.age}</span>
                </div>
              </div>

              <p className="text-card-foreground leading-relaxed mb-6">
                {course.description}
              </p>

              <Button
                className="w-full rounded-full font-bold bg-accent hover:bg-accent/90"
                onClick={() => {
                  const el = document.getElementById("contact-info") || document.getElementById("register-now-btn");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                المزيد عن المستوى
              </Button>
            </Card>
          ))}
        </div>

        <Card className="bg-card p-8 md:p-12 rounded-[2rem] shadow-xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={courseRobot}
                alt="Robot with Laptop"
                className="w-full max-w-xs mx-auto drop-shadow-2xl"
              />
            </div>

            <div>
              <div className="bg-primary text-primary-foreground px-8 py-4 rounded-full inline-block mb-6">
                <h3 className="text-2xl font-bold">مغامرة البرمجة والذكاء الاصطناعي مع PictoBlox</h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold">12 حصة</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">120 دقيقة / حصة</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">8 - 11 سنة</span>
                </div>
              </div>

              <p className="text-card-foreground leading-relaxed mb-6">
                تجربة ممزجة لتعليم البرمجة للأطفال: تصميم تطبيقات تفاعلية، تحريك شخصيات وبرمجة ألعاب. مع تركيز على الإبداع، وبناء مشاريع يمكدها الطفل بفخر أمام أهله.
              </p>

              <Button
                className="w-full md:w-auto rounded-full font-bold bg-accent hover:bg-accent/90 px-12"
                onClick={() => {
                  const el = document.getElementById("contact-info") || document.getElementById("register-now-btn");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                المزيد عن المستوى
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Courses;
