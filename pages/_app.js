import '../styles/globals.css'
// import { AppProps } from 'next/app'
import {MoralisProvider} from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl={process.env.NEXT_PUBLIC_SERVER}
    appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  
  )
}

export default MyApp