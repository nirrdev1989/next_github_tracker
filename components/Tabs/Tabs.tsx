import { createContext, PropsWithChildren, useContext, useEffect, useState, Children } from "react"
import styles from "./Tabs.module.css"

interface _TabsContext {
   activeTab: number
   setActiveTab: (index: number) => void
}

interface TabsWrapperProps extends PropsWithChildren<any> {
   initialActive: number
}

interface TabsProps extends PropsWithChildren<any> {
   headers: string[]
}

const TabsContext = createContext<_TabsContext | undefined>(undefined)

export function useTabsContext() {
   return useContext(TabsContext)
}

export function TabsWrapper({ initialActive = 0, children }: TabsWrapperProps): JSX.Element {
   const [activeTab, setActiveTab] = useState(initialActive)
   return (
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
         {children}
      </TabsContext.Provider>
   )

}


function Tabs({ headers, children }: TabsProps): JSX.Element {
   const { activeTab, setActiveTab } = useTabsContext()
   return (
      <>
         <div className={styles.tabs_headers}>
            {headers.map((header, index) => {
               return (
                  <div
                     className={`${styles.tabs_headers_item} ${index === activeTab && styles.active}`}
                     onClick={() => setActiveTab(index)}
                     key={index + "a"}>
                     {header}
                  </div>
               )
            })}
         </div>

         {
            Children.map(children, (child, index) => {
               // console.log(child, index)
               if (index === activeTab) {
                  return child
               } else {
                  return null
               }
            })
         }
      </>
   )
}


TabsWrapper.Tabs = Tabs