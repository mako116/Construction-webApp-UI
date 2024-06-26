import React from 'react'
 import { HomePage } from '../componets/Homesection/HomePage'
import { Footer } from '../componets/Footer/Footer'
import "../componets/styles/styles.css"
import { Services } from '../componets/services'
import { About } from '../componets/About/About'
import CounterSection from '../componets/Countdown'
import Projects from '../componets/Projects/Project'
import Contact from '../componets/contact/Contactus'
 export const Layout = () => {
  return (
    <>
     <HomePage/>
     <Services/>
     <CounterSection/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}
