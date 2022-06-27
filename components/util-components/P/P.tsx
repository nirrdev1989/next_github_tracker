import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./P.module.css"

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   children: ReactNode
   size?: "small" | "medium" | "large" | "x_small"
}

export default function P({ children, size = "medium", ...rest }: PProps): JSX.Element {
   return (
      <p {...rest} className={`${styles.p} ${styles[size]}`} >{children}</p>
   )
}
