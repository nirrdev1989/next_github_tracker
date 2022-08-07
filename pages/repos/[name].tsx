import { GetServerSideProps } from "next"
import { withLayout } from "../../layout/Layout"
import { _GitHubRepo } from "../../models/GithubRepo"
import Axios from "../../utils/axios"
import RepoItem from "../../components/Repos/RepoItem/RepoItem"
import { _GitHubEvents } from "../../models/GithubEvents"
import UserEvents from "../../components/Users/UserEvents/UserEvents"
import PageContainer from "../../components/Containers/PageContainer/PageContainer"
import { TabsWrapper } from "../../components/Tabs/Tabs"
import { PaginateWrapper } from "../../components/Paginate/Paginate"
import { EventIcon, IssueIcon } from "../../icons"
import IssuesList from "../../components/Repos/IssuesList/IssuesList"
import { getRepoIssues, getUserEvents } from "../../utils/api/api"


interface RepoPageProps extends Record<string, unknown> {
   repo: _GitHubRepo
}

function RepoPage({ repo }: RepoPageProps): JSX.Element {
   const headers = []

   headers.push(
      <>
         {EventIcon}
         Events
         <span>(last 90 days)</span>
      </>
   )

   if (repo.open_issues_count > 0) {
      headers.push(
         <>
            {IssueIcon}
            Issues
            <span>{repo.open_issues_count}</span>
         </>
      )
   }

   return (
      <PageContainer title={repo.name} description={"github events repositories issues"}>
         <RepoItem repo={repo} />

         <TabsWrapper initialActive={0}>
            <TabsWrapper.Tabs
               headers={headers}
            >
               <PaginateWrapper url={`/repos/${repo.owner.login}/${repo.name}/events?page=`} fetchFn={getUserEvents} >
                  <PaginateWrapper.PaginateActions />
                  <PaginateWrapper.List withSearch={true} searchProp="type">
                     <UserEvents userProfile={repo.owner} />
                  </PaginateWrapper.List>
               </PaginateWrapper>

               <PaginateWrapper url={`/repos/${repo.owner.login}/${repo.name}/issues?page=`} fetchFn={getRepoIssues} >
                  <PaginateWrapper.PaginateActions />
                  <PaginateWrapper.List withSearch={true} searchProp="title" >
                     <IssuesList />
                  </PaginateWrapper.List>
               </PaginateWrapper>

            </TabsWrapper.Tabs>
         </TabsWrapper>
      </PageContainer>

   )
}


export default withLayout(RepoPage)

export const getServerSideProps: GetServerSideProps<RepoPageProps> = async (context) => {

   let repoResult = null

   try {
      const [repo] = await Promise.all([
         Axios.get(`/repos/${context.query.user}/${context.query.name}`),
      ])
      repoResult = repo.data
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
      }
   }
}
