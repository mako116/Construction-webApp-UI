import React from 'react';
import { Hamba } from '../inside/hamba';
import { SpannerSide } from '../inside/SpannerSide';
import { Rectangle } from '../inside/Rectangle';

export const Spider = ({ isOpen, onToggle, onClose }) => {
  const spannerRowed = [
    { icons: <Hamba />, name: 'Regression channel' },
    { icons: <SpannerSide />, name: 'Equidistant channel' },
    { icons: <SpannerSide />, name: 'Andrews Pitchfork' },
    { icons: <Rectangle />, name: 'StdDev channel' },
  ];

  return (
    <>
      <svg className='cursor-pointer' onClick={onToggle} width="35" height="20" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15.2124L15 4.2124" stroke="#EEEEEE"/>
        <path d="M9 16.2124L16 9.2124" stroke="#EEEEEE"/>
        <path d="M3 10.2124L10 3.2124" stroke="#EEEEEE"/>
        <circle cx="16.5" cy="2.7124" r="2" stroke="#EEEEEE"/>
        <circle cx="2.5" cy="16.7124" r="2" stroke="#EEEEEE"/>
        <path d="M33.6708 17.8186L33.5734 17.983L33.4645 18.1389L33.3452 18.2844L33.2169 18.4179L33.0809 18.538L32.9389 18.6435L32.7922 18.733L32.6426 18.8057L32.4917 18.8608L32.3411 18.8976L32.1924 18.9157L32.0474 18.915L31.9076 18.8954L31.7744 18.8572L31.6495 18.8008L31.5341 18.7267L31.4296 18.6359L31.337 18.5293L31.2573 18.4081L31.1916 18.2736L31.1403 18.1273L31.1043 17.9707L31.0837 17.8057L31.0789 17.6339L31.0899 17.4573L31.1166 17.2779L31.1587 17.0975L31.2157 16.9182L31.287 16.742L31.3718 16.5707L31.4692 16.4062L31.5782 16.2503L31.6975 16.1049L31.8258 15.9713L31.9617 15.8512L32.1038 15.7457L32.2504 15.6562L32.4 15.5835L32.551 15.5284L32.7016 15.4917L32.8502 15.4735L32.9953 15.4742L33.1351 15.4938L33.2682 15.532L33.3931 15.5884L33.5085 15.6625L33.6131 15.7533L33.7057 15.8599L33.7853 15.9811L33.8511 16.1156L33.9023 16.2619L33.9384 16.4185L33.9589 16.5836L33.9637 16.7553L33.9527 16.9319L33.9261 17.1113L33.884 17.2917L33.827 17.471L33.7557 17.6473L33.6708 17.8186Z" fill="#D9D9D9"/>
      </svg>
      {isOpen && (
        <div className="spider inset-0 ">
          <div className="widths p-4">
            <ul className="w-full">
              {spannerRowed.map((items, index) => (
                <div key={index} className="flex border-t b border-t border-[#212121] py-[10px] flex-col w-full">
                  <li onClick={onClose} className="bw-full flex gap-[5px] items-center">
                    <span>{items.icons}</span>
                    <span className="font-sora font-[300] text-[12px] leading-[15.12px] text-[#FFFFFFE5]">{items.name}</span>
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
