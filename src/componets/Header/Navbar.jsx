import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneSetting } from "react-icons/ai";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navs = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <header className={`py-3 transition-colors duration-300 ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between mx-auto px-4" ref={navRef}>
        {!isOpen && (
          <div className='flex'>
            <AiTwotoneSetting className={`text-[30px] lg:text-[55px] ${isOpen ? 'text-black' : 'text-[#f37443]'}`} />
            <Link to="/" className={`flex flex-col fonts_sora ${isOpen ? 'text-black' : 'text-white'}`}>
              <span className='text-[10px] lg:text-[28px] tracking-[4px] font-bold leading-[15px] lg:leading-[20px]'>Cenjo </span>
              <span className='text-[10px] lg:text-[25px] tracking-[1px] font-[200] leading-[15px] lg:leading-[30px]'>Engineering</span>
            </Link>
          </div>
        )}
        <div className="md:hidden relative">
          <button
            className="text-black focus:outline-none px-[20px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 absolute top-0 right-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke=" white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <nav className={`md:flex space-x-0 lg:space-x-10 items-center ${isOpen ? "block bg-white" : "hidden"} md:block`}>
          <ul className="flex py-[5px] flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 fonts_monst">
            {navs.map((nav, index) => (
              <li key={index}>
                <a href={nav.path} className={`transition-colors duration-300 py-[12px] rounded  hover:text-[#f37443] text-[#fff] hover:bg-[#fff] px-[8px] font-[500] text-[14px] lg:text-[20px] ${isOpen ? 'text-black' : 'text-white'}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="font-sora text-[15px] font-bold">
            <button className={`w-[112px] h-full p-[10px] rounded transition-colors duration-300 bg-[#f37443]  hover:text-[#f37443] text-[#fff] hover:bg-[#fff]`}>
              Contact Us
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};
