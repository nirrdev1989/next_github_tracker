import { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";



export interface App_Context {
   // something: string
   activeMenuTab: number
   isCurrentActive: number
   openTab?: (index: number) => void
}

const AppContext = createContext<App_Context | null>({
   activeMenuTab: -1,
   isCurrentActive: -2,
})

export function useAppContext() {
   return useContext(AppContext)
}

export function AppContextProvider({ activeMenuTab, isCurrentActive, children }: PropsWithChildren<App_Context>): JSX.Element {
   // const [s, setSomething] = useState<string>("")
   const [_activeMenuTab, setActiveMenuTab] = useState<number>(activeMenuTab)
   const [_isCurrentActive, setIsCurrentActive] = useState<number>(isCurrentActive)

   function openTab(index: number) {
      if (index === _isCurrentActive) {
         setIsCurrentActive(-1)
         setActiveMenuTab(-1)
         return
      }
      setIsCurrentActive(index)
      setActiveMenuTab(index)
   }

   return (
      <AppContext.Provider value={{ activeMenuTab: _activeMenuTab, isCurrentActive: _isCurrentActive, openTab }}>
         {children}
      </AppContext.Provider>
   )
}