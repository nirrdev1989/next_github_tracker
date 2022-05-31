

import { CodeIcon, DateIcon, EmailIcon, FollowIcon, GithubIcon, InfoIcon, ListCardIcon, LocationIcon, PullRequestIcon, StarIcon, TwitterIcon, WorkIcon } from "../../icons"
import { _GithubUserProfile } from "../../models/UserProfile"
import { localDate } from "../../utils/date"
import Badge from "../Badge/Badge"
import P from "../P/P"
import Title from "../Titles/Title"
import styles from "./UserProfile.module.css"

import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"


let userProfile: _GithubUserProfile = {
   login: 'mschwarzmueller',
   id: 16095164,
   node_id: 'MDQ6VXNlcjE2MDk1MTY0',
   avatar_url: 'https://avatars.githubusercontent.com/u/16095164?v=4',
   gravatar_id: '',
   url: 'https://api.github.com/users/mschwarzmueller',
   html_url: 'https://github.com/mschwarzmueller',
   followers_url: 'https://api.github.com/users/mschwarzmueller/followers',
   following_url: 'https://api.github.com/users/mschwarzmueller/following{/other_user}',
   gists_url: 'https://api.github.com/users/mschwarzmueller/gists{/gist_id}',
   starred_url: 'https://api.github.com/users/mschwarzmueller/starred{/owner}{/repo}',
   subscriptions_url: 'https://api.github.com/users/mschwarzmueller/subscriptions',
   organizations_url: 'https://api.github.com/users/mschwarzmueller/orgs',
   repos_url: 'https://api.github.com/users/mschwarzmueller/repos',
   events_url: 'https://api.github.com/users/mschwarzmueller/events{/privacy}',
   received_events_url: 'https://api.github.com/users/mschwarzmueller/received_events',
   type: 'User',
   site_admin: false,
   name: 'Maximilian ',
   company: null,
   blog: '',
   location: null,
   email: null,
   hireable: null,
   bio: null,
   twitter_username: null,
   public_repos: 43,
   public_gists: 0,
   followers: 5452,
   following: 0,
   created_at: '2015-12-01T06:11:29Z',
   updated_at: '2022-03-16T06:23:35Z'
}



interface UserProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   userProfile: _GithubUserProfile
}


export default function UserProfile({ userProfile }: UserProfileProps): JSX.Element {
   return (
      <div className={styles.user_profile}>
         <div className={styles.user_profile_stats}>
            <P size="small">
               {FollowIcon} Followers:
               <Badge color={userProfile.followers > 0 ? "green" : "red"}>{userProfile.followers}</Badge>
            </P>
            <P size="small">
               {PullRequestIcon} Public repos:
               <Badge color={userProfile.public_repos > 0 ? "green" : "red"}>{userProfile.public_repos}</Badge>
            </P>
            <P size="small">
               {CodeIcon} Public gists:
               <Badge color={userProfile.public_gists > 0 ? "green" : "red"}>{userProfile.public_gists}</Badge>
            </P>
         </div>
         <P size="small">{DateIcon} Created: {new Date(userProfile.created_at).toLocaleDateString()}</P>
         <P size="small">{LocationIcon} Location: {userProfile.location || "not fiiled"}</P>
         <P size="small">{WorkIcon} Company: {userProfile.company || "not fiiled"}</P>
         <P style={{ maxHeight: "60px", overflowX: "hidden" }} size="small">{InfoIcon} Bio: {userProfile.bio || "not fiiled"}</P>
      </div>
   )
}
