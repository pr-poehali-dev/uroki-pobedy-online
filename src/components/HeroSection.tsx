import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-fixed bg-cover bg-center min-h-[600px]" 
         style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-red-900/40"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          УРОКИ ПОБЕДЫ
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
          Проект, призванный сохранить историческую память о подвигах нашего народа 
          и воспитать новое поколение патриотов России
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
            Узнать больше
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
            Смотреть видео
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default HeroSection;
