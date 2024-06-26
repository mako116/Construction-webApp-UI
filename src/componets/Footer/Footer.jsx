import React from 'react'
import { AiTwotoneSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'
 
export const Footer = () => {
    
  return (
    <footer className="bg-[#000]  text-white py-[50px] w-full h-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          <div className='flex'>
            <AiTwotoneSetting className={`text-[30px] lg:text-[55px] text-[#f37443]`} />
            <Link to="/" className={`flex flex-col fonts_sora`}>
              <span className='text-[10px] lg:text-[28px] tracking-[4px] font-bold leading-[15px] lg:leading-[20px]'>Cenjo </span>
              <span className='text-[10px] lg:text-[25px] tracking-[1px] font-[200] leading-[15px] lg:leading-[30px]'>Engineering</span>
            </Link>
          </div>
            <p className="text-sm">Innovative Engineering Solutions</p>
          </div>
          <nav className="flex space-x-4 flex-wrap items-center justify-center">
             <a href="#about" className="hover:text-[#f37443] transition duration-300">About</a>
            <a href="#services" className="hover:text-[#f37443] transition duration-300">Services</a>
            <a href="#projects" className="hover:text-[#f37443] transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-[#f37443] transition duration-300">Contact</a>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-7">
          <p className="text-sm"><span className='text-[#f37443]'> &copy; 2024 </span>  Cenjo Enginnering. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="hover:text-[#f37443] transition duration-300">Facebook</Link>
            <Link to="/" className="hover:text-[#f37443] transition duration-300">Twitter</Link>
            <Link to="/" className="hover:text-[#f37443] transition duration-300">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
