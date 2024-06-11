import React, { useState } from 'react'
import cross from "../../assests/bx_cross.svg"
import "../styles/styles.css"
export const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpens, setMenuOpens] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    
      const closeMenu = () => {
        setMenuOpens(false);
      };
      const toggleMenus = () => {
        setMenuOpens(!menuOpens);
      };
    
      const closeMenus = () => {
        setMenuOpens(false);
      };

      const toggleMenued = () => {
        setMenuOpened(!menuOpen);
      };
    
      const closeMenued = () => {
        setMenuOpened(false);
      };

      
  return (

    
    <>
    <div className="w-full h-full">
        <div className=" w-full h-full">
            <ul className='px-[10px]'>
                
                <li>
                <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
              <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
             </div>
            <div className={`navbar ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
            <ul>
              <li onClick={toggleMenu}>About us</li>
             </ul>
          </div>
          <div className={`fibonar ${menuOpen ? 'open' : ''}`} onClick={closeMenus}>
            <ul>
              <li onClick={toggleMenu}>About dus</li>
             </ul>
          </div>
           
                </li>
            </ul>
        </div>
        
        <div className="">
        <li>

       </li>
        </div>
    </div>
    </>
  )
}
