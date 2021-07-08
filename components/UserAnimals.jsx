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
        imgPath: "./profile.jpeg",
      },
      {
        id: 4,
        imgPath: "./dog.jpeg",
      },
      {
        id: 4,
        imgPath: "./cat1.jpeg",
      },
      {
        id: 4,
        imgPath: "./cat2.jpeg",
      },
    ],
  };
  return (
    <div className="py-5">
      <h1 className="font-bold text-primary text-3xl pb-8">My Pets </h1>
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
              <div className="rounded-lg cursor-pointer">
                <img
                  className=" img-showcase rounded-lg"
                  src={item.imgPath}
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
  userid: PropTypes.number.isRequired,
};
export default UserAnimals;
