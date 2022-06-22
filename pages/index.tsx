import { useEffect, useState } from "react";
import P from "../components/util-components/P/P";
import Title from "../components/util-components/Titles/Title";
import { withLayout } from "../layout/Layout";
import Searching from "../components/Searching/Searching";
import styles from "../styles/Home.page.module.css"
import { useRouter } from "next/router";
import { _GithubUserLikeOwner } from "../models/GithubUserLikeOwner";
import UsersSearchList from "../components/Users/UsersSearchList/UsersSearchList";
import { _GitHubRepo } from "../models/GithubRepo";
import { getData } from "../utils/fetcher";
import ReposSearchList from "../components/Repos/ReposSearchList/ReposSearchList";
import { _SearchResults } from "../models/Search";


interface HomeProps { }

const initialSearchState: _SearchResults<any> = {
  items: [],
  total_count: 0,
  incomplete_results: true
}

function HomePage({ }: HomeProps): JSX.Element {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState<_SearchResults<any>>(initialSearchState)

  useEffect(() => {
    const searchValue = router.query?.search
    const type = router.query?.type
    const page = router.query?.page

    let url = ""
    if (searchValue !== undefined && type !== undefined) {
      if (type === "users") {
        url = `/search/users?q=${searchValue}&page=${page}`
      } else if (type === "repos") {
        url = `/search/repositories?q=${searchValue}&page=${page}`
      }

      getData(url, (error, data: _SearchResults<_GithubUserLikeOwner | _GitHubRepo>) => {
        setSearchResults(data)
      })
    }
  }, [router.query.search, router.query.type, router.query?.page])

  useEffect(() => {
    setSearchResults(initialSearchState)
  }, [router.query?.research])


  return (
    <div className={styles.home_page_container}>

      <div className={`page_header ${styles.home_header}`}>
        <Title type="h1">Search...</Title>
      </div>

      <div className={styles.search} >
        <Searching />
        {searchResults?.total_count > 0 && <P size="small">Results {searchResults.total_count}</P>}
      </div>

      <div className={styles.search_results}>
        {searchResults.items.length > 0 && router.query.type === "users" &&
          <UsersSearchList users={searchResults.items} />}
        {searchResults.items.length > 0 && router.query.type === "repos" &&
          <ReposSearchList repos={searchResults.items} />}

        {searchResults?.items.length === 0 && <P size="large">No results</P>}
      </div>

      {/* <Rating isEdit={true} rating={rating} setRating={setRating} /> */}
    </div>
  )
}



export default withLayout(HomePage)

//   // const options = {
//   //     headers: new HttpHeaders({
//   //         "Accept": "application/vnd.github.cloak-preview",
//   //         "Authorization": `Token f2dd0413faf57cd97863a8ed7263584d13a25203`



// authorizations_url: "https://api.github.com/authorizations"
// code_search_url: "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}"
// commit_search_url: "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}"
// current_user_authorizations_html_url: "https://github.com/settings/connections/applications{/client_id}"
// current_user_repositories_url: "https://api.github.com/user/repos{?type,page,per_page,sort}"
// current_user_url: "https://api.github.com/user"
// emails_url: "https://api.github.com/user/emails"
// emojis_url: "https://api.github.com/emojis"
// events_url: "https://api.github.com/events"
// feeds_url: "https://api.github.com/feeds"
// followers_url: "https://api.github.com/user/followers"
// following_url: "https://api.github.com/user/following{/target}"
// gists_url: "https://api.github.com/gists{/gist_id}"
// hub_url: "https://api.github.com/hub"
// issue_search_url: "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}"
// issues_url: "https://api.github.com/issues"
// keys_url: "https://api.github.com/user/keys"
// label_search_url: "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}"
// notifications_url: "https://api.github.com/notifications"
// organization_repositories_url: "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}"
// organization_teams_url: "https://api.github.com/orgs/{org}/teams"
// organization_url: "https://api.github.com/orgs/{org}"
// public_gists_url: "https://api.github.com/gists/public"
// rate_limit_url: "https://api.github.com/rate_limit"
// repository_search_url: "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"
// repository_url: "https://api.github.com/repos/{owner}/{repo}"
// starred_gists_url: "https://api.github.com/gists/starred"
// starred_url: "https://api.github.com/user/starred{/owner}{/repo}"
// user_organizations_url: "https://api.github.com/user/orgs"
// user_repositories_url: "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}"
// user_search_url: "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
// user_url: "https://api.github.com/users/{user}"

