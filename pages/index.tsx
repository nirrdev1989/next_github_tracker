import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Rating from "../components/Rating/Rating";
import Title from "../components/Titles/Title";
import { withLayout } from "../layout/Layout";
import axios from "axios"
import { users, usersSearch, _SearchResults } from "../fake-db/users";
import Searching from "../components/Searching/Searching";
import styles from "../styles/Home.page.module.css"
import Input from "../components/Input/Input";
import { useRouter } from "next/router";
import { _UserLikeOwner } from "../models/UserLikeOwner";
import Image from "next/image";
import UsersList from "../components/UsersList/UsersList";
import { convertArrayToObject } from "../utils/convert";
import { _UserRepos } from "../models/UserRepos";
import Axios from "../utils/axios";
import ReposList from "../components/ReposList/ReposList";



interface HomeProps { }

async function getData(url: string, callData: Function) {
  try {
    const { data } = await Axios.get(url)
    callData(null, data)
  } catch (error) {
    callData(error, null)
  }
}

function HomePage({ }: HomeProps): JSX.Element {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState<_SearchResults<any>>({
    items: [],
    total_count: 0,
    incomplete_results: true
  })


  useEffect(() => {
    const searchValue = router.query?.search
    const type = router.query?.type

    if (searchValue !== undefined && type !== undefined) {
      if (type === "users") {
        getData(`/search/users?q=${searchValue}&page=1`, (error, data: _SearchResults<_UserLikeOwner>) => {
          setSearchResults(data)
        })
      } else if (type === "repos") {
        getData(`/search/repositories?q=${searchValue}&page=1`, (error, data: _SearchResults<_UserRepos>) => {
          setSearchResults(data)
        })
      }
    }
  }, [router.query.search, router.query.type])

  useEffect(() => {
    setSearchResults({
      items: [],
      total_count: 0,
      incomplete_results: true
    })
  }, [router.query?.research])


  return (
    <div className={styles.home_page_container}>
      <div className={`page_header ${styles.home_header}`}>
        <Title type="h1">Wellcome to github search your user or repo</Title>
      </div>

      <div className={styles.search} >
        <Searching />
        {searchResults?.total_count > 0 && <P size="small">Results {searchResults.total_count}</P>}
      </div>

      <div className={styles.search_results}>
        {searchResults.items.length > 0 && router.query.type === "users" &&
          <UsersList users={searchResults.items} />}
        {searchResults.items.length > 0 && router.query.type === "repos" &&
          <ReposList repos={searchResults.items} />}

        {searchResults?.items.length === 0 && <P size="large">No results</P>}
      </div>

      {/* <Rating isEdit={true} rating={rating} setRating={setRating} /> */}
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {

//   // const { data } = await axios.post('https://api.github.com/users/' +)
//   return {
//     props: {

//     }
//   }
// }

export default withLayout(HomePage)

// public getUserGitHubProfile(userName: string): Observable<GithubUserProfile> {
//   return this.http.get<GithubUserProfile>('https://api.github.com/users/' + userName)
// }

// public getRepos(userName: string): Observable<any> {
//   // FOR PRIVETE
//   // const options = {
//   //     headers: new HttpHeaders({
//   //         "Accept": "application/vnd.github.cloak-preview",
//   //         "Authorization": `Token f2dd0413faf57cd97863a8ed7263584d13a25203`

//   //     })
//   // }
//   // return this.http.get('https://api.github.com/repos/Nir-ruslan-yakobov/project_report_time/events', options)

//   return this.http.get<any>(`https://api.github.com/users/${userName}/repos`)
// }

// public getGists(userName: string): Observable<Gist[]> {
//   return this.http.get<Gist[]>(`https://api.github.com/users/${userName}/gists`)
// }

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

