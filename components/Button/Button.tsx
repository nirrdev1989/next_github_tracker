import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./Button.module.css"
// import classNames from "classnames"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   children: ReactNode
   extraClass: string
}

export default function Button({ children, extraClass, ...props }: ButtonProps): JSX.Element {
   return (
      <button {...props} className={`${styles.button} ${styles[extraClass]}`} >{children}</button>
   )
}
