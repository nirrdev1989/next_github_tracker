import { CodeIcon, DateIcon, EmailIcon, FollowIcon, GithubIcon, InfoIcon, LeftArrowIcon, ListCardIcon, LocationIcon, PullRequestIcon, RepoIcon, RightArrowIcon, TwitterIcon, WorkIcon } from "../../../icons"
import { _GithubUserProfile } from "../../../models/GithubUserProfile"
import Badge from "../../util-components/Badge/Badge"
import P from "../../util-components/P/P"
import styles from "./UserProfile.module.css"
import { HTMLAttributes, DetailedHTMLProps, useState, useEffect } from "react"
import { ModalWrapper } from "../../Modal/Modal"
import { _GithubGist } from "../../../models/GithubGists"
import GistsList from "../../Gists/GistsList"
import ReposSearchList from "../../Repos/ReposSearchList/ReposSearchList"
import { _GitHubRepo } from "../../../models/GithubRepo"
import { getData } from "../../../utils/fetcher"
import Button from "../../util-components/Button/Button"
import UsersSearchList from "../UsersSearchList/UsersSearchList"
import { _GithubUserLikeOwner } from "../../../models/GithubUserLikeOwner"
import { useRouter } from "next/router"
import MyImage from "../../util-components/MyImage/MyImage"
import Title from "../../util-components/Titles/Title"
import Atag from "../../util-components/Atag/Atag"
import MenuActions from "../../MenuActions/MenuActions"



interface UserProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   userProfile: _GithubUserProfile
}


export default function UserProfile({ userProfile }: UserProfileProps): JSX.Element {
   // const [showModal, setShowModal] = useState(false)
   // const [data, setData] = useState<any[]>([])
   // const [dataType, setDataType] = useState<string>("")
   // const [pageNumber, setPageNumber] = useState<number>(1)
   // const router = useRouter()


   // function switchDataType(type: string) {

   //    // router.push({
   //    //    pathname: `/users/${userProfile.login}`,
   //    //    query: {
   //    //       type: type
   //    //    }
   //    // })
   //    if (type === dataType) {
   //       setShowModal(() => true)
   //       return
   //    }
   //    setPageNumber(() => 1)
   //    setDataType(() => type)
   // }

   // useEffect(() => {
   //    if (dataType !== "") {
   //       getData(
   //          `/users/${userProfile.login}/${dataType.toLowerCase()}?page=${pageNumber}`,
   //          (error, data: _GithubGist[] | _GitHubRepo[] | _GithubUserLikeOwner[]) => {
   //             setShowModal(() => true)
   //             setData(() => data)
   //          })
   //    }
   // }, [dataType, pageNumber])

   // useEffect(() => {
   //    setDataType(() => "")
   //    setPageNumber(() => 1)
   // }, [userProfile.login])

   // console.log("render")

   return (
      <div className={`${styles.user_profile}`}>

         {/* <ModalWrapper show={showModal} setShowModal={setShowModal} >
            <ModalWrapper.Header title={`${dataType}`} >
               <P size="x_small">{userProfile.name}</P>
            </ModalWrapper.Header>
            <ModalWrapper.Body>
               {dataType === "Gists" && <GistsList gists={data} />}
               {dataType === "Repos" && <ReposSearchList repos={data} />}
               {dataType === "Followers" && <UsersSearchList users={data} />}
            </ModalWrapper.Body>
            <ModalWrapper.Footer>
               <>
                  <Button disabled={pageNumber <= 1} color="main_transparent" onClick={() => {
                     setPageNumber((prev) => prev - 1)
                  }}>
                     {LeftArrowIcon}
                  </Button>
                  <Button disabled={data.length < 30} color="main_transparent" onClick={() => {
                     setPageNumber((prev) => prev + 1)
                  }}>
                     {RightArrowIcon}
                  </Button>

                  <small>Page-{pageNumber}</small>
               </>
            </ModalWrapper.Footer>
         </ModalWrapper> */}

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
