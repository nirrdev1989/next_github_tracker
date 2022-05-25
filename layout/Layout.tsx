import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect, FunctionComponent } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import styles from "./Layout.module.css"


interface LayoutProps {
   children: ReactNode
}


export default function Layout({ children }: LayoutProps) {
   return (
      <div className={styles.layout_container}>
         <div className={styles.header_container}>
            <Header />
         </div>
         <div className={styles.sidebar_container}>
            <Sidebar />
         </div>

         <div className={styles.main_container} >
            {children}
         </div>

         <div className={styles.footer_container}>
            <Footer />
         </div>
      </div>
   )
}


// const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
//    return function withLayotComponent(props: T): JSX.Element {
//       return (
//          <Layout>
//             <Component {...props} />
//          </Layout>
//       )
//    }
// }