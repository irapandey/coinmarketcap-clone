import '../styles/globals.css'
// import { AppProps } from 'next/app'
import {MoralisProvider} from 'react-moralis'
import {CoinMarketProvider} from '../context/context'
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl="https://y7jyucovp2jp.usemoralis.com:2053/server"
    appId="6BFCZVHS3D8F0Q0hdoQSJkAObWSeEAQyKvnzMJI6"
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
      
    </MoralisProvider>
  
  )
}

export default MyApp
