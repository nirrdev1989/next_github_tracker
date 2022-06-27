import { HTMLAttributes, DetailedHTMLProps, useState } from "react"
import styles from "./ReadMore.module.css"


interface ReadMoreProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   text: string
   lengthLimit: number
}

export default function ReadMore({ text, lengthLimit }: ReadMoreProps): JSX.Element {
   const [open, setOpen] = useState<boolean>(false)


   function toggleText() {
      setOpen((prev) => !prev)
   }

   let limitText = text

   if (!open) {
      limitText = limitText?.slice(0, lengthLimit)
   }

   if (!text) {
      return null
   }
   return (
      <div className={`${open ? styles.open : ""}`}>
         <div className={`${styles.read_more_text} `}> {limitText}</div>
         {text.length > lengthLimit && <div className={styles.read_more_btn} onClick={toggleText} >{open ? "Read less" : "Read more"}</div>}
      </div>
   )
}
