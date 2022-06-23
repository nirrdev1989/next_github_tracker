import Image from "next/image"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { CommentIcon, LockIcon, UnLockIcon } from "../../../icons"
import { _GithubRepoIssue } from "../../../models/GithubRepo"
import { timeDifference } from "../../../utils/date"
import ReadMore from "../../ReadMore/ReadMore"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import styles from "./IssuesList.module.css"


interface IssuesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   issues: _GithubRepoIssue[]
}

export default function IssuesList({ issues }: IssuesListProps): JSX.Element {
   return (
      <div className={styles.issues}>

         {issues.length > 0 && issues.map((issue) => {
            return (
               <div key={issue.node_id} className={styles.issue_item}>
                  <Title type="h3">
                     {issue.state === "open" ?
                        <span style={{ color: "var(--main-green-color)" }}>{UnLockIcon}</span> :
                        <span style={{ color: "var(--main-red-color)" }}>{LockIcon}</span>}
                     <span>{issue.title}</span>
                  </Title>
                  <P size="x_small">
                     Created: <span className={styles.marked}>{timeDifference(new Date().getTime(), new Date(issue.created_at).getTime())}</span>
                     Updated: <span className={styles.marked}> {timeDifference(new Date().getTime(), new Date(issue.updated_at).getTime())}</span>
                     <span className={styles.issue_item_link} >
                        <a href={issue.html_url} target="_blank">Link to issue</a>
                     </span>

                  </P>
                  <span className={styles.issue_item_creator_img}>
                     <Image style={{ borderRadius: "50%" }} width={25} height={25} objectFit="cover" src={issue.user.avatar_url} />
                     <MyLink to={`/users/${issue.user.login}`} >
                        {issue.user.login}
                     </MyLink>

                  </span>
                  <div className={styles.issue_item_description}>
                     <span>
                        <ReadMore text={issue.body} lengthLimit={100} />
                     </span>
                     <P size="medium">
                        {CommentIcon} <span style={{ color: "var(--main-dark-color)" }}>{issue.comments}</span>
                     </P>
                  </div>

                  {issue.labels.length > 0 &&
                     <div className={styles.issue_item_labels_container}>
                        <Title type="h4">Labels:</Title>
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
         })}
      </div>
   )
}
