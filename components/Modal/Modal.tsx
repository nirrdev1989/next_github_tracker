import { ReactNode, useState, useEffect, createContext, Children, PropsWithChildren, useContext } from "react"
import styles from "./Modal.module.css"
import ReactDOM from "react-dom";
import { CloseIcon } from "../../icons";
import Title from "../util-components/Titles/Title";
import { useAnimateEnd } from "../../hooks/useAnimateEnd";

const ModalContext = createContext(null)

interface MenuWrapperProps extends PropsWithChildren<any> {
   show?: boolean
   setShowModal: (show: boolean) => void
}


export function ModalWrapper({ children, setShowModal, show }: MenuWrapperProps): JSX.Element {
   const [isBrowser, setIsBrowser] = useState<boolean>(false);
   const [endStart, setEndStart] = useAnimateEnd(500, setShowModal)


   useEffect(() => {
      setIsBrowser(() => true);
   }, []);

   if (!show) {
      return null
   }

   return (
      <ModalContext.Provider value={{ setEndStart: setEndStart }}>

         {isBrowser ? ReactDOM.createPortal(
            <div className={`overlay`}>
               <div className={`${styles.modal} ${endStart ? styles.modal_out : ""}`}>
                  {Children.map(children, (child, index) => {
                     return <> {child} </>
                  })}
               </div>
            </div>,
            document.getElementById("modal-root")
         ) : null}

      </ModalContext.Provider>
   )

}

interface ModalBodyProps {
   children: ReactNode
}

function ModalBody({ children }: ModalBodyProps): JSX.Element {
   return (
      <div className={styles.model_body}>
         {children}
      </div>
   )
}

interface ModalFooterProps {
   children: ReactNode
}

function ModalFooter({ children }: ModalFooterProps) {
   return (
      <div className={styles.model_footer}>
         {children}
      </div>
   )
}

interface ModalHeaderProps {
   children: ReactNode
   title: string
}

function ModalHeader({ children, title }: ModalHeaderProps): JSX.Element {
   const { setEndStart } = useContext(ModalContext)
   return (
      <div className={styles.model_header}>
         <div className={styles.modal_title}>
            <Title type="h2">{title}</Title>
            {children}
         </div>
         <div className={styles.modal_clode} onClick={() => {
            setEndStart(true)
         }}>{CloseIcon}</div>
      </div>
   )
}

ModalWrapper.Header = ModalHeader
ModalWrapper.Body = ModalBody
ModalWrapper.Footer = ModalFooter

// interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
//    children?: ReactNode
//    show: boolean
//    title?: string
//    setShowModal: (show: boolean) => void
//    footer?: any
// }

// export default function Modal({ show, children, setShowModal, title, footer }: ModalProps) {
//    const [isBrowser, setIsBrowser] = useState<boolean>(false);
//    const [endStart, setEndStart] = useAnimateEnd(500, setShowModal)
//    useEffect(() => {
//       setIsBrowser(() => true);
//    }, []);

//    if (!show) {
//       return null
//    }

//    if (isBrowser) {
//       return ReactDOM.createPortal(
//          <div className={`overlay`}>
//             <div className={`${styles.modal} ${endStart ? styles.modal_out : ""}`}>
//                <div className={styles.model_header}>
//                   <div className={styles.modal_title}>
//                      <Title type="h2">{title}</Title>
//                   </div>
//                   <div className={styles.modal_clode} onClick={() => {
//                      setEndStart(true)
//                   }}>{CloseIcon}</div>
//                </div>
//                <div className={styles.model_body}>
//                   {children}
//                </div>
//                <div className={styles.model_footer}>
//                   {footer}
//                </div>
//             </div>
//          </div>,
//          document.getElementById("modal-root")
//       );
//    } else {
//       return null;
//    }
// }