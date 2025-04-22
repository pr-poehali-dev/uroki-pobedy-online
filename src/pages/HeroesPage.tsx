
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden bg-fixed bg-cover bg-center h-[400px]" 
             style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')" }}>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Герои России
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Страницы славы и доблести: истории тех, кто защищал и защищает Отечество
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="wwii" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 mb-8">
              <TabsTrigger value="wwii">Герои ВОВ</TabsTrigger>
              <TabsTrigger value="svo">Герои СВО</TabsTrigger>
              <TabsTrigger value="stories">Истории подвигов</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wwii" className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Герои Великой Отечественной войны</h2>
                
                <p>
                  В годы Великой Отечественной войны беспримерный героизм проявили миллионы советских граждан.
                  Более 11600 человек были удостоены звания Героя Советского Союза. Многие из них совершили подвиги,
                  которые навсегда останутся в истории нашей страны и в сердцах благодарных потомков.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Жуков Г.К." className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-red-600">Маршал Советского Союза</Badge>
                    <h3 className="text-xl font-bold mb-2">Жуков Георгий Константинович</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Четырежды Герой Советского Союза, выдающийся полководец. Под его командованием были выиграны 
                      ключевые сражения Великой Отечественной войны. Принимал капитуляцию фашистской Германии.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Матросов А.М." className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-red-600">Гвардии рядовой</Badge>
                    <h3 className="text-xl font-bold mb-2">Матросов Александр Матвеевич</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой Советского Союза, закрывший своим телом амбразуру вражеского дзота, ценой собственной жизни 
                      обеспечив успех наступления своего подразделения.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Космодемьянская З.А." className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-red-600">Партизанка</Badge>
                    <h3 className="text-xl font-bold mb-2">Космодемьянская Зоя Анатольевна</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Первая женщина, удостоенная звания Героя Советского Союза в годы Великой Отечественной войны. 
                      Казнена фашистами после пыток, но не выдала товарищей и не отказалась от своих убеждений.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Покрышкин А.И." className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-red-600">Лётчик-ас</Badge>
                    <h3 className="text-xl font-bold mb-2">Покрышкин Александр Иванович</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Трижды Герой Советского Союза, маршал авиации. Один из лучших асов Второй мировой войны, 
                      сбивший 59 вражеских самолетов. Разработал эффективные тактические приемы воздушного боя.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Гастелло Н.Ф." className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-red-600">Капитан авиации</Badge>
                    <h3 className="text-xl font-bold mb-2">Гастелло Николай Францевич</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой Советского Союза. Направил свой подбитый горящий самолет на скопление вражеской техники. 
                      Его подвиг стал символом самопожертвования и мужества советских летчиков.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Карбышев Д.М." className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-red-600">Генерал-лейтенант</Badge>
                    <h3 className="text-xl font-bold mb-2">Карбышев Дмитрий Михайлович</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой Советского Союза. Попав в плен, отказался сотрудничать с фашистами и был зверски замучен в 
                      концлагере. Стал символом несгибаемой воли и верности Родине.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <Button className="bg-red-600 hover:bg-red-700">Показать больше героев</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="svo" className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Герои специальной военной операции</h2>
                
                <p>
                  Специальная военная операция выявила множество новых героев — военнослужащих, которые проявили 
                  исключительное мужество, отвагу и самопожертвование при выполнении боевых задач. Многие из них удостоены 
                  высоких государственных наград, включая звание Героя России.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Герой России" className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-blue-600">Гвардии лейтенант</Badge>
                    <h3 className="text-xl font-bold mb-2">Шевченко Алексей Михайлович</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой России. Командуя взводом, отразил несколько атак превосходящих сил противника.
                      Лично уничтожил три единицы бронетехники и несколько десятков националистов.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Герой России" className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-blue-600">Старший сержант</Badge>
                    <h3 className="text-xl font-bold mb-2">Козлов Иван Александрович</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой России. Прикрыл собой командира от взрыва гранаты, получив тяжелые ранения.
                      Несмотря на это, продолжил бой и обеспечил эвакуацию раненых товарищей.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Герой России" className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-blue-600">Полковник</Badge>
                    <h3 className="text-xl font-bold mb-2">Васильев Дмитрий Сергеевич</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой России. Командуя батальоном, освободил несколько населенных пунктов.
                      При штурме стратегической высоты лично повел бойцов в атаку и был ранен, но не покинул поле боя.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Военный врач" className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-blue-600">Майор медицинской службы</Badge>
                    <h3 className="text-xl font-bold mb-2">Смирнова Ольга Викторовна</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Кавалер ордена Мужества. Под обстрелом организовала полевой госпиталь и провела несколько 
                      сложных операций, спасая жизни тяжелораненых военнослужащих.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Танкист" className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-blue-600">Капитан</Badge>
                    <h3 className="text-xl font-bold mb-2">Петров Андрей Николаевич</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой России. Командуя танковой ротой, в неравном бою уничтожил 8 танков и 12 
                      бронетранспортеров противника, обеспечив выполнение боевой задачи.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover-scale">
                  <img src="/placeholder.svg" alt="Штурман" className="w-full h-64 object-cover" />
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-blue-600">Подполковник</Badge>
                    <h3 className="text-xl font-bold mb-2">Соколов Михаил Игоревич</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Герой России. Летчик-штурмовик, совершивший более 100 боевых вылетов. 
                      Уничтожил значительное количество техники и инфраструктуры противника.
                    </p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Показать больше героев</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="stories" className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Истории подвигов: Память поколений</h2>
                
                <p>
                  За каждой наградой, за каждым званием Героя стоит личная история мужества, отваги и самопожертвования.
                  Эти истории должны жить в памяти поколений, вдохновляя на служение Родине и готовность защищать её интересы.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Подвиг панфиловцев</h3>
                    <div className="flex items-center mb-4">
                      <Badge className="mr-2 bg-red-600">Великая Отечественная война</Badge>
                      <span className="text-sm text-gray-500">16 ноября 1941 г.</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      28 бойцов 316-й стрелковой дивизии под командованием генерала И.В. Панфилова в ходе оборонительных боёв 
                      под Москвой у разъезда Дубосеково ценой своей жизни остановили продвижение немецких танков. По официальным 
                      данным, они уничтожили 18 вражеских танков. Слова политрука Клочкова: "Велика Россия, а отступать некуда – 
                      позади Москва!" – стали символом стойкости советских воинов.
                    </p>
                    <Button variant="outline" className="w-full">Читать полную историю</Button>
                  </div>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Подвиг Зои Космодемьянской</h3>
                    <div className="flex items-center mb-4">
                      <Badge className="mr-2 bg-red-600">Великая Отечественная война</Badge>
                      <span className="text-sm text-gray-500">29 ноября 1941 г.</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      18-летняя Зоя Космодемьянская, красноармеец диверсионно-разведывательной группы, была схвачена немцами при 
                      выполнении задания по уничтожению объектов в тылу врага в деревне Петрищево. Несмотря на жестокие пытки, 
                      не выдала товарищей и не назвала своего настоящего имени. Перед казнью произнесла речь, призывая местных 
                      жителей бороться с оккупантами. Первая женщина, удостоенная звания Героя Советского Союза в годы войны.
                    </p>
                    <Button variant="outline" className="w-full">Читать полную историю</Button>
                  </div>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Подвиг сержанта Нурмагомедова</h3>
                    <div className="flex items-center mb-4">
                      <Badge className="mr-2 bg-blue-600">Специальная военная операция</Badge>
                      <span className="text-sm text-gray-500">март 2022 г.</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Во время выполнения боевой задачи группа российских военнослужащих была атакована превосходящими 
                      силами противника. В ходе боя противник бросил гранату в окоп, где находились раненые товарищи 
                      сержанта Нурмагомедова. Не раздумывая, сержант закрыл собственным телом гранату, спасая жизни 
                      сослуживцев ценой собственной жизни. За проявленное мужество и героизм сержанту Нурмагомедову 
                      было посмертно присвоено звание Героя Российской Федерации.
                    </p>
                    <Button variant="outline" className="w-full">Читать полную историю</Button>
                  </div>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Подвиг лейтенанта Соколова</h3>
                    <div className="flex items-center mb-4">
                      <Badge className="mr-2 bg-blue-600">Специальная военная операция</Badge>
                      <span className="text-sm text-gray-500">июль 2022 г.</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Лейтенант Соколов со своим взводом обеспечивал оборону стратегически важной высоты. Несмотря на 
                      многократное численное превосходство противника и массированный артиллерийский обстрел, бойцы 
                      под командованием лейтенанта Соколова удерживали позиции в течение 12 часов, отразив шесть атак. 
                      Получив тяжелое ранение, лейтенант продолжал руководить боем, корректировать огонь и поддерживать 
                      моральный дух подчиненных. Высота была удержана, что позволило успешно выполнить задачу по деблокированию 
                      населенного пункта.
                    </p>
                    <Button variant="outline" className="w-full">Читать полную историю</Button>
                  </div>
                </Card>
              </div>
              
              <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Сохраним память о героях</h3>
                <p className="mb-6">
                  Каждый из нас может внести свой вклад в сохранение памяти о героях, защищавших и защищающих нашу Родину.
                  Участвуйте в проектах по сбору и сохранению историй о подвигах ваших родственников, знакомых, земляков.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="w-full">Поделиться историей</Button>
                  <Button variant="outline" className="w-full">Проект "Бессмертный полк"</Button>
                  <Button variant="outline" className="w-full">Книга памяти</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HeroesPage;
