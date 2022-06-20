import { ReactNode } from "react"
import styles from "./Title.module.css"

interface TitleProps {
   type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
   children: ReactNode
}


export default function Title({ type, children }: TitleProps): JSX.Element {
   const tiltesOptions = {
      "h1": <h1 className={styles.h1}>{children}</h1>,
      "h2": <h2 className={styles.h2}>{children}</h2>,
      "h3": <h3 className={styles.h3}>{children}</h3>,
      "h4": <h4 className={styles.h4}>{children}</h4>,
      "h5": <h5 >{children}</h5>,
      "h6": <h6 >{children}</h6>,
   }

   return tiltesOptions[type] || <h1 className={styles.h1}>{children}</h1>
   // switch (type) {
   //    case "h1":
   //       return <h1 className={styles.h1}>{children}</h1>
   //    case "h2":
   //       return <h2 className={styles.h2}>{children}</h2>
   //    case "h3":
   //       return <h3 className={styles.h3}>{children}</h3>
   //    case "h4":
   //       return <h4 className={styles.h4}>{children}</h4>
   //    case "h5":
   //       return <h5>{children}</h5>
   //    case "h6":
   //       return <h6>{children}</h6>
   //    default:
   //       return <h1 className={styles.h1}>{children}</h1>
   // }
}
