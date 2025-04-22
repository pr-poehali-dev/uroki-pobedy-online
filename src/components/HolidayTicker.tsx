
import { useState, useEffect } from "react";

// Список праздников по месяцам и дням
const HOLIDAYS = {
  "1-1": { name: "С Новым Годом!", emoji: "🎄" },
  "1-7": { name: "С Рождеством Христовым!", emoji: "✨" },
  "2-23": { name: "С Днём защитника Отечества!", emoji: "🛡️" },
  "3-8": { name: "С Международным женским днём!", emoji: "💐" },
  "4-12": { name: "С Днём космонавтики!", emoji: "🚀" },
  "5-1": { name: "С Праздником Весны и Труда!", emoji: "🌱" },
  "5-9": { name: "С Днём Победы!", emoji: "🎖️" },
  "6-12": { name: "С Днём России!", emoji: "🇷🇺" },
  "8-22": { name: "С Днём Государственного флага!", emoji: "🏁" },
  "9-1": { name: "С Днём знаний!", emoji: "📚" },
  "11-4": { name: "С Днём народного единства!", emoji: "🤝" },
  "12-12": { name: "С Днём Конституции!", emoji: "📜" }
};

// Список патриотических сообщений, которые будут показываться, когда нет праздников
const PATRIOTIC_MESSAGES = [
  { name: "Гордимся историей нашей великой державы!", emoji: "🇷🇺" },
  { name: "Россия - страна героев, страна мечтателей, страна учёных!", emoji: "⭐" },
  { name: "Вместе мы сила! Вместе мы Россия!", emoji: "💪" },
  { name: "80 лет Великой Победы! Помним и гордимся!", emoji: "🎖️" },
  { name: "Сила России - в единстве народа!", emoji: "🤝" },
  { name: "Мы наследники великих побед!", emoji: "🏆" },
  { name: "Наша сила в правде и в памяти предков!", emoji: "📖" },
  { name: "Сохраняем историческую память и передаём её будущим поколениям!", emoji: "🔄" },
  { name: "Слава героям Отечества!", emoji: "🌟" },
  { name: "Россия начинается с тебя!", emoji: "❤️" }
];

const HolidayTicker = () => {
  const [message, setMessage] = useState<{ name: string; emoji: string } | null>(null);

  // Функция для получения текущего праздника или патриотического сообщения
  const updateMessage = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const key = `${month}-${day}`;
    
    // Проверяем, есть ли сегодня праздник
    if (HOLIDAYS[key as keyof typeof HOLIDAYS]) {
      setMessage(HOLIDAYS[key as keyof typeof HOLIDAYS]);
    } else {
      // Если нет праздника, выбираем случайное патриотическое сообщение
      // Используем текущий час как seed для псевдо-случайности, чтобы сообщение менялось каждый час
      const hour = now.getHours();
      const index = hour % PATRIOTIC_MESSAGES.length;
      setMessage(PATRIOTIC_MESSAGES[index]);
    }
  };

  useEffect(() => {
    // Обновляем сообщение при монтировании
    updateMessage();
    
    // Устанавливаем интервал обновления каждый час
    const intervalId = setInterval(() => {
      updateMessage();
    }, 60 * 60 * 1000); // 1 час
    
    return () => clearInterval(intervalId);
  }, []);

  if (!message) return null;

  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-blue-700 text-white py-2 overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-wrapper">
          <div className="ticker-content flex items-center justify-center">
            <span className="text-2xl mr-2">{message.emoji}</span>
            <span className="font-bold">{message.name}</span>
            <span className="text-2xl ml-2">{message.emoji}</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .ticker-container {
          width: 100%;
          overflow: hidden;
        }
        
        .ticker-wrapper {
          width: 100%;
          padding: 0;
        }
        
        .ticker-content {
          white-space: nowrap;
          animation: ticker 20s linear infinite;
          padding: 0 100%;
        }
        
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HolidayTicker;
