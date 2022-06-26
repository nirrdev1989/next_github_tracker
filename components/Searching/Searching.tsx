import { HTMLAttributes, DetailedHTMLProps, useState, useEffect, ChangeEvent } from "react"
import { LeftArrowIcon, RightArrowIcon, SearchIcon } from "../../icons"
import Button from "../util-components/Button/Button"
import Input from "../util-components/Input/Input"
import styles from "./Searching.module.css"
import { useRouter } from "next/router"

interface SearchingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export default function Searching({ }: SearchingProps): JSX.Element {
   const router = useRouter()
   const [value, setValue] = useState<string>("")

   function searching() {
      if (value === router.query.search || value === "") {
         return
      }
      console.log(value)
      if (router.query?.name !== "" && router.query.search !== "") {
         router.push({
            pathname: `/search/${router.query?.name}`,
            query: {
               search: value,
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
      setValue(() => "")
   }, [router.query?.name])

   return (
      <div className={styles.search_content}>
         <div className={styles.search_input}>
            <Input
               type="text"
               onKeyDown={handleKeyDown}
               placeholder="Search..."
               value={value}
               onChange={(event) => setValue(event.target.value)}
            />
            <Button onClick={() => searching()} color="blue">
               {SearchIcon}
            </Button>
         </div>
      </div>
   )
}
