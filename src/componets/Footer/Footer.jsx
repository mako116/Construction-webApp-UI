import React from 'react'
import { Fill } from '../../assests/Fill 1'

export const Footer = () => {
    const balance = [
        {
            Balance:"Balance: 100,000.00"
        },
        {
            Balance:"Equity: 100,000.00"
        },
        {
            Balance:"Margin:0.00"
        },
        {
            Balance:"Free Margin:0.00"
        },
        {
            Balance:"Level:0.00%"
        },
    ]
  return (
    <>
    <div className=" font-sora bg-[#191919]">
        <div className="w-full  h-full py-[1px]">
        <div className="bg-[#201F1F]">
            <div className="bg-[#191919] w-full py-[10px] text-[#B4B4B4] font-[400] text-[11px] leading-[13.86px] pr-[50px] flex border-t border-b  border-[#1E1E1E] justify-around gap-[20px] ">
                <span>Symbol</span>
                <span>Ticket</span>
                <span>Time</span>
                <span>Volume</span>
                <span>Price</span>
                <span>S/L</span>
                <span>T/P</span>
                <span>Price</span>
                <span>Swap</span>
                <span>Profit</span>
            </div>
            <div className="w-full items-center px-[20px] flex bg-[#201F1F] gap-[20px] py-[6px] h-full">
                {balance.map((items,index)=>(
                    <div key={index} className="gap-[20px] text-[13px] font-[400] leading-[16.38px] text-[#B4B4B4] justify-around   ">
                        <span className=''>{items.Balance}</span>
                    </div>
                ))}
                 <div className=" flex w-[500px] text-[#B4B4B4] gap-[30px] items-center justify-end gap-[20px] text-[12px] font-[400] leading-[16.38px] text-[#B4B4B4]">
                <span>0.00</span>
                <span>USD</span>
            </div>
            </div>
           
        </div>
        <div className="h-[30vh] pt-[20px]  flex-col flex items-center justify-center text-center">
            <div className=" flex flex-col items-center gap-[5px] pb-[12px]">
                 <Fill/>
                 <h4 className=' text-[#B4B4B4] font-[400] text-[13px] '>You don't have any positions</h4>
                <button className='footerbg'>Create New Order</button>
            </div>
         </div>
        </div>
    </div>
    </>
  )
}
