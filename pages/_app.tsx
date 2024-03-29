import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { AppContextProvider } from '../context/app.context'
import { ToastContainer } from 'react-toastify';
import { progressBarConfig } from '../utils/progress-bar'
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  // const router = useRouter()

  useEffect(() => {
    const NProgress = progressBarConfig()

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
      <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      <title>Top Github Tracker</title>
      <meta name="description" content="repositories users github tracker activities events" />
    </Head>
    <AppContextProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </AppContextProvider>
  </>
}


export default MyApp;

