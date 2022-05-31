import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import { useAppContext } from "../../context/app.context"
import { languageIcons, MinusIcon, PlusGreenIcon, PullRequestIcon, StarIcon, UserIcon } from "../../icons"
import { _UserRepos } from "../../models/UserRepos"
import { convertArrayToObject } from "../../utils/convert"
import Button from "../Button/Button"
import P from "../P/P"
import Title from "../Titles/Title"
import styles from "./ReposList.module.css"


interface ReposListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   repos: _UserRepos[]
}

export default function ReposList({ repos }: ReposListProps): JSX.Element {
   const { menuList, addItemToMenu, removeItemFromMenu } = useAppContext()
   // console.log(menuItems)
   const objectRepos = convertArrayToObject(menuList["repos"].items, "name")

   return (
      <div className={styles.users_list}>
         {repos.map((repo) => {
            return (
               <div className={styles.repo_list_item} key={repo.node_id}>

                  <P size="large">
                     <span className={styles.repo_list_item_language_icons}>
                        {languageIcons[repo.language]}
                        <span>{repo.language}</span>
                     </span>
                     {/* {
                        PullRequestIcon} */}
                     <Link href={`/repos/${repo.name}`}>
                        <a>{repo.name}</a>
                     </Link>

                     <span className={styles.repo_list_item_stars_icon}>
                        {StarIcon}
                        <span>{repo.stargazers_count}</span>
                     </span>

                     {objectRepos[repo.name] ?
                        <Button onClick={() => removeItemFromMenu(repo.name, "repos")}>{MinusIcon}</Button> :
                        <Button onClick={() => addItemToMenu(repo.name, "repos")}>{PlusGreenIcon}</Button>
                     }
                  </P>
                  <P size="medium">
                     {UserIcon}
                     <Link href={`/users/${repo.owner.login}`}>
                        <a>{repo.owner.login}</a>
                     </Link>
                     {/* <Title type="h4">{languageIcons[repo.language]} {repo.language}</Title> */}
                  </P>
                  {repo.description &&
                     <P size="x_small">
                        {repo.description}
                     </P>
                  }


               </div>
            )
         })}
      </div>
   )
}
