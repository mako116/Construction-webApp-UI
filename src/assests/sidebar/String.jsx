import React, { useState } from 'react';
import close from "../../assests/X.svg";
import { SpannerSide } from "../../assests/inside/SpannerSide.jsx";
import gear from "../../assests/inside/GearSix.svg";
import LockOpen from "../../assests/inside/LockOpen.svg";
import { Styles } from '../../componets/Homesection/shortcuts/Styles.jsx';
import { Hamba } from '../inside/hamba.jsx';
import { Rectangle } from '../inside/Rectangle.jsx';
import { Arrow_left } from '../mobile_footer/Arrow_left.jsx';

export const String = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [svgColor, setSvgColor] = useState(false); // New state for managing SVG color

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleModalToggle = (modalName) => {
    setActiveModal(activeModal === modalName ? null : modalName);
  };

  const toggleSvgColor = () => {
    setSvgColor(!svgColor);
  };

  return (
    <>
      <svg
        onClick={() => {
          toggleMenu();
          toggleSvgColor();
        }}
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ stroke: svgColor ? 'blue' : '#EEEEEE' }} // Apply conditional color
      >
        <path d="M11.6667 5.87024H9.16667C8.25 5.87024 7.5 5.12024 7.5 4.20357V2.53691C7.5 1.62024 8.25 0.870239 9.16667 0.870239H11.6667C12.5833 0.870239 13.3333 1.62024 13.3333 2.53691V4.20357C13.3333 5.12024 12.5833 5.87024 11.6667 5.87024Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.3333 13.7869H14.3333C13.7833 13.7869 13.3333 13.3369 13.3333 12.7869V11.4536C13.3333 10.9036 13.7833 10.4536 14.3333 10.4536H17.3333C17.8833 10.4536 18.3333 10.9036 18.3333 11.4536V12.7869C18.3333 13.3369 17.8833 13.7869 17.3333 13.7869Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.8333 5.87024H9.99998" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4167 5.87024V16.7036C10.4167 17.6202 11.1667 18.3702 12.0834 18.3702H13.3334" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4167 12.1202H13.3334" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.3333 20.0369H14.3333C13.7833 20.0369 13.3333 19.5869 13.3333 19.0369V17.7036C13.3333 17.1536 13.7833 16.7036 14.3333 16.7036H17.3333C17.8833 16.7036 18.3333 17.1536 18.3333 17.7036V19.0369C18.3333 19.5869 17.8833 20.0369 17.3333 20.0369Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="">
        <div className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul>
            <div className="mange" onClick={closeMenu}>
              <h2 className='font-[400] text-[12px] leading-[15.12px]'>Manage drawing</h2>
              <div className="cursor-pointer display_nonemobile" onClick={closeMenu}>
                <Arrow_left  />
              </div>
              <img className='cursor-pointer display_nonedesk' onClick={closeMenu} src={close} alt="" />
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
            <div className="widths p-0 lg:p-4 rounded-[0px] lg:rounded-lg">
              <div className="mange" onClick={() => setActiveModal(null)} >
                <h2 className='font-[400] text-[12px] leading-[15.12px]'>Fibonacci</h2>
                <div  className="cursor-pointer display_nonemobile" onClick={() => setActiveModal(null)} >
                <Arrow_left  />
              </div>
                <img className='cursor-pointer display_nonedesk' onClick={() => setActiveModal(null)} src={close} alt="" />
              </div>
              <Styles onClick={() => handleModalToggle('Fibonacci')} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
