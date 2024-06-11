import React from 'react'
import { Searchnormal } from '../../assests/search-normal'

export const Rightside = () => {
  const symbols =[
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",      
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
    {
      symbols:"EURUSD", Bid:"1.07861", ASk: "1.07861", change:"0.24%",       
    },
  ]
  return (
    <>
    <div className=" font-sora bg-[#1A1A1A]">
      <div className="w-full py-[10px] px-[10px]">
      <div className="flex w-full mb-[10px] pl-[5px] gap-[5px] h-[38px] items-center rounded-[5px] bg-[#201F1F]">
          <Searchnormal/>      
          <input type="search" placeholder='Search Symbol' className='w-full outline-none bg-transparent rounded-[5px] border-none text-[#9A9999] leading-[15.12px] text-[12px] font-[400] '/>
        </div>
        <div className="flex py-[10px] font-[400] text-[11px] leading-[13.86px] text-[#B4B4B4] justify-around border-t border-b border-[#1E1E1E]">
          <span>Symbol</span>
          <span>Bid</span>
          <span>Ask</span>
          <span>Change</span>
        </div>
        <div className="bg-[#1A1A1A] pt-[10px]">
          {symbols.map((items,index)=>(
            <div key={index} className="flex py-[10px] text-[12px] font-[400] leading-[15.12px] text-[#B1AFAF] items-center justify-around w-full">
              <div className="flex items-center gap-[5px]">
              <div className="w-[6px] rounded-full h-[6px] bg-[#01AD69] ">
              </div>
              <span>{items.symbols}</span>
              </div>
             
              <span>{items.Bid}</span>
              <span>{items.ASk}</span>
              <span className='text-[#01AD69]'>{items.change}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
