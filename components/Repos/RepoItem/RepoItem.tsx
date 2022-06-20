import { HTMLAttributes, DetailedHTMLProps } from "react"
import { DateIcon, languageIcons, StarIcon, FollowIcon, ForkIcon, IssueIcon } from "../../../icons"
import { _GitHubEvents } from "../../../models/GithubEvents"
import { _GitHubRepo } from "../../../models/GithubRepo"
import Badge from "../../util-components/Badge/Badge"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import UserEvents from "../../UserEvents/UserEvents"
import styles from "./RepoItem.module.css"


interface RopoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   repo: _GitHubRepo,
   events: _GitHubEvents[]
}

export default function RepoItem({ repo, events }: RopoItemProps) {
   return (
      <div className={styles.user_repo_item}>
         <span className={styles.user_repo_item_dates}>
            <P size="x_small">{DateIcon} Created: {new Date(repo.created_at).toLocaleDateString()}</P>
            <P size="x_small">{DateIcon} Pushed:  {new Date(repo.pushed_at).toLocaleDateString()}</P>
            <P size="x_small">{DateIcon} Updated: {new Date(repo.updated_at).toLocaleDateString()}</P>
         </span>

         <div className={styles.user_repo_item_stats}>
            <P size="small" className={styles.repo__item_stars_icon}>
               <span style={{ color: "var(--second-yellow-color)" }}>{StarIcon}</span> Stars:
               <Badge color={repo.stargazers_count > 0 ? "green" : "red"}>{repo.stargazers_count}</Badge>
            </P>
            <P size="small" >
               {FollowIcon} Watchers:
               <Badge onClick={() => { }} color={repo.watchers_count > 0 ? "green" : "red"}>{repo.watchers_count}</Badge>
            </P>
            <P size="small" >
               {ForkIcon} Forks:
               <Badge color={repo.forks_count > 0 ? "green" : "red"}>{repo.forks_count}</Badge>
            </P>
         </div>

         <div className={styles.user_repo_item_info}>
            <Title type="h4">{languageIcons[repo.language]} {repo.language}</Title>
            <P size="x_small">
               {repo.description}
               <span className={styles.repo__item_issues_icon}>
                  {IssueIcon}
                  <span>Issues: {repo.open_issues_count}</span>
               </span>
            </P>
         </div>

         {repo.topics.length > 0 &&
            <div className={styles.user_repo_topics_container}>
               <P size="small">Topics:</P>
               <div className={styles.user_repo_topics}>
                  {repo.topics.map((topic) => {
                     return <span key={topic}>{topic}</span>
                  })}
               </div>
            </div>}

         <div className={styles.user_repo_content}>
            <UserEvents events={events} />
         </div>
      </div>
   )
}
