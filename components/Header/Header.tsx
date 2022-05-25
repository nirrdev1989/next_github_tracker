import { HTMLAttributes, DetailedHTMLProps } from "react"

import styles from "./Header.module.css"

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
export default function Header({ }: HeaderProps) {
   return (
      <div>Header</div>
   )
}
