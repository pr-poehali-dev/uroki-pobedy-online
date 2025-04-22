import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, Book } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">О проекте</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Образовательный проект «УРОКИ ПОБЕДЫ» направлен на сохранение исторической 
            правды о Великой Отечественной войне и воспитание чувства патриотизма у молодежи
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-4">
              <Book className="h-8 w-8 text-red-600" />
              <div>
                <CardTitle>Образование</CardTitle>
                <CardDescription>Исторические материалы</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Интерактивные уроки, исторические документы и свидетельства, 
                помогающие глубже понять значение Победы и ее цену
              </p>
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
              <p className="text-gray-600 dark:text-gray-400">
                Проект собирает и сохраняет воспоминания ветеранов, архивные материалы 
                и семейные истории для будущих поколений
              </p>
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
              <p className="text-gray-600 dark:text-gray-400">
                Конкурсы, выставки, конференции и другие мероприятия, 
                посвященные сохранению памяти о Великой Отечественной войне
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
