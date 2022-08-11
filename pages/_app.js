import '../styles/globals.css'
// import { AppProps } from 'next/app'
import {MoralisProvider} from 'react-moralis'
import {CoinMarketProvider} from '../context/context'
import {GunProvider} from '../context/gunContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl="https://y7jyucovp2jp.usemoralis.com:2053/server"
    appId="6BFCZVHS3D8F0Q0hdoQSJkAObWSeEAQyKvnzMJI6"
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  
  )
}

export default MyApp
