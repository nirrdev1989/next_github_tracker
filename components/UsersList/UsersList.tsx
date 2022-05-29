import Image from "next/image"
import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import { _UserLikeOwner } from "../../models/UserLikeOwner"
import P from "../P/P"
import Title from "../Titles/Title"
import styles from "./UsersList.module.css"


interface UsersListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   users: _UserLikeOwner[]
}

export default function UsersList({ users }: UsersListProps): JSX.Element {
   return (
      <div className={styles.users_list}>
         {users.map((user) => {
            return (
               <div className={styles.user_list_item}>
                  <Image width={75} height={75} objectFit="cover" src={user.avatar_url} />
                  <P size="medium">
                     {user.login}
                  </P>
               </div>
            )
         })}
      </div>
   )
}
