import { Card } from "@/components/ui/card";
import robotHero from "@/assets/robot-hero.png";

const Features = () => {
  const features = [
    {
      title: "طفلك هنعلمه ريادة أعمال:",
      description: "لأننا هنكلمه يعرف يحقق أفكاره لمشاريع صغيرة، ويكبر وهو عنده فكر قيادي وشخصية قوية قادرة تواجه التحديات."
    },
    {
      title: "طفلك هنعلمه ذكاء إصطناعي:",
      description: "لأنه هو المستقبل اللي كله تكنولوجيا، لما يتقنه بدري، هيفهم العالم الجديد ويبقى سابق غيره بخطوات."
    },
    {
      title: "طفلك هنعلمه برمجة:",
      description: "لأن البرمجة مش بس كود، ده لغة المستقبل اللي بتخلي عقله منظم وقادمه إنه يحل المشكلات ويفكر بطريقة مبتكرة."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-background" style={{
        clipPath: "ellipse(100% 100% at 50% 0%)"
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-primary mb-16">
          ماذا نقدم لأطفالكم؟
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img 
              src={robotHero} 
              alt="Robot Teaching" 
              className="w-full max-w-sm mx-auto drop-shadow-2xl animate-float"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-primary text-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="leading-relaxed text-lg">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
