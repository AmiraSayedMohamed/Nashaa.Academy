import { Button } from "@/components/ui/button";
import img3a from "@/assets/3-1.png";
import img3 from "@/assets/3.png";
import img4a from "@/assets/4-1.png";
import img4 from "@/assets/4.png";
import img5a from "@/assets/5-1.png";
import img5 from "@/assets/5.png";

const Gallery = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32" style={{
        background: "linear-gradient(to bottom, hsl(var(--primary)), transparent)"
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="bg-card px-12 py-4 rounded-full inline-block shadow-lg">
            إحجز مسارك الآن
          </span>
        </h2>

        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto my-16">
          {[{img: img3a, title: 'تعلموا بشكل مباشر'}, {img: img3, title: 'مشاريع عملية'}, {img: img4a, title: 'تواصل معنا الآن'}].map((item, idx) => (
            <div key={idx} className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl relative">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover block" />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <p className="text-lg font-bold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16" id="journey">
          <Button 
            id="journey-btn"
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-2xl px-16 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all"
            onClick={() => {
              const el = document.getElementById("register-now-btn") || document.getElementById("free-session");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            رحلة التعلم مع نشأ
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[{img: img4, title: 'نعلمهم بشكل مختلف'}, {img: img5a, title: 'مستقبلهم برمجهم'}, {img: img5, title: 'مقومو بشكروا'}].map((item, idx) => (
            <div key={idx} className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl relative">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover block" />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <p className="text-lg font-bold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
