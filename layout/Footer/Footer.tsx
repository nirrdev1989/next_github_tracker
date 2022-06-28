
import { HTMLAttributes, DetailedHTMLProps } from "react"
import Atag from "../../components/util-components/Atag/Atag"
import { GithubIcon2, LinkedinIcon } from "../../icons"
import styles from "./Footer.module.css"

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Footer({ }: FooterProps): JSX.Element {
   return (
      <footer className={styles.footer}>
         <div className={styles.footer_links_content}>
            Next.js @2022 Nir Yakobov
         </div>

         <div className={styles.footer_links}>
            <Atag href="https://github.com/nirrdev1989/next_github_tracker">
               {GithubIcon2}
            </Atag>
            <Atag href="https://www.linkedin.com/in/nir-yakobov-82ab4b1b4/">
               {LinkedinIcon}
            </Atag>
         </div>
      </footer>
   )
}
