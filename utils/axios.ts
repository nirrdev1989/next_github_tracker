import axios from 'axios'
import Cookie from "js-cookie"
import { errorToast } from './toast'

let headers = {}

if (Cookie.get("jwt_token")) {
   headers = {
      "Accept": "application/vnd.github.v3+json",
      // "Accept": "application/vnd.github.cloak-preview",
      "Authorization": `token ${Cookie.get("jwt_token")}`
   }
} else {
   headers = {
      "Accept": "application/vnd.github.v3+json",
   }
}

const Axios = axios.create({
   baseURL: 'https://api.github.com',
   // withCredentials: true,
   headers: headers
})

Axios.interceptors.request.use((request) => {
   return request
}, (error) => {
   return Promise.reject(error)
})

Axios.interceptors.response.use((response) => {
   return response
}, (error) => {
   // console.log('AXIOS MIDDALEWARE RESPONSE ERROR: ', error.response)
   const message = error.response?.data?.message || "Server error"

   errorToast(message)

   return Promise.reject(message)
})

export default Axios
