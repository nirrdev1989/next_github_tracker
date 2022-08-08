import { DateIcon, EmailIcon, GithubIcon, InfoIcon, ListCardIcon, LocationIcon, TwitterIcon, WorkIcon } from "../../../icons"
import { _GithubUserProfile } from "../../../models/GithubUserProfile"
import styles from "./UserProfile.module.css"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { _GithubGist } from "../../../models/GithubGists"
import { _GitHubRepo } from "../../../models/GithubRepo"
import { _GithubUserLikeOwner } from "../../../models/GithubUserLikeOwner"
import MyImage from "../../util-components/MyImage/MyImage"
import Title from "../../util-components/Titles/Title"
import Atag from "../../util-components/Atag/Atag"
import MenuActions from "../../MenuActions/MenuActions"



interface UserProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   userProfile: _GithubUserProfile
}


export default function UserProfile({ userProfile }: UserProfileProps): JSX.Element {

   return (
      <div className={`${styles.user_profile}`}>
         <div className={`page_header ${styles.user_profile_header}`}>
            <div className={styles.user_profile_img}>
               <MyImage border="circle" width={100} height={100} src={userProfile.avatar_url} />
            </div>
            <div className={styles.user_profile_info}>
               <div className={styles.user_profile_info_header}>
                  <Title type="h1">
                     {userProfile.name || userProfile.login}
                  </Title>
                  <Title type="h2">{userProfile.login}</Title>
               </div>
               <div className={styles.user_profile_info_links}>
                  {userProfile.blog && <span >{ListCardIcon} <Atag href={userProfile.blog} >Blog</Atag></span>}
                  {userProfile.twitter_username && <span>{TwitterIcon} <Atag href={`https://twitter.com/${userProfile.twitter_username}`} >Twitter</Atag></span>}
                  {userProfile.email && <span>{EmailIcon} <Atag href={`mailto:${userProfile.email}`} >Email</Atag></span>}
                  <span>{GithubIcon} <Atag href={userProfile.html_url} >Github</Atag></span>
                  <MenuActions fullName={userProfile.login} name={userProfile.login} type="users" url={`/users/${userProfile.login}`} />
               </div>
            </div>
         </div>

         <div className={styles.user_profile_info}>
            <span>{DateIcon} Created: {new Date(userProfile.created_at).toLocaleDateString()}</span>
            {userProfile.location && <span>{LocationIcon} Location: {userProfile.location}</span>}
            {userProfile.company && <span>{WorkIcon} Company: {userProfile.company}</span>}
         </div>
         <div>
            {userProfile.bio && <span>{InfoIcon} {userProfile.bio}</span>}
         </div>
      </div>
   )
}
