import React from 'react'
import { Sidebar } from './Sidebar'
import { Leftside } from './Leftside'
import { Rightside } from './Rightside'
import ChartsBar from './charts/Chartbar'
import { Footer } from '../Footer/Footer'
import { Homesection } from './Homesection'

export const HomePage = () => {
  return (
    <>
    <div className="flex justify-between bg-[#191919]">
       <div className="h-full">
       <div className="w-[50px] h-full">
            <Sidebar/>
        </div>
        
       </div>
        
      <Homesection/>
       
    </div>
    
    </>
  )
}
