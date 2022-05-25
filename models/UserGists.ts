export interface _Gist {
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
   owner: _Owner
   public: true
   truncated: boolean
   updated_at: string
   url: string
   user: any
}


export interface _Owner {
   avatar_url: string
   events_url: string
   followers_url: string
   following_url: string
   gists_url: string
   gravatar_id: string
   html_url: string
   id: number
   login: string
   node_id: string
   organizations_url: string
   received_events_url: string
   repos_url: string
   site_admin: boolean
   starred_url: string
   subscriptions_url: string
   type: string
   url: string
}