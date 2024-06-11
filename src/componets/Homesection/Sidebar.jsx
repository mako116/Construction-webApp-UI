import React, { useState } from 'react';
import cross from "../../assests/bx_cross.svg";
 import "../styles/styles.css";
 import { Spannered } from '../../assests/sidebar/Spannered';
 import { Doublespanner } from '../../assests/sidebar/doublespanner.jsx';
import { Hamba2 } from '../../assests/sidebar/hamba2.jsx';
import { Spider } from '../../assests/sidebar/spider.jsx';
import { Eye } from '../../assests/eye.jsx';
import { Unlock } from '../../assests/unlock.jsx';
import { Tab } from '../../assests/sidebar/Tab.jsx';
import { String } from '../../assests/sidebar/String.jsx';
import { Hamburger } from '../../assests/sidebar/Hamburger.jsx';
import { ListDashes } from '../../assests/sidebar/ListDashes.jsx';
import { ClockCounterClockwise } from '../../assests/sidebar/ClockCounterClockwise.jsx';
import { Notepad } from '../../assests/sidebar/Notepad.jsx';

export const Sidebar = () => {
   const [activeModal, setActiveModal] = useState(null);

  const handleModalToggle = (modalName) => {
    setActiveModal(activeModal === modalName ? null : modalName);
  };

  

  

  return (
    <div className="w-full flex flex-col justify-between h-screen bg-[#191919] font-sora">
      <ul className='px-[10px] flex flex-col gap-[10px]'>
        <li className='border-[#212121]'>
         <Hamburger/>
          
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
        <li className='border-b py-[5px] border-[#212121]'>
          <Eye />
        </li>
        <li className='border-b py-[5px] border-[#212121]'>
          <Unlock />
        </li>
        <li className='border-b py-[5px] border-[#212121]'>
          <Tab />
        </li>
        <li className='border-b py-[5px] border-[#212121]'>
          <String />
        </li>
        
      </ul>
      <div className="">
        <ul className='py-[20px] px-[10px] flex flex-col gap-[10px]'>
          <li><ListDashes/></li>
          <li><ClockCounterClockwise/></li>
          <li><Notepad/></li>
        </ul>
      </div>
    </div>

  );
};
