import React from 'react'
import {PiTreeStructureFill} from "react-icons/pi"
import {IoMdConstruct} from "react-icons/io"
import {FaWarehouse} from "react-icons/fa"
export const Services = () => {
  return (
    <section id="services" className="py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our <span className='text-[#f37443]'>Services</span> </h2>
      <div className="flex  flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-white items-center flex flex-col p-6 rounded shadow-md w-full md:w-1/3">
        <div className="p-1 ">
          <IoMdConstruct className='text-[#f37443] text-3xl lg:text-5xl'/>
          </div>
          <h3 className="text-2xl font-semibold">Construction Management</h3>
          
          <p className="mt-1">We oversee all aspects of construction projects to ensure they are completed on time and within budget.</p>
        </div>
        <div className="bg-white items-center flex flex-col p-6 rounded shadow-md w-full md:w-1/3">
        <div className="p-1 ">
          <PiTreeStructureFill className='text-[#f37443] text-3xl lg:text-5xl'/>
          </div>
          <h3 className="text-2xl font-semibold">Structural Engineering</h3>
          <p className="mt-4">Our experts design safe and reliable structures for a variety of construction projects.</p>
        </div>
        <div className="items-center flex flex-col bg-white p-6 rounded shadow-md w-full md:w-1/3">
        <div className="p-1 ">
          <FaWarehouse className='text-3xl lg:text-5xl'/>
          </div>
          <h3 className="text-2xl font-semibold ">Site Development</h3>
          <p className="mt-4">We provide comprehensive site development services to prepare land for construction.</p>
        </div>
      </div>
    </div>
  </section>
  )
}
