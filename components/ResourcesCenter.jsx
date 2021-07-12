import React, { useState } from "react";

import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import shelter1 from "../public/assests-shelters/shelter 1.jpg";

import shelter2 from "../public/assests-shelters/shelter 2.jpg";

import shelter3 from "../public/assests-shelters/shelter 3.jpeg";

import shelter4 from "../public/assests-shelters/shelter 4.jpg";

import shelter5 from "../public/assests-shelters/shelter 5.jpg";

import shelter6 from "../public/assests-shelters/shelter 6.jpg";

import shelter7 from "../public/assests-shelters/shelter 7.jpg";

import shelter8 from "../public/assests-shelters/shelter 8.jpg";



let shelterImg = [
  {
    picture: shelter1,
    about: "1.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"
  },
    {
    picture: shelter2,
    about: "2.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"

    
  },
  {
    picture: shelter3,
    about: "3.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"
  
    
  },
  {
    picture: shelter4,
    about: "4.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"
    
  },
  {
    picture: shelter5,
    about: "5.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"
    
  },
  {
    picture: shelter6,
    about: "6.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"
    
  },
  {
    picture: shelter7,
    about: "7.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"
    
  },
  {
    picture: shelter8,
    about: "8.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum"
    
  },
]
 
 

export default function ResourceCenter() {
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const [imageIndex, setImageIndex] = useState(0);


  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) =>   setImageIndex(next) ,
    
  };
 
  
  return (
    <div className="block">
      <h1 className="font-extrabold text-center pt-16 pb-5 text-Quicksand text-3xl text-primary">
        RESOURCES CENTER
      </h1>
      <p className="text-center p-6 text-secondary">
        lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit
        amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem
        ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem
        ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet
        lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum
        dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum
        dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem
        lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor
        lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit
        amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem
        ipsum dolor lorem ipsum dolor sit amet lorem
      </p> 
      <h1 className="font-bold text-center font-Quicksand   text-primary pt-6">Find Shelters We Work With</h1>
{console.log(imageIndex)}
      <Slider className="slider" {...settings}>
        {shelterImg.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
           
          <img src={img.picture.src} alt={img} />
           
          </div>
        ))}
        

      
      </Slider>
      <div className="text-center text-secondary font-Quicksand m-16 ">{shelterImg[imageIndex].about}
      </div>

    </div>
  );
}