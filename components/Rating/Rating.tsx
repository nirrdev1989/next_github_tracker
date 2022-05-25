import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import styles from "./Rating.module.css"


interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   // children: ReactNode
   isEdit?: boolean
   rating: number
   setRating?: (ratingCount: number) => void
}

export default function Rating({ setRating, rating, isEdit = false, ...props }: RatingProps) {
   const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))


   useEffect(() => {
      consctructRating(rating)
   }, [rating])

   function consctructRating(currentRating: number) {
      const updatedArray = ratingArray.map((ratingEle, index) => {
         return (
            <span
               onClick={() => chooseRating(index + 1)}
               onMouseEnter={() => ratingChange(index + 1)}
               onMouseLeave={() => ratingChange(rating)}
               className={`${styles.star} ${index < currentRating ? styles.fill : ""}`}>
               &#9733;
            </span>
         )
      })

      setRatingArray(updatedArray)
   }

   function chooseRating(ratingIndex: number) {
      if (!isEdit || !setRating) return

      setRating(ratingIndex)
   }

   function ratingChange(ratingIndex: number) {
      if (!isEdit) return

      consctructRating(ratingIndex)
   }
   return (
      <div {...props}>
         {ratingArray.map((ratingEle, index) => {
            return <span key={index}> {ratingEle} </span>
         })}
      </div>
   )
}
