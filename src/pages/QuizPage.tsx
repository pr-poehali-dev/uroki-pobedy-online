
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Brain, Medal, Star } from "lucide-react";

const QuizPage = () => {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const quizzes = [
    {
      id: "wwii",
      title: "Великая Отечественная война",
      description: "Проверьте свои знания о ключевых событиях и героях Великой Отечественной войны",
      difficulty: "Средний",
      questions: 10,
      time: "15 минут",
      icon: <Medal className="h-10 w-10 text-red-600" />,
      color: "bg-red-100 dark:bg-red-900/20"
    },
    {
      id: "svo",
      title: "Специальная военная операция",
      description: "Тест на знание целей, задач и хронологии специальной военной операции",
      difficulty: "Легкий",
      questions: 8,
      time: "10 минут",
      icon: <Star className="h-10 w-10 text-blue-600" />,
      color: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      id: "crimea",
      title: "Крым в истории России",
      description: "История Крыма, его значение для России и события Крымской весны",
      difficulty: "Средний",
      questions: 12,
      time: "15 минут",
      icon: <BookOpen className="h-10 w-10 text-teal-600" />,
      color: "bg-teal-100 dark:bg-teal-900/20"
    },
    {
      id: "heroes",
      title: "Герои России",
      description: "Тест о выдающихся героях, защищавших нашу Родину в разные исторические периоды",
      difficulty: "Сложный",
      questions: 15,
      time: "20 минут",
      icon: <Award className="h-10 w-10 text-yellow-600" />,
      color: "bg-yellow-100 dark:bg-yellow-900/20"
    },
  ];
  
  const wwiiQuestions = [
    {
      question: "Когда началась Великая Отечественная война?",
      options: [
        "1 сентября 1939 года",
        "22 июня 1941 года",
        "9 мая 1945 года",
        "5 декабря 1941 года"
      ],
      correctAnswer: "22 июня 1941 года"
    },
    {
      question: "Кто был Верховным Главнокомандующим Вооруженными Силами СССР в годы Великой Отечественной войны?",
      options: [
        "Г.К. Жуков",
        "В.М. Молотов",
        "К.Е. Ворошилов",
        "И.В. Сталин"
      ],
      correctAnswer: "И.В. Сталин"
    },
    {
      question: "Какое сражение считается коренным переломом в ходе Великой Отечественной войны?",
      options: [
        "Битва за Москву",
        "Сталинградская битва",
        "Курская битва",
        "Битва за Берлин"
      ],
      correctAnswer: "Сталинградская битва"
    }
  ];
  
  const startQuiz = (quizId: string) => {
    setActiveQuiz(quizId);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };
  
  const handleNextQuestion = () => {
    if (selectedAnswer === wwiiQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestion < wwiiQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };
  
  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };
  
  const renderQuizContent = () => {
    if (!activeQuiz) return null;
    
    if (showResult) {
      return (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Результаты теста</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold my-6 text-primary">
              {score} / {wwiiQuestions.length}
            </div>
            <p className="text-xl mb-6">
              {score === wwiiQuestions.length ? 
                "Отлично! Вы отлично знаете историю Великой Отечественной войны!" : 
                score >= wwiiQuestions.length / 2 ? 
                "Хороший результат! Но есть куда расти." : 
                "Рекомендуем больше читать об истории Великой Отечественной войны."
              }
            </p>
            <div className="flex justify-center space-x-4">
              <Button onClick={resetQuiz}>Вернуться к списку тестов</Button>
              <Button variant="outline" onClick={() => startQuiz(activeQuiz)}>Пройти тест заново</Button>
            </div>
          </CardContent>
        </Card>
      );
    }
    
    const currentQ = wwiiQuestions[currentQuestion];
    
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center mb-2">
            <Badge>Вопрос {currentQuestion + 1} из {wwiiQuestions.length}</Badge>
            <div className="text-right text-sm text-gray-500">Очки: {score}</div>
          </div>
          <Progress value={(currentQuestion / wwiiQuestions.length) * 100} className="h-2 mb-4" />
          <CardTitle className="text-xl">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup className="space-y-4" value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 rounded-lg border p-4 hover:bg-slate-100 dark:hover:bg-slate-800">
                <RadioGroupItem id={`option-${index}`} value={option} />
                <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline" onClick={resetQuiz}>Отменить</Button>
          <Button onClick={handleNextQuestion} disabled={!selectedAnswer}>
            {currentQuestion < wwiiQuestions.length - 1 ? "Следующий вопрос" : "Завершить тест"}
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden bg-fixed bg-cover bg-center h-[400px]" 
             style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')" }}>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Проверь свои знания
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Интерактивные тесты и викторины об истории России, Великой Отечественной войне, 
              специальной военной операции и других важных событиях нашей страны
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {!activeQuiz ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Выберите тест или викторину</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Проверьте свои знания об истории России, ключевых событиях и героях. 
                  Выберите одну из тематических викторин и узнайте, насколько хорошо вы знаете историю своей страны.
                </p>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quizzes.map((quiz) => (
                  <Card key={quiz.id} className="hover-scale cursor-pointer" onClick={() => startQuiz(quiz.id)}>
                    <CardHeader className={`${quiz.color} rounded-t-lg`}>
                      <div className="flex justify-center">
                        {quiz.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{quiz.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">{quiz.difficulty}</Badge>
                        <Badge variant="outline">{quiz.questions} вопросов</Badge>
                        <Badge variant="outline">{quiz.time}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Начать тест</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Дополнительные материалы</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                          <BookOpen className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold">Учебные материалы</h3>
                          <p className="text-sm text-gray-500">Подготовка к тестам</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Доступны учебные материалы по всем тематикам тестов.
                        Изучите их, чтобы улучшить свои результаты.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                          <Medal className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold">Рейтинг знатоков</h3>
                          <p className="text-sm text-gray-500">Соревнуйтесь с другими</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Регистрируйтесь, проходите тесты и попадайте в рейтинг
                        лучших знатоков истории России.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                          <Brain className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold">Конкурсы и олимпиады</h3>
                          <p className="text-sm text-gray-500">Выигрывайте призы</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Участвуйте в исторических конкурсах и олимпиадах,
                        выигрывайте ценные призы и поездки.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            renderQuizContent()
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;
