import { HTMLAttributes, DetailedHTMLProps } from "react"
import { InfoIcon } from "../../icons"
import { _GithubGist } from "../../models/GithubGists"
import { timeDifference } from "../../utils/date"
import P from "../util-components/P/P"
import styles from "./GistsList.module.css"

interface GistsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   gists: _GithubGist[]
}
export default function GistsList({ gists }: GistsListProps) {
   return (
      <div className={styles.gists}>
         {gists.map((gist) => {
            return (
               <div key={gist.node_id} className={styles.gist_item}>
                  <P size="x_small">
                     Created: <span className={styles.marked}>{timeDifference(new Date().getTime(), new Date(gist.created_at).getTime())}</span>
                     Updated: <span className={styles.marked}> {timeDifference(new Date().getTime(), new Date(gist.updated_at).getTime())}</span>
                     <span className={styles.gist_link} >
                        <a href={gist.html_url} target="_black">Link to gist</a>
                     </span>
                  </P>
                  {Object.keys(gist.files).length > 0 &&
                     <div className={styles.gist_item_files}>
                        <P size="x_small">Files:</P>
                        {Object.keys(gist.files).map((fileName) => {
                           return <span key={fileName}>{fileName}</span>
                        })}
                     </div>
                  }

                  {gist.description &&
                     <P>
                        {InfoIcon}
                        <span className={styles.gist_item_description}>
                           {gist.description}
                        </span>
                     </P>}

                  <P size="x_small"><span className={styles.gist_item_comments}>Comments: {gist.comments}</span> </P>
               </div>
            )
         })}
      </div>
   )
}
