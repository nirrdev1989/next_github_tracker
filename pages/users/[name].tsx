import Axios from "../../utils/axios";
import { GetServerSideProps } from 'next'
import UserProfile from "../../components/Users/UserProfile/UserProfile";
import { withLayout } from '../../layout/Layout'
import { _GithubUserProfile } from '../../models/GithubUserProfile'
import { _GitHubRepo } from "../../models/GithubRepo";
import UserEvents from "../../components/Users/UserEvents/UserEvents";
import { _GitHubEvents } from "../../models/GithubEvents";
import PageContainer from "../../components/Containers/PageContainer/PageContainer";
import { TabsWrapper } from "../../components/Tabs/Tabs";
import { PaginateWrapper } from "../../components/Paginate/Paginate";
import { CodeIcon, EventIcon, FollowIcon, RepoIcon } from "../../icons";
import ReposSearchList from "../../components/Repos/ReposSearchList/ReposSearchList";
import UsersSearchList from "../../components/Users/UsersSearchList/UsersSearchList";
import GistsList from "../../components/Gists/GistsList";
import { getUserEvents, getUserFollowers, getUserRepos, getUserGists } from "../../utils/api/api";

interface UserProfileProps extends Record<string, unknown> {
   userProfile: _GithubUserProfile
}

function UserProfilePage({ userProfile }: UserProfileProps): JSX.Element {
   const headers = []

   headers.push(
      <>
         {EventIcon}
         Events
         <span>(last 90 days)</span>
      </>
   )

   if (userProfile.public_repos > 0) {
      headers.push(<>
         {RepoIcon}
         Repos
         <span>{userProfile.public_repos}</span>
      </>)
   }
   if (userProfile.followers > 0) {
      headers.push(<>
         {FollowIcon}
         Followers
         <span>{userProfile.followers}</span>
      </>)
   }


   if (userProfile.public_gists > 0) {
      headers.push(<>
         {CodeIcon}
         Gists
         <span>{userProfile.public_gists}</span>
      </>)
   }

   return (
      <PageContainer title={userProfile.name} description="user profile github events gists repositories">
         <UserProfile userProfile={userProfile} />

         <TabsWrapper initialActive={0}>
            <TabsWrapper.Tabs
               headers={headers}
            >

               <PaginateWrapper url={`/users/${userProfile.login}/events?page=`} fetchFn={getUserEvents}>
                  <PaginateWrapper.PaginateActions />
                  <PaginateWrapper.List withSearch={true} searchProp="type">
                     <UserEvents userProfile={userProfile} />
                  </PaginateWrapper.List>
               </PaginateWrapper>

               <PaginateWrapper url={`/users/${userProfile.login}/repos?page=`} fetchFn={getUserRepos}>
                  <PaginateWrapper.PaginateActions />
                  <PaginateWrapper.List withSearch={true} searchProp="name" >
                     <ReposSearchList />
                  </PaginateWrapper.List>
               </PaginateWrapper>

               <PaginateWrapper url={`/users/${userProfile.login}/followers?page=`} fetchFn={getUserFollowers}>
                  <PaginateWrapper.PaginateActions />
                  <PaginateWrapper.List withSearch={true} searchProp="login">
                     <UsersSearchList />
                  </PaginateWrapper.List>
               </PaginateWrapper>

               <PaginateWrapper url={`/users/${userProfile.login}/gists?page=`} fetchFn={getUserGists}>
                  <PaginateWrapper.PaginateActions />
                  <PaginateWrapper.List withSearch={true} searchProp="description">
                     <GistsList />
                  </PaginateWrapper.List>
               </PaginateWrapper>

            </TabsWrapper.Tabs>
         </TabsWrapper>
      </PageContainer>
   )
}


export default withLayout(UserProfilePage)


export const getServerSideProps: GetServerSideProps<UserProfileProps> = async (context) => {

   let userProfileResult = null

   try {
      const [user] = await Promise.all([
         Axios.get(`/users/${context.params.name}`),
      ])

      userProfileResult = user.data
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
      }
   }
}
