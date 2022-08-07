import { HTMLAttributes, DetailedHTMLProps } from "react"
import { FileIcon, InfoIcon } from "../../icons"
import { _GithubGist } from "../../models/GithubGists"
import { timeDifference } from "../../utils/date"
import Atag from "../util-components/Atag/Atag"
import P from "../util-components/P/P"
import styles from "./GistsList.module.css"

interface GistsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   data?: _GithubGist[]
}

export default function GistsList({ data: gists }: GistsListProps) {
   return (
      <div className={styles.gists}>
         {gists.length > 0 && gists.map((gist) => {
            return (
               <GistsItem key={gist.node_id} gist={gist} />
            )
         })}
      </div>
   )
}


interface GistItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   gist: _GithubGist
}
export function GistsItem({ gist }: GistItemProps) {
   return (
      <div className={styles.gist_item}>
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
               <Atag href={gist.html_url}>
                  Link to gist
               </Atag>
            </span>
         </div>

         {Object.keys(gist.files).length > 0 &&
            <div className={styles.gist_item_files_container}>
               <P size="small">Files:</P>
               <div className={styles.gist_item_files}>
                  {Object.keys(gist.files).map((fileName) => {
                     return <span className={styles.gist_item_files_item} key={fileName}>
                        {FileIcon}
                        <Atag href={gist.files[fileName].raw_url}>
                           {fileName}
                        </Atag>
                     </span>
                  })}
               </div>
            </div>}

         {gist.description &&
            <P size="x_small">
               <span className={styles.gist_item_description}>
                  {gist.description}
               </span>
            </P>}

      </div>
   )
}