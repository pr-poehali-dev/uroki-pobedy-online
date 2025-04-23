
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { LogIn, UserPlus } from "lucide-react";

interface AuthDialogProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

const AuthDialog = ({ isOpen, onOpenChange, trigger }: AuthDialogProps) => {
  const [open, setOpen] = useState(isOpen || false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация запроса на сервер
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Вход выполнен успешно",
        description: "Добро пожаловать в проект 'Уроки Победы'!",
      });
      handleOpenChange(false);
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация запроса на сервер
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Регистрация выполнена успешно",
        description: "Теперь вы можете войти в систему",
      });
      handleOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Авторизация
          </DialogTitle>
          <DialogDescription className="text-center">
            Войдите или зарегистрируйтесь для доступа ко всем материалам проекта
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="mt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">Email</Label>
                <Input id="email-login" type="email" placeholder="example@mail.ru" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password-login">Пароль</Label>
                <Input id="password-login" type="password" required />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm cursor-pointer">
                    Запомнить меня
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Забыли пароль?
                </a>
              </div>
              
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Вход...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    Войти
                  </span>
                )}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="mt-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Имя</Label>
                  <Input id="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Фамилия</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email-register">Email</Label>
                <Input id="email-register" type="email" placeholder="example@mail.ru" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password-register">Пароль</Label>
                <Input id="password-register" type="password" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password-confirm">Подтверждение пароля</Label>
                <Input id="password-confirm" type="password" required />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  Я согласен с <a href="#" className="text-blue-600 hover:underline">условиями использования</a>
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Регистрация...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Зарегистрироваться
                  </span>
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          Авторизуясь, вы соглашаетесь с нашей политикой обработки персональных данных
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
