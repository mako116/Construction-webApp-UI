import React from 'react'
import candle from "../../assests/candle.svg"
import rating from "../../assests/rating.svg"
import together from "../../assests/together.svg"
import minusndplus from "../../assests/minusndplus.svg"
import dollar from "../../assests/dollar.svg"
import CalendarCheck from "../../assests/CalendarCheck.svg"
import tab from "../../assests/tab.svg"
import ArrowsOut from "../../assests/ArrowsOut.svg"
import Camera from "../../assests/Camera.svg"


 export const Navbar = () => {
  const navs = [
    {
      name:"M1",
    },
    {
      name:"M5",
    },
    {
      name:"M15",
    },
    {
      name:"M30",
    },
    {
      name:"H1",
    },
    {
      name:"H4",
    },
    {
      name:"D1",
    },
    {
      name:"W1",
    },
    {
      name:"MN",
    },
    {
      img:candle,
    },
    {
      img:rating,
    },
    {
      img:together,
    },
    {
      img:minusndplus,
    },
    {
      img:dollar,
    },
    {
      img:CalendarCheck,
    },
    {
      img:tab,
    },
    {
      imgs:ArrowsOut,
    },
    {
      imgs:Camera,
    },
    
  ]
  return (
    <>
    <div className="border-b-[2px] border-[#212121] w-full bg-[#191919] text-[#C7C7C7]">
        <div className="px-[60px] flex py-[11px]">
          <div className="w-full flex">
            {navs.map((items,index)=>(
              <div className=" flex justify-between ">
              <div className="header_img w-full gap-[10px] border-l border-r-[1px] border-[#212121] py-[7px] px-[5px] lg:px-[10px] flex justify-around " key={index}>
                <span className='font-[400] text-[6px] lg:text-[11px] leading-[13.86px] '>{items.name}</span>
                <img src={items.img} alt="" className='' />
              
                
              </div>
              </div>
            ))}
          </div>
          <div className="flex gap-[20px]">
            <img src={ArrowsOut} alt="" />
            <img src={Camera} alt="" />
          </div>
        </div>
    </div>
    </>
  )
}
