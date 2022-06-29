import Head from "next/head"
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from "./PageContainer.module.css"

interface PageContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children: ReactNode
   description?: string
   title: string
}

export default function PageContainer({ children, title, description }: PageContainerProps): JSX.Element {
   return (
      <>
         <Head>
            <meta name="description" content={description} />
            <title>{title}</title>
         </Head>
         <div className={styles.page_content}>
            {children}
         </div>
      </>
   )
}
