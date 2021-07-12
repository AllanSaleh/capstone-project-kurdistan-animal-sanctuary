import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation]);

const UserAnimals = ({ aimalId }) => {
  const animal = {
    id: aimalId,
    picture: ["./profile.jpeg", "./dog.jpeg", "./cat2.jpeg", "./cat1.jpeg"],
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
        {animal.picture.map((item) => (
          <SwiperSlide>
            <Link href="./">
              <div className="rounded-lg cursor-pointer h-60 border-2 border-secondary ">
                <img
                  className=" rounded-md w-full h-full hover:bg-gray-300 object-cover "
                  src={item}
                  alt="animal profile "
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
UserAnimals.propTypes = {
  aimalId: PropTypes.number.isRequired,
};
export default UserAnimals;
