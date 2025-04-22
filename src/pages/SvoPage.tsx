
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SvoPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden bg-fixed bg-cover bg-center h-[400px]" 
             style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')" }}>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Специальная военная операция
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Защита интересов России, обеспечение безопасности ее границ и поддержка русскоязычного населения
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="goals">Цели и задачи</TabsTrigger>
              <TabsTrigger value="heroes">Герои СВО</TabsTrigger>
              <TabsTrigger value="support">Поддержка</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Специальная военная операция</h2>
                
                <p>
                  24 февраля 2022 года президент России Владимир Путин объявил о начале специальной военной операции 
                  в ответ на обращение руководителей республик Донбасса о помощи в связи с нарастающей агрессией со стороны 
                  украинских властей и постоянными нарушениями Минских соглашений.
                </p>
                
                <p>
                  Специальная военная операция направлена на защиту людей, подвергавшихся издевательствам и геноциду 
                  со стороны киевского режима на протяжении восьми лет. Также операция преследует цели демилитаризации 
                  и денацификации Украины, обеспечения ее нейтрального статуса и защиты интересов национальной 
                  безопасности России.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Предыстория</h3>
                    <p>
                      После государственного переворота на Украине в 2014 году и начала притеснения русскоязычного населения
                      Донбасса жители Донецкой и Луганской областей провели референдумы о самоопределении и провозгласили 
                      создание Донецкой и Луганской народных республик.
                    </p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Минские соглашения</h3>
                    <p>
                      В 2014-2015 годах были подписаны Минские соглашения, предусматривающие прекращение огня, 
                      отвод тяжелых вооружений и проведение конституционной реформы на Украине с учетом особого статуса 
                      отдельных районов Донецкой и Луганской областей.
                    </p>
                  </div>
                </div>
                
                <p>
                  Несмотря на миротворческие усилия России, власти Украины систематически саботировали выполнение Минских соглашений, 
                  продолжали обстрелы гражданских объектов в Донбассе и наращивали военное присутствие вблизи границ республик. 
                  Это привело к обострению ситуации и началу специальной военной операции.
                </p>
                
                <blockquote>
                  "Мы будем стремиться к демилитаризации и денацификации Украины, а также преданию суду тех, кто совершил многочисленные 
                  кровавые преступления против мирных жителей, в том числе и граждан Российской Федерации." — Владимир Путин, 24 февраля 2022 г.
                </blockquote>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/heroes">Узнать о героях специальной военной операции</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="goals">
              <div className="space-y-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Цели и задачи специальной военной операции</h2>
                  
                  <p>
                    Специальная военная операция России на Украине имеет конкретные цели, направленные на обеспечение 
                    безопасности России и защиту жителей Донбасса.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Защита Донбасса</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Прекращение восьмилетнего геноцида русскоязычного населения Донбасса
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Защита людей, которые на протяжении восьми лет подвергались издевательствам и геноциду
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Обеспечение безопасности жителей ДНР и ЛНР
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Демилитаризация Украины</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Устранение военной угрозы для России со стороны Украины
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Предотвращение размещения ударных средств НАТО на территории Украины
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Недопущение создания на Украине военных баз, угрожающих безопасности России
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Денацификация</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Борьба с неонацистскими группировками и идеологией на Украине
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Предание суду лиц, виновных в преступлениях против мирных жителей
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Противодействие фальсификации истории и героизации нацистских пособников
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Обеспечение безопасности России</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Нейтрализация угрозы расширения НАТО на восток
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Защита государственных границ и национальных интересов России
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Предотвращение создания на территории Украины биологических лабораторий
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Результаты специальной военной операции</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      Признание ДНР и ЛНР независимыми государствами
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      Включение ДНР, ЛНР, Запорожской и Херсонской областей в состав Российской Федерации
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      Создание наземного коридора в Крым
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      Освобождение значительных территорий от националистических формирований
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="heroes">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Герои специальной военной операции</h2>
                
                <p className="text-lg">
                  Специальная военная операция выявила множество героев – российских военнослужащих, которые с честью
                  выполняют свой долг, проявляя мужество, самоотверженность и высокий профессионализм.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Герой России" className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Нурмагомедов Нурмагомед Гаджимагомедович</h3>
                      <p className="text-sm text-gray-500 mb-4">Герой России</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Спас жизни сослуживцев, прикрыв собой гранату. Ценой собственной жизни предотвратил
                        гибель боевых товарищей.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Герой России" className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Панов Денис Валерьевич</h3>
                      <p className="text-sm text-gray-500 mb-4">Герой России</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Командир танковой роты, который в неравном бою уничтожил значительное количество
                        техники и живой силы противника.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Медицинский работник" className="w-full h-64 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Шойгу Юлия Сергеевна</h3>
                      <p className="text-sm text-gray-500 mb-4">Военный медик</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Оказала первую помощь более 30 раненым под постоянным обстрелом,
                        рискуя собственной жизнью.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Награды за мужество и героизм</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="text-center p-6">
                      <img src="/placeholder.svg" alt="Звезда Героя России" className="w-24 h-24 mx-auto mb-4" />
                      <h4 className="font-bold">Звезда Героя России</h4>
                      <p className="text-sm text-gray-500">Высшая государственная награда</p>
                    </Card>
                    
                    <Card className="text-center p-6">
                      <img src="/placeholder.svg" alt="Орден Мужества" className="w-24 h-24 mx-auto mb-4" />
                      <h4 className="font-bold">Орден Мужества</h4>
                      <p className="text-sm text-gray-500">За проявленные мужество и отвагу</p>
                    </Card>
                    
                    <Card className="text-center p-6">
                      <img src="/placeholder.svg" alt="Орден «За заслуги перед Отечеством»" className="w-24 h-24 mx-auto mb-4" />
                      <h4 className="font-bold">Орден «За заслуги перед Отечеством»</h4>
                      <p className="text-sm text-gray-500">С мечами</p>
                    </Card>
                    
                    <Card className="text-center p-6">
                      <img src="/placeholder.svg" alt="Медаль «За отвагу»" className="w-24 h-24 mx-auto mb-4" />
                      <h4 className="font-bold">Медаль «За отвагу»</h4>
                      <p className="text-sm text-gray-500">За личное мужество и отвагу</p>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link to="/heroes">Истории всех героев СВО</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="support">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Как поддержать участников СВО</h2>
                
                <p>
                  Поддержка участников специальной военной операции и жителей новых российских территорий – важная задача
                  для каждого гражданина России. Существует множество способов оказать помощь.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Сбор гуманитарной помощи</h3>
                      <ul className="space-y-2">
                        <li>Теплые вещи</li>
                        <li>Медикаменты</li>
                        <li>Продукты питания длительного хранения</li>
                        <li>Средства личной гигиены</li>
                      </ul>
                      <p className="mt-4 text-sm">
                        Пункты сбора гуманитарной помощи работают во всех регионах России.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Финансовая помощь</h3>
                      <ul className="space-y-2">
                        <li>Благотворительные фонды</li>
                        <li>Официальные сборы Минобороны России</li>
                        <li>Поддержка семей военнослужащих</li>
                        <li>Помощь госпиталям</li>
                      </ul>
                      <p className="mt-4 text-sm">
                        Перечислить средства можно через официальные каналы и проверенные фонды.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Моральная поддержка</h3>
                      <ul className="space-y-2">
                        <li>Письма и открытки военнослужащим</li>
                        <li>Детские рисунки</li>
                        <li>Концерты и выступления</li>
                        <li>Волонтерская деятельность</li>
                      </ul>
                      <p className="mt-4 text-sm">
                        Моральная поддержка очень важна для тех, кто защищает нашу Родину.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <h3>Проекты поддержки участников СВО</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2">«Мы вместе»</h4>
                      <p>
                        Всероссийская акция взаимопомощи, в рамках которой организован сбор 
                        гуманитарной помощи для жителей новых территорий России и участников СВО.
                      </p>
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Присоединиться</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2">«Все для победы»</h4>
                      <p>
                        Проект Общероссийского народного фронта по поддержке военнослужащих, 
                        участвующих в специальной военной операции.
                      </p>
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Помочь</Button>
                    </CardContent>
                  </Card>
                </div>
                
                <blockquote>
                  "Поддержка наших военнослужащих, выполняющих боевые задачи в ходе специальной военной операции, — 
                  это не просто помощь, это проявление единства нашего народа и заботы о защитниках Отечества."
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

export default SvoPage;
