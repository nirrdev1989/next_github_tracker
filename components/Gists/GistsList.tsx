import { HTMLAttributes, DetailedHTMLProps } from "react"
import { FileIcon, InfoIcon } from "../../icons"
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
         {gists.length > 0 && gists.map((gist) => {
            return (
               <div key={gist.node_id} className={styles.gist_item}>
                  <div className={styles.gist_item_header}>
                     <span>
                        <span>Created: </span>
                        <span
                           className={styles.marked}>
                           {timeDifference(new Date().getTime(), new Date(gist.created_at).getTime())}
                        </span>
                     </span>
                     <span>
                        <span>Updated: </span>
                        <span
                           className={styles.marked}>
                           {timeDifference(new Date().getTime(), new Date(gist.updated_at).getTime())}
                        </span>
                     </span>
                     <span className={styles.gist_link} >
                        <a href={gist.html_url} target="_black">Link to gist</a>
                     </span>
                  </div>

                  {Object.keys(gist.files).length > 0 &&
                     <div className={styles.gist_item_files_container}>
                        <P size="small">Files:</P>
                        <div className={styles.gist_item_files}>
                           {Object.keys(gist.files).map((fileName) => {
                              return <span className={styles.gist_item_files_item} key={fileName}> {FileIcon} <a target="_blank" rel="noopener" href={gist.files[fileName].raw_url}>{fileName}</a></span>
                           })}
                        </div>
                     </div>
                  }

                  {gist.description &&
                     <P size="x_small">
                        {/* {InfoIcon} */}
                        <span className={styles.gist_item_description}>
                           {gist.description}
                        </span>
                     </P>}

                  {/* <P size="x_small"><span className={styles.gist_item_comments}>Comments: {gist.comments}</span> </P> */}
               </div>
            )
         })}
      </div>
   )
}
