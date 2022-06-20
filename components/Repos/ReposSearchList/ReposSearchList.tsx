import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import { useAppContext } from "../../../context/app.context"
import { InfoIcon, languageIcons, MinusIcon, PlusGreenIcon, PullRequestIcon, StarIcon, UserIcon } from "../../../icons"
import { _GitHubRepo } from "../../../models/Repo"
import { convertArrayToObject } from "../../../utils/convert"
import Button from "../../util-components/Button/Button"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import styles from "./ReposSearchList.module.css"


interface ReposSearchListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   repos: _GitHubRepo[]
}

export default function ReposSearchList({ repos }: ReposSearchListProps): JSX.Element {
   const { menuList, addItemToMenu, removeItemFromMenu } = useAppContext()
   const objectRepos = convertArrayToObject(menuList["repos"].items, "name")

   return (
      <div className={styles.users_list}>
         {repos.map((repo) => {
            return (
               <div className={styles.repo_list_item} key={repo.node_id}>

                  <P size="medium">
                     <span className={styles.repo_list_item_language_icons}>
                        {languageIcons[repo.language]}
                        <span>{repo.language}</span>
                     </span>

                     <Link href={`/repos/${repo.name}?user=${repo.owner.login}`}>
                        <a>{repo.name}</a>
                     </Link>

                     <span className={styles.repo_list_item_stars_icon}>
                        {StarIcon}
                        <span>{repo.stargazers_count}</span>
                     </span>

                     {objectRepos[repo.name] ?
                        <Button onClick={() => removeItemFromMenu(repo.name, "repos")}>{MinusIcon}</Button> :
                        <Button onClick={() => addItemToMenu(repo.name, `/repos/${repo.name}?=${repo.owner.login}`, "repos")}>{PlusGreenIcon}</Button>
                     }
                  </P>
                  <P size="medium">
                     {UserIcon}
                     <MyLink to={`/users/${repo.owner.login}`}>
                        {repo.owner.login}
                     </MyLink>
                     {/* <Link href={`/users/${repo.owner.login}`}>
                        <a>{repo.owner.login}</a>
                     </Link> */}
                     {/* <Title type="h4">{languageIcons[repo.language]} {repo.language}</Title> */}
                  </P>
                  {repo.description &&
                     <P size="x_small">
                        {InfoIcon}{repo.description}
                     </P>
                  }


               </div>
            )
         })}
      </div>
   )
}
