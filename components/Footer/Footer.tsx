
import { HTMLAttributes, DetailedHTMLProps } from "react"
import styles from "./Footer.module.css"

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Footer({ }: FooterProps) {
   return (
      <footer className={styles.footer}>
         <div>
            Next js @2022 Nir Yakobov
         </div>

         <a href="">Go some where</a>
         <a href="">Go somewhere</a>
      </footer>
   )
}
