/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import SliderData from "../mockData/successStoriesData";
import PrevArrow, { NextArrow } from "./slidersArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
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
        {SliderData.map((slide) => (
          <div className="imgContainer relative">
            <img
              className="sliderImg relative filter brightness-50"
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
