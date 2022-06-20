import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPathsResult, GetServerSideProps } from 'next'
import Image from "next/image";
import { ParsedUrlQuery } from 'querystring'
import P from "../../components/util-components/P/P";
// import UserRepos from "../../components/Repos/UserRepos/UserRepos";
import Title from "../../components/util-components/Titles/Title";
import UserProfile from "../../components/Users/UserProfile/UserProfile";
import { events, users } from "../../fake-db/users";
import { withLayout } from '../../layout/Layout'
import { _GithubUserProfile } from '../../models/UserProfile'
import styles from "../../styles/User.page.module.css"
import { _GitHubRepo } from "../../models/GithubRepo";
import List from "../../components/List/List";
import { EmailIcon, GithubIcon, ListCardIcon, TwitterIcon } from "../../icons";
import UserEvents from "../../components/UserEvents/UserEvents";
import { _GitHubEvents } from "../../models/GithubEvents";
import UserRepos from "../../components/Repos/UserRepos/UserRepos";
interface UserProfileProps extends Record<string, unknown> {
   userProfile: _GithubUserProfile
   userRepos?: _GitHubRepo
   events?: _GitHubEvents[]
   // userReps: _Gi
}
let userProfile: _GithubUserProfile = {

   login: 'nirkaufman',
   id: 2496253,
   node_id: 'MDQ6VXNlcjI0OTYyNTM=',
   avatar_url: 'https://avatars.githubusercontent.com/u/2496253?v=4',
   gravatar_id: '',
   url: 'https://api.github.com/users/nirkaufman',
   html_url: 'https://github.com/nirkaufman',
   followers_url: 'https://api.github.com/users/nirkaufman/followers',
   following_url: 'https://api.github.com/users/nirkaufman/following{/other_user}',
   gists_url: 'https://api.github.com/users/nirkaufman/gists{/gist_id}',
   starred_url: 'https://api.github.com/users/nirkaufman/starred{/owner}{/repo}',
   subscriptions_url: 'https://api.github.com/users/nirkaufman/subscriptions',
   organizations_url: 'https://api.github.com/users/nirkaufman/orgs',
   repos_url: 'https://api.github.com/users/nirkaufman/repos',
   events_url: 'https://api.github.com/users/nirkaufman/events{/privacy}',
   received_events_url: 'https://api.github.com/users/nirkaufman/received_events',
   type: 'User',
   site_admin: false,
   name: 'Nir Kaufman',
   company: '@Next-Insurance ',
   blog: '',
   location: null,
   email: null,
   hireable: null,
   bio: 'Google Developer Expert in Angular, active worldwide public speaker and trainer, tech community activist (AngularIL, AngularNYC, ReactNYC)',
   twitter_username: 'nirkaufman',
   public_repos: 93,
   public_gists: 23,
   followers: 824,
   following: 2,
   created_at: '2012-10-05T19:28:07Z',
   updated_at: '2022-05-07T19:48:11Z'

}
function UserProfilePage({ }: UserProfileProps): JSX.Element {
   // console.log(userProfile)
   return (
      <>
         <div className={`page_header ${styles.user_profile_header}`}>
            <div className={styles.user_profile_img}>
               <Image width={100} height={100} objectFit="cover" src={userProfile.avatar_url} />
            </div>
            <div className={styles.user_profile_info}>
               <div>
                  <Title type="h1">{userProfile.name}</Title>
                  <P style={{ marginBottom: "0.5rem" }} size="small">{userProfile.login}</P>
               </div>
               <div className={styles.user_profile_links}>
                  {userProfile.blog && <P size="small">{ListCardIcon} <a href={userProfile.blog} target="_blank">Blog</a></P>}
                  {userProfile.twitter_username && <P size="small">{TwitterIcon} <a href={userProfile.twitter_username} target="_blank">Twitter</a></P>}
                  {userProfile.email && <P size="small">{EmailIcon} <a href={userProfile.email} target="_blank">Email</a></P>}
                  <P size="small">{GithubIcon} <a href={userProfile.html_url} target="_blank">Github</a></P>
               </div>
            </div>
         </div>

         <div className={styles.user_profile_content}>
            <UserProfile userProfile={userProfile} />
            <UserEvents events={events} />
            {/* <UserRepos /> */}
         </div>
      </>
   )
}


export default withLayout(UserProfilePage)



export const getServerSideProps: GetServerSideProps<UserProfileProps> = async (context) => {
   // const { data } = await axios.get('https://api.github.com/users/' + context.params.name)
   // const events = await axios.get(`https://api.github.com/users/${context.params.name}/events`)
   // if (!data) {
   //    return {
   //      notFound: true,
   //    };
   //  }
   return {

      props: {

         userProfile: {} as _GithubUserProfile,
         // userRepos: {} as _GitHubRepo,
         // userEvents: {} as _GitHubEvents[],
         // userEvents: [],
         events: []

         // userProfile: data
      }
   }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//    const paths = users.map((user) => `/users/${user.userName}`)
//    console.log(paths)
//    return {
//       paths: paths,
//       fallback: true
//    }
// }


// export const getStaticProps: GetStaticProps<UserProfileProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
//    // console.log(params)
//    const { data } = await axios.get('https://api.github.com/users/' + params.userName)
//    // const { data } = await axios.get(`https://api.github.com/users/${params.userName}/repos`)
//    // console.log(data.length)
//    if (!params.userName) {
//       return {
//          notFound: true
//       }
//    }
//    return {
//       props: {
//          // userProfile: {} as _GithubUserProfile,
//          userRepos: {} as _GitHubRepo,


//          userProfile: data
//       }
//    }
// }