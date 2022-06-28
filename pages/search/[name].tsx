import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ReposSearchList from "../../components/Repos/ReposSearchList/ReposSearchList"
import Searching from "../../components/Searching/Searching"
import UsersSearchList from "../../components/Users/UsersSearchList/UsersSearchList"
import Title from "../../components/util-components/Titles/Title"
import { withLayout } from "../../layout/Layout"
import { _GitHubRepo } from "../../models/GithubRepo"
import { _GithubUserLikeOwner } from "../../models/GithubUserLikeOwner"
import { _SearchResults } from "../../models/Search"
import { getData } from "../../utils/fetcher"
import styles from "../../styles/Search.page.module.css"
import P from "../../components/util-components/P/P"
import { GetServerSideProps } from "next"
import Button from "../../components/util-components/Button/Button"
import { LeftArrowIcon, RightArrowIcon } from "../../icons"
import Head from "next/head"

interface SearchPageProps extends Record<string, unknown> {
   dataType: string
   newSearch: boolean
}

const initialSearchState: _SearchResults<any> = {
   items: [],
   total_count: 0,
   incomplete_results: true
}

function SearchPage({ dataType, newSearch }: SearchPageProps): JSX.Element {
   const router = useRouter()
   const [data, setData] = useState<_SearchResults<any>>(initialSearchState)
   const [pageNumber, setPageNumber] = useState<number>(1)
   const [isNewSearch, setIsNewSearch] = useState<boolean>(newSearch)

   useEffect(() => {
      const searchValue = router.query?.search
      const name = router.query?.name

      if (searchValue !== undefined && name !== undefined) {
         getData(`/search/${name}?q=${searchValue}&page=${pageNumber}`, (error, data: _SearchResults<_GithubUserLikeOwner | _GitHubRepo>) => {
            setIsNewSearch(() => false)
            setData(data)
         })
      }
   }, [router.query.search, pageNumber])

   useEffect(() => {
      setData(initialSearchState)
      setPageNumber(() => 1)
      setIsNewSearch(() => true)
   }, [dataType])

   return (
      <div>
         <Head>
            {/* <meta name="description" content={description} /> */}
            <title>search/{router.query?.name}</title>
         </Head>
         <div className={`page_header`}>
            <Title type="h1">Search</Title>
            <P size="small">{router.query?.name}</P>
         </div>

         <div className={styles.search} >
            <Searching />

            {!isNewSearch &&
               <>
                  <Button disabled={pageNumber <= 1 || router.query.search === ""} color="main_transparent" onClick={() => {
                     setPageNumber((prev) => prev - 1)
                  }}>
                     {LeftArrowIcon}
                  </Button>
                  <Button disabled={pageNumber === 0 || router.query.search === ""} color="main_transparent" onClick={() => {
                     setPageNumber((prev) => prev + 1)
                  }}>
                     {RightArrowIcon}
                  </Button>

                  <small>Page-{pageNumber}  </small>
               </>}

            {data?.total_count > 0 && <P size="small">Results {data.total_count} for {router.query.search}</P>}
         </div>

         <div className={styles.search_results}>
            {data.items.length > 0 && dataType === "users" && router.query.search &&
               <UsersSearchList users={data.items} />}
            {data.items.length > 0 && dataType === "repositories" && router.query.search &&
               <ReposSearchList repos={data.items} />}

         </div>
      </div>
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

