import React from 'react'
import { Sidebar } from './Sidebar'
import { Leftside } from './Leftside'
import { Rightside } from './Rightside'

export const HomePage = () => {
  return (
    <>
    <div className="flex justify-between">
        <div className="w-[50px]">
            <Sidebar/>
        </div>
        <div className="flex w-full">
            <Leftside/>
            <Rightside/>
        </div>
    </div>
    </>
  )
}
