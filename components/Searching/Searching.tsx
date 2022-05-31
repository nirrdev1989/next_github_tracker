import { HTMLAttributes, DetailedHTMLProps, useState, useEffect, ChangeEvent, HTMLInputTypeAttribute } from "react"
import { SearchIcon } from "../../icons"
import Button from "../Button/Button"
import Input from "../Input/Input"
import styles from "./Searching.module.css"
import { useRouter } from "next/router"
import P from "../P/P"

interface SearchingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   type?: string
}

export default function Searching({ }: SearchingProps): JSX.Element {
   const router = useRouter()
   const [value, setValue] = useState<string>("")
   const [searchType, setSearchType] = useState<string>("")


   function onSearchTypeChange(event: ChangeEvent<any>) {
      setSearchType(event.target.value)
   }

   async function searching() {
      router.push({
         pathname: "/",
         query: {
            search: value,
            type: searchType
         }
      })
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

   return (
      <>
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
            <Button onClick={searching} color="blue">
               {SearchIcon}
            </Button>
         </div>
      </>
   )
}
