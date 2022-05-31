import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes, DetailedHTMLProps, ReactNode, useState, useEffect } from "react"
import { useAppContext } from "../../context/app.context"
import { events } from "../../fake-db/users"
import { EventIcon, MinusIcon, PlusGreenIcon } from "../../icons"
import { _UserLikeOwner } from "../../models/UserLikeOwner"
import { convertArrayToObject } from "../../utils/convert"
import { timeDifference } from "../../utils/date"
import Button from "../Button/Button"
import P from "../P/P"
import Title from "../Titles/Title"
import styles from "./UserEvents.module.css"

interface UserEventsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   // users: _UserLikeOwner[]
}



// {
//    "id": "21674340941",
//    "type": "PushEvent",
//    "actor": {
//       "id": 2496253,
//       "login": "nirkaufman",
//       "display_login": "nirkaufman",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/nirkaufman",
//       "avatar_url": "https://avatars.githubusercontent.com/u/2496253?"
//    },
//    "repo": {
//       "id": 489766783,
//       "name": "nirkaufman/rlp_start",
//       "url": "https://api.github.com/repos/nirkaufman/rlp_start"
//    },
// payload: {
//    "push_id": 9824722911,
//    "size": 1,
//    "distinct_size": 1,
//    "ref": "refs/heads/master",
//    "head": "71b3adc40efdf633fc199eb61816fc203cebdce0",
//    "before": "1dcbdab5f2636a0fccfe2212fdfb18f4437064f5",
//    "commits": [
//       {
//          "sha": "71b3adc40efdf633fc199eb61816fc203cebdce0",
//          "author": {
//             "email": "nir.k@next-insurance.com",
//             "name": "nir.k"
//          },
//          "message": "ref and more",
//          "distinct": true,
//          "url": "https://api.github.com/repos/nirkaufman/rlp_start/commits/71b3adc40efdf633fc199eb61816fc203cebdce0"
//       }
//    ]
// },
//    "public": true,
//    "created_at": "2022-05-08T13:19:14Z"
// },

export default function UserEvents({ }: UserEventsProps): JSX.Element {

   return (
      <div>
         <Title type="h3"> {EventIcon} User Events <span style={{ fontSize: "13px", color: "#888" }} >(last 90 days)</span></Title>

         {events.map((event) => {
            return (
               <div key={event.id} className={styles.user_event_item}>
                  <P size="medium">
                     <span>
                        {timeDifference(new Date().getTime(), new Date(event.created_at).getTime())}
                     </span>
                     {event.type} <span>to</span>

                     <Link href={event.repo.url}><a href={event.repo.url}>{event.repo.name}</a></Link>
                  </P>



                  {event.payload.commits &&
                     <div>
                        <P size="small">Commits</P>
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
