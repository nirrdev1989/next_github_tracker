import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import styles from "./Modal.module.css"
import ReactDOM from "react-dom";
import { CloseIcon } from "../../icons";
import Title from "../util-components/Titles/Title";
import { useAnimateEnd } from "../../hooks/useAnimateEnd";



interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children?: ReactNode
   show: boolean
   title?: string
   setShowModl: (show: boolean) => void
   footer?: any
}

export default function Modal({ show, children, setShowModl, title, footer }: ModalProps) {
   const [isBrowser, setIsBrowser] = useState<boolean>(false);
   const [endStart, setEndStart] = useAnimateEnd(500, setShowModl)
   useEffect(() => {
      setIsBrowser(() => true);
   }, []);

   if (!show) {
      return null
   }

   if (isBrowser) {
      return ReactDOM.createPortal(
         <div className={`overlay`}>
            <div className={`${styles.modal} ${endStart ? styles.modal_out : ""}`}>
               <div className={styles.model_header}>
                  <div className={styles.modal_title}>
                     <Title type="h2">{title}</Title>
                  </div>
                  <div className={styles.modal_clode} onClick={() => {
                     setEndStart(true)
                  }}>{CloseIcon}</div>
               </div>
               <div className={styles.model_body}>
                  {children}
               </div>
               <div className={styles.model_footer}>
                  {footer}
               </div>
            </div>
         </div>,
         document.getElementById("modal-root")
      );
   } else {
      return null;
   }
}
