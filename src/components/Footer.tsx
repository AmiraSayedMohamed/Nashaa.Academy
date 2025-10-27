import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import robotHero from "@/assets/robot-hero.png";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background py-20">
      <div className="container mx-auto px-6">
        <Card className="bg-card p-12 rounded-[3rem] shadow-2xl max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary text-center mb-8">
            سارع بالحصول على الحصة المجانية
          </h2>

          <div className="bg-primary text-primary-foreground p-8 rounded-[2rem] mb-8">
            <p className="text-center text-xl mb-6">
              للتسجيل في الحصة المجانية، اضغط على الزر للانتقال إلى نموذج التسجيل
            </p>
            <Button 
              size="lg" 
              className="w-full bg-card hover:bg-card/90 text-primary font-bold text-2xl py-8 rounded-full shadow-lg"
            >
              سجل الآن
            </Button>
          </div>

          <div className="flex justify-center">
            <img 
              src={robotHero} 
              alt="Robot on Bean Bag" 
              className="w-64 h-auto drop-shadow-2xl"
            />
          </div>
        </Card>

        <div className="bg-primary text-primary-foreground p-12 rounded-t-[3rem]">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <img src={logo} alt="نشأ" className="h-16 w-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">من بذرة حلم لشجرة نجاح</h3>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">من نحن</h4>
              <p className="leading-relaxed">
                نشأ هي منصة تعليمية عصرية متخصصة في تجهيز الأطفال والمراهقين (7-6) سنة بمهارات المستقبل: البرمجة، الذكاء الاصطناعي وريادة الأعمال. نقدم مناهج ممتعة ومهارية، تخصصين محترفين، قادرين علي جعل كل طفل وطفل مستعد مع مبالمجك خرجة الإنتهاء. والهر هدفنا: خلق جيل واعى، مبتكر ومتعدد مع متطلبات سوق العمل.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">اتصل بنا على</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+20 11 0705 6915</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>nasha.academy1@gmail.com</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-bold mb-4">راسلنا عبر البريد الإلكتروني على:</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-card text-primary p-3 rounded-full hover:opacity-80 transition-opacity">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-card text-primary p-3 rounded-full hover:opacity-80 transition-opacity">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-card text-primary p-3 rounded-full hover:opacity-80 transition-opacity">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
