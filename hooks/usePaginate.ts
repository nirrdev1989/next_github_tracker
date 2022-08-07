import { useRouter } from "next/router";
import { useEffect, useRef, useState, MutableRefObject } from "react";
import Axios from "../utils/axios";
import { progressBarConfig } from "../utils/progress-bar";

interface _InitialStateUsePaginate {
   startPage?: number
}

interface _Paginate<T> {
   prevPage: (url: string) => void
   nextPage: (url: string) => void
   data: T
   fetchData: (url: string) => void
   pageNumber: MutableRefObject<number>
}

const progressBar = progressBarConfig()

export function usePaginate({ startPage = 1 }: _InitialStateUsePaginate): _Paginate<any> {
   const [data, setData] = useState([])
   const pageNumber = useRef(startPage)
   // const fetchDataOnInitial = useRef(initialFetch);


   function fetchData(finalUrl: string) {
      progressBar.start()
      Axios.get(finalUrl)
         .then((response) => {
            // console.log(response);
            setData(response.data)
         })
         .catch((error) => {
            console.log(error)
         })
         .finally(() => {
            progressBar.done()
         })
   }

   function nextPage(url: string) {
      pageNumber.current++
      fetchData(url + pageNumber.current)
   }

   function prevPage(url: string) {
      if (pageNumber.current === 1) return
      pageNumber.current--
      fetchData(url + pageNumber.current)
   }

   useEffect(() => {
      console.log("url effect called")
      pageNumber.current = 1
   }, [])



   return { prevPage, nextPage, data, fetchData, pageNumber }
}