
import { HTMLAttributes, DetailedHTMLProps } from "react"
import Menu from "../Menu/Menu"

import styles from "./Sidebar.module.css"


interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Sidebar({ }: SidebarProps) {
   return (
      <div className={styles.sidebar}>
         <div className={styles.logo}>
            Logo
         </div>
         <Menu />
      </div>
   )
}
