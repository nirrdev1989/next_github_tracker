import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, GetStaticPathsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Title from "../../components/Titles/Title";
import { users } from "../../fake-db/users";
import { withLayout } from '../../layout/Layout'
import { _GithubUserProfile } from '../../models/UserProfile'

interface UserProfileProps extends Record<string, unknown> {
   userProfile: _GithubUserProfile
}

function UserProfile({ userProfile }: UserProfileProps): JSX.Element {
   console.log(userProfile)
   return (
      <div className="page_header">
         <Title type="h1">Profile page</Title>
      </div>
   )
}


export default withLayout(UserProfile)


export const getStaticPaths: GetStaticPaths = async () => {
   const paths = users.map((user) => `/users/${user.userName}`)
   console.log(paths)
   return {
      paths: paths,
      fallback: true
   }
}


export const getStaticProps: GetStaticProps<UserProfileProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
   // console.log(params)
   // const { data } = await axios.get('https://api.github.com/users/' + params.userName)
   if (!params) {
      return {
         notFound: true
      }
   }
   return {
      props: {
         userProfile: {} as _GithubUserProfile
      }
   }
}