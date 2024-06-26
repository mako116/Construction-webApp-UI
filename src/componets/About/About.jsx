import React from 'react'
import aboutsimg from "../../assests/peoples.webp"
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-6">
            <div className="overlay-container">
              <img src={aboutsimg} alt="About us" className="rounded" />
              <div className="overlay rounded">
                <p className="fonts_sora text-lg p-[20px] font-semibold">Cenjo Engineering exceeded our expectations. Their professionalism and expertise were evident in every phase of our project." </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 text-start">
            <h2 className="text-4xl font-bold mb-8 fonts_sora">About Us</h2>
            <p className="text-lg leading-relaxed">
            Cenjo Engineering is a leading provider of heavy construction services. With over 20 years of experience, we deliver innovative solutions to complex engineering challenges. Our team of experts is dedicated to ensuring the success of each project through meticulous planning and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
