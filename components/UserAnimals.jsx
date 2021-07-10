import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation]);

const UserAnimals = ({ userid }) => {
  const userpets = {
    animals: [
      {
        owner: userid,
        id: 2,
        imgPath: "./testImages/profile.jpeg",
      },
      {
        id: 4,
        imgPath: "./testImages/dog.jpeg",
      },
      {
        id: 4,
        imgPath: "./testImages/cat2.jpeg",
      },
      {
        id: 4,
        imgPath: "./testImages/cat1.jpeg",
      },
    ],
  };
  return (
    <div className="py-12 pb-20">
      <h1 className="font-bold text-primary text-3xl pb-8">My Animals : </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
      >
        {userpets.animals.map((item) => (
          <SwiperSlide>
            <Link href="./">
              <div className="rounded-lg cursor-pointer h-60 border-2 border-secondary ">
                <img
                  className=" rounded-lg w-full h-full hover:bg-gray-300 object-cover "
                  src={item.imgPath}
                  alt="animal profile "
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="rounded-lg cursor-pointer h-60 border-2 border-secondary ">
            <button
              type="button"
              className=" w-full h-full font-bold rounded-lg border-b-2 bg-gray-200 hover:bg-gray-300 text-secondary flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3/6 w-3/6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
UserAnimals.propTypes = {
  userid: PropTypes.number.isRequired,
};
export default UserAnimals;
