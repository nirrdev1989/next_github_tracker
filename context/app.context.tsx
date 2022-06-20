import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { users, repos } from "../fake-db/users";
import Cookie from "js-cookie"
import { _Menu, _MenuItem } from "../models/Menu";


export interface _AppContext {
}

const AppContext = createContext(null)

export function useAppContext() {
   return useContext(AppContext)
}

export function AppContextProvider({ children }: PropsWithChildren<_AppContext>): JSX.Element {

   const [menuList, setMenuList] = useState<_Menu>({
      "users": { type: "users", items: [] },
      "repos": { type: "repos", items: [] }
   })


   const addItemToMenu = useCallback((name: string, link: string, type: string) => {
      const itemFound = menuList[type].items.find((item) => item.name === name)

      if (!itemFound) {
         const newItem: _MenuItem = {
            id: Math.floor(Math.random() * 100000000),
            name: name,
            link: link
         }

         menuList[type].items.push(newItem)

         Cookie.set(type, JSON.stringify(menuList[type].items))

         setMenuList({ ...menuList })
      }
      // }

   }, [menuList])

   function removeItemFromMenu(name: string, type: string) {

      menuList[type].items = menuList[type].items.filter((item) => item.name !== name)

      Cookie.set(type, JSON.stringify(menuList[type].items))

      setMenuList({ ...menuList })
   }

   useEffect(() => {
      setMenuList({
         "users": users,
         "repos": repos
      })
   }, [])


   return (
      <AppContext.Provider value={{ menuList, addItemToMenu, removeItemFromMenu }}>
         {children}
      </AppContext.Provider>
   )
}


