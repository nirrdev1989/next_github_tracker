import styles from "./Menu.module.css"
import { useRouter } from "next/router";
import { useState, Children, PropsWithChildren, useEffect, createContext, useContext } from "react"
import { _MenuItem } from "../../models/Menu";
import MyLink from "../util-components/MyLink.tsx/MyLink";

const MenuContext = createContext(null)

interface MenuWrapperProps extends PropsWithChildren<any> {
   active?: number
}

export function MenuWrapper({ children, active }: MenuWrapperProps): JSX.Element {
   const [selectedItem, setSelectedItem] = useState<number>(active)
   const [isCurrentActive, setIsCurrentActive] = useState<number>(active)

   function selectItem(index: number) {
      if (index === isCurrentActive) {
         setIsCurrentActive(-1)
         setSelectedItem(-1)
         return
      }
      setSelectedItem(index)
      setIsCurrentActive(index)
   }

   useEffect(() => {
      if (active === undefined) {
         // if (Children.count(children) === 1) {
         setSelectedItem(0)
         setIsCurrentActive(0)
         // }
      }
   }, [children])

   return (
      <MenuContext.Provider value={{ selectedItem, selectItem, isCurrentActive }}>
         <div className={styles.menu_container}>
            {Children.map(children, (child, index) => {
               return <> {child} </>
               //  if (isValidElement(child)){
               // }
               // return cloneElement(child, { index: index })
            })}

         </div>
      </MenuContext.Provider>
   )
}

interface MenuItemsProps extends PropsWithChildren<any> {
   title: string
   icon: JSX.Element
   index: number
}

MenuWrapper.MenuItems = function ({ title, icon, index, children }: MenuItemsProps): JSX.Element {
   const { selectedItem, selectItem, isCurrentActive } = useContext(MenuContext)

   return (
      <div className={`${styles.menu_item}`}>
         <div
            className={`${styles.menu_item_header} ${index === selectedItem ? styles.active : ""}`}
            onClick={() => selectItem(index)}
         >
            {icon}
            <span>{title}</span>
         </div>
         <div className={`${styles.menu_item_options} ${index === selectedItem && index === isCurrentActive ? styles.open : ""} `} >
            {children}
         </div>
      </div>
   )
}


interface MenuItemProps {
   item: _MenuItem
   type: string
}


MenuWrapper.MenuItem = function ({ item, type }: MenuItemProps): JSX.Element {
   const { query } = useRouter()
   return (
      <div key={item.name} className={`${query?.name === item.name && styles.menu_item_options_active}`}>
         <MyLink to={item.link}>
            {item.name}
         </MyLink>
      </div>
   )
}
