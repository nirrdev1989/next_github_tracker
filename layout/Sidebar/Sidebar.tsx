import { HTMLAttributes, DetailedHTMLProps } from "react"
import styles from "./Sidebar.module.css"
import Navbar from "../../components/Navbar/Navbar"


interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Sidebar({ }: SidebarProps): JSX.Element {
   return (
      <div className={styles.sidebar}>
         <Navbar />
      </div>
   )
}
