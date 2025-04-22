
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-fixed bg-cover bg-center min-h-[700px]" 
         style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-red-900/40"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in font-playfair">
          УРОКИ ПОБЕДЫ
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12">
          Проект, призванный сохранить историческую память о подвигах нашего народа,
          защитить правду о нашей истории и воспитать новое поколение патриотов России
        </p>
        <div className="flex flex-col sm:flex-row gap-5 mt-6">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg"
            asChild
          >
            <Link to="/wwii">Великая Отечественная война</Link>
          </Button>
          <Button 
            size="lg" 
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-6 text-lg"
            asChild
          >
            <Link to="/svo">Специальная военная операция</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg"
            asChild
          >
            <Link to="/quiz">Проверь свои знания</Link>
          </Button>
        </div>
        <div className="mt-16 max-w-4xl">
          <p className="text-lg text-white/80 italic border-l-4 border-red-600 pl-4 py-2">
            "Народ, который не знает своего прошлого, не имеет будущего. Память о подвигах наших предков - 
            основа для воспитания новых поколений патриотов России."
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default HeroSection;
