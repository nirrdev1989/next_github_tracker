import { HTMLAttributes, DetailedHTMLProps } from "react"
import { _GithubUserLikeOwner } from "../../../models/GithubUserLikeOwner"
import MenuActions from "../../MenuActions/MenuActions"
import NoResults from "../../NoResults/NoResults"
import MyImage from "../../util-components/MyImage/MyImage"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import P from "../../util-components/P/P"
import styles from "./UsersSearchList.module.css"


interface UsersSearchListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   data?: _GithubUserLikeOwner[]
}

export default function UsersSearchList({ data: users }: UsersSearchListProps): JSX.Element {
   return (
      <div className={styles.users_list}>
         {users.length > 0 ? users.map((user) => {
            return (
               <UsersSearchListItem key={user.node_id} user={user} />
            )
         }) : <NoResults />}
      </div>
   )
}


interface UsersSearchListItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   user: _GithubUserLikeOwner
}

export function UsersSearchListItem({ user }: UsersSearchListItemProps): JSX.Element {
   return (
      <div className={styles.user_list_item}  >
         <div className={styles.user_list_item_header}>
            <div className={styles.user_list_item_left}>

               <MyImage border="circle" width={65} height={65} src={user.avatar_url} />

               <MyLink style={{ fontSize: "17px" }} to={`/users/${user.login}`}>
                  {user.login}
               </MyLink>
            </div>
            <div>
               <MenuActions name={user.login} fullName={user.login} url={`/users/${user.login}`} type="users" />
            </div>
         </div>


         <div className={styles.user_list_item_content}>
            <P size="small"> Type: {user.type} </P>
         </div>
      </div>
   )
}