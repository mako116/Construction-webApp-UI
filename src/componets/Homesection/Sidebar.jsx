import React, { useState } from 'react';
import cross from "../../assests/bx_cross.svg";
import close from "../../assests/X.svg";
import { SpannerSide } from "../../assests/inside/SpannerSide.jsx";
import gear from "../../assests/inside/GearSix.svg";
import LockOpen from "../../assests/inside/LockOpen.svg";
import "../styles/styles.css";
import { Styles } from './shortcuts/Styles';
import { Spannered } from '../../assests/sidebar/Spannered';
import { Hamba } from '../../assests/inside/hamba.jsx';
import { Rectangle } from '../../assests/inside/Rectangle.jsx';
import { Doublespanner } from '../../assests/sidebar/doublespanner.jsx';
import { Hamba2 } from '../../assests/sidebar/hamba2.jsx';
import { Spider } from '../../assests/sidebar/spider.jsx';

export const Sidebar = () => {
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
    <div className="w-full h-screen bg-[#191919] font-sora">
      <ul className='px-[10px] flex flex-col gap-[10px]'>
        <li className='border-[#212121]'>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
          <div className={`navbar ${menuOpen ? 'open' : ''}`}>
            <ul>
              <div className="flex justify-between w-full py-[10px]">
                <h2 className='font-[400] text-[12px] leading-[15.12px]'>Manage drawing</h2>
                <img className='cursor-pointer' onClick={closeMenu} src={close} alt="" />
              </div>
              <span className='text-[#FFFFFFB2] pt-[5px] font-[300] text-[12px] leading-[15.12px]'>EURUSD</span>
              <li onClick={() => handleModalToggle('Fibonacci')}>
                <div className="flex gap-[5px] items-center">
                  <Hamba />
                  <span className='font-[400] text-[12px] leading-[15.12px]'>Fibonacci</span>
                </div>
                <div className="flex gap-[10px] items-center">
                  <img src={gear} alt="" />
                  <img src={LockOpen} alt="" />
                  <img src={close} alt="" />
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
              <li onClick={() => handleModalToggle('Rectangle')}>
                <div className="flex gap-[5px] items-center">
                  <Rectangle />
                  <span className='font-[400] text-[12px] leading-[15.12px]'>Rectangle</span>
                </div>
                <div className="flex gap-[10px]">
                  <img src={gear} alt="" />
                  <img src={LockOpen} alt="" />
                  <img src={close} alt="" />
                </div>
              </li>
            </ul>
          </div>

          {activeModal === 'Fibonacci' && (
            <div className="fibonar inset-0">
              <div className="widths p-4 rounded-lg">
                <div className="flex justify-between w-full py-[10px]">
                  <h2 className='font-[400] text-[12px] leading-[15.12px]'>Fibonacci</h2>
                  <img className='cursor-pointer' onClick={() => setActiveModal(null)} src={close} alt="" />
                </div>
                <Styles onClick={() => handleModalToggle('Fibonacci')} />
              </div>
            </div>
          )}
        </li>
        <li className='py-[5px] border-t border-b border-[#212121]'>
          <img src={cross} alt="" />
        </li>
        <li className='border-b py-[5px] border-[#212121]'>
          <Spannered
            isOpen={activeModal === 'Trending'}
            onToggle={() => handleModalToggle('Trending')}
            onClose={() => setActiveModal(null)}
          />
        </li>
        <li className='border-b py-[5px] border-[#212121]'>
          <Spider
            isOpen={activeModal === 'Spider'}
            onToggle={() => handleModalToggle('Spider')}
            onClose={() => setActiveModal(null)}
          />
        </li>
        <li className='border-b py-[5px] border-[#212121]'>
          <Doublespanner
            isOpen={activeModal === 'Doublespanner'}
            onToggle={() => handleModalToggle('Doublespanner')}
            onClose={() => setActiveModal(null)}
          />
        </li>
        <li className='border-b py-[5px] border-[#212121]'>
          <Hamba2 />
          
        </li>
      </ul>
    </div>
  );
};
