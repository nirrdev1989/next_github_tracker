import { HTMLAttributes, DetailedHTMLProps } from "react"
import { DateIcon, languageIcons, StarIcon, FollowIcon, ForkIcon } from "../../../icons"
import { _GitHubEvents } from "../../../models/GithubEvents"
import { _GitHubRepo, _GithubRepoIssue } from "../../../models/GithubRepo"
import Badge from "../../util-components/Badge/Badge"
import Title from "../../util-components/Titles/Title"
import styles from "./RepoItem.module.css"
import MyImage from "../../util-components/MyImage/MyImage"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import MenuActions from "../../MenuActions/MenuActions"
import Atag from "../../util-components/Atag/Atag"


interface RepoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   repo: _GitHubRepo,
}

export default function RepoItem({ repo }: RepoItemProps): JSX.Element {


   return (
      <div className={styles.user_repo_item}>

         <div className={`page_header ${styles.repo_header}`}>
            <div className={styles.repo_owner_img}>
               <MyImage border="circle" width={50} height={50} src={repo.owner.avatar_url} />
            </div>
            <div className={`${styles.repo_header_title}`}>
               <Title type="h1">
                  <MyLink style={{ marginLeft: "var(--size-1-rem)" }} to={`/users/${repo.owner.login}`}>
                     {repo.owner.login}
                  </MyLink>/<Atag href={repo.html_url}>{repo.name}</Atag>
               </Title>
               <MenuActions fullName={`${repo.name}/${repo.owner.login}`} name={repo.name} type="repos" url={`/repos/${repo.name}?user=${repo.owner.login}`} />
            </div>
         </div>

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
