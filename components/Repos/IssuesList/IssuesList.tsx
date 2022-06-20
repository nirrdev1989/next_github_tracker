import { HTMLAttributes, DetailedHTMLProps } from "react"
import { issuesList } from "../../../fake-db/issues"
import { CommentIcon, LockIcon, UnLockIcon } from "../../../icons"
import { _GithubRepoIssue } from "../../../models/GithubRepo"
import { timeDifference } from "../../../utils/date"
import Title from "../../Titles/Title"
import P from "../../util-components/P/P"
import styles from "./IssuesList.module.css"


interface IssuesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   issues?: _GithubRepoIssue[]
}

export default function IssuesList({ }: IssuesListProps): JSX.Element {
   console.log(issuesList[0])
   return (
      <div className={styles.issues}>

         {issuesList.map((issue) => {
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
                  <div className={styles.issue_item_description}>
                     <P size="x_small">
                        {issue.body}
                     </P>
                     <P size="medium">
                        {CommentIcon} {issue.comments}
                     </P>
                  </div>

                  {issue.labels.length > 0 &&
                     <div className={styles.issue_item_labels_container}>
                        <Title type="h4">Labels:</Title>
                        <div className={styles.issue_item_labels}>
                           {issue.labels.map((label) => {
                              return (
                                 <span>{label}</span>
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
