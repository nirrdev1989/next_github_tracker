
import { PropsWithChildren, useState } from "react"
import { ListIcon, UsersIcon } from "../../icons"
import styles from "./Menu.module.css"
import { _MenuItem } from "../../models/Menu";
import Link from "next/link";
import { users } from "../../fake-db/users";
import { useRouter } from "next/router";
// import { useAppContext } from "../../context/app.context";

const menuItems: _MenuItem[] = [
   { name: "Users", icon: UsersIcon },
   { name: "Repos", icon: ListIcon }
]


interface MenuProps { }

export default function Menu({ }: MenuProps): JSX.Element {
   // const {activeMenuTab, isCurrentActive, openTab} = useAppContext()
   const [activeMenuTab, setActiveMenuTab] = useState<number>(0)
   const [isCurrentActive, setIsCurrentActive] = useState<number>(0)
   const { query } = useRouter()
   // console.log(router)

   function openTab(index: number) {
      if (index === isCurrentActive) {
         setIsCurrentActive(-1)
         setActiveMenuTab(-1)
         return
      }
      setIsCurrentActive(index)
      setActiveMenuTab(index)
   }

   return (
      <div className={styles.menu_container}>
         <div className={styles.menu_items}>
            {menuItems.map((menuItem, i) => {
               return (
                  <MenuItem
                     key={menuItem.name}
                     menuItem={menuItem}
                     isCurrentActive={isCurrentActive}
                     activeMenuTab={activeMenuTab}
                     i={i}
                     openTab={openTab}
                  >

                     {users.map((user) => {
                        return (
                           <div key={user.userName} className={`${query?.userName === user.userName && styles.menu_item_options_active}`}>
                              <Link href={`/users/${user.userName}`}>
                                 <a> {user.userName} </a>
                              </Link>
                           </div>
                        )
                     })}
                  </MenuItem>
               )
            })}
         </div>
      </div>
   )
}


interface MenuItemProps extends PropsWithChildren<any> {
   activeMenuTab: number
   isCurrentActive: number
   menuItem: _MenuItem
   i: number
   openTab: (index: number) => void
}

function MenuItem({ children, openTab, menuItem, activeMenuTab, isCurrentActive, i }: MenuItemProps): JSX.Element {

   return (
      <div className={styles.menu_item}>
         <div
            className={`${styles.menu_item_header} ${activeMenuTab === i && isCurrentActive === i ? styles.active : ""}`}
            onClick={() => openTab(i)}
         >
            {menuItem.icon}
            <span>{menuItem.name}</span>
         </div>
         <div className={`${styles.menu_item_options} ${activeMenuTab === i && isCurrentActive === i ? styles.open : ""} `}>
            {children}
         </div>
      </div>
   )
}
