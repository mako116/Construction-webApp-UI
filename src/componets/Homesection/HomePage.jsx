import React from 'react';
import { Navbar } from '../Header/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage1 from '../../assests/construct.jpg';
import backgroundImage2 from '../../assests/Construction.jpeg';
import backgroundImage3 from '../../assests/images.jpg';

export const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const slides = [
    {
      id: 1,
      image: backgroundImage1,
      heading: 'Building the Future',
      subheading: 'Innovative Engineering Solutions for Heavy Construction',
    },
    {
      id: 2,
      image: backgroundImage2,
      heading: 'Engineering Excellence',
      subheading: 'Delivering Quality and Safety in Every Project',
    },
    {
      id: 3,
      image: backgroundImage3,
      heading: 'Constructing Landmarks',
      subheading: 'Transforming Ideas into Reality',
    },
  ];

  return (
    <div className='hiddens'>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full relative h-[70vh] lg:h-screen">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <header className="relative z-20">
                <Navbar />
              </header>
              <div className="relative z-10 h-full flex justify-center items-center text-center text-white">
                <div>
                  <h1 className="text-3xl lg:text-7xl font-bold">{slide.heading}</h1>
                  <p className="text-1xl lg:text-2xl mt-4">{slide.subheading}</p>
                  <a
                    href="#contact"
                    className="mt-4  lg:mt-8 font-[600] inline-block bg-[#f37443] py-[13px] lg:py-4 px-4 lg:px-6 rounded-[10px] transition-colors duration-300  hover:text-[#f37443] text-[#fff] hover:bg-[#fff]"
                  >
                    More About us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
