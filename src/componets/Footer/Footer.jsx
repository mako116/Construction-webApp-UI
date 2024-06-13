import React from 'react'
import { Fill } from '../../assests/Fill 1'
import { Tab } from '../../assests/mobile_footer/tab'
import { TabBartab } from '../../assests/mobile_footer/_TabBar-tab'
import { Stack } from '../../assests/mobile_footer/Stack'
import { ClockClockwise } from '../../assests/mobile_footer/ClockClockwise'
import { Settigs } from '../../assests/mobile_footer/settigs'

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
        <div className="bg-[#201F1F] display_nonedesk">
            <div className="w-full border-t border-b  border-[#1E1E1E] footer_up justify-around bg-[#191919] text-[#B4B4B4] font-[400] ">
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
            <div className="footer_down">
                {balance.map((items,index)=>(
                    <div key={index} className="text-[#B4B4B4] footer_down2 ">
                        <span className=''>{items.Balance}</span>
                    </div>
                ))}
                 <div className="text-[#B4B4B4] footer_down3">
                <span>0.00</span>
                <span>USD</span>
            </div>
            </div>
           
        </div>
        <div className="h-[30vh] pt-[20px] display_nonedesk  flex-col flex items-center justify-center text-center">
            <div className=" flex flex-col items-center gap-[5px] pb-[12px]">
                 <Fill/>
                 <h4 className=' text-[#B4B4B4] font-[400] text-[13px] '>You don't have any positions</h4>
                <button className='footerbg'>Create New Order</button>
            </div>
         </div>
         <div className="flex justify-end border-t border-[#DBDBDB]  display_nonemobile">
            <ul className='flex  items-center justify-around'>
                <li><Tab/></li>
                <li><TabBartab/></li>
                <li><Stack/></li>
                <li><ClockClockwise/></li>
                <li><Settigs/></li>
            </ul>
        </div>
        </div>

    </div>
    </>
  )
}
