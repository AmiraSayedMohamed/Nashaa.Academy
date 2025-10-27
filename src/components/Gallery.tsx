import { Button } from "@/components/ui/button";

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
          <div className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-navy to-primary/20 flex items-center justify-center">
              <div className="text-center text-navy-foreground p-6">
                <p className="text-lg font-bold">تعلموا بشكل مباشر</p>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-navy to-primary/20 flex items-center justify-center">
              <div className="text-center text-navy-foreground p-6">
                <p className="text-lg font-bold">مشاريع عملية</p>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-navy to-primary/20 flex items-center justify-center">
              <div className="text-center text-navy-foreground p-6">
                <p className="text-lg font-bold">تواصل معنا الآن</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-2xl px-16 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            رحلة التعلم مع نشأ
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-navy to-accent/20 flex items-center justify-center">
              <div className="text-center text-navy-foreground p-6">
                <p className="text-lg font-bold">نعلمهم بشكل مختلف</p>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-navy to-accent/20 flex items-center justify-center">
              <div className="text-center text-navy-foreground p-6">
                <p className="text-lg font-bold">مستقبلهم برمجته</p>
              </div>
            </div>
          </div>
          <div className="bg-navy rounded-[2rem] aspect-square overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-navy to-accent/20 flex items-center justify-center">
              <div className="text-center text-navy-foreground p-6">
                <p className="text-lg font-bold">مقومو بشكروا</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
