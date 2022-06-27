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

interface SearchPageProps extends Record<string, unknown> {
   typeName: string
   newSearch: boolean
}

const initialSearchState: _SearchResults<any> = {
   items: [],
   total_count: 0,
   incomplete_results: true
}

function SearchPage({ typeName, newSearch }: SearchPageProps): JSX.Element {
   const router = useRouter()
   const [searchResults, setSearchResults] = useState<_SearchResults<any>>(initialSearchState)
   const [pageNumber, setPageNumber] = useState<number>(1)
   const [isNewSearch, setIsNewSearch] = useState<boolean>(newSearch)



   useEffect(() => {
      const searchValue = router.query?.search
      const name = router.query?.name

      let url = ""
      if (searchValue !== undefined && name !== undefined) {
         console.log("SERCHING")
         if (name === "users") {
            url = `/search/users?q=${searchValue}&page=${pageNumber}`
         } else if (name === "repos") {
            url = `/search/repositories?q=${searchValue}&page=${pageNumber}`
         }

         getData(url, (error, data: _SearchResults<_GithubUserLikeOwner | _GitHubRepo>) => {
            setIsNewSearch(() => false)
            setSearchResults(data)
         })
      }
   }, [router.query.search, pageNumber])

   useEffect(() => {
      setSearchResults(initialSearchState)
      setPageNumber(() => 1)
      setIsNewSearch(() => true)
   }, [typeName])

   return (
      <div>
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

                  <small>Page-{pageNumber}</small>
               </>}

            {searchResults?.total_count > 0 && <P size="small">Results {searchResults.total_count} for {router.query.search}</P>}
         </div>

         <div className={styles.search_results}>
            {searchResults.items.length > 0 && typeName === "users" && router.query.search &&
               <UsersSearchList users={searchResults.items} />}
            {searchResults.items.length > 0 && typeName === "repos" && router.query.search &&
               <ReposSearchList repos={searchResults.items} />}

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
         typeName: name as string,
         newSearch: true
      }
   }
}

