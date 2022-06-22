import { useState, useEffect } from 'react';
// import Axios from '../utils/axios';
import { getData } from '../utils/fetcher';
import { progressBarConfig } from '../utils/progress-bar';


export interface ApiREsult<T> {
   result: T
}
const progressBar = progressBarConfig()

function useAxios(deps: any[]) {
   const [result, setResult] = useState<ApiREsult<any>>(null);
   const [error, setError] = useState<string>('');

   function fetcher(url, method, body = null) {
      progressBar.start()
      getData(url, (error, data) => {
         if (error) {
            setError(error)
            progressBar.done()
         } else {
            setResult(data)
            progressBar.done()
         }
      })

   }

   // useEffect(() => {
   // }, deps);

   return { result, error, fetcher };
};

export default useAxios;
