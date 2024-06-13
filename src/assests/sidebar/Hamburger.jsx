import React, { useState } from 'react'
import { Hamba } from '../inside/hamba';
import close from "../../assests/X.svg";
import { SpannerSide } from "../../assests/inside/SpannerSide.jsx";
import gear from "../../assests/inside/GearSix.svg";
import LockOpen from "../../assests/inside/LockOpen.svg";
import { Logo } from '../hamburgar/logo.jsx';
import { Arrow } from './arrow.jsx';
import { Candle } from '../candle.jsx';
import { Darktheme } from '../hamburgar/darktheme.jsx';
import { Colorstemps } from '../hamburgar/colorstemps.jsx';
import { BS } from '../hamburgar/BS.jsx';
import { Calendar } from '../hamburgar/Calendar.jsx';
import { Trajnslate } from '../hamburgar/Trajnslate.jsx';
import { Envelope } from '../hamburgar/Envelope.jsx';
import { Question } from '../hamburgar/Question.jsx';
 import { Rectangle } from '../inside/Rectangle';
import { Searchnormal } from '../search-normal.jsx';
import { Arrow_left } from '../mobile_footer/Arrow_left.jsx';

export const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
  
    const handleModalToggle = (modalName) => {
      setActiveModal(activeModal === modalName ? null : modalName);
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };

    const spannerRows = [
      { icons: <Hamba />, name: 'Grid' },
      { icons: <SpannerSide />, name: 'Trade orders' },
      { icons: <SpannerSide />, name: 'Trade positions' },
      { icons: <SpannerSide />, name: 'Trade history' },
      { icons: <SpannerSide />, name: 'SL/TP Level' },
      { icons: <SpannerSide />, name: 'Ask price' },
      { icons: <SpannerSide />, name: 'Cost Controls' },
      { icons: <SpannerSide />, name: 'Trade notification' },
       { icons: <Rectangle />, name: 'Show OHLC' },
    ];
   
    const spannerRowed = [
      { icons: <Candle />, name: 'Green & Red' },
      { icons: <Candle />, name: 'Blue & Red' },
      { icons: <Candle />, name: 'Black& white' },
      { icons: <Candle />, name: 'Neutral' },
      
    ];
    const Languages = [
      {name: 'English' },
      {name: 'Arabic' },
      {name: 'Chinese' },
      {name: 'Francais' },
      {name: 'Dutch' },
      {name: 'Czech' },
      {name: 'German' },
      {name: 'Hugarian' },
      
    ];
    return (
    <>
       <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
          <div className={`navbar ${menuOpen ? 'open' : ''}`}>
           
            <ul>
            <div onClick={closeMenu} className="cursor-pointer text-[#fff] display_nonemobiles">
              <Arrow_left />
            </div>
              <div className="flex justify-center flex-col items-center w-full gap-[10px]">
                <h4>BS DEFI WEB DEMO</h4>
                <p className='text-[#9E9A9A] fonts_monst font-[500] text-[12px] leading-[14.63px] text-center'>464835282920 - BS DEFI - Demo - Hegde</p>
                <button className='w-[114px] h-[22px] bgblue text-[#fff] font-[600] text-[8.92px] leading-[11.23px] h-[23.74px] rounded-[3.18px] border-[#3E74FF] border'>
                Demo
              </button>
              </div>
              <li>
                 <div className="w-full flex flex-col gap-[17px] font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFCC] h-full pt-[15px]">
                    <div className="pb-[5px] flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Logo/>
                     <span>Trading accounts</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div  onClick={() => handleModalToggle('Fibonacci')} className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Candle/>
                     <span>Chart settings</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Candle/>
                     <span>One-click trading</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Darktheme/>
                     <span>Dark theme</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div Lang onClick={() => handleModalToggle('color')} className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Colorstemps/>
                     <span>Color templates</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <BS/>
                     <span>BS DEFI web</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Calendar/>
                     <span>Economic calendar</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div Lang onClick={() => handleModalToggle('Lang')} className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Trajnslate/>
                     <span>Language</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Candle/>
                     <span>Shortcuts</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Envelope/>
                     <span>Contact us</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Question/>
                     <span>Contact us</span>
                     </div>
                      <Arrow/>
                    </div>
                 </div>
              </li>
            
              
            </ul>
          </div> 
          
          {activeModal === 'Fibonacci' && (
          <div className="fibonar inset-0">
            <div className="widthed p-4 rounded-lg">
              <div className="flex justify-between w-full ">
                <img className='cursor-pointer' onClick={() => setActiveModal(null)} alt="" />
              </div>
              <div onClick={() => handleModalToggle('Fibonacci')} >
              <ul className='w-full '>
              {spannerRows.map((items, index) => (
                <div key={index} className="flex  border-[#212121] py-[10px] flex-col w-full">
                  <li  className=' flex gap-[5px] items-center'>
                    <span>{items.icons}</span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>{items.name}</span>
                  </li>
                  
                </div>
              ))}
            </ul>
              </div>
            </div>
          </div>
        )} 
        {activeModal === 'color' && (
          <div className="colors inset-0">
            <div className="widthed p-4 rounded-lg">
              <div className="flex justify-between w-full ">
                <img className='cursor-pointer' onClick={() => setActiveModal(null)} alt="" />
              </div>
              <div onClick={() => handleModalToggle('color')} >
              <ul className='w-full'>
              {spannerRowed.map((items, index) => (
                <div key={index} className="flex  border-[#212121] py-[10px] flex-col w-full">
                  <li  className=' flex gap-[5px] items-center'>
                    <span>{items.icons}</span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>{items.name}</span>
                  </li>
                  
                </div>
              ))}
            </ul>
              </div>
            </div>
          </div>
        )} 
        {activeModal === 'Lang' && (
          <div className="colors inset-0">
            <div className="widthed p-4 rounded-lg">
              <div className="flex justify-between w-full ">
                <img className='cursor-pointer' onClick={() => setActiveModal(null)} alt="" />
              </div>
              <div onClick={() => handleModalToggle('color')} >
              <ul className='w-full'>
              <div className="flex w-full mb-[10px] pl-[5px] gap-[5px] h-[38px] items-center rounded-[5px] bg-[#201F1F]">
          <Searchnormal/>      
          <input type="search" placeholder='Search Symbol' className='w-full outline-none bg-transparent rounded-[5px] border-none text-[#9A9999] leading-[15.12px] text-[12px] font-[400] '/>
        </div>
              {Languages.map((items, index) => (
                <div key={index} className="flex  border-[#212121] py-[10px] flex-col w-full">
                  <li  className=' flex gap-[5px] items-center'>
                    <span>{items.icons}</span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>{items.name}</span>
                  </li>
                  
                </div>
              ))}
            </ul>
              </div>
            </div>
          </div>
        )} 
    </>
  )
}
