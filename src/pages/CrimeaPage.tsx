
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CrimeaPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden bg-fixed bg-cover bg-center h-[400px]" 
             style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/placeholder.svg')" }}>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Крым и Россия: Вместе навсегда
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              История возвращения Крыма в родную гавань и его развитие в составе Российской Федерации
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="history">История</TabsTrigger>
              <TabsTrigger value="referendum">Референдум</TabsTrigger>
              <TabsTrigger value="development">Развитие</TabsTrigger>
              <TabsTrigger value="tourism">Туризм</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>История Крыма: Российские корни</h2>
                
                <p>
                  Крым имеет многовековую историю, тесно связанную с Россией. Полуостров вошел в состав Российской империи 
                  в 1783 году, когда императрица Екатерина II подписала манифест о присоединении Крыма.
                </p>
                
                <p>
                  После революции 1917 года Крым стал частью РСФСР, а с 1954 года – Украинской ССР в составе единого 
                  Советского Союза. Это административное решение не имело большого значения в рамках единого государства, 
                  но после распада СССР в 1991 году Крым оказался в составе независимой Украины, что противоречило воле большинства его жителей.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Российский Крым (1783-1954)</h3>
                    <p>
                      В 1783 году после победы в русско-турецкой войне Крым был присоединен к Российской империи.
                      За годы пребывания в составе России полуостров превратился в процветающий регион с развитой 
                      инфраструктурой, культурой и экономикой.
                    </p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">Украинский период (1991-2014)</h3>
                    <p>
                      После распада СССР Крым оказался в составе Украины, хотя большинство его населения составляли 
                      этнические русские. На протяжении всего этого периода в регионе сохранялись пророссийские 
                      настроения и стремление к воссоединению с Россией.
                    </p>
                  </div>
                </div>
                
                <p>
                  В 2014 году, после государственного переворота в Киеве и начала дискриминационной политики в отношении 
                  русскоязычного населения, жители Крыма решили взять свою судьбу в свои руки. На фоне растущей нестабильности 
                  на Украине в Крыму был проведен референдум о статусе полуострова.
                </p>
                
                <h3>Ключевые исторические события</h3>
                
                <div className="space-y-4 my-8">
                  <div className="flex border-l-4 border-red-600 pl-4">
                    <div className="mr-4 font-bold">1783</div>
                    <div>Вхождение Крыма в состав Российской империи</div>
                  </div>
                  <div className="flex border-l-4 border-red-600 pl-4">
                    <div className="mr-4 font-bold">1854-1856</div>
                    <div>Героическая оборона Севастополя в ходе Крымской войны</div>
                  </div>
                  <div className="flex border-l-4 border-red-600 pl-4">
                    <div className="mr-4 font-bold">1920</div>
                    <div>Образование Крымской АССР в составе РСФСР</div>
                  </div>
                  <div className="flex border-l-4 border-red-600 pl-4">
                    <div className="mr-4 font-bold">1941-1944</div>
                    <div>Героическая оборона и освобождение Крыма в годы Великой Отечественной войны</div>
                  </div>
                  <div className="flex border-l-4 border-red-600 pl-4">
                    <div className="mr-4 font-bold">1954</div>
                    <div>Передача Крыма из состава РСФСР в состав УССР</div>
                  </div>
                  <div className="flex border-l-4 border-red-600 pl-4">
                    <div className="mr-4 font-bold">1991</div>
                    <div>Восстановление Крымской АССР в составе Украины</div>
                  </div>
                  <div className="flex border-l-4 border-red-600 pl-4">
                    <div className="mr-4 font-bold">2014</div>
                    <div>Референдум о воссоединении с Россией и вхождение Крыма в состав РФ</div>
                  </div>
                </div>
                
                <blockquote>
                  "Крым всегда был и остается неотъемлемой частью России в сердцах и сознании людей."
                </blockquote>
              </div>
            </TabsContent>
            
            <TabsContent value="referendum">
              <div className="space-y-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Крымский референдум: Возвращение домой</h2>
                  
                  <p>
                    16 марта 2014 года состоялся исторический референдум о статусе Крыма, на котором жители полуострова 
                    сделали свой выбор — воссоединение с Россией. Это решение стало результатом свободного волеизъявления 
                    крымчан, стремившихся защитить свои права, язык, культуру и историческую идентичность.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Предпосылки референдума</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Государственный переворот в Киеве в феврале 2014 года
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Угроза безопасности русскоязычного населения Крыма
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Попытки новых украинских властей отменить закон о региональных языках
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-red-600">✓</span>
                          Стремление крымчан защитить свою историческую и культурную идентичность
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Результаты референдума</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center">
                          <h4 className="text-4xl font-bold text-red-600 mb-2">96.77%</h4>
                          <p>проголосовали за воссоединение с Россией</p>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-center">
                          <h4 className="text-4xl font-bold text-blue-600 mb-2">83.1%</h4>
                          <p>явка избирателей</p>
                        </div>
                      </div>
                      <p>
                        Референдум прошел при высокой явке и подавляющем большинстве голосов за воссоединение с Россией.
                        Это свидетельствует о том, что решение было действительно народным и отражало волю жителей Крыма.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Бюллетень референдума</h3>
                      <img src="/placeholder.svg" alt="Бюллетень референдума" className="mb-4 rounded" />
                      <p className="text-sm">
                        Бюллетень для голосования был составлен на трех языках: русском, украинском и крымскотатарском.
                        Избирателям предлагалось выбрать один из двух вариантов: воссоединение Крыма с Россией или
                        восстановление Конституции Крыма 1992 года при сохранении полуострова в составе Украины.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Международные наблюдатели</h3>
                      <p className="mb-4">
                        За ходом референдума следили более 70 международных наблюдателей из 23 стран мира,
                        в том числе депутаты Европарламента, парламентов Австрии, Бельгии, Болгарии, Франции,
                        Германии, Италии и других государств.
                      </p>
                      <blockquote className="text-sm italic border-l-4 border-gray-300 pl-4">
                        "Референдум прошел в соответствии с международными нормами и принципами демократического волеизъявления."
                        <footer className="text-right">— Из заключения международных наблюдателей</footer>
                      </blockquote>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">После референдума</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="mr-2 text-red-600">17 марта</span>
                          <span>Провозглашение независимости Республики Крым</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2 text-red-600">18 марта</span>
                          <span>Подписание договора о вхождении Крыма в состав России</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2 text-red-600">21 марта</span>
                          <span>Ратификация договора Федеральным Собранием РФ</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2 text-red-600">11 апреля</span>
                          <span>Принятие новой Конституции Республики Крым</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">18 марта — День воссоединения Крыма с Россией</h3>
                  <p>
                    18 марта 2014 года в Георгиевском зале Кремля был подписан договор о принятии Республики Крым и 
                    города Севастополя в состав Российской Федерации. Этот день стал государственным праздником 
                    и ежегодно отмечается по всей России как День воссоединения Крыма с Россией.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="development">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Развитие Крыма в составе России</h2>
                
                <p>
                  После воссоединения с Россией в 2014 году Крым получил мощный импульс для развития. За прошедшие годы
                  реализованы масштабные инфраструктурные проекты, улучшилось качество жизни крымчан, развиваются экономика,
                  социальная сфера, культура и образование.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Крымский мост</h3>
                      <img src="/placeholder.svg" alt="Крымский мост" className="mb-4 rounded" />
                      <p className="text-sm">
                        Крымский мост — грандиозный инфраструктурный проект, соединивший полуостров с материковой частью России.
                        Автомобильная часть моста открыта в мае 2018 года, железнодорожная — в декабре 2019 года.
                        Общая протяженность моста — 19 километров.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Трасса «Таврида»</h3>
                      <img src="/placeholder.svg" alt="Трасса Таврида" className="mb-4 rounded" />
                      <p className="text-sm">
                        Современная автомагистраль, связывающая Керчь с Севастополем.
                        Четырехполосная дорога протяженностью 250 км значительно улучшила транспортную доступность
                        всех регионов полуострова.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Симферопольский аэропорт</h3>
                      <img src="/placeholder.svg" alt="Аэропорт Симферополь" className="mb-4 rounded" />
                      <p className="text-sm">
                        Новый современный терминал международного аэропорта Симферополь открыт в 2018 году.
                        Его пропускная способность составляет 7 миллионов пассажиров в год,
                        что в несколько раз превышает возможности старого терминала.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <h3>Ключевые достижения за время в составе России</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Экономика и инфраструктура</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-red-600">✓</span>
                        Строительство Крымского моста и трассы «Таврида»
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-red-600">✓</span>
                        Модернизация энергетической системы, строительство Балаклавской и Таврической ТЭС
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-red-600">✓</span>
                        Создание независимой от Украины системы водоснабжения
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-red-600">✓</span>
                        Развитие туристической инфраструктуры, рост туристического потока
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-red-600">✓</span>
                        Развитие сельского хозяйства и виноделия
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4">Социальная сфера</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-600">✓</span>
                        Повышение пенсий и зарплат до российского уровня
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-600">✓</span>
                        Модернизация системы здравоохранения, строительство новых медицинских центров
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-600">✓</span>
                        Строительство новых школ и детских садов
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-600">✓</span>
                        Реставрация исторических и культурных памятников
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-blue-600">✓</span>
                        Развитие спортивной инфраструктуры
                      </li>
                    </ul>
                  </div>
                </div>
                
                <blockquote>
                  "За короткий срок в развитие Крыма было вложено столько средств и реализовано столько проектов,
                  сколько не было сделано за все годы пребывания в составе Украины."
                </blockquote>
              </div>
            </TabsContent>
            
            <TabsContent value="tourism">
              <div className="space-y-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Крым — жемчужина туризма России</h2>
                  
                  <p>
                    Крым — уникальный регион с богатой историей, разнообразными природными ландшафтами,
                    мягким климатом и множеством достопримечательностей. Ежегодно миллионы туристов из России
                    и других стран приезжают на полуостров, чтобы насладиться отдыхом на черноморском побережье,
                    познакомиться с историческими и культурными памятниками и поправить здоровье на крымских курортах.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Ялта" className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Ялта</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Жемчужина Южного берега Крыма, один из самых популярных курортов с прекрасными пляжами,
                        набережной и множеством достопримечательностей, включая Ливадийский и Воронцовский дворцы.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Севастополь" className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Севастополь</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Город-герой, главная база Черноморского флота России. Богат историческими памятниками,
                        связанными с обороной Севастополя в Крымскую и Великую Отечественную войны.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Бахчисарай" className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Бахчисарай</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Бывшая столица Крымского ханства, место, где расположен знаменитый Ханский дворец —
                        единственный в мире образец крымскотатарской дворцовой архитектуры.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Ласточкино гнездо" className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                      <h3 className="font-bold">Ласточкино гнездо</h3>
                      <p className="text-sm text-gray-500">Символ Крыма</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Гора Ай-Петри" className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                      <h3 className="font-bold">Гора Ай-Петри</h3>
                      <p className="text-sm text-gray-500">Уникальные виды</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Херсонес Таврический" className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                      <h3 className="font-bold">Херсонес Таврический</h3>
                      <p className="text-sm text-gray-500">Древний город</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img src="/placeholder.svg" alt="Никитский ботанический сад" className="w-full h-40 object-cover" />
                    <CardContent className="p-4">
                      <h3 className="font-bold">Никитский ботанический сад</h3>
                      <p className="text-sm text-gray-500">Коллекция растений</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Крым — для всех видов отдыха</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded shadow-sm">
                      <h4 className="font-bold mb-2">Пляжный отдых</h4>
                      <p className="text-sm">
                        Более 500 км песчаных и галечных пляжей Черного и Азовского морей.
                        Лучшие курорты: Ялта, Алушта, Судак, Евпатория, Феодосия.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-4 rounded shadow-sm">
                      <h4 className="font-bold mb-2">Оздоровительный туризм</h4>
                      <p className="text-sm">
                        Санатории и пансионаты с лечением, грязелечебницы, минеральные воды.
                        Особенно славится западный Крым — Саки, Евпатория.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 p-4 rounded shadow-sm">
                      <h4 className="font-bold mb-2">Активный отдых</h4>
                      <p className="text-sm">
                        Пешие походы по горам, скалолазание, дайвинг, парапланеризм,
                        конные прогулки, джиппинг, велотуры.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link to="/tourism">Узнать больше о туризме в Крыму</Link>
                    </Button>
                  </div>
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

export default CrimeaPage;
