import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { useAppContext } from "../../context/app.context"
import { useThemeContext } from "../../context/theme.context"
import { ListIcon, MoonIcon, SunIcon, UsersIcon } from "../../icons"
import { MenuWrapper } from "../Menu/Menu"
import styles from "./Sidebar.module.css"

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Sidebar({ }: SidebarProps): JSX.Element {
   const { switchMode, isDarkMode } = useThemeContext()
   const { menuList } = useAppContext()

   return (
      <div className={styles.sidebar}>
         <div className={styles.logo}>
            <Link href="/">
               <a>Logo</a>
            </Link>
            <span
               className={styles.mode_icons}
               onClick={() => {
                  switchMode()
               }}
            >
               {!isDarkMode ? MoonIcon : <span style={{ color: 'yellow' }}> {SunIcon} </span>}
            </span>
         </div>

         <MenuWrapper active={0}>
            <MenuWrapper.MenuItems title="Users" index={0} icon={UsersIcon}>
               {menuList["users"].items.map((user) => {
                  return <MenuWrapper.MenuItem item={user} key={user.id} type={"users"} />
               })}
            </MenuWrapper.MenuItems>
            <MenuWrapper.MenuItems title="Repos" index={1} icon={ListIcon}>
               {menuList["repos"].items.map((repo) => {
                  return <MenuWrapper.MenuItem item={repo} key={repo.id} type={"repos"} />
               })}
            </MenuWrapper.MenuItems>
         </MenuWrapper>

      </div>
   )
}
