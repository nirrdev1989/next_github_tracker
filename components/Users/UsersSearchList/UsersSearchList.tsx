import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import { useAppContext } from "../../../context/app.context"
import { FollowIcon, MinusIcon, PlusGreenIcon } from "../../../icons"
import { _GithubUserLikeOwner } from "../../../models/GithubUserLikeOwner"
import { convertArrayToObject } from "../../../utils/convert"
import Button from "../../util-components/Button/Button"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import styles from "./UsersSearchList.module.css"


interface UsersSearchListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   users: _GithubUserLikeOwner[]
}

export default function UsersSearchList({ users }: UsersSearchListProps): JSX.Element {
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
                        <Button onClick={() => addItemToMenu(user.login, `/users/${user.login}`, "users")}>{PlusGreenIcon}</Button>
                     }
                  </div>
               </div>
            )
         })}
      </div>
   )
}
