import { HTMLAttributes, DetailedHTMLProps } from "react"
import { useAppContext } from "../../context/app.context"
import { MinusIcon, PlusGreenIcon } from "../../icons"
import Button from "../util-components/Button/Button"

import styles from "./MenuActions.module.css"

interface MenuActionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isAdd?: boolean
   name: string
   type: string
   url: string
   fullName: string
}

export default function MenuActions({ name, fullName, type, url }: MenuActionsProps) {
   const { menuList, addItemToMenu, removeItemFromMenu } = useAppContext()

   return (
      <>
         {menuList[type].items.find((item) => item.link === url) ?
            <Button style={{ fontSize: "22px", paddingBottom: 0 }} color="main_transparent" onClick={() => removeItemFromMenu(name, type)}>{MinusIcon}</Button> :
            <Button style={{ fontSize: "22px", paddingBottom: 0 }} color="main_transparent" onClick={() => addItemToMenu(name, fullName, url, type)}>{PlusGreenIcon}</Button>
         }
      </>
   )
}
