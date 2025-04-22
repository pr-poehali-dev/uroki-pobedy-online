
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const QUOTES = [
  {
    text: "Патриотизм – это не просто любовь к Родине. Это высшее проявление зрелости, преданности и ответственности.",
    event: "Встреча с представителями общественности, 2012"
  },
  {
    text: "У нас нет и не может быть никакой другой объединяющей идеи, кроме патриотизма.",
    event: "Заседание Клуба лидеров, 2016"
  },
  {
    text: "Для России нет и не может быть другого политического выбора, кроме демократии.",
    event: "Послание Федеральному Собранию, 2005"
  },
  {
    text: "Мы должны строить своё будущее на прочном фундаменте. И такой фундамент – это патриотизм.",
    event: "Встреча с представителями общественности, 2012"
  },
  {
    text: "История – это не просто набор знаний, но и основа для воспитания будущих поколений.",
    event: "Заседание организационного комитета «Победа», 2019"
  },
  {
    text: "Мы всегда должны помнить: всё, что происходит с Родиной, – это наша судьба. И другой судьбы у нас не будет.",
    event: "Послание Федеральному Собранию, 2018"
  },
  {
    text: "Победа в Великой Отечественной войне – это вершина славы нашего народа.",
    event: "Парад Победы, 2020"
  },
  {
    text: "Народ России всегда выбирал для себя путь свободы, независимости и суверенитета.",
    event: "Встреча с молодежью, 2017"
  },
  {
    text: "Не имеет значения, кто или что стоит у власти. Имеет значение, во имя чего и как эта власть действует.",
    event: "Послание Федеральному Собранию, 2012"
  },
  {
    text: "Россия должна быть среди государств, которые не следуют за кем-то, а определяют будущее.",
    event: "Валдайский форум, 2014"
  }
];

const QuoteBlock = () => {
  const [currentQuote, setCurrentQuote] = useState<number>(0);

  const handleNextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % QUOTES.length);
  };

  const handlePrevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % QUOTES.length);
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="border-none shadow-lg bg-gradient-to-r from-blue-50 to-red-50 dark:from-slate-900 dark:to-slate-800">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col items-center">
          <div className="text-red-600 dark:text-red-500 mb-4">
            <Quote size={40} />
          </div>
          
          <blockquote className="text-xl md:text-2xl text-center font-playfair mb-6">
            "{QUOTES[currentQuote].text}"
          </blockquote>
          
          <div className="text-center mb-8">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">Владимир Владимирович Путин</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{QUOTES[currentQuote].event}</p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevQuote}
              aria-label="Предыдущая цитата"
            >
              &#8592;
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextQuote}
              aria-label="Следующая цитата"
            >
              &#8594;
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteBlock;
