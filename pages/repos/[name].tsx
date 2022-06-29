import { GetServerSideProps } from "next"
import { withLayout } from "../../layout/Layout"
import { _GitHubRepo } from "../../models/GithubRepo"
import Axios from "../../utils/axios"
import RepoItem from "../../components/Repos/RepoItem/RepoItem"
import { _GitHubEvents } from "../../models/GithubEvents"
import UserEvents from "../../components/Users/UserEvents/UserEvents"
import PageContainer from "../../components/Containers/PageContainer/PageContainer"


interface RepoPageProps extends Record<string, unknown> {
   repo: _GitHubRepo
   events?: _GitHubEvents[]
}

function RepoPage({ repo, events }: RepoPageProps): JSX.Element {

   return (
      <PageContainer title={repo.name} description={"github events repositories issuses"}>
         <RepoItem repo={repo} />
         <UserEvents
            events={events}
            userProfile={repo.owner}
            eventsUrl={`/repos/${repo.owner.login}/${repo.name}/events`}
         />
      </PageContainer>

   )
}


export default withLayout(RepoPage)

export const getServerSideProps: GetServerSideProps<RepoPageProps> = async (context) => {

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
