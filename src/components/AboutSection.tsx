
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, Book, User, Flag, Medal } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-playfair">О проекте</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Образовательный проект «УРОКИ ПОБЕДЫ» направлен на сохранение исторической 
            правды о Великой Отечественной войне и других важных событиях истории России.
            Наша цель — воспитание патриотизма, гражданственности и чувства гордости за свою страну
            у молодого поколения россиян.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-4">
              <Book className="h-8 w-8 text-red-600" />
              <div>
                <CardTitle>Образование</CardTitle>
                <CardDescription>Исторические материалы</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Интерактивные уроки, исторические документы и свидетельства, 
                помогающие глубже понять значение Победы и ее цену. Материалы разработаны 
                ведущими историками и педагогами России.
              </p>
              <Link to="/wwii" className="text-red-600 hover:text-red-700 font-medium">
                Изучить материалы →
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-red-600" />
              <div>
                <CardTitle>Память</CardTitle>
                <CardDescription>Сохранение истории</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Проект собирает и сохраняет воспоминания ветеранов, архивные материалы 
                и семейные истории для будущих поколений. Каждая история – бесценное 
                свидетельство подвига нашего народа.
              </p>
              <Link to="/heroes" className="text-red-600 hover:text-red-700 font-medium">
                Истории героев →
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-4">
              <Calendar className="h-8 w-8 text-red-600" />
              <div>
                <CardTitle>События</CardTitle>
                <CardDescription>Мероприятия проекта</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Конкурсы, выставки, конференции и другие мероприятия, 
                посвященные сохранению памяти о Великой Отечественной войне,
                современной истории России и подвигам наших соотечественников.
              </p>
              <Link to="/events" className="text-red-600 hover:text-red-700 font-medium">
                Календарь событий →
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-4">
              <User className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>Для преподавателей</CardTitle>
                <CardDescription>Методические материалы</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Готовые планы уроков, презентации, интерактивные задания для проведения 
                патриотических занятий. Все материалы прошли экспертную проверку
                и соответствуют образовательным стандартам.
              </p>
              <Link to="/teachers" className="text-blue-600 hover:text-blue-700 font-medium">
                Получить доступ →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-4">
              <Flag className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>Для школьников и студентов</CardTitle>
                <CardDescription>Интерактивное обучение</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Познавательные игры, исторические квизы, конкурсы эссе и творческих работ.
                Участвуй в проекте, расширяй свои знания об истории России
                и становись настоящим патриотом своей страны.
              </p>
              <Link to="/quiz" className="text-blue-600 hover:text-blue-700 font-medium">
                Проверить знания →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
