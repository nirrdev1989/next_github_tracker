import { HTMLAttributes, DetailedHTMLProps, useState, useEffect, KeyboardEvent, useRef, createRef } from "react"
import { SearchIcon } from "../../icons"
import Button from "../util-components/Button/Button"
import Input from "../util-components/Input/Input"
import styles from "./Searching.module.css"
import { useRouter } from "next/router"

interface SearchingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function Searching({ }: SearchingProps): JSX.Element {
   const router = useRouter()
   // const [value, setValue] = useState<string>("")

   function searching(value: string) {
      if (value === router.query.search || value === "") {
         return
      }
      if (router.query?.name !== "" && router.query.search !== "") {
         router.push({
            pathname: `/search/${router.query?.name}`,
            query: {
               search: value,
            }
         })
      }
   }

   function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
      const { value } = event.currentTarget
      if (event.key === "Enter" && value) {
         searching(value)
      }
   }

   // useEffect(() => {
   //    setValue(() => "")
   // }, [router.query?.name])

   return (
      <div className={styles.search_content}>
         <div className={styles.search_input}>
            <small>Press enter or click on the input</small>
            <Input
               type="text"
               onKeyUp={handleKeyDown}
               placeholder="Search..."
            // value={value}
            // onChange={getValue}
            />
            {/* <Button onClick={() => searching()} color="blue">
               {SearchIcon}
            </Button> */}
         </div>
      </div>
   )
}
