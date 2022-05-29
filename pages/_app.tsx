import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { ThemeContextProvider } from '../context/theme.context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  useEffect(() => {
    if (document.body) {
      console.log(document.body)
    }
  }, [])


  return <>
    <Head>
      <title>Top</title>
      {/* <meta name="description" content="Generated by create next app" /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  </>
}

export default MyApp
