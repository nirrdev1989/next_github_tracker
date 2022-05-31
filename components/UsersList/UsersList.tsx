import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import { useAppContext } from "../../context/app.context"
import { FollowIcon, MinusIcon, PlusGreenIcon } from "../../icons"
import { _UserLikeOwner } from "../../models/UserLikeOwner"
import { convertArrayToObject } from "../../utils/convert"
import Button from "../Button/Button"
import P from "../P/P"
import Title from "../Titles/Title"
import styles from "./UsersList.module.css"


interface UsersListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   users: _UserLikeOwner[]
}

export default function UsersList({ users }: UsersListProps): JSX.Element {
   const { menuList, addItemToMenu, removeItemFromMenu } = useAppContext()
   // console.log(menuItems)
   const objectUsers = convertArrayToObject(menuList["users"].items, "name")
   console.log(users[0])
   return (
      <div className={styles.users_list}>
         {users.map((user) => {
            return (
               <div className={styles.user_list_item} key={user.node_id} >
                  <Image width={75} height={75} objectFit="cover" src={user.avatar_url} />

                  <div className={styles.user_list_item_content}>
                     <P size="large">
                        <Link href={`/users/${user.login}`}>
                           <a>{user.login}</a>
                        </Link>
                     </P>

                     {objectUsers[user.login] ?
                        <Button onClick={() => removeItemFromMenu(user.login, "users")}>{MinusIcon}</Button> :
                        <Button onClick={() => addItemToMenu(user.login, "users")}>{PlusGreenIcon}</Button>
                     }
                  </div>
               </div>
            )
         })}
      </div>
   )
}
