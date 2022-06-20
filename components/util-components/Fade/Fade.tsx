import { DetailedHTMLProps, ReactNode, HTMLAttributes } from "react"
import styles from "./Fade.module.css"
// import classNames from "classnames"

interface FadeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
   children: ReactNode
}

export default function Fade({ children }: FadeProps): JSX.Element {
   return (
      <span className={styles.fade} >{children}</span>
   )
}