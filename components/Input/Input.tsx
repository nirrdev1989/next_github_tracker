import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./Input.module.css"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export default function Input({ className, ...props }: InputProps): JSX.Element {
   return (
      <input {...props} className={`${styles.input} ${className}`} />
   )
}
