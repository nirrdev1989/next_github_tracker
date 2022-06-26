import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie"

export interface _ThemeContext {
   isDarkMode: boolean
   switchMode?: () => void
}

const ThemeContext = createContext<_ThemeContext | null>(null)


export function useThemeContext() {
   return useContext(ThemeContext)
}

export function ThemeContextProvider({ children }: PropsWithChildren<any>): JSX.Element {
   const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

   function switchMode() {
      const mode = Cookie.get("mode")

      if (mode === "dark") {
         document.body.setAttribute("data-mode", "light")
         Cookie.set("mode", "light")
         setIsDarkMode(false)
      } else {
         document.body.setAttribute("data-mode", "dark")
         Cookie.set("mode", "dark")
         setIsDarkMode(true)
      }
   }

   useEffect(() => {
      switchMode()
   }, [])
   return (
      <ThemeContext.Provider value={{ isDarkMode, switchMode }}>
         {children}
      </ThemeContext.Provider>
   )
}

