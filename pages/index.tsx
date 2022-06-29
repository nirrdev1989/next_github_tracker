import P from "../components/util-components/P/P";
import Title from "../components/util-components/Titles/Title";
import { withLayout } from "../layout/Layout";
import styles from "../styles/Home.page.module.css"
import { _GithubUserLikeOwner } from "../models/GithubUserLikeOwner";
import { _GitHubRepo } from "../models/GithubRepo";
import { _SearchResults } from "../models/Search";
import { StarIcon } from "../icons";
import Atag from "../components/util-components/Atag/Atag";
import Head from "next/head";


interface HomeProps { }

function HomePage({ }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={`page_header`}>
        <Title type="h1">Github tracker</Title>
      </div>

      <div className={styles.home_page_content}>
        <P size="medium">
          A site that lets you view the details of the repositories or users and their activities, in addition you can keep to yourself lists of your favorite users and repositories
        </P>

        <div className={styles.home_page_content_repo}>
          <span>
            Feel free to leave a star  {StarIcon}
          </span>

          <span>
            <Atag style={{ color: "var(--main-green-color)" }} href="https://github.com/nirrdev1989/next_github_tracker" >View repository</Atag>
          </span>
        </div>
      </div>

    </>
  )
}



export default withLayout(HomePage)

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

