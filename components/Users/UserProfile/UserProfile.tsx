import { CodeIcon, DateIcon, FollowIcon, LeftArrowIcon, LocationIcon, PullRequestIcon, RightArrowIcon, WorkIcon } from "../../../icons"
import { _GithubUserProfile } from "../../../models/GithubUserProfile"
import Badge from "../../util-components/Badge/Badge"
import P from "../../util-components/P/P"
import styles from "./UserProfile.module.css"
import { HTMLAttributes, DetailedHTMLProps, useState, useEffect } from "react"
import { MoadlWrapper } from "../../Modal/Modal"
import { _GithubGist } from "../../../models/GithubGists"
import GistsList from "../../Gists/GistsList"
import ReposSearchList from "../../Repos/ReposSearchList/ReposSearchList"
import { _GitHubRepo } from "../../../models/GithubRepo"
import { getData } from "../../../utils/fetcher"
import Button from "../../util-components/Button/Button"
import UsersSearchList from "../UsersSearchList/UsersSearchList"
import { _GithubUserLikeOwner } from "../../../models/GithubUserLikeOwner"



interface UserProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   userProfile: _GithubUserProfile
}


export default function UserProfile({ userProfile }: UserProfileProps): JSX.Element {
   const [showModal, setShowModl] = useState(false)
   const [data, setData] = useState<any[]>([])
   const [dataType, setDataType] = useState<string>("")
   const [pageNumber, setPageNumber] = useState<number>(1)

   function switchDataType(type: string) {
      if (type === dataType) {
         setShowModl(() => true)
         return
      }
      setPageNumber(() => 1)
      setDataType(() => type)
   }

   useEffect(() => {
      if (dataType !== "") {
         getData(
            `/users/${userProfile.login}/${dataType.toLowerCase()}?page=${pageNumber}`,
            (error, data: _GithubGist[] | _GitHubRepo[] | _GithubUserLikeOwner[]) => {
               setShowModl(() => true)
               setData(() => data)
            })
      }
   }, [dataType, pageNumber])

   useEffect(() => {
      setDataType(() => "")
      setPageNumber(() => 1)
   }, [userProfile.login])

   return (
      <div className={`${styles.user_profile}`}>

         <MoadlWrapper show={showModal} setShowModl={setShowModl} >
            <MoadlWrapper.Header title={`${dataType}`} >
               <P size="x_small">{userProfile.name}</P>
            </MoadlWrapper.Header>
            <MoadlWrapper.Body>
               {dataType === "Gists" && <GistsList gists={data} />}
               {dataType === "Repos" && <ReposSearchList repos={data} />}
               {dataType === "Followers" && <UsersSearchList users={data} />}
            </MoadlWrapper.Body>
            <MoadlWrapper.Footer>
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
            </MoadlWrapper.Footer>
         </MoadlWrapper>
         <div className={styles.user_profile_stats}>
            <div>
               {FollowIcon}
               <Button
                  color="main_transparent"
                  disabled={userProfile.followers <= 0}
                  onClick={() => switchDataType("Followers")}
               >
                  Followers
               </Button>
               <Badge color={userProfile.followers > 0 ? "green" : "red"}>{userProfile.followers}</Badge>
            </div>

            <div>
               {PullRequestIcon}
               <Button
                  color="main_transparent"
                  disabled={userProfile.public_repos <= 0}
                  onClick={() => switchDataType("Repos")}
               >
                  Public repos
               </Button>
               <Badge color={userProfile.public_repos > 0 ? "green" : "red"}>{userProfile.public_repos}</Badge>
            </div>
            <div>
               {CodeIcon}
               <Button
                  color="main_transparent"
                  disabled={userProfile.public_gists <= 0}
                  onClick={() => switchDataType("Gists")}
               >
                  Public gists
               </Button>
               <Badge color={userProfile.public_gists > 0 ? "green" : "red"}>{userProfile.public_gists}</Badge>
            </div>
         </div>
         <div className={styles.user_profile_info}>
            <P size="x_small">{DateIcon} Created: {new Date(userProfile.created_at).toLocaleDateString()}</P>
            <P size="x_small">{LocationIcon} Location: {userProfile.location || "not fiiled"}</P>
            <P size="x_small">{WorkIcon} Company: {userProfile.company || "not fiiled"}</P>
            {userProfile.bio && <P
               style={{ maxHeight: "60px", overflowX: "hidden", marginTop: "var(--size-0-5-rem)" }}
               size="x_small">
               {userProfile.bio || ""}
            </P>}
         </div>
      </div>
   )
}
