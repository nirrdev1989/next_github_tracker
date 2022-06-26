import { DetailedHTMLProps, ReactNode, HTMLAttributes } from "react"
import styles from "./Badge.module.css"

interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
   children: ReactNode
   color?: "red" | "green" | "blue" | "yellow" | "outline"
}

export default function Badge({ color, children, ...rest }: BadgeProps): JSX.Element {
   return (
      <span {...rest} className={`${styles.badge} ${styles[color]}`} >{children}</span>
   )
}
