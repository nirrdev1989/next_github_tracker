import { HTMLAttributes, DetailedHTMLProps } from "react"
import styles from "./NoResults.module.css"

interface NoResultsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export default function NoResults({ }: NoResultsProps): JSX.Element {
   return (
      <div className={styles.no_results}>No Results</div>
   )
}
