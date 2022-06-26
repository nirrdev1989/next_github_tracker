import Link from "next/link"
import { useRouter } from "next/router"
import { HTMLAttributes, DetailedHTMLProps, useState, useEffect } from "react"
import { useAppContext } from "../../context/app.context"
import { useThemeContext } from "../../context/theme.context"
import { useAnimateEnd } from "../../hooks/useAnimateEnd"
import { useTheme } from "../../hooks/useTheme"
import { CloseIcon, HamburgerIcon, ListIcon, MoonIcon, RepoIcon, SearchIcon, SettingsIcon, SunIcon, UserIcon } from "../../icons"
import { MenuWrapper } from "../Menu/Menu"
import MyLink from "../util-components/MyLink.tsx/MyLink"


import styles from "./Navbar.module.css"

interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isOpend?: boolean
}


const menuItemActiveList = {
   "users": 0,
   "repos": 1,
   "search": 2
}

export default function Navbar({ }: NavbarProps) {
   const { isDarkMode, switchMode } = useTheme()
   const { menuList } = useAppContext()
   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [endStart, setEndStart] = useAnimateEnd(100, setIsOpen)

   const router = useRouter()

   useEffect(() => {
      setEndStart(true)
   }, [router])

   return (


      <nav className={`${isOpen ? styles.nav + " " + styles.open : styles.nav}`}>
         <div className={styles.nav_headers}>
            <div className={styles.logo}>
               <Link href="/">
                  <a>Logo</a>
               </Link>
            </div>
            <div
               className={styles.mode_icons}
               onClick={() => {
                  switchMode()
               }}
            >
               {!isDarkMode ? MoonIcon : <span style={{ color: 'yellow' }}> {SunIcon} </span>}
            </div>

            <div className={styles.hamburger_icon} onClick={() => {
               if (isOpen) {
                  setEndStart(true)
               } else {
                  setIsOpen((prev) => !prev)
               }
            }}>
               {isOpen ? CloseIcon : HamburgerIcon}
            </div>
         </div>

         <div className={`${styles.nav_menu} ${isOpen && !endStart ? styles.open : endStart ? styles.close : ""}`}>

            <MenuWrapper active={0}>
               <MenuWrapper.MenuItems title="Users" index={0} icon={UserIcon}>
                  {menuList["users"].items.map((user) => {
                     return <MenuWrapper.MenuItem item={user} key={user.id} />
                  })}
               </MenuWrapper.MenuItems>
               <MenuWrapper.MenuItems title="Repos" index={1} icon={RepoIcon}>
                  {menuList["repos"].items.map((repo) => {
                     return <MenuWrapper.MenuItem item={repo} key={repo.id} />
                  })}
               </MenuWrapper.MenuItems>
               <MenuWrapper.MenuItems title="Search" index={2} icon={SearchIcon}>
                  {menuList["search"].items.map((ser) => {
                     return <MenuWrapper.MenuItem item={ser} key={ser.id} />
                  })}
               </MenuWrapper.MenuItems>
               <MenuWrapper.MenuItems title="Settings" index={3} icon={SettingsIcon}>
                  {menuList["settings"].items.map((setting) => {
                     return <MenuWrapper.MenuItem item={setting} key={setting.id} />
                  })}
               </MenuWrapper.MenuItems>
            </MenuWrapper>
         </div>

         {/* <div className={styles.nav_base_options}>
            <div className={styles.nav_base_options_item}>
               <span>
                  {SearchIcon}
               </span>
               <MyLink to={`/`}>
                  Search
               </MyLink>
            </div>

            <div className={styles.nav_base_options_item}>
               <span>
                  {SettingsIcon}
               </span>
               <MyLink to={`/`}>
                  Settings
               </MyLink>
            </div>
         </div> */}
      </nav>
   )
}
