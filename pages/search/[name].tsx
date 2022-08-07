import { useRouter } from "next/router"
import ReposSearchList from "../../components/Repos/ReposSearchList/ReposSearchList"
import Searching from "../../components/Searching/Searching"
import UsersSearchList from "../../components/Users/UsersSearchList/UsersSearchList"
import Title from "../../components/util-components/Titles/Title"
import { withLayout } from "../../layout/Layout"
import { _GitHubRepo } from "../../models/GithubRepo"
import { _GithubUserLikeOwner } from "../../models/GithubUserLikeOwner"
import { _SearchResults } from "../../models/Search"
import styles from "../../styles/Search.page.module.css"
import P from "../../components/util-components/P/P"
import { GetServerSideProps } from "next"
import PageContainer from "../../components/Containers/PageContainer/PageContainer"
import { PaginateWrapper } from "../../components/Paginate/Paginate"
import { getSearchRepos, getSearchUsers } from "../../utils/api/api"

interface SearchPageProps extends Record<string, unknown> {
   dataType: string
   newSearch?: boolean
}

function SearchPage({ dataType }: SearchPageProps): JSX.Element {
   const router = useRouter()

   return (
      <PageContainer title={"search/" + router.query?.name}>

         <div className={`page_header`}>
            <Title type="h1">Search</Title>
            <P size="small">{router.query?.name}</P>
         </div>

         <div className={styles.search} >
            <Searching />
            {/* {data?.total_count > 0 && <P size="small">Results {data.total_count} for {router.query.search}</P>} */}
         </div>

         {router.query?.search && dataType === "repositories" &&
            <PaginateWrapper
               // initialFetch={false}
               url={`/search/${router.query.name}?q=${router.query.search}&page=`}
               fetchFn={getSearchRepos}
            >
               <PaginateWrapper.PaginateActions />
               <PaginateWrapper.List >
                  <ReposSearchList />
               </PaginateWrapper.List>
            </PaginateWrapper>
         }

         {router.query?.search && dataType === "users" &&
            <PaginateWrapper
               // initialFetch={false}
               url={`/search/${router.query.name}?q=${router.query.search}&page=`}
               fetchFn={getSearchUsers}
            >
               <PaginateWrapper.PaginateActions />
               <PaginateWrapper.List >
                  <UsersSearchList />
               </PaginateWrapper.List>
            </PaginateWrapper>
         }
      </PageContainer>
   )
}



export default withLayout(SearchPage)

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (context) => {
   const name = context.query?.name
   if (!name) {
      return {
         notFound: true,
      }
   }
   return {
      props: {
         dataType: name as string,
         newSearch: true
      }
   }
}

