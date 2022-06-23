import Image from "next/image"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { useAppContext } from "../../../context/app.context"
import { MinusIcon, PlusGreenIcon } from "../../../icons"
import { _GithubUserLikeOwner } from "../../../models/GithubUserLikeOwner"
import { convertArrayToObject } from "../../../utils/convert"
import Button from "../../util-components/Button/Button"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import P from "../../util-components/P/P"
import styles from "./UsersSearchList.module.css"


interface UsersSearchListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   users: _GithubUserLikeOwner[]
}

export default function UsersSearchList({ users }: UsersSearchListProps): JSX.Element {
   const { menuList, addItemToMenu, removeItemFromMenu } = useAppContext()

   const objectUsers = convertArrayToObject(menuList["users"].items, "name")

   return (
      <div className={styles.users_list}>
         {users.length > 0 && users.map((user) => {
            return (
               <div className={styles.user_list_item} key={user.node_id} >
                  <div className={styles.user_list_item_header}>
                     <div className={styles.user_list_item_left}>
                        <Image style={{ borderRadius: "50%" }} width={65} height={65} objectFit="cover" src={user.avatar_url} />
                        <MyLink style={{ fontSize: "17px" }} to={`/users/${user.login}`}>
                           {user.login}
                        </MyLink>
                        {/* <span>Type: {user.type}</span> */}
                     </div>
                     <div>
                        {objectUsers[user.login] ?
                           <Button onClick={() => removeItemFromMenu(user.login, "users")}>{MinusIcon}</Button> :
                           <Button onClick={() => addItemToMenu(user.login, `/users/${user.login}`, "users")}>{PlusGreenIcon}</Button>
                        }
                     </div>
                  </div>


                  <div className={styles.user_list_item_content}>
                     <P size="small"> Type: {user.type} </P>
                  </div>
               </div>
            )
         })}
      </div>
   )
}
