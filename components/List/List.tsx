import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./List.module.css"


interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children: ReactNode
}

export default function ListWrapper({ children }: ListProps) {
   return (
      <div className={styles.list_container}>
         {children}
      </div>
   )
}

ListWrapper.ListItem = function ({ children, className }) {
   return (
      <div className={styles.list_item}>
         {children}
      </div>
   )
}

