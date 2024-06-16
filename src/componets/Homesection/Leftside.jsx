import React from 'react'
// import ChartsBar from './charts/Chartbar'
// import CoinInfo from './charts/Chartmain'
//  import LineChart from './charts/Chartmain'
// import Chart from './charts/Chartmain'
import Charts from './charts/Chartmain'
import TradingViewWidget from '../Chartinf'
// import CryptoChart from './charts/Chartpage'
//  import TradingViewWidget from "../../componets/Chartinf"
export const Leftside = () => {
  return (
    <div className='w-full h-full'>
    {/* <Charts/> */}
    
    <TradingViewWidget/>

    </div>
  )
}
