import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-primary py-4 px-6 rounded-b-[3rem]">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Smooth-scroll to footer when clicked */}
          <Button
            className="rounded-full font-bold bg-white text-primary hover:bg-white/90"
            onClick={() => {
              const el = document.getElementById("contact-info") || document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                // add a temporary highlight to draw attention
                el.classList.add("ring-4", "ring-accent/40", "rounded-lg");
                setTimeout(() => {
                  el.classList.remove("ring-4", "ring-accent/40", "rounded-lg");
                }, 2200);
              }
            }}
          >
            تواصل معنا
          </Button>
          <Button
            className="rounded-full font-bold bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary"
            onClick={() => navigate("/login")}
          >
            سجل الدخول
          </Button>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-white font-semibold">
          <li>
            <a href="#courses" className="hover:opacity-80 transition-opacity">
              مسارات التعلم
            </a>
          </li>
          <li>
            <a href="#whyus" className="hover:opacity-80 transition-opacity">
              لماذا نشأ
            </a>
          </li>
          <li>
            <a href="#about" className="hover:opacity-80 transition-opacity">
              من نحن
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          {/* Larger responsive logo: base h-16, larger on medium screens */}
          <img src={logo} alt="نشأ" className="h-16 md:h-20 w-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
