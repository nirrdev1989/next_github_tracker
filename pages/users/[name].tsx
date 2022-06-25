import Axios from "../../utils/axios";
import { GetServerSideProps } from 'next'
import Image from "next/image";
import P from "../../components/util-components/P/P";
import Title from "../../components/util-components/Titles/Title";
import UserProfile from "../../components/Users/UserProfile/UserProfile";
import { withLayout } from '../../layout/Layout'
import { _GithubUserProfile } from '../../models/GithubUserProfile'
import styles from "../../styles/User.page.module.css"
import { _GitHubRepo } from "../../models/GithubRepo";
import { EmailIcon, GithubIcon, ListCardIcon, MinusIcon, PlusGreenIcon, TwitterIcon } from "../../icons";
import UserEvents from "../../components/Users/UserEvents/UserEvents";
import { _GitHubEvents } from "../../models/GithubEvents";
import { useAppContext } from "../../context/app.context";
import Button from "../../components/util-components/Button/Button";
import MenuActions from "../../components/MenuActions/MenuActions";



interface UserProfileProps extends Record<string, unknown> {
   userProfile: _GithubUserProfile
   events?: _GitHubEvents[]
}

function UserProfilePage({ userProfile, events }: UserProfileProps): JSX.Element {

   // const objectUsers = convertArrayToObject(menuList["users"].items, "name")
   return (
      <>
         <div className={`page_header ${styles.user_profile_header}`}>
            <div className={styles.user_profile_img}>
               <Image style={{ borderRadius: "50%" }} width={100} height={100} objectFit="cover" src={userProfile.avatar_url} />
            </div>
            <div className={styles.user_profile_info}>
               <div>
                  <Title type="h1">
                     {userProfile.name}
                     <MenuActions name={userProfile.login} type="users" url={`/users/${userProfile.login}`} />
                  </Title>
                  <P style={{ marginBottom: "0.5rem" }} size="small">{userProfile.login}</P>
               </div>
               <div className={styles.user_profile_links}>
                  {userProfile.blog && <span >{ListCardIcon} <a href={userProfile.blog} target="_blank">Blog</a></span>}
                  {userProfile.twitter_username && <span>{TwitterIcon} <a href={`https://twitter.com/${userProfile.twitter_username}`} target="_blank">Twitter</a></span>}
                  {userProfile.email && <span>{EmailIcon} <a href={`mailto:${userProfile.email}`} target="_blank">Email</a></span>}
                  <span>{GithubIcon} <a href={userProfile.html_url} target="_blank">Github</a></span>
               </div>
            </div>
         </div>

         <div className={styles.user_profile_content}>
            <UserProfile userProfile={userProfile} />
            <UserEvents events={events} userProfile={userProfile} eventsUrl={`/users/${userProfile.login}/events`} />
         </div>
      </>
   )
}


export default withLayout(UserProfilePage)



export const getServerSideProps: GetServerSideProps<UserProfileProps> = async (context) => {
   console.log(context.query)

   let userProfileResult = null
   let eventsResult = null

   try {
      const [user, events] = await Promise.all([
         Axios.get(`/users/${context.params.name}`),
         Axios.get(`/users/${context.params.name}/events`)
      ])

      userProfileResult = user.data
      eventsResult = events.data
   } catch (error) {
      console.log(error)
   }

   if (!userProfileResult) {
      return {
         notFound: true,
      }
   }

   return {
      props: {
         userProfile: userProfileResult,
         events: eventsResult,
      }
   }
}
