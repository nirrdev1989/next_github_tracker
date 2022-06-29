import { HTMLAttributes, DetailedHTMLProps, useState, useEffect } from "react"
import { DateIcon, languageIcons, StarIcon, FollowIcon, ForkIcon, IssueIcon, LeftArrowIcon, RightArrowIcon } from "../../../icons"
import { _GitHubEvents } from "../../../models/GithubEvents"
import { _GitHubRepo, _GithubRepoIssue } from "../../../models/GithubRepo"
import Badge from "../../util-components/Badge/Badge"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import styles from "./RepoItem.module.css"
import { MoadlWrapper } from "../../Modal/Modal"
import IssuesList from "../IssuesList/IssuesList"
import { getData } from "../../../utils/fetcher"
import Button from "../../util-components/Button/Button"
import { useRouter } from "next/router"


interface RopoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   repo: _GitHubRepo,
}

export default function RepoItem({ repo }: RopoItemProps): JSX.Element {
   const [showModal, setShowModl] = useState<boolean>(false)
   const [issues, setIssues] = useState<_GithubRepoIssue[]>([])
   const [dataType, setDataType] = useState<string>("")
   const [pageNumber, setPageNumber] = useState<number>(1)
   const router = useRouter()

   function switchDataType(type: string) {
      if (type === dataType) {
         setShowModl(() => true)
         return
      }
      setDataType(() => type)
      // setPageNumber(() => 1)
   }


   useEffect(() => {
      if (dataType !== "") {
         getData(
            `/repos/${repo.owner.login}/${repo.name}/${dataType.toLowerCase()}?page=${pageNumber}`,
            (error, data: _GithubRepoIssue[]) => {
               setShowModl(() => true)
               setIssues(() => data)
            })
      }
   }, [dataType, pageNumber])

   useEffect(() => {
      setDataType(() => "")
      setPageNumber(() => 1)
   }, [repo.name, router.query])


   return (
      <div className={styles.user_repo_item}>

         <MoadlWrapper show={showModal} setShowModl={setShowModl}>
            <MoadlWrapper.Header title={dataType}> <P size="x_small">{repo.owner.login}</P>  </MoadlWrapper.Header>

            <MoadlWrapper.Body>
               {issues.length > 0 && <IssuesList issues={issues} />}
            </MoadlWrapper.Body>

            <MoadlWrapper.Footer>
               <Button disabled={pageNumber <= 1} color="main_transparent" onClick={() => {
                  setPageNumber((prev) => prev - 1)
               }}>
                  {LeftArrowIcon}
               </Button>
               <Button disabled={issues.length < 30} color="main_transparent" onClick={() => {
                  setPageNumber((prev) => prev + 1)
               }}>
                  {RightArrowIcon}
               </Button>

               <small>Page-{pageNumber}</small>
            </MoadlWrapper.Footer>
         </MoadlWrapper>

         <div className={styles.user_repo_item_dates}>
            <span>{DateIcon} Created: {new Date(repo.created_at).toLocaleDateString()}</span>
            <span>{DateIcon} Pushed:  {new Date(repo.pushed_at).toLocaleDateString()}</span>
            <span>{DateIcon} Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
         </div>

         <div className={styles.user_repo_item_stats}>
            <span>
               {StarIcon} Stars
               <Badge color={repo.stargazers_count > 0 ? "green" : "red"}>{repo.stargazers_count}</Badge>
            </span>
            <span >
               {FollowIcon} Watchers
               <Badge color={repo.watchers_count > 0 ? "green" : "red"}>{repo.watchers_count}</Badge>
            </span>
            <span >
               {ForkIcon} Forks
               <Badge color={repo.forks_count > 0 ? "green" : "red"}>{repo.forks_count}</Badge>
            </span>
         </div>

         <div className={styles.user_repo_item_info}>
            <Title type="h3">{languageIcons[repo.language]} {repo.language}</Title>
            <span>
               <span>{repo.description}</span>

               <Button
                  style={{ fontSize: "14px", paddingLeft: "var(--size-0-5-rem)" }}
                  color="main_transparent"
                  disabled={repo.open_issues_count === 0}
                  onClick={() => switchDataType("Issues")}
               >
                  {IssueIcon}Issues {repo.open_issues_count}
               </Button>
            </span>
         </div>

         {repo.topics.length > 0 &&
            <div className={styles.user_repo_topics_container}>
               <Title type="h3">Topics:</Title>
               <div className={styles.user_repo_topics}>
                  {repo.topics.map((topic) => {
                     return <span key={topic}>{topic}</span>
                  })}
               </div>
            </div>}
      </div>
   )
}
