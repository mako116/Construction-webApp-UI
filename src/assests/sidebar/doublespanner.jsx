import React from 'react';
import { Hamba } from '../inside/hamba';
import { SpannerSide } from '../inside/SpannerSide';
import { Rectangle } from '../inside/Rectangle';

export const Doublespanner = ({ isOpen, onToggle, onClose }) => {
  const spannerRows = [
    { icons: <Hamba />, name: 'Gann Line' },
    { icons: <SpannerSide />, name: 'Gann Fan' },
    { icons: <Rectangle />, name: 'Gann grid' },
  ];

  return (
    <>

      <svg onClick={onToggle} className='cursor-pointer' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 13.4248L13 4.4248" stroke="#EEEEEE" />
        <circle cx="2.5" cy="14.9248" r="2" stroke="#EEEEEE" />
        <circle cx="14.5" cy="2.9248" r="2" stroke="#EEEEEE" />
        <circle cx="8.5" cy="8.9248" r="2" stroke="#EEEEEE" />
      </svg>
      {isOpen && (
        <div className="spannered ">
          <div className="widths p-4">
            <ul className='w-full'>
              {spannerRows.map((items, index) => (
                <div key={index} className="flex border-t border-t border-[#212121] py-[10px] flex-col w-full">
                  <li onClick={onClose} className='bw-full flex gap-[5px] items-center'>
                    <span>{items.icons}</span>
                    <span className='font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]'>{items.name}</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
