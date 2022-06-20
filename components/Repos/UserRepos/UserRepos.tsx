import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import { DateIcon, FollowIcon, ForkIcon, IssueIcon, languageIcons, PullRequestIcon, StarIcon } from "../../../icons"
import { _GitHubRepo } from "../../../models/GithubRepo"
import Badge from "../../util-components/Badge/Badge"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import styles from "./UserRepos.module.css"

import { allrepose } from "./fake-data";

let repo: _GitHubRepo = {
   "id": 94218100,
   "node_id": "MDEwOlJlcG9zaXRvcnk5NDIxODEwMA==",
   "name": "alljobs",
   "full_name": "nirkaufman/alljobs",
   "private": false,
   "owner": {
      "login": "nirkaufman",
      "id": 2496253,
      "node_id": "MDQ6VXNlcjI0OTYyNTM=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2496253?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nirkaufman",
      "html_url": "https://github.com/nirkaufman",
      "followers_url": "https://api.github.com/users/nirkaufman/followers",
      "following_url": "https://api.github.com/users/nirkaufman/following{/other_user}",
      "gists_url": "https://api.github.com/users/nirkaufman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nirkaufman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nirkaufman/subscriptions",
      "organizations_url": "https://api.github.com/users/nirkaufman/orgs",
      "repos_url": "https://api.github.com/users/nirkaufman/repos",
      "events_url": "https://api.github.com/users/nirkaufman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nirkaufman/received_events",
      "type": "User",
      "site_admin": false
   },
   "html_url": "https://github.com/nirkaufman/alljobs",
   "description": null,
   "fork": false,
   "url": "https://api.github.com/repos/nirkaufman/alljobs",
   "forks_url": "https://api.github.com/repos/nirkaufman/alljobs/forks",
   "keys_url": "https://api.github.com/repos/nirkaufman/alljobs/keys{/key_id}",
   "collaborators_url": "https://api.github.com/repos/nirkaufman/alljobs/collaborators{/collaborator}",
   "teams_url": "https://api.github.com/repos/nirkaufman/alljobs/teams",
   "hooks_url": "https://api.github.com/repos/nirkaufman/alljobs/hooks",
   "issue_events_url": "https://api.github.com/repos/nirkaufman/alljobs/issues/events{/number}",
   "events_url": "https://api.github.com/repos/nirkaufman/alljobs/events",
   "assignees_url": "https://api.github.com/repos/nirkaufman/alljobs/assignees{/user}",
   "branches_url": "https://api.github.com/repos/nirkaufman/alljobs/branches{/branch}",
   "tags_url": "https://api.github.com/repos/nirkaufman/alljobs/tags",
   "blobs_url": "https://api.github.com/repos/nirkaufman/alljobs/git/blobs{/sha}",
   "git_tags_url": "https://api.github.com/repos/nirkaufman/alljobs/git/tags{/sha}",
   "git_refs_url": "https://api.github.com/repos/nirkaufman/alljobs/git/refs{/sha}",
   "trees_url": "https://api.github.com/repos/nirkaufman/alljobs/git/trees{/sha}",
   "statuses_url": "https://api.github.com/repos/nirkaufman/alljobs/statuses/{sha}",
   "languages_url": "https://api.github.com/repos/nirkaufman/alljobs/languages",
   "stargazers_url": "https://api.github.com/repos/nirkaufman/alljobs/stargazers",
   "contributors_url": "https://api.github.com/repos/nirkaufman/alljobs/contributors",
   "subscribers_url": "https://api.github.com/repos/nirkaufman/alljobs/subscribers",
   "subscription_url": "https://api.github.com/repos/nirkaufman/alljobs/subscription",
   "commits_url": "https://api.github.com/repos/nirkaufman/alljobs/commits{/sha}",
   "git_commits_url": "https://api.github.com/repos/nirkaufman/alljobs/git/commits{/sha}",
   "comments_url": "https://api.github.com/repos/nirkaufman/alljobs/comments{/number}",
   "issue_comment_url": "https://api.github.com/repos/nirkaufman/alljobs/issues/comments{/number}",
   "contents_url": "https://api.github.com/repos/nirkaufman/alljobs/contents/{+path}",
   "compare_url": "https://api.github.com/repos/nirkaufman/alljobs/compare/{base}...{head}",
   "merges_url": "https://api.github.com/repos/nirkaufman/alljobs/merges",
   "archive_url": "https://api.github.com/repos/nirkaufman/alljobs/{archive_format}{/ref}",
   "downloads_url": "https://api.github.com/repos/nirkaufman/alljobs/downloads",
   "issues_url": "https://api.github.com/repos/nirkaufman/alljobs/issues{/number}",
   "pulls_url": "https://api.github.com/repos/nirkaufman/alljobs/pulls{/number}",
   "milestones_url": "https://api.github.com/repos/nirkaufman/alljobs/milestones{/number}",
   "notifications_url": "https://api.github.com/repos/nirkaufman/alljobs/notifications{?since,all,participating}",
   "labels_url": "https://api.github.com/repos/nirkaufman/alljobs/labels{/name}",
   "releases_url": "https://api.github.com/repos/nirkaufman/alljobs/releases{/id}",
   "deployments_url": "https://api.github.com/repos/nirkaufman/alljobs/deployments",
   "created_at": "2017-06-13T13:50:13Z",
   "updated_at": "2017-06-13T13:50:20Z",
   "pushed_at": "2017-06-13T13:50:44Z",
   "git_url": "git://github.com/nirkaufman/alljobs.git",
   "ssh_url": "git@github.com:nirkaufman/alljobs.git",
   "clone_url": "https://github.com/nirkaufman/alljobs.git",
   "svn_url": "https://github.com/nirkaufman/alljobs",
   "homepage": null,
   "size": 2974,
   "stargazers_count": 0,
   "watchers_count": 0,
   "language": "TypeScript",
   "has_issues": true,
   "has_projects": true,
   "has_downloads": true,
   "has_wiki": true,
   "has_pages": false,
   "forks_count": 0,
   "mirror_url": null,
   "archived": false,
   "disabled": false,
   "open_issues_count": 0,
   "license": null,
   "allow_forking": true,
   "is_template": false,
   "topics": [],
   "visibility": "public",
   "forks": 0,
   "open_issues": 0,
   "watchers": 0,
   "default_branch": "master"
}


interface UserReposProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }



export default function UserRepos({ }: UserReposProps): JSX.Element {

   // "description": null,
   // "fork": false,
   // "name": "alljobs"
   // "created_at": "2017-06-13T13:50:13Z",
   // "updated_at": "2017-06-13T13:50:20Z",
   // "pushed_at": "2017-06-13T13:50:44Z",
   // "open_issues_count": 0,
   // "stargazers_count": 0,
   // "forks_count": 0,
   // "watchers_count": 0,
   // "language": "TypeScript",
   //   "has_issues": true,

   return (
      <div className={styles.user_repos}>
         <Title type="h2">{PullRequestIcon} Repos</Title>

         <div className={styles.user_repos_list}>
            <div className={styles.user_repos_list_inner}>

               {allrepose.map((repo) => {
                  if (!repo.language) return null
                  return (
                     <div className={styles.user_repo_item}>
                        <Title type="h3"><a href={repo.html_url} target="_blank"> {repo.name}</a> </Title>
                        <P size="x_small">{DateIcon} Created: {new Date(repo.created_at).toLocaleDateString()}</P>
                        <P size="x_small">{DateIcon} Pushed:  {new Date(repo.pushed_at).toLocaleDateString()}</P>
                        <P size="x_small">{DateIcon} Updated: {new Date(repo.updated_at).toLocaleDateString()}</P>

                        <Title type="h4">{languageIcons[repo.language]} {repo.language}</Title>
                        <P size="x_small">{repo.description}</P>

                        <div className={styles.user_repo_item_stats}>
                           <span>
                              {StarIcon} Stars:
                              <Badge color={repo.stargazers_count > 0 ? "green" : "red"}>{repo.stargazers_count}</Badge>
                           </span>
                           <span>
                              {FollowIcon} Watchers:
                              <Badge color={repo.watchers_count > 0 ? "green" : "red"}>{repo.watchers_count}</Badge>
                           </span>
                           <span>
                              {IssueIcon} Open issues:
                              <Badge color={repo.open_issues_count > 0 ? "green" : "red"}>{repo.open_issues_count}</Badge>
                           </span>
                           <span>
                              {ForkIcon} Forks:
                              <Badge color={repo.forks_count > 0 ? "green" : "red"}>{repo.forks_count}</Badge>
                           </span>
                        </div>
                     </div>
                  )
               })}
            </div>

         </div>
      </div>
   )
}


