// Import necessary modules and components
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import Preloader from '@/Components/shared/Preloader'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  // State to manage loading status
  const [loading, setLoading] = useState(true)

  // Effect to handle loading timeout, simulating a preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* SEO and metadata configuration */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="HandheldFriendly" content="true" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* SEO metadata */}
        <title>Jana | Home</title>
        <meta
          name="description"
          content="The name “Jana” signifies accomplishments or the beginning of something greater. In the rich tapestry of UAE traditions, catering plays a vital role in warmly welcoming guests with the finest culinary delights. It reflects the essence of hospitality deeply rooted in Emirate culture."
        />
        <meta
          name="keywords"
          content="Jana, catering, UAE, hospitality, culinary delights, Emirate culture"
        />
        <meta name="author" content="https://beyin.me" />
        <meta name="copyright" content="https://beyin.me" />

        {/* Open Graph */}
        <meta property="og:locale" content="ar" />
        <meta property="og:url" content="https://jana-theta.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jana Home" />
        <meta property="og:title" content="Jana Home" />
        <meta
          property="og:description"
          content="The name “Jana” signifies accomplishments or the beginning of something greater. In the rich tapestry of UAE traditions, catering plays a vital role in warmly welcoming guests with the finest culinary delights."
        />
        <meta
          property="og:image"
          content="https://jana-theta.vercel.app/logo-nav.svg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jana Home" />
        <meta
          name="twitter:description"
          content="The name “Jana” signifies accomplishments or the beginning of something greater. In the rich tapestry of UAE traditions, catering plays a vital role in warmly welcoming guests with the finest culinary delights."
        />
        <meta
          name="twitter:image"
          content="https://jana-theta.vercel.app/logo-nav.svg"
        />
      </Head>

      {/* Main Application */}
      <>
        {!loading ? (
          <>
            {/* Render the main component and additional scripts once loading is complete */}
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar
              closeOnClick={true}
              pauseOnHover={true}
              draggable={true}
              theme="dark"
            />
          </>
        ) : (
          // Show preloader while loading is true
          <Preloader />
        )}
      </>
    </>
  )
}
