import Head from 'next/head'
import '../styles/globals.scss'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="Dog web for API fetch test" content="dog random images" />
        <meta name="dog random images" content="dog random images" />
        <title>Dog Web</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
       {/* FONT OPTIMIZATION NEXTJS */}
       <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap" rel="stylesheet"></link>
        </Head>
        {/* end FONT OPTIMIZATION NEXTJS */}
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
