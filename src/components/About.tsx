import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          مــن نحــن
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold text-primary mb-6 bg-secondary inline-block px-8 py-3 rounded-full">
              يعني إيه نشأ؟
            </h3>
            <p className="text-primary leading-relaxed text-lg">
              كلمة نشأ جاية من معني البداية والتأسيس، إحنا بنؤمن إن الطفل لما يتعلم صح من بدري، بيكبر ومعاه أدوات تخليه يسبق غيره بخطوات.
            </p>
          </Card>

          <Card className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold text-primary mb-6 bg-secondary inline-block px-8 py-3 rounded-full">
              مين إحنا؟
            </h3>
            <p className="text-primary leading-relaxed text-lg">
              إحنا منصة تعليمية للأطفال والمراهقين من 6 لـ 17 سنة، بنقدملهم مهارات المستقبل: البرمجة، الذكاء الاصطناعي، وريادة الأعمال. هدفنا نجهز جيل جديد مبتكر، واثق من نفسه، وعنده فكر قيادي بقدر يغير العالم.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
