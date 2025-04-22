import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="border-b bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>О проекте</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500 to-red-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Уроки Победы
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Образовательный проект, направленный на сохранение исторической памяти и воспитание патриотизма
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Материалы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/">
                        <div className="text-sm font-medium leading-none">Документальные фильмы</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Исторические хроники о ключевых моментах
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/">
                        <div className="text-sm font-medium leading-none">Методические материалы</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Разработки уроков для педагогов
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-medium" href="/">
                Календарь событий
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button variant="default" className="bg-red-600 hover:bg-red-700">
          Принять участие
        </Button>
      </div>
    </header>
  );
};

export default Header;
