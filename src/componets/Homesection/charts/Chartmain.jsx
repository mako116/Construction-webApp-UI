import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Charts = () => {
  const [data, setData] = useState([]);

  const numbers =[
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },
    {
        number:"0.00933"
    },

  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );
        setData(response.data.prices);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = data.map(([timestamp, price]) => price);
  if (chartData.length === 0) return null;

  const chartHeight = 190;
  const chartWidth = 900;

  const wavePath = (strokeWidth) => {
    const points = [];
    for (let i = 0; i < chartData.length; i++) {
      const x = (i / (chartData.length - 1)) * chartWidth;
      const y = (chartData[i] - chartData[0]) / (chartData[chartData.length - 1] - chartData[0]) * chartHeight;
      points.push(`${x},${y}`);
    }
    return `M${points.join(' ')}`;
  };

  return (
    <div className='flex   w-full h-screen lg:h-full'>
   
   <div className="w-full h-full items-center flex  justify-center">
  <svg className="chart" viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ overflow: 'visible' }}>
    {/* Shades */}
    <path d={wavePath(3)} fill="none" stroke="#f0f0f0" strokeWidth="2" />

    {/* Main Line */}
    <path d={wavePath(1)} fill="none" stroke="url(#grad)" strokeWidth="5" filter="url(#blur)" />

    {/* Gradient */}
    <linearGradient id="grad">
      <stop offset="0%" stopColor="green" />
      <stop offset="100%" stopColor="red" />
    </linearGradient>
    {/* Blur filter */}
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
    </filter>
  </svg>
</div>
    <div className=" numbers  text-[#fff] h-full justify-between flex flex-col py-[10px] text-[#978E8E] border-l-[2px] border-r-[2px] border-[#212121] px-[10px]">
        {numbers.map((items,index)=>(
            <div key={index} className="flex  gap-[20px] flex-col w-full font-[300] text-[12px] leading-[15.12px]  w-full  over-flow-hidden">
                <span>{items.number}</span>
            </div>
        ))}
    </div>
    </div>
  );
};

export default Charts;
