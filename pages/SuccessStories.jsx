/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import PrevArrow, { NextArrow } from "./slidersArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
  const SliderData = [
    {
      imgName: "img1",
      imgURL:
        "https://images.unsplash.com/photo-1518887499460-71d222eed89d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      summary:
        "meet lilo and his story from the moment we found him on the street to the second he was taken to his forever home with his new loving family",
    },
    {
      imgName: "img2",
      imgURL:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac feugiat nunc, quis porta ipsum. Maecenas finibus, tellus cursus venenatis bibendum, dui leo aliquam ante, sed eleifend velit sapien sit amet tortor. Etiam aliquet mauris eu neque gravida consequat eget et lectus. Sed sit amet venenatis diam. Curabitur porttitor fermentum convallis. Aenean ultrices blandit purus, ac laoreet magna ornare ac. Sed molestie egestas felis, et facilisis arcu. Etiam consectetur dui quis tempor molestie. In ipsum tortor, eleifend egestas finibus vel, vulputate id enim. Aenean aliquam eros mollis magna vulputate aliquet. Sed pellentesque ipsum vitae libero lobortis, eu fermentum eros mollis. Sed in ipsum sit amet ex gravida aliquam et non lacus.`,
    },
    {
      imgName: "img3",
      imgURL:
        "https://images.unsplash.com/photo-1536173375199-161929d85af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      summary: "1234567890987654321234567",
    },
  ];

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
