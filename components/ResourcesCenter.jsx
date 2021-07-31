/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import firestore from "../services/firebase";

export default function ResourceCenter() {
  const [shelters, setShelters] = useState([]);
  const getdata = async () => {
    const snapshot = await firestore.collection("ResourcesCenter").get();
    const items = [];
    snapshot.forEach((item) => items.push(item.data()));
    setShelters(items);
  };

  useEffect(() => {
    getdata();
  }, []);
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
  const about = [];
  const settings = {
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
        {shelters.map((img, idx) => (
          <div
            className={
              idx === imageIndex
                ? " activeSlide relative w-52 md:w-64 h-64 md:h-64 rounded-lg "
                : " slide rounded-lg "
            }
          >
            <div className="hidden"> {about.push(img.about)}</div>

            <img
              src={img.picture}
              alt={img}
              className=" w-full h-full hover:bg-gray-300 object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="text-center font-bold	 text-secondary font-Quicksand  mb-16 mt-1  ">
        {about[imageIndex]}
      </div>
    </div>
  );
}
