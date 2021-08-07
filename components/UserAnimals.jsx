import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import firestore from "../services/firebase";

SwiperCore.use([Navigation]);

const UserAnimals = () => {
  const { t } = useTranslation("userProfile");
  const [animals, setAnimals] = useState([]);
  const getdata = async () => {
    const snapshot = await firestore.collection("UserAnimals").get();
    const items = [];
    snapshot.forEach((item) => items.push(item.data()));
    setAnimals(items);
  };

  useEffect(() => {
    getdata();
  }, []);

  const [modalISOpen, setModalIsOpen] = useState(false);

  return (
    <div className="py-12 pb-20">
      <form>
        <Modal
          isOpen={modalISOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              position: "fixed",
              zIndex: "111",
              overflow: "auto",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(5, 102, 118, 0.8)",
            },
            content: {
              display: "flex",
              flexDirection: "column",
              position: "relative",
              margin: "0 auto",
              width: "24rem",
              border: "1px solid #ccc",
              background: "#fff",
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <label htmlFor="PetType" className="text-primary mb-1">
            {t("userProfile.petType")}
          </label>
          <input
            type="text"
            id="PetType"
            name="petType"
            required
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
          />
          <label htmlFor="Breed" className="mt-1 text-primary mb-1">
            {t("userProfile.breed")}
          </label>
          <input
            type="text"
            id="Breed"
            name="breed"
            required
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
          />
          <label htmlFor="age" className="mt-1 text-primary mb-1">
            {t("userProfile.age")}
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            min="0.2"
            max="20"
            step="0.1"
          />
          <label htmlFor="size" className="mt-1 text-primary mb-1">
            {t("userProfile.size")}
          </label>
          <select
            type="text"
            id="size"
            name="size"
            required
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
          >
            <option value="">-</option>
            <option value="small">{t("userProfile.small")}</option>
            <option value="medium">{t("userProfile.medium")}</option>
            <option value="big">{t("userProfile.big")}</option>
          </select>
          <label htmlFor="gender" className="mt-1 text-primary mb-1">
            {t("userProfile.gender")}
          </label>
          <select
            id="gender"
            name="gender"
            required
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
          >
            <option value="">-</option>
            <option value="female">{t("userProfile.female")}</option>
            <option value="male">{t("userProfile.male")}</option>
          </select>
          <label htmlFor="Color" className="mt-1 text-primary mb-1">
            {t("userProfile.color")}
          </label>
          <input
            type="text"
            id="Color"
            name="color"
            required
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
          />
          <label htmlFor="vaccinated" className="mt-1 text-primary mb-1">
            {t("userProfile.vaccinated")}
          </label>
          <select
            id="vaccinated"
            name="vaccinated"
            required
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
          >
            <option value="">-</option>
            <option value="yes">{t("userProfile.yes")}</option>
            <option value="no">{t("userProfile.no")}</option>
          </select>
          <label htmlFor="pics" className="mt-1 text-primary mb-1">
            {t("userProfile.pics")}
          </label>
          <label
            htmlFor="pics"
            className="uploadImg bg-white active:bg-primary hover:bg-secondary"
          >
            <input
              type="file"
              name="pics"
              id="pics"
              multiple
              className="hidden "
            />
          </label>
          <div className="flex flex-col w-full items-center mt-5">
            <div>
              <button
                type="button"
                onClick={() => setModalIsOpen(false)}
                className="mt-5 rounded-2xl w-28 h-10 active:text-primary active:bg-highlight bg-primary text-highlight font-medium mr-5"
              >
                {t("userProfile.close")}
              </button>
              <button
                type="submit"
                className="mt-5 rounded-2xl w-28 h-10 text-primary bg-highlight active:bg-primary active:text-highlight font-medium"
              >
                {t("userProfile.submit")}
              </button>
            </div>
          </div>
        </Modal>
      </form>
      <h1 className="font-bold text-primary text-3xl pb-8">
        {t("userProfile.myAnimals")}
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
        {animals.map((item) => (
          <SwiperSlide>
            <Link
              href={{
                pathname: "/AnimalProfile",
                query: {
                  name: item.name,
                  photo: item.profilepic,
                  sex: item.sex,
                  age: item.age,
                  vaccinated: item.vaccinated,
                  about: item.about,
                  WhatILike: item.preference,
                  shelter: item.shelter,
                  collection: item.myPhotos,
                },
              }}
            >
              <div className="  rounded-lg cursor-pointer h-40 w-40 md:w-60 md:h-60 border-2  border-secondary ">
                <img
                  className=" rounded-md w-full h-full hover:bg-gray-300 object-cover "
                  src={item.profilepic}
                  alt="animal profile "
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="rounded-lg cursor-pointer h-40 w-40 md:w-60 md:h-60 border-2 border-secondary ">
            <button
              type="button"
              onClick={() => setModalIsOpen(true)}
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

export default UserAnimals;
