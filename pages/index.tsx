import { GetStaticProps } from "next";
import { useState } from "react";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Rating from "../components/Rating/Rating";
import Title from "../components/Titles/Title";
import { withLayout } from "../layout/Layout";
import axios from "axios"
import { users } from "../fake-db/users";
import Searching from "../components/Searching/Searching";
import styles from "../styles/Home.page.module.css"
import Input from "../components/Input/Input";
import { useRouter } from "next/router";

interface HomeProps {

}

function HomePage({ }: HomeProps): JSX.Element {
  const router = useRouter()

  console.log(router.query)


  return (
    <div className={styles.home_page_container}>
      <div className={`page_header ${styles.home_header}`}>
        <Title type="h1">Wellcome to github search your user or repo</Title>
      </div>

      <div className={styles.search} >
        <Searching />
      </div>

      <div className={styles.search_results}>
        <P size="medium">No results</P>
      </div>

      {/* <P size="large">dasdasdasd  </P>
      <P  > fsdfds </P>
      <P size="small" > fsdfdsf </P>
      <Rating isEdit={true} rating={rating} setRating={setRating} />
      <Button onClick={() => { }} extraClass="main_green" >Check &#10140;</Button> */}
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

