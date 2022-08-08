import { createContext, MutableRefObject, PropsWithChildren, useContext, useEffect, useState, Children, cloneElement, isValidElement, useRef } from "react"
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { progressBarConfig } from "../../utils/progress-bar";
import NoResults from "../NoResults/NoResults";
import Button from "../util-components/Button/Button";
import styles from "./Paginate.module.css"

interface _PaginateContext {
   data: any
   pageNumber: MutableRefObject<number>
   nextPage: () => void
   prevPage: () => void
   pageLimit?: number
}

interface PaginateWrapperProps extends PropsWithChildren<any> {
   url: string
   initialFetch?: boolean
   fetchFn?: (url: string) => Promise<any>
}

interface ListProps extends PropsWithChildren<any> {
   withSearch?: boolean
   searchProp?: string
}

const progressBar = progressBarConfig()


const PaginateContext = createContext<_PaginateContext | undefined>(undefined)

export function usePaginateContext() {
   return useContext(PaginateContext)
}


export function PaginateWrapper({ url, fetchFn, pageLimit = 30, initialFetch = true, children }: PaginateWrapperProps): JSX.Element {
   const [data, setData] = useState([])
   const isFirstRun = useRef(true);
   const pageNumber = useRef(1);

   function fetchData(finalUrl: string) {
      progressBar.start()

      fetchFn(finalUrl)
         .then((response) => {
            setData(response)
         })
         .catch((error) => {
            console.log(error)
         })
         .finally(() => {
            progressBar.done()
         })
   }

   function nextPage() {
      pageNumber.current++
      fetchData(url + pageNumber.current)
   }

   function prevPage() {
      if (pageNumber.current === 1) return
      pageNumber.current--
      fetchData(url + pageNumber.current)
   }

   useEffect(() => {
      pageNumber.current = 1

      if (initialFetch) {
         fetchData(url + pageNumber.current)
      }
   }, [url])


   return (
      <PaginateContext.Provider value={{ data, pageNumber, nextPage, prevPage, pageLimit }}>
         <div>
            {children}
         </div>
      </PaginateContext.Provider>
   )
}


function PaginateActions({ }): JSX.Element {
   const { nextPage, prevPage, pageNumber, data, pageLimit } = usePaginateContext()

   return (
      data.length === 0 ? null :
         <div className={styles.paginate_actions}>
            <Button disabled={pageNumber.current === 1} color="main_transparent" onClick={prevPage}>
               {LeftArrowIcon}
            </Button>
            <Button disabled={data.length < pageLimit} color="main_transparent" onClick={nextPage}>
               {RightArrowIcon}
            </Button>
            <small>Page-{pageNumber.current} </small>
            {/* &nbsp; Results {data.length} */}
         </div>
   )
}


function List({ withSearch = false, searchProp = "", children }: ListProps): JSX.Element {
   const [searchValue, setSearchValue] = useState<string>("")
   const { data } = usePaginateContext()

   function onSearch(event) {
      const value = event.target.value
      setSearchValue(() => value)
   }


   let filterData = data

   if (searchValue && withSearch) {
      filterData = data.filter((item) => item[searchProp].toLowerCase().includes(searchValue.toLowerCase()))
   }

   if (!data || data.length === 0) return null

   return (
      <>
         <div className={styles.search_paginate_input}>
            {withSearch && <input type="search" placeholder={`Search ${searchProp}...`} onChange={onSearch} />}
         </div>

         {data.length && Children.map(children, (child, index) => {
            if (isValidElement(child)) {
               return cloneElement(child as React.ReactElement<any>, { data: filterData })
            }
         })}
      </>
   )
}


PaginateWrapper.PaginateActions = PaginateActions
PaginateWrapper.List = List