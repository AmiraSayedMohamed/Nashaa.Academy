import { Card } from "@/components/ui/card";

const WhyUs = () => {
  const reasons = [
    {
      title: "طفلك هنعلمه برمجة",
      description: "نتابع تقدم الطفل مع الأهل بإنتظام ونقدم توصيات مخصصة لدعم تطور كل طفل."
    },
    {
      title: "مدربين متخصصين في تعليم الأطفال",
      description: "مدربونا خبراء ومدربون على التعامل مع الأطفال. يستخدمون طرق تفاعلية ويهتموا بكل طفل مردنا."
    },
    {
      title: "التدريب على مشاريع عملية",
      description: "نعلم الأطفال عملنا عن طريق مشاريع حقيقية زى بناء منصة متنوعة من الفرص للتنفيذ بطرق ممتعة ومناسبة لعمارهم."
    }
  ];

  return (
    <section id="whyus" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full opacity-50"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-primary rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent rounded-full opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-primary text-primary-foreground px-12 py-4 rounded-full inline-block">
            لماذا تختار نشأ؟
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-primary text-primary-foreground p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all text-center"
            >
              <h3 className="text-2xl font-bold mb-6">{reason.title}</h3>
              <p className="leading-relaxed text-lg">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: "linear-gradient(to bottom, transparent, hsl(var(--primary)))"
      }}></div>
    </section>
  );
};

export default WhyUs;
