import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import Button from "../../components/util-components/Button/Button"
import P from "../../components/util-components/P/P"
import Title from "../../components/util-components/Titles/Title"
import { stepsCreateToken } from "../../fake-db/auth"
import { withLayout } from "../../layout/Layout"
import { _GitHubRepo } from "../../models/GithubRepo"
import { _GithubUserLikeOwner } from "../../models/GithubUserLikeOwner"
import Cookie from "js-cookie"
import styles from "../../styles/Auth.page.module.css"
import { errorToast, successToast, warningToast } from "../../utils/toast"
import Head from "next/head"

interface AuthPageProps extends Record<string, unknown> { }

function AuthPage({ }: AuthPageProps): JSX.Element {
   const router = useRouter()
   const tokenInput = useRef<HTMLInputElement>(null)
   const [token, setToken] = useState<string>("")

   function removeToken() {
      if (!token) {
         errorToast("You dose not save token yet")
         return
      }
      Cookie.remove("jwt_token")
      setToken(() => "")
      warningToast("Token is removed")
   }

   function saveToken() {
      const value = tokenInput.current.value
      if (!value) {
         return
      }

      Cookie.set("jwt_token", value)
      successToast("Token is saved")
      router.push({
         pathname: "/"
      })
   }

   useEffect(() => {
      if (Cookie.get("jwt_token")) {
         setToken(() => Cookie.get("jwt_token"))
      }
   }, [])

   return (
      <>
         <Head>
            <title>settings/auth</title>
         </Head>
         <div className={`page_header`}>
            <Title type="h1">Auth</Title>
         </div>

         <div className={styles.auth_token_content}>

            <div className={styles.auth_token_info}>
               <Title type="h2">
                  Creating a personal access token
               </Title>

               <P style={{ color: "var(--main-orange-color)", opacity: 1 }} size="small">
                  * Because the API is limited in requests, you can auth yourself (optional).
               </P>

               <P size="x_small">
                  * You can create a personal access token to use in place of a password with the command line or with the API.
               </P>

               <P size="x_small">
                  * Personal access tokens (PATs) are an alternative to using passwords for authentication to GitHub when using the GitHub API or the command line.
               </P>

               <P size="x_small">
                  * As a security precaution, GitHub automatically removes personal access tokens that haven't been used in a year. To provide additional security, we highly recommend adding an expiration to your personal access tokens.
               </P>

               <P size="x_small">
                  * A token with no assigned scopes can only access public information. To use your token to access repositories from the command line, select repo. For more information, see "Available scopes".
               </P>

               <P size="x_small">
                  * In this application the token will be saved in your cookies and will attached to the requests header
               </P>

               <P size="x_small">

                  * You can remove your token at any time, manually from the browser or click
                  <Button
                     style={{ color: "var(--main-red-color)" }}
                     color="main_transparent"
                     onClick={removeToken}
                  >
                     Remove token
                  </Button>
               </P>
            </div>

            <div className={styles.auth_token_proccess}>
               <Title type="h2">
                  Creating a token
               </Title>

               <div className={styles.auth_token_proccess_steps_container}>
                  {stepsCreateToken.map((step, i) => {
                     return (
                        <P size="x_small" key={i + 100000000000}>
                           <span style={{ borderRadius: "50%", color: "var(--second-green-color)", fontSize: "16px" }}>{i + 1}.</span>
                           <span>
                              {step}
                           </span>
                        </P>
                     )
                  })}
               </div>
            </div>

            <div className={styles.auth_token_save_form}>

               {!token &&
                  <>
                     <input disabled={token !== ""} ref={tokenInput} placeholder="Enter your token" />
                     <Button disabled={token !== ""} color="main_green" onClick={saveToken} >
                        Save
                     </Button>
                  </>}
            </div>
         </div>
      </>
   )
}



export default withLayout(AuthPage)




