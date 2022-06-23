import Image from "next/image"
import { HTMLAttributes, DetailedHTMLProps, useState, useEffect } from "react"
import { EventIcon, LeftArrowIcon, PullRequestIcon, RepoIcon, RightArrowIcon } from "../../../icons"
import { _GitHubEvents } from "../../../models/GithubEvents"
import { _GithubUserLikeOwner } from "../../../models/GithubUserLikeOwner"
import { _GithubUserProfile } from "../../../models/GithubUserProfile"
import { timeDifference } from "../../../utils/date"
import { getData } from "../../../utils/fetcher"
import ReadMore from "../../ReadMore/ReadMore"
import Button from "../../util-components/Button/Button"
import MyLink from "../../util-components/MyLink.tsx/MyLink"
import P from "../../util-components/P/P"
import Title from "../../util-components/Titles/Title"
import styles from "./UserEvents.module.css"


interface UserEventsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   userProfile: _GithubUserProfile | _GithubUserLikeOwner
   eventsUrl: string
   events: _GitHubEvents[]
}



export default function UserEvents({ userProfile, eventsUrl, events }: UserEventsProps): JSX.Element {
   const [data, setData] = useState<_GitHubEvents[]>([])
   const [pageNumber, setPageNumber] = useState<number>(0)

   useEffect(() => {
      console.log(pageNumber, data.length)
      if (pageNumber >= 1) {
         getData(
            `${eventsUrl}?page=${pageNumber}`,
            (error, data: _GitHubEvents[]) => {
               setData(() => data)
            })
      }
   }, [pageNumber])

   useEffect(() => {
      setData(() => [])
   }, [userProfile.login])

   let currentEvents = data.length ? data : events

   return (
      <div>
         <div className={styles.user_events_header}>
            <div>
               <Title type="h3">
                  {EventIcon} Events <span style={{ fontSize: "13px", color: "#888" }} >(last 90 days)</span>
               </Title>
            </div>
            <div>
               <Button disabled={pageNumber <= 1} color="main_transparent" onClick={() => {
                  setPageNumber((prev) => prev - 1)
               }}>
                  {LeftArrowIcon}
               </Button>
               <Button disabled={currentEvents.length < 30} color="main_transparent" onClick={() => {
                  setPageNumber((prev) => prev === 0 ? prev + 2 : prev + 1)
               }}>
                  {RightArrowIcon}
               </Button>

               <small>Page-{pageNumber === 0 ? 1 : pageNumber}</small>
            </div>
         </div>


         <div className={styles.user_events}>
            {currentEvents.length > 0 && currentEvents.map((event) => {
               return (
                  <div key={event.id} className={styles.user_event_item}>
                     <div className={styles.marked}>
                        {timeDifference(new Date().getTime(), new Date(event.created_at).getTime())}
                     </div>
                     <div className={styles.user_event_item_info}>
                        <span className={styles.user_event_img}>
                           <Image style={{ borderRadius: "50%" }} width={35} height={35} objectFit="cover" src={event.actor.avatar_url} />
                        </span>

                        <span>
                           <MyLink to={`/users/${event.actor.login}`}>
                              {event.actor.login}
                           </MyLink>
                        </span>

                        <span className={styles.user_event_item_type}>{event.type}</span>

                        <span>
                           {RepoIcon}
                           <MyLink
                              style={{ marginLeft: "var(--size-0-5-rem)" }}
                              disabled={event.payload.action === "started" || userProfile.type === "Bot"}
                              to={`/repos/${event.repo.name.split("/")[1]}?user=${event.actor.login}`}>
                              {event.repo.name}
                           </MyLink>
                        </span>
                     </div>
                     {event.payload.commits &&
                        <div className={styles.user_event_item_commits}>
                           <P size="small">Commits:</P>
                           {event.payload?.commits.map((commit, i) => {
                              return (
                                 <span className={styles.user_event_commit_item} key={commit.sha}>
                                    <strong>{i + 1}.</strong>
                                    <ReadMore text={commit.message} lengthLimit={100} />
                                 </span>
                              )
                           })}
                        </div>
                     }
                  </div>
               )
            })}
         </div>
      </div>
   )
}
