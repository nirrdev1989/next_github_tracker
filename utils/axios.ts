import axios from 'axios'

const Axios = axios.create({
   baseURL: 'https://api.github.com',
   // withCredentials: true,
   headers: {
      "Accept": "application/vnd.github.v3+json"
   },
})

Axios.interceptors.request.use((request) => {
   console.log('AXIOS MIDDALEWARE REQUEST: ', request)
   // request.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
   return request
}, (error) => {
   return Promise.reject(error)
})

Axios.interceptors.response.use((response) => {
   console.log('AXIOS MIDDALEWARE RESPONSE: ', response)
   const { url, method } = response.config
   return response
}, (error) => {
   console.log('AXIOS MIDDALEWARE RESPONSE ERROR: ', error.response)
   const statusText = error.response.statusText
   const statusCode = error.response.status
   const message = error.response.data.message

   return Promise.reject(message)
})

export default Axios
