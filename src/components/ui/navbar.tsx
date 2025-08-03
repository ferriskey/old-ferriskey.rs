import { Link } from "@radix-ui/react-navigation-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu";

export default function Navbar() {
  return (
    <header className="nav-background sticky top-0 z-20 h-[57px] flex w-full max-w-full bg-white items-center border-orange-200/50 border-b">

      <div className="grid-border-color relative mx-3 flex w-full border-x md:mx-8 lg:mx-12">
        <div className="absolute z-10 size-2 rotate-45 rounded-[1px] border border-orange-200 dark:border-orange-300/25 bg-white dark:bg-black bottom-1 left-[-4.5px]" />
        <div className="absolute z-10 size-2 rotate-45 rounded-[1px] border border-orange-200 dark:border-orange-300/25 bg-white dark:bg-black right-[-4.5px] bottom-1" />


        <nav className="relative z-2 w-full md:mx-auto md:max-w-[1148px] px-4 py-3 md:px-6 flex justify-between gap-4 lg:gap-0">
          <div className="flex flex-none items-center gap-3">
            <a href="/" className="size-[50px] flex items-center rounded-sm transition-transform hover:scale-105">
              <img
                alt="Ferriskey logo"

                decoding="async"
                data-nimg="1"
                src="/logo_ferriskey.png" />
            </a>

            <div className="relative w-full">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Product
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="bg-white">
                      <div className="gap-2 md:w-[400px] lg:w-[500px]">
                        <ListItem href="/products/trident" title="Trident" className="hover:bg-gray-100 rounded-md">
                          Advanced multi-factor authentication and policy engine—secure every login and critical action.
                        </ListItem>

                      </div>

                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>

              </NavigationMenu>
            </div>


          </div>
        </nav>

      </div>

    </header>
  )
}


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
