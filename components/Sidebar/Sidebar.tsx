
import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { useThemeContext } from "../../context/theme.context"
import { MoonIcon, SunIcon } from "../../icons"
import Button from "../Button/Button"
import Menu from "../Menu/Menu"
import Search from "../Searching/Searching"

import styles from "./Sidebar.module.css"


interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Sidebar({ }: SidebarProps) {
   const { switchMode, isDarkMode } = useThemeContext()
   return (
      <div className={styles.sidebar}>
         <div className={styles.logo}>
            <Link href="/">
               <a>Logo</a>
            </Link>
            <span
               className={styles.mode_icons}
               onClick={() => switchMode()}>
               {!isDarkMode ? MoonIcon : <span style={{ color: 'yellow' }}> {SunIcon} </span>}
            </span>
         </div>


         <Menu />
      </div>
   )
}
