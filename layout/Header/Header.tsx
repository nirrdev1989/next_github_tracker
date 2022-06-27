import { HTMLAttributes, DetailedHTMLProps } from "react"
import Navbar from "../../components/Navbar/Navbar"

import styles from "./Header.module.css"

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Header({ }: HeaderProps): JSX.Element {
   return (
      <header className={styles.header}>
         <Navbar />
      </header>
   )
}
