import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { usersMenu, reposMenu, searchMenu, settingsMenu } from "../fake-db/menu";
import Cookie from "js-cookie"
import { _Menu, _MenuItem } from "../models/Menu";
import { successToast, warningToast } from "../utils/toast";


export interface _AppContext {
   menuList: _Menu
   addItemToMenu: (name: string, fullName: string, link: string, type: string) => void
   removeItemFromMenu: (name: string, type: string) => void
}

const AppContext = createContext<_AppContext | null>(null)

export function useAppContext() {
   return useContext(AppContext)
}

export function AppContextProvider({ children }: PropsWithChildren<any>): JSX.Element {

   const [menuList, setMenuList] = useState<_Menu>({
      "users": { type: "users", items: [] },
      "repos": { type: "repos", items: [] },
      "search": { type: "search", items: [] },
      "settings": { type: "settings", items: [] },
   })

   function addItemToMenu(name: string, fullName: string, link: string, type: string) {
      const itemFound = menuList[type].items.find((item) => item.fullName === fullName)

      if (!itemFound) {
         const newItem: _MenuItem = {
            id: Math.floor(Math.random() * 100000000),
            name: `${name}`,
            link: link,
            fullName: fullName
         }

         menuList[type].items.push(newItem)

         Cookie.set(type, JSON.stringify(menuList[type].items))

         setMenuList({ ...menuList })

         successToast(`${name} added to ${type} list`)
      }
      // }

   }

   function removeItemFromMenu(name: string, type: string) {

      menuList[type].items = menuList[type].items.filter((item) => item.name !== name)

      Cookie.set(type, JSON.stringify(menuList[type].items))

      setMenuList({ ...menuList })

      warningToast(`${name} removed from ${type} list`)

   }

   useEffect(() => {
      setMenuList({
         "users": usersMenu,
         "repos": reposMenu,
         "search": searchMenu,
         "settings": settingsMenu
      })

   }, [])


   return (
      <AppContext.Provider value={{ menuList, addItemToMenu, removeItemFromMenu }}>
         {children}
      </AppContext.Provider>
   )
}


