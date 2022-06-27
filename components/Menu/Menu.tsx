import styles from "./Menu.module.css"
import { useRouter } from "next/router";
import { useState, Children, PropsWithChildren, useEffect, createContext, useContext, isValidElement } from "react"
import { _MenuItem } from "../../models/Menu";
import MyLink from "../util-components/MyLink.tsx/MyLink";

interface _MenuContext {
   selectedItem: number
   selectItem?: (index: number) => void
   isCurrentActive?: number
}

const MenuContext = createContext<_MenuContext | undefined>(undefined)

export function useMenuContext() {
   return useContext(MenuContext)
}

interface MenuWrapperProps extends PropsWithChildren<any> {
   active?: number
}


export function MenuWrapper({ children, active }: MenuWrapperProps): JSX.Element {
   const [selectedItem, setSelectedItem] = useState<number>(active || 0)
   const [isCurrentActive, setIsCurrentActive] = useState<number>(active || 0)

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

   if (!children) {
      return null
   }

   return (
      <MenuContext.Provider value={{ selectedItem, selectItem, isCurrentActive }}>
         <div className={styles.menu_container}>
            {Children.map(children, (child, index) => {
               if (isValidElement(child)) {
                  return <> {child} </>
               }
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

function MenuItems({ title, icon, index, children }: MenuItemsProps): JSX.Element {
   const { selectedItem, selectItem, isCurrentActive } = useMenuContext()

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


interface MenuItemProps extends PropsWithChildren<any> {
   item: _MenuItem
}


function MenuItem({ item }: MenuItemProps): JSX.Element {
   const { query } = useRouter()
   return (
      <div key={item.name} className={`${styles.menu_item_option} ${query?.name === item.name && styles.menu_item_options_active}`}>

         <MyLink to={item.link}>
            {item.fullName}
         </MyLink>
      </div>
   )
}

MenuWrapper.MenuItems = MenuItems
MenuWrapper.MenuItem = MenuItem