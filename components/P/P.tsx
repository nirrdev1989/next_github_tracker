import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./P.module.css"
// import classNames from "classnames"

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   children: ReactNode
   size?: "small" | "medium" | "large"
}

export default function P({ children, size = "medium", ...props }: PProps): JSX.Element {
   return (
      <p {...props} className={`${styles.p} ${styles[size]}`} >{children}</p>
   )
}
