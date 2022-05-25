import { ReactNode } from "react"
import styles from "./Title.module.css"

interface TitleProps {
   type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
   children: ReactNode
}

export default function Title({ type, children }: TitleProps): JSX.Element {
   switch (type) {
      case "h1":
         return <h1 className={styles.h1}>{children}</h1>
      case "h2":
         return <h2 className={styles.h2}>{children}</h2>
      case "h3":
         return <h3 className={styles.h3}>{children}</h3>
      case "h4":
         return <h4>{children}</h4>
      case "h5":
         return <h5>{children}</h5>
      case "h6":
         return <h6>{children}</h6>
      default:
         return <h1 className={styles.h1}>{children}</h1>
   }
}
