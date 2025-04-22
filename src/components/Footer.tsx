import Logo from "@/components/Logo";
import { CURRENT_YEAR } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-300 mt-4">
              Образовательный проект, направленный на сохранение исторической памяти 
              и патриотическое воспитание молодежи.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">О проекте</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition">Материалы</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition">Календарь событий</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Методические материалы</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition">Архив документов</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition">Фотогалерея</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition">Видеоматериалы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Электронная почта: info@urokipobedy.ru</li>
              <li className="text-gray-300">Телефон: +7 (800) 123-45-67</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {CURRENT_YEAR} УРОКИ ПОБЕДЫ. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-white transition">Политика конфиденциальности</a>
            <a href="/" className="text-gray-400 hover:text-white transition">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
