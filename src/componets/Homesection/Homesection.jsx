import React from 'react'
import { Leftside } from './Leftside'
import { Rightside } from './Rightside'
import { Footer } from '../Footer/Footer'

export const Homesection = () => {
  return (
    <div className="w-full h-full flex justify-between flex-col">
        <div className='flex'>
        <div className="w-full">
        <Leftside/>
        </div>
        <div className="rightside">
        <Rightside/>
        </div>
    </div>
    <div className="">
        <Footer/>
    </div>
    </div>
  )
}
