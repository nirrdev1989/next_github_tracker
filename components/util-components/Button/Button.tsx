import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./Button.module.css"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   children: ReactNode
   color?: string
}

export default function Button({ children, color, ...props }: ButtonProps): JSX.Element {
   return (
      <button {...props} className={`${styles.button} ${styles[color]}`} >{children}</button>
   )
}
