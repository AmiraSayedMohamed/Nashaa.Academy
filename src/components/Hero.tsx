import { Button } from "@/components/ui/button";
import robotHero from "@/assets/robot-hero.png";
import { Lightbulb, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 order-2 md:order-1">
          <img 
            src={robotHero} 
            alt="Robot Mascot" 
            className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
          />
          <Rocket className="absolute top-10 left-10 text-accent w-12 h-12 animate-bounce" />
          <Lightbulb className="absolute bottom-20 right-10 text-accent w-16 h-16 animate-pulse" />
        </div>

        <div className="text-primary-foreground space-y-6 order-1 md:order-2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            نزرع فضـــولهـــم
            <span className="block bg-secondary text-primary px-8 py-3 rounded-full mt-4 inline-block">
              ينمو إبداعهــــم
            </span>
          </h1>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>مناهج عملية بمشروعات يخرج بها الطفل portfolio حقيقي.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>مسار متدرج يجمع برمجة، ذكاء اصطناعي وريادة أعمال.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>متابعة فردية وتقييم مستمر لكل طالب.</span>
            </li>
          </ul>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            إحجز الحصة المجانية الآن
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
        clipPath: "ellipse(100% 100% at 50% 100%)"
      }}></div>
    </section>
  );
};

export default Hero;
