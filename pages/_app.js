import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import "../styles/background.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Prompts for sensing, making, and navigating public space" />
        <meta name="keywords" content="public space, outdoor game, game, navigation, public and private, The Bentway" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#F1E297" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/apple_splash_2048.png" sizes="2048x2732" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1668.png" sizes="1668x2224" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1536.png" sizes="1536x2048" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_750.png" sizes="750x1334" rel="apple-touch-startup-image" />
        <link href="/icons/apple_splash_640.png" sizes="640x1136" rel="apple-touch-startup-image" />
        <link rel="icon" href="/icons/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/favicon.svg" sizes="any" type="image/svg+xml" />
        <title>Directions to Nowhere in Particular</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
