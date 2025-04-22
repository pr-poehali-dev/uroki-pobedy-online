
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteBlock from "@/components/QuoteBlock";
import HolidayTicker from "@/components/HolidayTicker";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HolidayTicker />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
              Разделы проекта "Уроки Победы"
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg transition-transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/placeholder.svg')" }}>
                    <div className="h-full flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Великая Отечественная война</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4">
                      История самой кровопролитной войны человечества, подвиги советского народа 
                      и решающий вклад СССР в победу над фашизмом.
                    </p>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link to="/wwii">Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg transition-transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/placeholder.svg')" }}>
                    <div className="h-full flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Специальная военная операция</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4">
                      Исторические предпосылки, цели и задачи СВО, героизм российских военнослужащих 
                      в борьбе за безопасность нашей страны.
                    </p>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link to="/svo">Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg transition-transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/placeholder.svg')" }}>
                    <div className="h-full flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Крым и Россия</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4">
                      История Крымского полуострова, его значение для России и историческая справедливость 
                      воссоединения Крыма с Россией.
                    </p>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link to="/crimea">Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
                Слова о патриотизме и любви к Родине
              </h2>
              <QuoteBlock />
            </div>
          </div>
        </section>
        
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
