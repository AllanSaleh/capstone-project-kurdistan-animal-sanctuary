/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import Slider from "react-slick";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import shelter1 from "../public/assests-shelters/shelter 1.jpg";

import shelter2 from "../public/assests-shelters/shelter 2.jpg";

import shelter3 from "../public/assests-shelters/shelter 3.jpeg";

import shelter4 from "../public/assests-shelters/shelter 4.jpg";

import shelter5 from "../public/assests-shelters/shelter 5.jpg";

import shelter6 from "../public/assests-shelters/shelter 6.jpg";

import shelter7 from "../public/assests-shelters/shelter 7.jpg";

import shelter8 from "../public/assests-shelters/shelter 8.jpg";

const shelterImg = [
  {
    picture: shelter1,
    about:
      "1.Animal Control: animal control is the best vertenary outside erbil and its surrounding area if you need any help or tips for looking out for an animal or saving lives give them a call and they will be there in no time",
  },
  {
    picture: shelter2,
    about:
      "2.Clinton County shelter: Clinton county shelter are known for their extordenry work with animals and their love for them if you to adop or just hang out with they are always avaliable and will be happy by having you in their family",
  },
  {
    picture: shelter3,
    about:
      "3.Nishtiman Shelter: Nishtiman shelter is made of volunters who love animal and dedicate their time to save animals and rise awarnes about animals and how to help them they are always looking for volunters theres no requirments if you love animals you are welcome with them",
  },
  {
    picture: shelter4,
    about:
      "4.The Animal Foundation, founded in 1978, is one of the highest volume single-site animal shelters in Kurdistan region. Our mission is to save all healthy and treatable animals in the Las Vegas Valley. Last year we saved over 15,000 lost, homeless, and often mistreated animals. Much like a public hospital, as an open-admission shelter,",
  },
  {
    picture: shelter5,
    about:
      "5.Pet Friendly Homeless Shelters. There are hundreds of homeless shelters nationwide that accept homeless families and individuals and welcome their pets too. HomelessShelter.pet is a user-contributed list of shelters that accomodate pets",
  },
  {
    picture: shelter6,
    about:
      "6.Adopt a pet through Blue Cross Kurdistan region. Help us by rehoming a cat, dog, kitten, puppy, horse, rabbit, chinchilla, guinea pig or gerbil. Help us help pets find forever homes.",
  },
  {
    picture: shelter7,
    about:
      "7.Join us in creating a future where every pet is safe, respected and loved. For the past 17 years, PetRescue has helped in creating true social change in pet adoption, but what still keeps us up at night? Find out more about our mission in helping to save 100,000 more lives each year.",
  },
  {
    picture: shelter8,
    about:
      "8.Animals wandering the street are much more likely to become ill, injured or killed. Not only do animal shelters benefit the community by taking stray dogs and cats from the streets, they provide an invaluable service to helpless animals.",
  },
];

export default function ResourceCenter() {
  const NextArrow = ({ onClick }) => (
    <button
      type="button"
      className="top-1/3 right-0 arrow1 bg-transparent"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      type="button"
      className="top-1/3 left-0 arrow1 bg-transparent "
      onClick={onClick}
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="block px-4 md:px-20">
      <h1 className="font-extrabold text-center pt-16 pb-5 text-Quicksand text-3xl text-primary">
        RESOURCES CENTER
      </h1>
      <p className="text-center p-4 md:p-6 text-secondary font-bold w-full">
        Heres some shelters and general resources you can look through to find
        the best way shelter for your need and vertanaries if you need any tips
        to look out for your own pets
      </p>
      <h1 className="text-xl font-bold text-center font-Quicksand   text-primary pt-6 pb-10">
        Find Shelters We Work With
      </h1>

      <Slider className="slider w-4/5" {...settings}>
        {shelterImg.map((img, idx) => (
          <div
            className={
              idx === imageIndex
                ? " activeSlide w-52 md:w-64 h-52 md:h-64 rounded-lg"
                : " slide rounded-lg"
            }
          >
            <img
              src={img.picture.src}
              alt={img}
              className=" w-full h-full hover:bg-gray-300 object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="text-center font-bold	 text-secondary font-Quicksand mb-16 mt-1 ">
        {shelterImg[imageIndex].about}
      </div>
    </div>
  );
}
