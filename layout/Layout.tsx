import { ReactNode, FunctionComponent } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import styles from "./Layout.module.css"
import Head from "next/head"

interface LayoutProps {
   children: ReactNode
   title?: string
   description?: string
}

function Layout({ children, title = "", description = "default-description" }: LayoutProps): JSX.Element {

   return (

      <>
         {/* <Head>
            <meta name="description" content={description} />
            <title>{title}</title>
         </Head> */}
         <div className={styles.layout_container}>
            <div className={styles.header_container}>
               <Header />
            </div>

            <div className={styles.sidebar_container}>
               <Sidebar />
            </div>

            <div className={styles.main_container}>
               {children}
            </div>

            <div className={styles.footer_container}>
               <Footer />
            </div>
         </div>
      </>
   )
}


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
   return function withLayotComponent(props: T): JSX.Element {
      return (
         <Layout  >
            <Component {...props} />
         </Layout>
      )
   }
}