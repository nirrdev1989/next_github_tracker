import Cookie from "js-cookie"
import { useEffect, useState } from "react"

interface _UseTheme {
   isDarkMode: boolean
   switchMode: () => void
}

export function useTheme(): _UseTheme {
   const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

   function switchMode() {
      const mode = Cookie.get("mode")

      if (mode === "dark") {
         document.body.setAttribute("data-mode", "light")
         Cookie.set("mode", "light")
         setIsDarkMode(() => false)
      } else {
         document.body.setAttribute("data-mode", "dark")
         Cookie.set("mode", "dark")
         setIsDarkMode(() => true)
      }
   }

   useEffect(() => {
      switchMode()
   }, [])

   return { isDarkMode, switchMode }
}