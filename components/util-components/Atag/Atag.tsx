import Link from "next/link"
import { useRouter } from "next/router"
import { DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from "react"
import styles from "./Atag.module.css"

interface AtagProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
   children: ReactNode
   href: string
   disabled?: boolean
}

export default function Atag({ disabled, href, children, ...rest }: AtagProps): JSX.Element {
   return (
      <a className={styles.a} {...rest} href={href} target="_blank" rel="noreferrer">{children}</a>
   )
}
