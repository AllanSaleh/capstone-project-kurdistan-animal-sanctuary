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
    <div className="py-12">
      <h1 className="font-bold text-primary text-3xl pb-8">My Animals : </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {userpets.animals.map((item) => (
          <SwiperSlide>
            <Link href="./">
              <div className="rounded-lg cursor-pointer h-60">
                <img
                  className=" rounded-lg w-full h-full"
                  src={item.imgPath}
                  alt="animal profile "
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="rounded-lg cursor-pointer h-60">
            <button type="button" className="w-full h-full">
              bb
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
