import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps } from "react"
import { events } from "../../fake-db/users"
import { EventIcon, PullRequestIcon, RepoIcon, UserIcon } from "../../icons"
import { _GitHubEvents } from "../../models/GithubEvents"
import { _GithubUserLikeOwner } from "../../models/GithubUserLikeOwner"
import { timeDifference } from "../../utils/date"
import MyLink from "../util-components/MyLink.tsx/MyLink"
import P from "../util-components/P/P"
import Title from "../util-components/Titles/Title"
import styles from "./UserEvents.module.css"
// import { convertArrayToObject } from "../../utils/convert"
// import { useAppContext } from "../../context/app.context"

interface UserEventsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   events: _GitHubEvents[]
}

export default function UserEvents({ }: UserEventsProps): JSX.Element {
   // console.log(events[0])
   return (
      <div>
         <Title type="h3"> {EventIcon}  Events <span style={{ fontSize: "13px", color: "#888" }} >(last 90 days)</span></Title>

         {events.map((event) => {
            return (
               <div key={event.id} className={styles.user_event_item}>
                  <P size="medium">
                     <span className={styles.mark}>
                        {timeDifference(new Date().getTime(), new Date(event.created_at).getTime())}
                     </span>
                     <span>{event.type}</span>
                     <span>
                        {UserIcon}
                        <MyLink to={`/users/${event.actor.login}`}>
                           {event.actor.login}
                        </MyLink>
                     </span>
                     <span className={styles.user_event_item_repo}>
                        {PullRequestIcon}
                        <MyLink to={`/repos/${event.repo.name.split("/")[1]}?user=${event.actor.login}`}>
                           {event.repo.name}
                        </MyLink>
                     </span>
                  </P>

                  {event.payload.commits &&
                     <div className={styles.user_event_item_commits}>
                        <P size="x_small">Commits</P>
                        {event.payload?.commits.map((commit) => {
                           return (
                              <span style={{ color: "#888" }} key={commit.sha} >{commit.message}</span>
                           )
                        })}
                     </div>
                  }
               </div>
            )
         })}
      </div>
   )
}
