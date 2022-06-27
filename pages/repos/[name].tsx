import { GetServerSideProps } from "next"
import Title from "../../components/util-components/Titles/Title"
import { withLayout } from "../../layout/Layout"
import { _GitHubRepo } from "../../models/GithubRepo"
import Axios from "../../utils/axios"
import RepoItem from "../../components/Repos/RepoItem/RepoItem"
import { _GitHubEvents } from "../../models/GithubEvents"
import styles from "../../styles/Repo.page.module.css"
import Image from "next/image"
import UserEvents from "../../components/Users/UserEvents/UserEvents"
import MyLink from "../../components/util-components/MyLink.tsx/MyLink"
import { useAppContext } from "../../context/app.context"
import Button from "../../components/util-components/Button/Button"
import { MinusIcon, PlusGreenIcon } from "../../icons"
import MenuActions from "../../components/MenuActions/MenuActions"


interface RepoPageProps extends Record<string, unknown> {
   repo: _GitHubRepo
   events?: _GitHubEvents[]
   // userName: string
}

function RepoPage({ repo, events }: RepoPageProps): JSX.Element {
   // const { menuList, addItemToMenu, removeItemFromMenu } = useAppContext()

   return (
      <>
         <div className={`page_header ${styles.repo_header}`}>
            <div className={styles.repo_owner_img}>
               <Image style={{ borderRadius: "50%" }} width={50} height={50} objectFit="cover" src={repo.owner.avatar_url} />
            </div>
            <div>
               <Title type="h1">
                  <MyLink style={{ marginLeft: "var(--size-1-rem)" }} to={`/users/${repo.owner.login}`}>
                     {repo.owner.login}
                  </MyLink>/<a href={repo.html_url} target="_blank">{repo.name}</a>

                  <MenuActions fullName={`${repo.name}/${repo.owner.login}`} name={repo.name} type="repos" url={`/repos/${repo.name}?user=${repo.owner.login}`} />
               </Title>
            </div>
         </div>

         <div className={styles.repo_item_content}>
            <RepoItem repo={repo} />
            <UserEvents
               events={events}
               userProfile={repo.owner}
               eventsUrl={`/repos/${repo.owner.login}/${repo.name}/events`}
            />
         </div>
      </>
   )
}


export default withLayout(RepoPage)

export const getServerSideProps: GetServerSideProps<RepoPageProps> = async (context) => {
   console.log(context.query)

   let repoResult = null
   let eventsResult = null

   try {
      const [repo, events] = await Promise.all([
         Axios.get(`/repos/${context.query.user}/${context.query.name}`),
         Axios.get(`/repos/${context.query.user}/${context.query.name}/events`)
      ])
      repoResult = repo.data
      eventsResult = events.data
   } catch (error) {
      console.log(error)
   }

   if (!repoResult) {
      return {
         notFound: true,
      }
   }

   return {
      props: {
         repo: repoResult,
         events: eventsResult
      }
   }
}
