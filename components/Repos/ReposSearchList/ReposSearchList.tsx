import Image from "next/image"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { ForkIcon, IssueIcon, languageIcons, StarIcon } from "../../../icons"
import { _GitHubRepo } from "../../../models/GithubRepo"
import MenuActions from "../../MenuActions/MenuActions"
import MyImage from "../../util-components/MyImage/MyImage"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import P from "../../util-components/P/P"
import styles from "./ReposSearchList.module.css"


interface ReposSearchListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   data?: _GitHubRepo[]
}

export default function ReposSearchList({ data }: ReposSearchListProps): JSX.Element {
   let repos = data
   return (
      <div className={styles.users_list}>
         {repos.length > 0 && repos.map((repo) => {
            return (
               <ReposSearchListItem repo={repo} key={repo.node_id} />
            )
         })}
      </div>
   )
}


interface ReposSearchListItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   repo: _GitHubRepo
}

export function ReposSearchListItem({ repo }: ReposSearchListItemProps): JSX.Element {
   return (
      <div className={styles.repo_list_item} key={repo.node_id}>

         <div className={styles.repo_list_item_header}>
            <div className={styles.repo_list_item_header_left}>
               <MyImage border="circle" width={30} height={30} src={repo.owner.avatar_url} />
               <MyLink style={{ fontSize: "14px", marginLeft: "var(--size-1-rem)" }} to={`/users/${repo.owner.login}`}>
                  {repo.owner.login}
               </MyLink>/
               <MyLink to={`/repos/${repo.name}?user=${repo.owner.login}`}>
                  {repo.name}
               </MyLink>
            </div>

            <div>
               <MenuActions name={repo.name} fullName={`${repo.name}/${repo.owner.login}`} url={`/repos/${repo.name}?user=${repo.owner.login}`} type="repos" />
            </div>
         </div>

         {repo.description &&
            <div className={styles.repo_list_item_description}>
               <P size="x_small">
                  {repo.description}
               </P>
            </div>
         }

         <div className={styles.repo_list_item_info}>
            {languageIcons[repo.language] && <span>{languageIcons[repo.language]}</span>}
            {repo.language && <span>{repo.language}</span>}
            <span>{StarIcon}</span>
            <span>Stars {repo.stargazers_count}</span>

            <span>{ForkIcon}</span>
            <span>Forks {repo.forks_count}</span>

            <span>{IssueIcon}</span>
            <span>Issues {repo.open_issues_count}</span>
         </div>

      </div>
   )
}
