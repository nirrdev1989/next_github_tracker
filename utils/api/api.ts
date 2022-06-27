
//  if (name === "users") {
//    url = `/search/users?q=${searchValue}&page=${pageNumber}`
// } else if (name === "repos") {
//    url = `/search/repositories?q=${searchValue}&page=${pageNumber}`

import { _SearchResults } from "../../models/Search"
import { httpCall } from "../fetcher"

export const apiCalls = {
   searchRepos: async function (searchValue: string, pageNumber: number): Promise<_SearchResults<any>> {
      const { data, error } = await httpCall(`/search/repositories?q=${searchValue}&page=${pageNumber}`)

      return data
   },
   searchUsers: async function (searchValue: string, pageNumber: number): Promise<_SearchResults<any>> {
      const { data, error } = await httpCall(`/search/users?q=${searchValue}&page=${pageNumber}`)

      return data
   }
}