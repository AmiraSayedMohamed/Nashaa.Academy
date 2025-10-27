import { Button } from "@/components/ui/button";
import robotHero from "@/assets/robot-hero.png";
import { Lightbulb, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-primary relative overflow-hidden min-h-[600px]">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-8 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-right">
            <span className="block text-white">
              نزرع فضول<span className="text-accent">هـــم</span>
            </span>
            <span className="block bg-white text-primary px-10 py-4 rounded-full mt-4 inline-block text-3xl md:text-4xl shadow-lg">
              ينمو إبداعهــــم
            </span>
          </h1>

          <ul className="space-y-5 text-lg text-white">
            <li className="flex items-start gap-3 text-right">
              <span className="text-primary-foreground text-2xl">•</span>
              <span className="text-white">مناهج عملية بمشروعات يخرج بها الطفل portfolio حقيقي.</span>
            </li>
            <li className="flex items-start gap-3 text-right">
              <span className="text-primary-foreground text-2xl">•</span>
              <span className="text-white">مسار متدرج يجمع برمجة، ذكاء اصطناعي وريادة أعمال.</span>
            </li>
            <li className="flex items-start gap-3 text-right">
              <span className="text-primary-foreground text-2xl">•</span>
              <span className="text-white">متابعة فردية وتقييم مستمر لكل طالب.</span>
            </li>
          </ul>

          <div className="flex justify-end relative">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all border-4 border-accent hover:border-accent/90"
              onClick={() => {
                const el = document.getElementById("register-now-btn") || document.getElementById("free-session") || document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              إحجز الحصة المجانية الآن
            </Button>
            
          </div>
        </div>

        <div className="relative z-10 order-1 md:order-2 flex items-center justify-center">
          <div className="relative">
            <img 
              src={robotHero} 
              alt="Robot Mascot" 
              className="w-full max-w-[400px] mx-auto drop-shadow-2xl animate-float"
            />
            {/* nudge rocket slightly left (less offset) and move lightbulb slightly right */}
            <Rocket className="absolute -top-4 -left-4 text-accent w-20 h-20 animate-bounce" style={{ fill: '#FF9B50' }} />
            <Lightbulb className="absolute top-16 left-31 text-accent w-20 h-20 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
        clipPath: "ellipse(100% 100% at 50% 100%)"
      }}></div>
    </section>
  );
};

export default Hero;
