import { DetailedHTMLProps, ReactNode, HTMLAttributes } from "react"
import styles from "./Badge.module.css"

interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
   children: ReactNode
   color?: "red" | "green" | "blue" | "yellow" | "outline"
}

export default function Badge({ color, children }: BadgeProps): JSX.Element {
   return (
      <span className={`${styles.badge} ${styles[color]}`} >{children}</span>
   )
}
