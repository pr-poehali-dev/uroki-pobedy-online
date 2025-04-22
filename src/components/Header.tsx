
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Главная", href: "/" },
    { label: "Великая Отечественная война", href: "/wwii" },
    { label: "Специальная военная операция", href: "/svo" },
    { label: "Крым и Россия", href: "/crimea" },
    { label: "Герои России", href: "/heroes" },
    { label: "Проверь себя", href: "/quiz" },
  ];

  return (
    <header className="bg-white dark:bg-slate-950 sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-slate-700 hover:text-red-600 dark:text-slate-200 dark:hover:text-red-500 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              Войти
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Присоединиться
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Меню"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-slate-700 hover:text-red-600 dark:text-slate-200 dark:hover:text-red-500 font-medium py-2"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3 pt-3 border-t">
              <Button variant="outline" className="border-red-600 text-red-600 w-full justify-start">
                Войти
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full justify-start">
                Присоединиться
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
