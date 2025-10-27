import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <WhyUs />
        <Courses />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
