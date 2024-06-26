import React from 'react';
import commercial from "../../assests/commercial.jpg"
import road from "../../assests/roads.jpg"
import infrastructure from "../../assests/infrastructure.jpeg"
import turbine from "../../assests/turbine.jpg"
import Green_Construction from "../../assests/Green_Construction.jpeg"
import brige from "../../assests/brige.jpg"
import Residential from "../../assests/Residential.jpg"
import Building from "../../assests/Building.jpg"
import Factories from "../../assests/Factories.png"
import Industrial from "../../assests/Industrial.jpg"
import Construction from "../../assests/roads.jpg"
  

function Projects() {

    const project =[
        {
            name:"Commercial construction",img:infrastructure
        },
        {
            name:"Road",img:infrastructure
        },
        {
            name:"Infrastructure construction",img:infrastructure
        },
        {
            name:"Power station",img:turbine
        },
        {
            name:"Green construction",img:Green_Construction
        },

        {
            name:"Bridge",img:brige
        },
        {
            name:"Residential area",img:Residential
        },
        {
            name:"Building",img:Building
        },
        {
            name:"Factories",img:Factories
        },
        {
            name:"Industrial",img:Industrial
        },

        {
            name:"Commercial Project",img:Industrial
        },
        {
            name:"Construction Managent",img:Industrial
        },
    ]
  return (
    <section id="projects" className="py-5 lg:py-20 bg-gray-100 ">
      <div className="container mx-auto px-[10px]">
        <h2 className="text-4xl font-bold mb-8 fonts_sora">Our Projects</h2>

        <div className="flex py-[5px] gap-[10px] fonts_monst">
            <span className='text-pink-800 font-bold '>Private Development</span>
            <div className="w-[1.7px] mt-[2px] h-[17px] bg-gray-400"></div>
            <span className='text-gray-600 font-bold'>Public infrastructure</span>
        </div>
       <div className="grids w-full text-center ">
       {project.map((items, index)=>(
            <div key={index} className="flex  flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className=" p-2  rounded-[20px] shadow-md relative ">
              <img src={items.img} alt="Project 1" className="h-40 lg:h-48 object-cover rounded-[20px]" />
              <h3 className="text-[12px] px-[6px] lg:text-1xl font-bold mt-4 absolute bottom-0 pb-[20px] pl-[10px] text-[#fff]">{items.name}</h3>
             </div>
             
          </div>
        ))}
       </div>
      </div>
    </section>
  );
}

export default Projects;
