import Link from "next/link"
import { useRouter } from "next/router"
import { DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from "react"
import styles from "./MyLink.module.css"

interface MyLinkProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
   children: ReactNode
   to: string
   disabled?: boolean
}

export default function MyLink({ children, to, disabled = false, ...rest }: MyLinkProps) {
   const route = useRouter()
   return (
      <>
         {to === route.asPath || disabled ? <span {...rest} style={{ marginLeft: "var(--size-0-5-rem)" }} >{children}</span> :
            <Link href={to} passHref={true}>
               <a {...rest}>{children}</a>
            </Link>}
      </>
   )
}
