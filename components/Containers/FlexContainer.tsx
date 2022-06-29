import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"

import styles from "./FlexContainer.module.css"

interface MediaOption {
   value: number;
   type: 'row' | 'column'
}

interface FlexContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   children: ReactNode
   flexDirection?: 'row' | 'column'
   mediaOptions?: MediaOption
   gap?: number
   justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly"
   withMedia?: boolean
   alignItems?: "stretch" | "center" | "start" | "end"
}


export function FlexContainerQuery({
   flexDirection = "row",
   mediaOptions, gap = 1,
   alignItems,
   justifyContent,
   children
}: FlexContainerProps): JSX.Element {
   const matches = useMediaQuery(`(max-width: ${mediaOptions.value}px)`)

   const style = {
      display: 'flex',
      flexDirection: matches ? mediaOptions.type : flexDirection,
      gap: `${gap}rem`,
   }

   if (justifyContent) {
      style["justifyContent"] = justifyContent
   }

   if (alignItems) {
      style["alignItems"] = alignItems
   }

   return (
      <div style={style}>
         {children}
      </div>
   )
}

export function FlexContainer({
   flexDirection = "row",
   gap = 1,
   alignItems,
   justifyContent,
   withMedia =false,
   children
}: FlexContainerProps): JSX.Element {
   const style = {
      display: 'flex',
      flexDirection: flexDirection,
      gap: `${gap}rem`,

   }

   if (justifyContent) {
      style["justifyContent"] = justifyContent
   }

   if (alignItems) {
      style["alignItems"] = alignItems
   }

   return (
      <>
      <div style={style}>
         {children}
      </div>
      </>
   )
}


// export function FlexContainer1({
//    flexDirection = "row",
//    gap = 1,
//    alignItems,
//    justifyContent,
//    mediaOptions,
//    children }: FlexContainerProps): JSX.Element {

//    // @media (max-width: 770px) {
//    //    .repo_header {
//    //       display: flex;
//    //       width: 100%;
//    //       justify-content: flex-start;
//    //       text-align: center;
//    //       align-items: center;
//    //    }

//    // }


//    return (
//       <div className="container">
//          {children}

//          <style jsx>{`
//           .container {
//             display: flex;
//             flex-direction: ${flexDirection};
//             gap: ${gap}rem;
//             align-items: ${alignItems || ""};
//             justify-content:${justifyContent || ""};
//           }

          
//          @media (max-width: ${mediaOptions?.value || 1600}px) {
//          .container {
//             flex-direction: ${mediaOptions?.type || ""};
//          }
//         }
//         `}</style>
//       </div>
//    );
// }
