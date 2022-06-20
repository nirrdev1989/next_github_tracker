import { CodeIcon, DateIcon, EmailIcon, FollowIcon, GithubIcon, InfoIcon, LeftArrowIcon, ListCardIcon, LocationIcon, PullRequestIcon, RightArrowIcon, StarIcon, TwitterIcon, WorkIcon } from "../../../icons"
import { _GithubUserProfile } from "../../../models/GithubUserProfile"
import { localDate, timeDifference } from "../../../utils/date"
import Badge from "../../util-components/Badge/Badge"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import styles from "./UserProfile.module.css"
import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import Modal from "../../Modal/Modal"
import { gists } from "../../../fake-db/gists"
import { _GithubGist } from "../../../models/GithubGists"
import GistsList from "../../Gists/GistsList"
import { allrepose } from "../../Repos/UserRepos/fake-data"
import ReposSearchList from "../../Repos/ReposSearchList/ReposSearchList"
import { _GitHubRepo } from "../../../models/GithubRepo"
import { getData } from "../../../utils/fetcher"
import { progressBarConfig } from "../../../utils/progress-bar"
import { useAnimateEnd } from "../../../hooks/useAnimateEnd"
import Button from "../../util-components/Button/Button"

let userProfile: _GithubUserProfile = {
   login: 'mschwarzmueller',
   id: 16095164,
   node_id: 'MDQ6VXNlcjE2MDk1MTY0',
   avatar_url: 'https://avatars.githubusercontent.com/u/16095164?v=4',
   gravatar_id: '',
   url: 'https://api.github.com/users/mschwarzmueller',
   html_url: 'https://github.com/mschwarzmueller',
   followers_url: 'https://api.github.com/users/mschwarzmueller/followers',
   following_url: 'https://api.github.com/users/mschwarzmueller/following{/other_user}',
   gists_url: 'https://api.github.com/users/mschwarzmueller/gists{/gist_id}',
   starred_url: 'https://api.github.com/users/mschwarzmueller/starred{/owner}{/repo}',
   subscriptions_url: 'https://api.github.com/users/mschwarzmueller/subscriptions',
   organizations_url: 'https://api.github.com/users/mschwarzmueller/orgs',
   repos_url: 'https://api.github.com/users/mschwarzmueller/repos',
   events_url: 'https://api.github.com/users/mschwarzmueller/events{/privacy}',
   received_events_url: 'https://api.github.com/users/mschwarzmueller/received_events',
   type: 'User',
   site_admin: false,
   name: 'Maximilian ',
   company: null,
   blog: '',
   location: null,
   email: null,
   hireable: null,
   bio: null,
   twitter_username: null,
   public_repos: 43,
   public_gists: 0,
   followers: 5452,
   following: 0,
   created_at: '2015-12-01T06:11:29Z',
   updated_at: '2022-03-16T06:23:35Z'
}

// https://api.github.com/users/nirkaufman/gists
interface UserProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   userProfile: _GithubUserProfile
}

const progressBar = progressBarConfig()

const getDataOptions = {
   gists: {
      title: "Gists",
      name: "gists"
   }
}

export default function UserProfile({ userProfile }: UserProfileProps): JSX.Element {
   const [showModal, setShowModl] = useState(false)
   const [data, setData] = useState<any[]>([])
   const [dataType, setDataType] = useState<string>("")

   // const [loading, setLoading] = useState<boolean>(false)


   function switchDataType(type: string) {
      if (type === dataType) {
         setShowModl(() => true)
         return
      }
      setDataType(() => type)
   }

   useEffect(() => {
      if (dataType !== "") {
         progressBar.start()
         getData(`/users/${userProfile.login}/${dataType.toLowerCase()}`, (error, data: _GithubGist[] | _GitHubRepo[]) => {
            setShowModl(() => true)
            setData(() => data)
            progressBar.done()
         })
      }
   }, [dataType])

   return (
      <div className={`${styles.user_profile}`}>
         <Modal show={showModal} setShowModl={setShowModl} title={dataType} footer={
            <>
               <Button color="main_transparent" onClick={() => {
                  // setPageNumber(+router.query?.page - 1)
               }}>
                  {LeftArrowIcon}
               </Button>
               <Button color="main_transparent" onClick={() => {
                  // setPageNumber(+router.query?.page + 1)
               }}>
                  {RightArrowIcon}
               </Button>

               <small>Page-{1}</small>
            </>
         }>
            {dataType === "Gists" && <GistsList gists={data} />}
            {dataType === "Repos" && <ReposSearchList repos={data} />}
         </Modal>

         <div className={styles.user_profile_stats}>
            <P size="small">
               {FollowIcon} Followers:
               <Badge color={userProfile.followers > 0 ? "green" : "red"}>{userProfile.followers}</Badge>
            </P>
            <P size="small">
               {PullRequestIcon} <span className={styles.user_profile_stats_action} onClick={() => switchDataType("Repos")}> Public repos:</span>
               <Badge color={userProfile.public_repos > 0 ? "green" : "red"}>{userProfile.public_repos}</Badge>
            </P>
            <P size="small">
               {CodeIcon} <span className={styles.user_profile_stats_action} onClick={() => switchDataType("Gists")} >Public gists:</span>
               <Badge color={userProfile.public_gists > 0 ? "green" : "red"}>{userProfile.public_gists}</Badge>
            </P>
         </div>
         <div className={styles.user_profile_info}>
            <P size="x_small">{DateIcon} Created: {new Date(userProfile.created_at).toLocaleDateString()}</P>
            <P size="x_small">{LocationIcon} Location: {userProfile.location || "not fiiled"}</P>
            <P size="x_small">{WorkIcon} Company: {userProfile.company || "not fiiled"}</P>
            <P
               style={{ maxHeight: "60px", overflowX: "hidden", marginTop: "var(--size-0-5-rem)" }}
               size="x_small">
               {userProfile.bio || "not fiiled"}
            </P>
         </div>
      </div>
   )
}
