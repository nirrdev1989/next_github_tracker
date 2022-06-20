import Link from "next/link"
import { useRouter } from "next/router"
import { DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from "react"
import styles from "./MyLink.module.css"

interface MyLinkProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
   children: ReactNode
   to: string
}

export default function MyLink({ children, to }: MyLinkProps) {
   const route = useRouter()
   return (
      <>
         {to === route.asPath ? <span>{children}</span> :
            <Link href={to} passHref={true}>
               <a>{children}</a>
            </Link>}
      </>
   )
}
