
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WwiiPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden bg-fixed bg-cover bg-center h-[400px]" 
             style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1575963376890-fe6178e787c2?q=80&w=1470&auto=format&fit=crop')" }}>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Великая Отечественная война
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              1941-1945: период величайшего мужества и героизма советского народа в борьбе против немецко-фашистских захватчиков
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="stages">Этапы войны</TabsTrigger>
              <TabsTrigger value="heroes">Герои</TabsTrigger>
              <TabsTrigger value="documents">Документы</TabsTrigger>
              <TabsTrigger value="memory">Память</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Великая Отечественная война — самая тяжелая и кровопролитная война в истории нашей страны</h2>
                
                <p>
                  22 июня 1941 года без объявления войны фашистская Германия и её союзники напали на Советский Союз.
                  Началась Великая Отечественная война, которая продолжалась 1418 дней и ночей и стала решающей частью 
                  Второй мировой войны.
                </p>
                
                <p>
                  В результате вероломного нападения СССР потерял около 30% национального богатства, более 27 миллионов советских граждан
                  погибли на фронтах, умерли от голода, погибли в оккупации и концлагерях. Но несмотря на все трудности,
                  советский народ не только выстоял, но и разгромил врага, освободив Европу от нацизма.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">1418</h3>
                    <p>дней и ночей длилась Великая Отечественная война</p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">27 млн</h3>
                    <p>советских граждан погибли в годы войны</p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">7 млн</h3>
                    <p>наград за боевые заслуги вручено советским воинам</p>
                  </div>
                </div>
                
                <p>
                  Победа в Великой Отечественной войне стала возможной благодаря беспримерному мужеству фронтовиков,
                  самоотверженному труду работников тыла, единству всех народов Советского Союза. Память о подвиге нашего народа 
                  мы должны сохранить для будущих поколений.
                </p>
                
                <blockquote>
                  "Наше дело правое. Враг будет разбит. Победа будет за нами." — В.М. Молотов, 22 июня 1941 г.
                </blockquote>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/heroes">Узнать о героях Великой Отечественной войны</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="stages">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Начальный период (22.06.1941 - 18.11.1942)</h3>
                    <p className="mb-4">
                      Период тяжелых оборонительных боев, отступления советских войск, блокады Ленинграда и героической обороны Москвы.
                      В результате контрнаступления под Москвой был развеян миф о непобедимости нацистской армии.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Битва за Москву</h4>
                        <p>30 сентября 1941 — 20 апреля 1942</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Начало блокады Ленинграда</h4>
                        <p>8 сентября 1941</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Коренной перелом (19.11.1942 - 31.12.1943)</h3>
                    <p className="mb-4">
                      Переход стратегической инициативы к Красной Армии. Важнейшие события — Сталинградская и Курская битвы,
                      битва за Днепр. Начало освобождения территории СССР от немецко-фашистских захватчиков.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Сталинградская битва</h4>
                        <p>17 июля 1942 — 2 февраля 1943</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Курская битва</h4>
                        <p>5 июля — 23 августа 1943</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Битва за Днепр</h4>
                        <p>24 августа — 23 декабря 1943</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Завершающий период (01.01.1944 - 09.05.1945)</h3>
                    <p className="mb-4">
                      Полное освобождение территории СССР, изгнание врага из стран Восточной и Центральной Европы,
                      разгром нацистской Германии и победоносное завершение войны.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Снятие блокады Ленинграда</h4>
                        <p>27 января 1944</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Операция "Багратион"</h4>
                        <p>23 июня — 29 августа 1944</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
                        <h4 className="font-bold mb-2">Берлинская операция</h4>
                        <p>16 апреля — 8 мая 1945</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="heroes">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Герои Великой Отечественной войны</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Жуков Г.К." className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Жуков Георгий Константинович</h3>
                      <p className="text-sm text-gray-500 mb-4">Маршал Советского Союза</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Выдающийся полководец, четырежды Герой Советского Союза. Командовал фронтами в ключевых битвах
                        Великой Отечественной войны, принимал капитуляцию Германии.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Матросов А.М." className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Матросов Александр Матвеевич</h3>
                      <p className="text-sm text-gray-500 mb-4">Гвардии рядовой</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Герой Советского Союза, закрывший своим телом амбразуру немецкого дзота. Его подвиг
                        стал символом героизма советских солдат.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Космодемьянская З.А." className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Космодемьянская Зоя Анатольевна</h3>
                      <p className="text-sm text-gray-500 mb-4">Партизанка</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Первая женщина, удостоенная звания Героя Советского Союза во время Великой Отечественной войны.
                        Казнена фашистами после пыток, но не выдала товарищей.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link to="/heroes">Узнать больше о героях войны</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="documents">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Исторические документы</h2>
                <p>
                  В этом разделе собраны важнейшие исторические документы времен Великой Отечественной войны: 
                  приказы, обращения, сводки Совинформбюро, дневники и письма с фронта.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Сообщение о вероломном нападении Германии</h3>
                      <p className="text-sm text-gray-500 mb-4">22 июня 1941 г.</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Выступление В.М. Молотова по радио с сообщением о нападении Германии на СССР и 
                        начале Великой Отечественной войны.
                      </p>
                      <Button variant="outline" className="mt-4">Читать полный текст</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Приказ № 227 «Ни шагу назад!»</h3>
                      <p className="text-sm text-gray-500 mb-4">28 июля 1942 г.</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Приказ И.В. Сталина о мерах по укреплению дисциплины и порядка в Красной Армии,
                        запрещающий отступление без приказа.
                      </p>
                      <Button variant="outline" className="mt-4">Читать полный текст</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Акт о безоговорочной капитуляции Германии</h3>
                      <p className="text-sm text-gray-500 mb-4">8 мая 1945 г.</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Документ о безоговорочной капитуляции Германских вооруженных сил, подписанный 
                        в пригороде Берлина Карлсхорсте.
                      </p>
                      <Button variant="outline" className="mt-4">Читать полный текст</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Сводки Совинформбюро</h3>
                      <p className="text-sm text-gray-500 mb-4">1941-1945 гг.</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ежедневные сводки Советского информационного бюро о положении на фронтах
                        и важнейших событиях Великой Отечественной войны.
                      </p>
                      <Button variant="outline" className="mt-4">Читать полный текст</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="memory">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Сохранение памяти о войне</h2>
                <p>
                  Память о Великой Отечественной войне – важнейшая часть исторической памяти нашего народа.
                  Она находит отражение в мемориалах, музеях, литературе, кинематографе и других формах увековечения
                  подвига советского народа.
                </p>
                
                <h3>Основные мемориальные комплексы</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Мамаев курган" className="w-full h-48 object-cover" />
                    <CardContent className="p-4">
                      <h4 className="font-bold">Мамаев курган</h4>
                      <p className="text-sm">Волгоград</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Могила Неизвестного Солдата" className="w-full h-48 object-cover" />
                    <CardContent className="p-4">
                      <h4 className="font-bold">Могила Неизвестного Солдата</h4>
                      <p className="text-sm">Москва</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Пискаревское кладбище" className="w-full h-48 object-cover" />
                    <CardContent className="p-4">
                      <h4 className="font-bold">Пискаревское кладбище</h4>
                      <p className="text-sm">Санкт-Петербург</p>
                    </CardContent>
                  </Card>
                </div>
                
                <h3>Как сохранить память о войне</h3>
                <ul>
                  <li>Участие в акции «Бессмертный полк»</li>
                  <li>Уход за воинскими захоронениями и мемориалами</li>
                  <li>Запись воспоминаний ветеранов</li>
                  <li>Изучение семейной истории и судеб родственников-участников войны</li>
                  <li>Посещение музеев и мест боевой славы</li>
                </ul>
                
                <blockquote>
                  "Никто не забыт, ничто не забыто" — эти слова высечены на гранитной стене Пискаревского
                  мемориального кладбища в Санкт-Петербурге и стали символом нашей памяти о войне.
                </blockquote>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WwiiPage;
