import Axios from "./axios"


export async function getData(url: string, callData: Function) {
   try {
      const { data } = await Axios.get(url)
      callData(null, data)
   } catch (error) {
      callData(error, null)
   }
}