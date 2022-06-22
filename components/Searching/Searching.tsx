import { HTMLAttributes, DetailedHTMLProps, useState, useEffect, ChangeEvent } from "react"
import { LeftArrowIcon, RightArrowIcon, SearchIcon } from "../../icons"
import Button from "../util-components/Button/Button"
import Input from "../util-components/Input/Input"
import styles from "./Searching.module.css"
import { useRouter } from "next/router"
import P from "../util-components/P/P"

interface SearchingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Searching({ }: SearchingProps): JSX.Element {
   const [value, setValue] = useState<string>("")
   const [searchType, setSearchType] = useState<string>("")
   const [pageNumber, setPageNumber] = useState<number>(0)
   const router = useRouter()


   function onSearchTypeChange(event: ChangeEvent<any>) {
      setSearchType(event.target.value)
   }

   async function searching() {
      if (pageNumber >= 0 && searchType !== "" && value !== "") {
         if (pageNumber === 0) {
            setPageNumber(1)
         }
         router.push({
            pathname: "/",
            query: {
               search: value,
               type: searchType,
               page: pageNumber === 0 ? 1 : pageNumber
            }
         })
      }
   }

   function handleKeyDown(event) {
      if (event.key === "Enter") {
         searching()
      }
   }

   useEffect(() => {
      setValue("")
      router.push({
         pathname: "/",
         query: {
            research: "true"
         }
      })
   }, [searchType])

   useEffect(() => {
      searching()
   }, [pageNumber])

   return (
      <div className={styles.search_content}>
         <div className={styles.search_options}>
            <P>
               Users
               <Input
                  onChange={onSearchTypeChange}
                  value="users"
                  type="radio"
                  name="searching"
               // defaultChecked={true}
               />
               Repos
               <Input
                  onChange={onSearchTypeChange}
                  value="repos"
                  type="radio"
                  name="searching"
               />
            </P>
         </div>
         <div className={styles.search_input}>
            <Input
               type="search"
               onKeyDown={handleKeyDown}
               placeholder="Search..."
               value={value}
               onChange={(event) => setValue(event.target.value)}
            />
            <Button onClick={() => searching()} color="blue">
               {SearchIcon}
            </Button>
         </div>
         <div className={styles.seacrh_next_botton}>
            <>
               <Button disabled={pageNumber <= 1 || searchType === "" || value === ""} color="main_transparent" onClick={() => {
                  setPageNumber(+router.query?.page - 1)
               }}>
                  {LeftArrowIcon}
               </Button>
               <Button disabled={pageNumber === 0 || searchType === "" || value === ""} color="main_transparent" onClick={() => {
                  setPageNumber(+router.query?.page + 1)
               }}>
                  {RightArrowIcon}
               </Button>

               <small>Page-{pageNumber}</small>
            </>
         </div>
      </div>
   )
}
