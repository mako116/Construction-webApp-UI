import React, { useState } from 'react'
import close from "../../../assests/X.svg";


export const Styles = () => {
     const [modalOpen2, setModalOpen2] = useState(false);
 
    const toggleMenus = () => {
      setModalOpen2(!modalOpen2);
    };
  
    const closeMenus = () => {
      setModalOpen2(false);
    }
   
   
  
  return (
    <div className="">
    <div className="flex flex-col gap-[20px]">
           <div className="flex justify-between gap-[15px] pt-[10px] pb-[15px] items-center justify-center w-full">
              <h4 className='font-[300] pb-[4px] text-[10px] leading-[12.6px] w-full border-b-[2px] flex items-center justify-center border-[#3E74FF]'>Style</h4>
              <span className='w-full font-[300] text-[10px] leading-[12.6px]' onClick={toggleMenus}>Coordinates</span>
              <span className='w-full font-[300] text-[10px] leading-[12.6px]'>Visibility</span>
            </div>
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
            <div className="w-[20px] h-[20px] bg-[#449F0C] border-[2px] border-[#2B2B2B]">
            </div>
            Background
            </div>
            <div className="flex justify-between gap-[20px]">
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
            <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bgblue border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
            <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none  bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bg-[#A81FFD] border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            </div>
            <div className="flex justify-between gap-[20px]">
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bg-[#C70024] border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none  bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bg-[#1FFDD5] border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            </div>
            <div className="flex justify-between gap-[20px]">
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bg-[#C78F00] border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none  bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bg-[#FD1FCC] border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            </div>
            <div className="flex justify-between gap-[20px]">
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bg-[#C75300] border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <input type="text"  className='w-[87px] outline-none bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            <div className="w-[20px] h-[20px] bg-[#1FA0FD] border-[2px] border-[#1C1B1B]">
            </div>
            </div>
            </div>
            {/* second batch */}
            <div className="flex gap-[16px] justify-between items-center">
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <span className='text-[#FFFFFFBF]'>Background</span>
            <input type="text"  className='w-[56px]  bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            </div>
            <div className="w-full flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
             <span className='text-[#FFFFFFBF]'>Show Price </span>
            </div>
            </div>
            {/* 3rd batch */}
            <div className="flex gap-[19px] justify-between items-center">
            <div className="w-full flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
            <span className='text-[#FFFFFFBF]'>Labels</span>
             </div>
            <div className=" w-full flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <div className="flex items-center justify-center ">
      <input
        type="checkbox"
        className="checkbox-custom"
      />
    </div>
             <span className='text-[#FFFFFFBF]'>Reverse </span>
            </div>
            </div>

            {/* fourth batch */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label className='text-[#FFFFFFBF] font-[400] text-[9px] leading-[11.34px]'>
                Horizontal alignment
                </label>
                
                <select className='outline-none bg-[#201F1F] w-[128px] h-[20px] pl-[4px] font-[400] text-[9px] leading-[11.34px] text-[#fff]'>
                <option className='text-[#fff] bg-transparents'>
                  fffgf
                  </option>
                </select>
               
              </div>
              <div className="flex flex-col">
                <label className='text-[#FFFFFFBF] font-[400] text-[9px] leading-[11.34px]'>
                Vertical alignment
                </label>
                
                <select className='outline-none bg-[#201F1F] w-[128px] h-[20px] pl-[4px] font-[400] text-[9px] leading-[11.34px] text-[#fff]'>
                <option className='outline-none text-[#fff] bg-transparents'>
                  fffgf
                  </option>
                </select>
               
              </div>
            </div>
            {/* last button */}
            <div className="flex gap-[5px] justify-end py-[15px]">
              <button className='w-[62.57px] text-[#3E74FF] font-[600] text-[8.92px] leading-[11.23px] h-[23.74px] rounded-[3.18px] border-[#3E74FF] border'>
                Cancel
              </button>
              <button className='w-[62.57px] bg-[#3E74FF] text-[#fff] font-[600] text-[8.92px] leading-[11.23px] h-[23.74px] rounded-[3.18px] border-[#3E74FF] border'>
                Update
              </button>
            </div>
    </div>

    {/* coordinates */}
    {modalOpen2 && (
        <div className="coordinates inset-0 ">
          <div className="widths  p-4 rounded-lg">
          <div className="flex justify-between w-full  py-[10px]"> 
                  <h2 className='font-[400] text-[12px] leading-[15.12px]'> Fibonacci</h2>
                  <img className='cursor-pointer' onClick={closeMenus} src={close} alt="" />
          </div>
          <div className="flex flex-col gap-[20px]">
           <div className="flex justify-between gap-[15px] pt-[10px] pb-[15px] items-center justify-center w-full">
              <h4 className='font-[300] text-[10px] leading-[12.6px] w-full  flex items-center justify-center '>Style</h4>
              <span className='w-full font-[300] pb-[4px] text-[10px] leading-[12.6px] border-b-[2px] border-[#3E74FF] flex items-center justify-center '>Coordinates</span>
              <span className='w-full font-[300] text-[10px] leading-[12.6px]'>Visibility</span>
            </div>
            
            <div className="flex justify-between gap-[20px]">
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <span className='font-[300] text-[9px] leading-[11.34px] text-[#FFFFFFBF]'>#1 (Bar, Price)</span>
            <input type="text"  className='w-[87px] outline-none bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            
            </div>
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           
            <input type="text"  className='w-[87px] outline-none  bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
            
            </div>
            </div>
            <div className="flex justify-between gap-[20px]">
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           <span className='font-[300] text-[9px] leading-[11.34px] text-[#FFFFFFBF]'>#2 (Bar, Price)</span>
            <input type="text"  className='w-[87px] outline-none bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
             
            </div>
            <div className="flex items-center gap-[5px] font-[300] text-[9px] leading-[11.34px]">
           
            <input type="text"  className='w-[87px] outline-none  bg-transparent h-[20px] rounded-[3px] border border-[#2B2B2B]'/>
             
            </div>
            </div>
            
           
            {/* last button */}
            <div className="flex gap-[5px] justify-end py-[15px]">
              <button className='w-[62.57px] text-[#3E74FF] font-[600] text-[8.92px] leading-[11.23px] h-[23.74px] rounded-[3.18px] border-[#3E74FF] border'>
                Cancel
              </button>
              <button className='w-[62.57px] bg-[#3E74FF] text-[#fff] font-[600] text-[8.92px] leading-[11.23px] h-[23.74px] rounded-[3.18px] border-[#3E74FF] border'>
                Update
              </button>
            </div>
           </div>
          </div>
        </div>
      )}

</div>
  )
}
