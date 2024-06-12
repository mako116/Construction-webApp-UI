import React from 'react'
import { Sidebar } from './Sidebar'

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
