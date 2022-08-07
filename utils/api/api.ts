import Axios from "../axios";
import { _GitHubEvents } from "../../models/GithubEvents";
import { _GithubGist } from "../../models/GithubGists";
import { _GitHubRepo, _GithubRepoIssue } from "../../models/GithubRepo";
import { _GithubUserLikeOwner } from "../../models/GithubUserLikeOwner";
import { _SearchResults } from "../../models/Search";

export async function getSearchUsers(url: string): Promise<_GithubUserLikeOwner[]> {
   const { data } = await Axios.get<_SearchResults<_GithubUserLikeOwner>>(url)
   return data["items"]
}

export async function getSearchRepos(url: string): Promise<_GitHubRepo[]> {
   const { data } = await Axios.get<_SearchResults<_GitHubRepo>>(url)
   return data["items"]
}

export async function getUserGists(url: string): Promise<_GithubGist[]> {
   const { data } = await Axios.get<_GithubGist[]>(url)
   return data
}

export async function getUserRepos(url: string): Promise<_GitHubRepo[]> {
   const { data } = await Axios.get<_GitHubRepo[]>(url)
   return data
}

export async function getUserEvents(url: string): Promise<_GitHubEvents[]> {
   const { data } = await Axios.get<_GitHubEvents[]>(url)
   return data
}

export async function getUserFollowers(url: string): Promise<_GithubUserLikeOwner[]> {
   const { data } = await Axios.get<_GithubUserLikeOwner[]>(url)
   return data
}

export async function getRepoIssues(url: string): Promise<_GithubRepoIssue[]> {
   const { data } = await Axios.get<_GithubRepoIssue[]>(url)
   return data
}
