import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-background" style={{
        clipPath: "ellipse(100% 100% at 50% 0%)"
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-primary-foreground mb-16">
          مــن نحــن
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card p-8 rounded-[2rem] shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6 bg-secondary inline-block px-6 py-2 rounded-full">
              يعني إيه نشأ؟
            </h3>
            <p className="text-card-foreground leading-relaxed text-lg">
              كلمة نشأ جاية من معني البداية والتأسيس، إحنا بنؤمن إن الطفل لما يتعلم صح من بدري، بيكبر ومعاه أدوات تخليه يسبق غيره بخطوات.
            </p>
          </Card>

          <Card className="bg-card p-8 rounded-[2rem] shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6 bg-secondary inline-block px-6 py-2 rounded-full">
              مين إحنا؟
            </h3>
            <p className="text-card-foreground leading-relaxed text-lg">
              إحنا منصة تعليمية للأطفال والمراهقين من 6 لـ 17 سنة، بنقدملهم مهارات المستقبل: البرمجة، الذكاء الاصطناعي، وريادة الأعمال. هدفنا نجهز جيل جديد مبتكر، واثق من نفسه، وعنده فكر قيادي بقدر يغير العالم.
            </p>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
        clipPath: "ellipse(100% 100% at 50% 100%)"
      }}></div>
    </section>
  );
};

export default About;
