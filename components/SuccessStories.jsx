/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import firestore from "../services/firebase";
import PrevArrow, { NextArrow } from "./slidersArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const getdata = async () => {
    const snapshot = await firestore.collection("SuccessStories").get();
    const items = [];
    snapshot.forEach((item) => items.push(item.data()));
    setStories(items);
  };

  useEffect(() => {
    getdata();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    className: "slider relative",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {stories.map((slide) => (
          <div className="imgContainer relative">
            <img
              className="sliderImg relative filter brightness-50 object-cover"
              src={slide.imgURL}
              alt="animals being in their forever home"
            />
            <div className="summary absolute z-10 text-center mx-auto my-0 w-full">
              <p className="inline-block w-4/5">{slide.summary}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SuccessStories;
