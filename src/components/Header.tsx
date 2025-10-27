import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-primary py-4 px-6 rounded-b-[3rem]">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button className="rounded-full font-bold bg-white text-primary hover:bg-white/90">
            تواصل معنا
          </Button>
          <Button className="rounded-full font-bold bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary">
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
            <a href="#about" className="hover:opacity-80 transition-opacity">
              الدورات
            </a>
          </li>
          <li>
            <a href="#features" className="hover:opacity-80 transition-opacity">
              لماذا نشأ
            </a>
          </li>
          <li>
            <a href="#" className="hover:opacity-80 transition-opacity">
              من نحن
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <img src={logo} alt="نشأ" className="h-12 w-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
