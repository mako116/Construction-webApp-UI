import React, { useEffect, useRef } from 'react';
 
const CounterSection = () => {
  const sectionCounterRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const sectionCounter = sectionCounterRef.current;
    const counters = countersRef.current;

    const CounterObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        let speed = 200;
        counters.forEach((counter, index) => {
          const updateCounter = () => {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed;
            if (initialNumber < targetNumber) {
              counter.innerText = Math.ceil(initialNumber + incPerCount);
              setTimeout(updateCounter, 40);
            }
          };
          updateCounter();

          counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
            index / counters.length + 0.5
          }s`;
        });

        observer.unobserve(sectionCounter);
      },
      {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
      }
    );

    CounterObserver.observe(sectionCounter);
  }, []);

  return (
   <div className="flex w-full ">
   
<section id="section_counter" ref={sectionCounterRef}>
<div className="">
        <h2 className='text-[#fff] font-[600] text-[25px] fonts_monst'>Achievement</h2>
    </div>

      <div className="">
        <div className="counter-grid">
          <div className="text-center">
            <div className="counter-item">
            <h1 className="counter" data-target="1000" ref={el => countersRef.current[0] = el}>0 </h1>
            <span className='text-[#f37443] text-2xl lg:text-4xl'>+</span>
            </div>
            <h4 className='font-[400] text-[#fff] text-[18px] fonts_monst'>Total Workers</h4>
          </div>
          <div className="text-center">
           <div className="counter-item">
           <h1 className="counter" data-target="30" ref={el => countersRef.current[1] = el}>0</h1>
           <span className='text-[#f37443] text-2xl lg:text-4xl'>+</span>
           </div>
           <h4 className='font-[400] text-[#fff] text-[18px] fonts_monst'>Years of Experience</h4>
          </div>
          <div className="text-center">
          <div className="counter-item">
             <h1 className="counter" data-target="400" ref={el => countersRef.current[2] = el}>0</h1>
             <span className='text-[#f37443] text-2xl lg:text-4xl'>+</span>
          </div>
          <h4 className='font-[400] text-[#fff] text-[18px] fonts_monst'>Current Project</h4>
          </div>
         <div className="text-center">
         <div className="counter-item">
             <h1 className="counter" data-target="800" ref={el => countersRef.current[3] = el}>0</h1>
             <span className='text-[#f37443] text-2xl lg:text-3xl'>%</span>
          </div>
          <h4 className='font-[400] text-[#fff] text-[18px] fonts_monst'>Satisfied Clients</h4>
         </div>
         
        </div>
      </div>
    </section>
   </div>
  );
};

export default CounterSection;
