import { DesignSystemProvider } from '@planda/design-system'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>JK</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DesignSystemProvider defaultTheme={'blueberry'} >
      <Component {...pageProps} />
    </DesignSystemProvider>
  </>
}
