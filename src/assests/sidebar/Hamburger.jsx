import React, { useState } from 'react'
import { Hamba } from '../inside/hamba';
import close from "../../assests/X.svg";
import { SpannerSide } from "../../assests/inside/SpannerSide.jsx";
import gear from "../../assests/inside/GearSix.svg";
import LockOpen from "../../assests/inside/LockOpen.svg";
import { Logo } from '../hamburgar/logo.jsx';
import { Arrow } from './arrow.jsx';


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

    return (
    <>
       <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
          <div className={`navbar ${menuOpen ? 'open' : ''}`}>
            <ul>
              <div className="flex justify-center flex-col items-center w-full gap-[10px]">
                <h4>BS DEFI WEB DEMO</h4>
                <p className='text-[#9E9A9A] fonts_monst font-[500] text-[12px] leading-[14.63px] text-center'>464835282920 - BS DEFI - Demo - Hegde</p>
                <button className='w-[114px] h-[22px] bgblue text-[#fff] font-[600] text-[8.92px] leading-[11.23px] h-[23.74px] rounded-[3.18px] border-[#3E74FF] border'>
                Demo
              </button>
              </div>
              <li onClick={() => handleModalToggle('Fibonacci')}>
                 <div className="w-full pt-[15px]">
                    <div className="flex w-full justify-between items-center">
                     <div className="flex gap-[5px]">
                     <Logo/>
                     <span>Trading accounts</span>
                     </div>
                      <Arrow/>
                    </div>
                 </div>
              </li>
              <li onClick={() => handleModalToggle('Trending')}>
                <div className="flex gap-[5px] items-center">
                  <SpannerSide />
                  <span className='font-[400] text-[12px] leading-[15.12px]'>Trending</span>
                </div>
                <div className="flex gap-[10px]">
                  <img src={gear} alt="" />
                  <img src={LockOpen} alt="" />
                  <img src={close} alt="" />
                </div>
              </li>
              
            </ul>
          </div>  
    </>
  )
}
