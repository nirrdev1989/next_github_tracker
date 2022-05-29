import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState } from "react"
import { SearchIcon } from "../../icons"
import Button from "../Button/Button"
import Input from "../Input/Input"
import styles from "./Searching.module.css"
import axios from "axios"
import { useRouter } from "next/router"
import P from "../P/P"
// import classNames from "classnames"

interface SearchingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function Searching({ className, ...props }: SearchingProps): JSX.Element {
   const [value, setValue] = useState<string>("")
   const [searchType, setSearchType] = useState("users")
   const router = useRouter()



   function onSearchTypeChange(event) {
      // console.log(event.target.value)
      setSearchType(event.target.value)
   }


   async function searching() {
      console.log(value)
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
   return (
      <>
         <div className={styles.search_options}>
            <P>
               Users
               <Input onChange={onSearchTypeChange} value="users" type="radio" name="searching" defaultChecked={true} />
               Repos
               <Input onChange={onSearchTypeChange} value="repos" type="radio" name="searching" />
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
