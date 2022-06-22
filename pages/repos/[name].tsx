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
// import { httpCall } from "../../utils/fetcher"
// import Error from "next/error"


// const r: _GitHubRepo = {
//    "id": 65392364,
//    "node_id": "MDEwOlJlcG9zaXRvcnk2NTM5MjM2NA==",
//    "name": "ethereumbook",
//    "full_name": "ethereumbook/ethereumbook",
//    "private": false,
//    "owner": {
//       "login": "ethereumbook",
//       "id": 20952070,
//       "node_id": "MDEyOk9yZ2FuaXphdGlvbjIwOTUyMDcw",
//       "avatar_url": "https://avatars.githubusercontent.com/u/20952070?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/ethereumbook",
//       "html_url": "https://github.com/ethereumbook",
//       "followers_url": "https://api.github.com/users/ethereumbook/followers",
//       "following_url": "https://api.github.com/users/ethereumbook/following{/other_user}",
//       "gists_url": "https://api.github.com/users/ethereumbook/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/ethereumbook/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/ethereumbook/subscriptions",
//       "organizations_url": "https://api.github.com/users/ethereumbook/orgs",
//       "repos_url": "https://api.github.com/users/ethereumbook/repos",
//       "events_url": "https://api.github.com/users/ethereumbook/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/ethereumbook/received_events",
//       "type": "Organization",
//       "site_admin": false
//    },
//    "html_url": "https://github.com/ethereumbook/ethereumbook",
//    "description": "Mastering Ethereum, by Andreas M. Antonopoulos, Gavin Wood",
//    "fork": false,
//    "url": "https://api.github.com/repos/ethereumbook/ethereumbook",
//    "forks_url": "https://api.github.com/repos/ethereumbook/ethereumbook/forks",
//    "keys_url": "https://api.github.com/repos/ethereumbook/ethereumbook/keys{/key_id}",
//    "collaborators_url": "https://api.github.com/repos/ethereumbook/ethereumbook/collaborators{/collaborator}",
//    "teams_url": "https://api.github.com/repos/ethereumbook/ethereumbook/teams",
//    "hooks_url": "https://api.github.com/repos/ethereumbook/ethereumbook/hooks",
//    "issue_events_url": "https://api.github.com/repos/ethereumbook/ethereumbook/issues/events{/number}",
//    "events_url": "https://api.github.com/repos/ethereumbook/ethereumbook/events",
//    "assignees_url": "https://api.github.com/repos/ethereumbook/ethereumbook/assignees{/user}",
//    "branches_url": "https://api.github.com/repos/ethereumbook/ethereumbook/branches{/branch}",
//    "tags_url": "https://api.github.com/repos/ethereumbook/ethereumbook/tags",
//    "blobs_url": "https://api.github.com/repos/ethereumbook/ethereumbook/git/blobs{/sha}",
//    "git_tags_url": "https://api.github.com/repos/ethereumbook/ethereumbook/git/tags{/sha}",
//    "git_refs_url": "https://api.github.com/repos/ethereumbook/ethereumbook/git/refs{/sha}",
//    "trees_url": "https://api.github.com/repos/ethereumbook/ethereumbook/git/trees{/sha}",
//    "statuses_url": "https://api.github.com/repos/ethereumbook/ethereumbook/statuses/{sha}",
//    "languages_url": "https://api.github.com/repos/ethereumbook/ethereumbook/languages",
//    "stargazers_url": "https://api.github.com/repos/ethereumbook/ethereumbook/stargazers",
//    "contributors_url": "https://api.github.com/repos/ethereumbook/ethereumbook/contributors",
//    "subscribers_url": "https://api.github.com/repos/ethereumbook/ethereumbook/subscribers",
//    "subscription_url": "https://api.github.com/repos/ethereumbook/ethereumbook/subscription",
//    "commits_url": "https://api.github.com/repos/ethereumbook/ethereumbook/commits{/sha}",
//    "git_commits_url": "https://api.github.com/repos/ethereumbook/ethereumbook/git/commits{/sha}",
//    "comments_url": "https://api.github.com/repos/ethereumbook/ethereumbook/comments{/number}",
//    "issue_comment_url": "https://api.github.com/repos/ethereumbook/ethereumbook/issues/comments{/number}",
//    "contents_url": "https://api.github.com/repos/ethereumbook/ethereumbook/contents/{+path}",
//    "compare_url": "https://api.github.com/repos/ethereumbook/ethereumbook/compare/{base}...{head}",
//    "merges_url": "https://api.github.com/repos/ethereumbook/ethereumbook/merges",
//    "archive_url": "https://api.github.com/repos/ethereumbook/ethereumbook/{archive_format}{/ref}",
//    "downloads_url": "https://api.github.com/repos/ethereumbook/ethereumbook/downloads",
//    "issues_url": "https://api.github.com/repos/ethereumbook/ethereumbook/issues{/number}",
//    "pulls_url": "https://api.github.com/repos/ethereumbook/ethereumbook/pulls{/number}",
//    "milestones_url": "https://api.github.com/repos/ethereumbook/ethereumbook/milestones{/number}",
//    "notifications_url": "https://api.github.com/repos/ethereumbook/ethereumbook/notifications{?since,all,participating}",
//    "labels_url": "https://api.github.com/repos/ethereumbook/ethereumbook/labels{/name}",
//    "releases_url": "https://api.github.com/repos/ethereumbook/ethereumbook/releases{/id}",
//    "deployments_url": "https://api.github.com/repos/ethereumbook/ethereumbook/deployments",
//    "created_at": "2016-08-10T15:07:54Z",
//    "updated_at": "2022-06-17T09:02:36Z",
//    "pushed_at": "2022-05-30T14:02:38Z",
//    "git_url": "git://github.com/ethereumbook/ethereumbook.git",
//    "ssh_url": "git@github.com:ethereumbook/ethereumbook.git",
//    "clone_url": "https://github.com/ethereumbook/ethereumbook.git",
//    "svn_url": "https://github.com/ethereumbook/ethereumbook",
//    "homepage": "https://ethereumbook.info/",
//    "size": 31204,
//    "stargazers_count": 15293,
//    "watchers_count": 15293,
//    "language": "JavaScript",
//    "has_issues": true,
//    "has_projects": true,
//    "has_downloads": true,
//    "has_wiki": false,
//    "has_pages": false,
//    "forks_count": 3780,
//    "mirror_url": null,
//    "archived": false,
//    "disabled": false,
//    "open_issues_count": 64,
//    "license": {
//       "key": "other",
//       "name": "Other",
//       "spdx_id": "NOASSERTION",
//       "url": null,
//       "node_id": "MDc6TGljZW5zZTA="
//    },
//    "allow_forking": true,
//    "is_template": false,
//    "topics": [
//       "blockchain",
//       "book",
//       "dapp",
//       "devp2p",
//       "embark",
//       "ethereum",
//       "oreilly",
//       "smart-contracts",
//       "solidity",
//       "token",
//       "truffle-framework",
//       "web3js"
//    ],
//    "visibility": "public",
//    "forks": 3780,
//    "open_issues": 64,
//    "watchers": 15293,
//    "default_branch": "develop",
//    "temp_clone_token": null,
//    "organization": {
//       "login": "ethereumbook",
//       "id": 20952070,
//       "node_id": "MDEyOk9yZ2FuaXphdGlvbjIwOTUyMDcw",
//       "avatar_url": "https://avatars.githubusercontent.com/u/20952070?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/ethereumbook",
//       "html_url": "https://github.com/ethereumbook",
//       "followers_url": "https://api.github.com/users/ethereumbook/followers",
//       "following_url": "https://api.github.com/users/ethereumbook/following{/other_user}",
//       "gists_url": "https://api.github.com/users/ethereumbook/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/ethereumbook/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/ethereumbook/subscriptions",
//       "organizations_url": "https://api.github.com/users/ethereumbook/orgs",
//       "repos_url": "https://api.github.com/users/ethereumbook/repos",
//       "events_url": "https://api.github.com/users/ethereumbook/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/ethereumbook/received_events",
//       "type": "Organization",
//       "site_admin": false
//    },
//    "network_count": 3780,
//    "subscribers_count": 568
// }

interface RepoPageProps extends Record<string, unknown> {
   repo: _GitHubRepo
   events?: _GitHubEvents[]
   // userName: string
}

function RepoPage({ repo, events }: RepoPageProps): JSX.Element {
   return (
      <>
         <div className={`page_header ${styles.repo_header}`}>
            <div className={styles.repo_owner_img}>
               <Image style={{ borderRadius: "50%" }} width={50} height={50} objectFit="cover" src={repo.owner.avatar_url} />
            </div>
            <Title type="h1">
               <a href={repo.html_url} target="_blank"> {repo.name}</a>
            </Title>
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
