import React from 'react';
import { Hamba } from '../inside/hamba';
import { SpannerSide } from '../inside/SpannerSide';
import { Rectangle } from '../inside/Rectangle';

export const Spannered = ({ isOpen, onToggle, onClose }) => {
  const spannerRows = [
    { icons: <Hamba />, name: 'Trending' },
    { icons: <SpannerSide />, name: 'Ray' },
    { icons: <SpannerSide />, name: 'Info line' },
    { icons: <SpannerSide />, name: 'Extended line' },
    { icons: <SpannerSide />, name: 'Trend angle' },
    { icons: <SpannerSide />, name: 'Horizontal Line' },
    { icons: <SpannerSide />, name: 'Horizontal ray' },
    { icons: <SpannerSide />, name: 'Vertical line' },
    { icons: <SpannerSide />, name: 'Cross line' },
    { icons: <Rectangle />, name: 'StdDev channel' },
  ];

  return (
    <>
      <svg onClick={onToggle} width="34" height="18" viewBox="0 0 34 18" fill="none" className='cursor-pointer w-full h-full' xmlns="http://www.w3.org/2000/svg">
        <path d="M4 13L13 4" stroke="#EEEEEE" />
        <circle cx="2.5" cy="14.5" r="2" stroke="#EEEEEE" />
        <circle cx="14.5" cy="2.5" r="2" stroke="#EEEEEE" />
        <path
          d="M32.6708 15.6062L32.5734 15.7706L32.4645 15.9265L32.3452 16.072L32.2169 16.2055L32.0809 16.3256L31.9389 16.4311L31.7922 16.5206L31.6426 16.5933L31.4917 16.6484L31.3411 16.6852L31.1924 16.7033L31.0474 16.7026L30.9076 16.683L30.7744 16.6448L30.6495 16.5884L30.5341 16.5143L30.4296 16.4235L30.337 16.3169L30.2573 16.1957L30.1916 16.0612L30.1403 15.9149L30.1043 15.7583L30.0837 15.5932L30.0789 15.4215L30.0899 15.2449L30.1166 15.0655L30.1587 14.8851L30.2157 14.7058L30.287 14.5296L30.3718 14.3583L30.4692 14.1938L30.5782 14.0379L30.6975 13.8925L30.8258 13.7589L30.9617 13.6388L31.1038 13.5333L31.2504 13.4438L31.4 13.3711L31.551 13.316L31.7016 13.2793L31.8502 13.2611L31.9953 13.2618L32.1351 13.2814L32.2682 13.3196L32.3931 13.376L32.5085 13.4501L32.6131 13.5409L32.7057 13.6475L32.7853 13.7687L32.8511 13.9032L32.9023 14.0495L32.9384 14.2061L32.9589 14.3712L32.9637 14.5429L32.9527 14.7195L32.9261 14.8989L32.884 15.0793L32.827 15.2586L32.7557 15.4349L32.6708 15.6062Z"
          fill="#D9D9D9"
        />
      </svg>
      {isOpen && (
        <div className="spanner inset-0">
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
