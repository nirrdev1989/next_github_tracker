import Axios from "./axios"
import { progressBarConfig } from "./progress-bar"

const progressBar = progressBarConfig()

export async function httpCall(url: string) {
   progressBar.start()

   try {
      const { data } = await Axios.get(url)
      console.log(data.data)
      progressBar.done()

      return { data: data, error: null }
   } catch (error) {
      progressBar.done()

      return { data: null, error: error }
   }
}

export async function getData(url: string, callData: Function) {
   progressBar.start()
   try {
      const { data } = await Axios.get(url)
      console.log("fetcher", data)
      progressBar.done()
      callData(null, data)
   } catch (error) {
      callData(error, null)
      progressBar.done()

   }
}