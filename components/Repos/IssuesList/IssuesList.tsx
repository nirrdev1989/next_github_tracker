import Image from "next/image"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { _GithubRepoIssue } from "../../../models/GithubRepo"
import { timeDifference } from "../../../utils/date"
import NoResults from "../../NoResults/NoResults"
import ReadMore from "../../ReadMore/ReadMore"
import Atag from "../../util-components/Atag/Atag"
import MyImage from "../../util-components/MyImage/MyImage"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import Title from "../../util-components/Titles/Title"
import styles from "./IssuesList.module.css"


interface IssuesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   data?: _GithubRepoIssue[]
}

export default function IssuesList({ data: issues }: IssuesListProps): JSX.Element {
   return (
      <div className={styles.issues}>

         {issues.length > 0 ? issues.map((issue) => {
            return (
               <div key={issue.node_id} className={styles.issue_item}>
                  <Title type="h2">
                     {/* {issue.state === "open" ?
                        <span style={{ color: "var(--main-green-color)" }}>{UnLockIcon}</span> :
                        <span style={{ color: "var(--main-red-color)" }}>{LockIcon}</span>} */}
                     <span>{issue.title}</span>
                  </Title>
                  <div className={styles.issue_item_header}>
                     <span>
                        <span>Created: </span>
                        <span
                           className={styles.marked}>
                           {timeDifference(new Date().getTime(), new Date(issue.created_at).getTime())}
                        </span>
                     </span>
                     <span>
                        <span>Updated: </span>
                        <span
                           className={styles.marked}>
                           {timeDifference(new Date().getTime(), new Date(issue.created_at).getTime())}
                        </span>
                     </span>
                     <span className={styles.gist_link} >
                        <Atag href={issue.html_url}>
                           Link to issue
                        </Atag>
                     </span>
                  </div>
                  <div className={styles.issue_item_creator}>
                     {/* <Image style={{ borderRadius: "50%" }} width={25} height={25} objectFit="cover" src={issue.user.avatar_url} /> */}

                     <MyImage src={issue.user.avatar_url} width={25} height={25} border="circle" />
                     <MyLink to={`/users/${issue.user.login}`} >
                        {issue.user.login}
                     </MyLink>
                  </div>
                  <div className={styles.issue_item_description}>
                     <span>
                        <ReadMore text={issue.body} lengthLimit={100} />
                     </span>
                  </div>

                  {issue.labels.length > 0 &&
                     <div className={styles.issue_item_labels_container}>
                        <Title type="h3">Labels:</Title>
                        <div className={styles.issue_item_labels}>
                           {issue.labels.map((label) => {
                              return (
                                 <span key={label.node_id} style={{ backgroundColor: `#${label.color}` }} >{label.name}</span>
                              )
                           })}
                        </div>
                     </div>
                  }
               </div>
            )
         }) : <NoResults />}
      </div>
   )
}
