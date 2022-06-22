import axios from 'axios'

const Axios = axios.create({
   baseURL: 'https://api.github.com',
   // withCredentials: true,
   headers: {
      // "Accept": "application/vnd.github.v3+json",
      "Accept": "application/vnd.github.cloak-preview",
      "Authorization": `token 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`
   },
})

Axios.interceptors.request.use((request) => {
   return request
}, (error) => {
   return Promise.reject(error)
})

Axios.interceptors.response.use((response) => {
   const { url, method } = response.config
   return response
}, (error) => {
   // console.log('AXIOS MIDDALEWARE RESPONSE ERROR: ', error.response)
   const message = error.response?.data?.message || "Server error"

   return Promise.reject(message)
})

export default Axios
