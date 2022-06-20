import { _GithubUserLikeOwner } from "./GithubUserLikeOwner"

export interface _GithubGist {
   comments: number
   comments_url: string
   commits_url: string
   created_at: string
   description: string
   files: any
   forks_url: string
   git_pull_url: string
   git_push_url: string
   html_url: string
   id: string
   node_id: string
   owner: _GithubUserLikeOwner
   public: true
   truncated: boolean
   updated_at: string
   url: string
   user: any
}
