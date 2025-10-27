import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-primary/25 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-primary/15 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-primary mb-20">
          مــن نحــن
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold text-primary mb-6 bg-secondary inline-block px-6 py-2 rounded-full">
              يعني إيه نشأ؟
            </h3>
            <p className="text-card-foreground leading-relaxed text-lg">
              كلمة نشأ جاية من معني البداية والتأسيس، إحنا بنؤمن إن الطفل لما يتعلم صح من بدري، بيكبر ومعاه أدوات تخليه يسبق غيره بخطوات.
            </p>
          </Card>

          <Card className="bg-card p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold text-primary mb-6 bg-secondary inline-block px-6 py-2 rounded-full">
              مين إحنا؟
            </h3>
            <p className="text-card-foreground leading-relaxed text-lg">
              إحنا منصة تعليمية للأطفال والمراهقين من 6 لـ 17 سنة، بنقدملهم مهارات المستقبل: البرمجة، الذكاء الاصطناعي، وريادة الأعمال. هدفنا نجهز جيل جديد مبتكر، واثق من نفسه، وعنده فكر قيادي بقدر يغير العالم.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
