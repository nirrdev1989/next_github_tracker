import { InputHTMLAttributes, DetailedHTMLProps, ReactNode, forwardRef } from "react"
import styles from "./Input.module.css"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

function Input({ className, ...props }: InputProps): JSX.Element {
   return (
      <input {...props} className={`${styles.input} ${className}`} />
   )
}


export default Input