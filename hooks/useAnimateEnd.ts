import { useEffect, useState } from "react"

export function useAnimateEnd(time: number, handler: Function): [boolean, Function] {
   const [endStart, setEndStart] = useState<boolean>(false)

   useEffect(() => {
      if (endStart) {
         setTimeout(() => {
            setEndStart(() => false)
            handler(() => false)
         }, time);
      }
   }, [endStart])

   return [endStart, setEndStart]
}