import React from 'react'
import { Navbar } from '../componets/Header/Navbar'
import { HomePage } from '../componets/Homesection/HomePage'
import { Footer } from '../componets/Footer/Footer'

export const Layout = () => {
  return (
    <>
    <Navbar/>
    <HomePage/>
    {/* <Footer/> */}
    </>
  )
}
