import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData } from "../utils/fetcher";

interface _InitialStateUseusePaginate {
   pageCount: number;
   range?: number;
   url?: string;
   newSearch?: boolean;
   initialData?: any;
   dataType?: string;
}

export function usePaginate({ pageCount, dataType, range, url, newSearch, initialData }: _InitialStateUseusePaginate) {
   const [pageNumber, setPageNumber] = useState<number>(pageCount)
   const [data, setData] = useState<any>(initialData)
   const [isNewSearch, setIsNewSearch] = useState<boolean>(newSearch)
   const router = useRouter()

   useEffect(() => {
      const searchValue = router.query?.search
      const name = router.query?.name

      let url = ""
      if (searchValue !== undefined && name !== undefined) {
         console.log("SERCHING")
         if (name === "users") {
            url = `/search/users?q=${searchValue}&page=${pageNumber}`
         } else if (name === "repos") {
            url = `/search/repositories?q=${searchValue}&page=${pageNumber}`
         }

         getData(url, (error, data: any) => {
            setIsNewSearch(() => false)
            setData(data)
         })
      }
   }, [router.query.search, pageNumber])


   useEffect(() => {
      setData(initialData)
      setPageNumber(() => 1)
      setIsNewSearch(() => true)
   }, [dataType])


   return { data, setPageNumber, pageNumber, isNewSearch, router }

}