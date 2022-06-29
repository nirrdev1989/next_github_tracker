import Axios from "../../utils/axios";
import { GetServerSideProps } from 'next'
import UserProfile from "../../components/Users/UserProfile/UserProfile";
import { withLayout } from '../../layout/Layout'
import { _GithubUserProfile } from '../../models/GithubUserProfile'
import { _GitHubRepo } from "../../models/GithubRepo";
import UserEvents from "../../components/Users/UserEvents/UserEvents";
import { _GitHubEvents } from "../../models/GithubEvents";
import PageContainer from "../../components/Containers/PageContainer/PageContainer";

interface UserProfileProps extends Record<string, unknown> {
   userProfile: _GithubUserProfile
   events?: _GitHubEvents[]
}

function UserProfilePage({ userProfile, events }: UserProfileProps): JSX.Element {
   return (
      <PageContainer title={userProfile.name} description="user profile github events gists repositories">
         <UserProfile userProfile={userProfile} />
         <UserEvents events={events} userProfile={userProfile} eventsUrl={`/users/${userProfile.login}/events`} />
      </PageContainer>
   )
}


export default withLayout(UserProfilePage)



export const getServerSideProps: GetServerSideProps<UserProfileProps> = async (context) => {

   let userProfileResult = null
   let eventsResult = null

   try {
      const [user, events] = await Promise.all([
         Axios.get(`/users/${context.params.name}`),
         Axios.get(`/users/${context.params.name}/events`)
      ])

      userProfileResult = user.data
      eventsResult = events.data
   } catch (error) {
      console.log(error)
   }

   if (!userProfileResult) {
      return {
         notFound: true,
      }
   }

   return {
      props: {
         userProfile: userProfileResult,
         events: eventsResult,
      }
   }
}
