import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { useAppContext } from "../../../context/app.context"
import { ForkIcon, IssueIcon, languageIcons, MinusIcon, PlusGreenIcon, StarIcon } from "../../../icons"
import { _GitHubRepo } from "../../../models/GithubRepo"
import { convertArrayToObject } from "../../../utils/convert"
import MenuActions from "../../MenuActions/MenuActions"
import Button from "../../util-components/Button/Button"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import P from "../../util-components/P/P"
import styles from "./ReposSearchList.module.css"


interface ReposSearchListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   repos: _GitHubRepo[]
}

export default function ReposSearchList({ repos }: ReposSearchListProps): JSX.Element {

   return (
      <div className={styles.users_list}>
         {repos.length > 0 && repos.map((repo) => {
            return (
               <div className={styles.repo_list_item} key={repo.node_id}>

                  <div className={styles.repo_list_item_header}>
                     <div className={styles.repo_list_item_header_left}>
                        <Image style={{ borderRadius: "50%" }} width={30} height={30} objectFit="cover" src={repo.owner.avatar_url} />
                        <MyLink style={{ fontSize: "14px", marginLeft: "var(--size-1-rem)" }} to={`/users/${repo.owner.login}`}>
                           {repo.owner.login}
                        </MyLink>/
                        <MyLink to={`/repos/${repo.name}?user=${repo.owner.login}`}>
                           {repo.name}
                        </MyLink>
                     </div>

                     <div>
                        <MenuActions name={repo.name} url={`/repos/${repo.name}?user=${repo.owner.login}`} type="repos" />
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
         })}
      </div>
   )
}
