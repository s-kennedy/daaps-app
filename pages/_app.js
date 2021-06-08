import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import "../styles/background.css"


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === "production" && typeof window !== 'undefined') {
      const httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
      if(httpTokens) {
          window.location.replace('https://' + httpTokens[1]);
      }
    }
  })

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('PEYEISUN', {
      includedDomains: ['www.directionstonowhere.com'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Directions to Nowhere in Particular is a game of chance that alters the ways you sense, make, and navigate public space." />
        <meta name="keywords" content="public space, outdoor game, game, navigation, public and private, The Bentway" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#004B55" />
        <meta property="og:title" content="Directions to Nowhere in Particular" />
        <meta property="og:description" content="Directions to Nowhere in Particular is a game of chance that alters the ways you sense, make, and navigate public space." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.directionstonowhere.com/images/og-image.png" />
        <meta property="og:url" content="https://www.directionstonowhere.com" />
        <meta name="google-site-verification" content="x2dQBrS115_1otSk3iMvdutNuEy39nt2KQ73DCKRK3Y" />

        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/apple_splash_2048.png" sizes="2048x2732" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1668.png" sizes="1668x2224" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1536.png" sizes="1536x2048" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_750.png" sizes="750x1334" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_640.png" sizes="640x1136" rel="apple-touch-startup-image" />
        <link rel="icon" href="/icons/favicon-v3.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="icons/favicon-v3.png" />
        <link rel="apple-touch-icon" href="icons/favicon-v3.svg" sizes="any" type="image/svg+xml" />

        <title>Directions to Nowhere in Particular</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
