import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { AppContextProvider } from '../context/app.context'
import { ThemeContextProvider } from '../context/theme.context'
import { useRouter } from 'next/router'
import { progressBarConfig } from '../utils/progress-bar'
import 'nprogress/nprogress.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {

    function start() {
      NProgress.start()
      document.body.style.pointerEvents = "none"
    }

    function done() {
      NProgress.done()
      setTimeout(() => {
        document.body.style.pointerEvents = ""
      }, 1000)
    }

    const NProgress = progressBarConfig()
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', done)
    router.events.on('routeChangeError', done)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', done)
      router.events.off('routeChangeError', done)
    }
  }, [router])

  return <>
    <Head>
      <title>Top</title>
      {/* <meta name="description" content="Generated by create next app" /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeContextProvider>
  </>
}


export default MyApp;

