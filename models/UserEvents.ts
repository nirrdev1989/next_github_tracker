import { _UserLikeOwner } from "./UserLikeOwner"

export interface _GitUserEvents {
   actor: _Actor
   created_at: string
   id: string
   payload: _Payload
   public: boolean
   repo: _Repo
   type: string
}


export interface _Commits {
   author: {
      email: string,
      name: string
   }
   distinct: boolean
   message: string
   sha: string
   url: string
}


export interface _Repo {
   id: number
   name: string
   url: string
}


export interface _Comment {
   author_association: string
   body: string
   created_at: string
   html_url: string
   id: number
   issue_url: string
   node_id: string
   performed_via_github_app: any
   updated_at: string
   url: string
}


export interface _Issue {
   active_lock_reason: any
   assignee: any
   assignees: []
   author_association: string
   body: string
   closed_at: any
   comments: number
   comments_url: string
   created_at: string
   events_url: string
   html_url: string
   id: number
   labels: []
   labels_url: string
   locked: boolean
   milestone: any
   node_id: string
   number: number
   performed_via_github_app: any
   repository_url: string
   state: string
   title: string
   updated_at: string
   url: string
   user: _UserLikeOwner
}

export interface _Payload {
   description: string
   master_branch: string
   pusher_type: string
   ref_type: string
   action: string
   comment: Comment
   forkee: _Forkee
   issue: _Issue
   before: string
   commits: _Commits[]
   distinct_size: number
   head: string
   push_id: number
   ref: string
   size: number
}


export interface _Actor {
   avatar_url: string
   display_login: string
   gravatar_id: string
   id: number
   login: string
   url: string
}


export interface _Forkee {
   archive_url: string
   archived: false
   assignees_url: string
   blobs_url: string
   branches_url: string
   clone_url: string
   collaborators_url: string
   comments_url: string
   commits_url: string
   compare_url: string
   owner: _UserLikeOwner
   contents_url: string
   contributors_url: string
   created_at: string
   default_branch: string
   deployments_url: string
   description: any
   disabled: boolean
   downloads_url: string
   events_url: string
   fork: boolean
   forks: number
   forks_count: number
   forks_url: string
   full_name: string
   git_commits_url: string
   git_refs_url: string
   git_tags_url: string
   git_url: string
   has_downloads: boolean
   has_issues: boolean
   has_pages: boolean
   has_projects: boolean
   has_wiki: boolean
   homepage: any
   hooks_url: string
   html_url: string
   id: number
   issue_comment_url: string
   issue_events_url: string
   issues_url: string
   keys_url: string
   labels_url: string
   language: any
   languages_url: string
   license: null
   merges_url: string
   milestones_url: string
   mirror_url: null
   name: string
   node_id: string
   notifications_url: string
   open_issues: number
   open_issues_count: number
   private: boolean
   public: boolean
   pulls_url: string
   pushed_at: string
   releases_url: string
   size: number
   ssh_url: string
   stargazers_count: number
   stargazers_url: string
   statuses_url: string
   subscribers_url: string
   subscription_url: string
   svn_url: string
   tags_url: string
   teams_url: string
   trees_url: string
   updated_at: string
   url: string
   watchers: number
   watchers_count: number
}