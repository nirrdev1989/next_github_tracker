
import { HTMLAttributes, DetailedHTMLProps } from "react"

import styles from "./Sidebar.module.css"


interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Sidebar({ }: SidebarProps) {
   return (
      <div>Sidebar</div>
   )
}
