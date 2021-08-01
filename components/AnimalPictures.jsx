import React from "react";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";
import Link from "next/link";
import "./swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation]);

const UserAnimals = ({ animalID }) => {
  const { t } = useTranslation("animalProfile");
  const animal = {
    id: animalID,
    picture: ["./profile.jpeg", "./dog.jpeg", "./cat2.jpeg", "./cat1.jpeg"],
  };
  return (
    <div className="py-12 pb-20">
      <h1 className="font-bold text-primary text-3xl pb-8">
        {t("animalProfile.picturesOfMe")}
      </h1>

      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
      >
        {animal.picture.map((item) => (
          <SwiperSlide>
            <Link href="./">
              <div className="rounded-lg cursor-pointer h-40 w-40 md:w-60 md:h-60 border-2  border-secondary ">
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
  animalID: PropTypes.number.isRequired,
};
export default UserAnimals;
