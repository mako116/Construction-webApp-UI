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
import { SnapchatLogo } from '../contact/SnapchatLogo.jsx';
import { TiktokLogo } from '../contact/TiktokLogo.jsx';
import { TwitterLogo } from '../contact/TwitterLogo.jsx';
import { WhatsappLogo } from '../contact/WhatsappLogo.jsx';

export const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [isToggled, setIsToggled] = useState(false);

    const [isToggledd, setIsToggledd] = useState(false);
    const [isToggleds, setIsToggleds] = useState(false);
    const [isToggledl, setIsToggledl] = useState(false);
    const [isToggledin, setIsToggledin] = useState(false);
    const [isToggleder, setIsToggleder] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [isToggl, setIsToggl] = useState(false);
    const [isTogg, setIsTogg] = useState(false);

    const handleToggled = () => {
      setIsToggledd(!isToggledd);
    };
    const handleToggles = () => {
      setIsToggleds(!isToggleds);
    };
    const handleTogglel = () => {
      setIsToggledl(!isToggledl);
    };
    const handleToggledin = () => {
      setIsToggledin(!isToggledin);
    };
    const handleToggler = () => {
      setIsToggleder(!isToggleder);
    };
     const handleISToggl = () => {
      setIsToggl(!isToggl);
    };
    const handleISTogg = () => {
      setIsTogg(!isTogg);
    };
    const handleISToggle = () => {
      setIsToggle(!isToggle);
    };
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };


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
                    <div  onClick={() => handleModalToggle('Fibonacci')} className="flex w-full justify-between items-center ">
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
                    <div onClick={() => handleModalToggle('Contact')} className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Envelope/>
                     <span>Contact us</span>
                     </div>
                      <Arrow/>
                    </div>
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Question/>
                     <span>About us</span>
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
              <div  className="flex flex-row py-[20px] display_nonemobiles  w-full items-center cursor-pointer text-[#fff] display_nonemobiles">
             <div className=""  onClick={() => setActiveModal(null)}> 
              <Arrow_left />
             </div>
             <h4  className='chartins'>Chart settings</h4>

            </div>
                <img className='cursor-pointer' onClick={() => setActiveModal(null)} alt="" />
              
              </div>
              <div className='w-full' >
              <ul className='w-full px-[10px]'>
                 <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><Hamba /></span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Grid</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
    
                </div>
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><SpannerSide /></span>    
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Trade orders</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggleds ? 'toggled' : ''}`} onClick={handleToggles}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
                </div>
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><SpannerSide /></span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Trade positions</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggledin ? 'toggled' : ''}`} onClick={handleToggledin}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
    
                </div>
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><SpannerSide /></span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Trade history</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggledl ? 'toggled' : ''}`} onClick={handleTogglel}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
                </div>
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><SpannerSide /></span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>SL/TP Level</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggleder ? 'toggled' : ''}`} onClick={handleToggler}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
                </div>
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><SpannerSide /></span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Ask price</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggledd ? 'toggled' : ''}`} onClick={handleToggled}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
    
                </div>
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><SpannerSide /></span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Cost Controls'</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggle ? 'toggled' : ''}`} onClick={handleISToggle}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
    
                </div>
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                    <span><SpannerSide /></span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Trade notification</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isTogg ? 'toggled' : ''}`} onClick={handleISTogg}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
    
                </div>
               
                <div className="   flex items-center justify-between ">
                 <div className="flex  border-[#212121] py-[10px] flex-col w-full">
                 <li  className=' flex gap-[5px] items-center'>
                     <span><Rectangle /></span> 
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>Show OHLC</span>
                  </li>
                  
                 </div>
                 <div className="display_nonemobiles">
       <div className={`toggle-switch ${isToggl ? 'toggled' : ''}`} onClick={handleISToggl}>
        <div className="switch-handle">

       </div>
    </div>    
    </div>
    
                </div>
                
             </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeModal === 'color' && (
          <div className="colors inset-0">
            <div className="widthed p-4 rounded-lg">
              <div className="flex display_nonemobiles justify-between w-full py-[20px]">
              <div className=""  onClick={() => setActiveModal(null)}> 
              <Arrow_left />
             </div>
             <h4  className='chartins'>Color templates</h4>
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
              <div className="flex justify-between w-full py-[20px] display_nonemobiles ">
              <div className=""  onClick={() => setActiveModal(null)}> 
              <Arrow_left />
             </div>
             <h4  className='chartins'>Languages</h4>
               </div>
               
              <div className='w-full overflows'>
              <ul className='w-full px-[10px]'>
              <div className="w-full flex mb-[10px] pl-[5px] gap-[5px] h-[38px] items-center rounded-[5px] bg-[#201F1F]">
          <Searchnormal/>      
          <input type="search" placeholder='Search Symbol' className='flex-wrap w-full outline-none bg-transparent rounded-[5px] border-none text-[#9A9999] leading-[15.12px] text-[12px] font-[400] '/>
        </div>
        <div className="w-full items-center">
              {Languages.map((items, index) => (
                <div key={index} className="flex  justify-between border-[#212121] py-[10px] flex-col w-full">
                  <li  className=' flex gap-[5px] items-center'>
                    <span>{items.icons}</span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>{items.name}</span>
                  </li>
                  <div className="w-full flex items-center justify-center display_nonemobiles ">
      <input
        type="checkbox"
        className="checkbox-customs"
      />
           </div>
                </div>
              ))}
              </div>
            </ul>
            
              </div>
            </div>
          </div>
        )}
        
         {activeModal === 'Contact' && (
          <div className="contact inset-0">
            <div className="widthin p-4 rounded-lg">
              <div className="text-[#fff] flex justify-between w-full py-[30px] lg:py-[20px] display_nonemobiles ">
              <div className="ml-[10px] cursor-pointer"  onClick={() => setActiveModal(null)}> 
              <Arrow_left />
             </div>
             <h4  className='chartins'>Contact Us</h4>
               </div>
               {/* <p>Feel free to contact us and we’ll get back to you!</p> */}
              <div className='w-full fonts_monst'>
              <ul className='w-full px-[10px]'>
              <div className="display_nonedesk flex py-[10px] justify-between w-full">
              <h4  className='texts_head'>Contact Us</h4>
              <div className="">
              <div className=" w-full h-full flex-col flex items-end justify-end">
                  <img className='cursor-pointer' src={close} onClick={() => setActiveModal(null)} alt="" />
                </div>
                </div>
                </div>
             <div className="contacts_btw ">
              
              <div className="divs_left">
              <h4  className='text-[#fff] display_nonemobiles'>Contact Us</h4>

              <p className='font-[500] pb-[5px] text-[9px] leading-[10.97px] text-[#B8B8B8]'>Feel free to contact us and we’ll get back to you!</p>
             
             <div className="search">
               <div className="w-full flex mb-[10px] pl-[5px] gap-[5px] h-[30px] lg:h-[45px] items-center rounded-[5px] bg-[#201F1F]">
           <input type="text" placeholder='Name' className='pl-[10px] flex-wrap w-full outline-none bg-transparent rounded-[5px] border-none text-[#AEAEAE] leading-[12.19px] text-[7px] lg:text-[10px] font-[400] '/>
             </div>
             <div className="w-full flex mb-[10px] pl-[5px] gap-[5px] h-[30px] lg:h-[45px] items-center rounded-[5px] bg-[#201F1F]">
          <input type="email" placeholder='Enter Address' className='pl-[10px] flex-wrap w-full outline-none bg-transparent rounded-[5px] border-none text-[#AEAEAE] leading-[12.19px] text-[7px] lg:text-[10px] font-[400] '/>
             </div>
             <div className="w-full flex mb-[10px] pl-[5px] gap-[5px] h-[30px] lg:h-[45px] items-center rounded-[5px] bg-[#201F1F]">
          <input type="text" placeholder='Tell us about it' className='pl-[10px] flex-wrap w-full outline-none bg-transparent rounded-[5px] border-none text-[#AEAEAE] leading-[12.19px] text-[7px] lg:text-[10px] font-[400] '/>
             </div>

             </div>
             <button className='w-full h-[40px] bgblue text-[#fff] font-[600] text-[8.92px] leading-[11.23px] h-[23.74px] rounded-[3.18px] border-[#3E74FF] border'>
                Send
              </button>
              </div>
              <div className=" divs_right">
               
              <div className="flex flex-col items-center w-full lg:w-[163px] gap-[15px] text-[#958D8D] font-[500] text-[9px] leading-[10.97px]">
              <p className='text-[#B8B8B8] text-center md:text-start  '>Tell us about your challenges you’re facing and be sure to be attended to within a nick of time</p>
              <div className="flex gap-[10px] py-[10px]">
                <SnapchatLogo/>
                <TiktokLogo/>
                <TwitterLogo/>
                <WhatsappLogo/>
              </div>
              </div>
              </div>
            </div>
            </ul>
            
              </div>
            </div>
          </div>
        )} 
    </>
  )
}




  


   
