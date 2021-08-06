import React, { useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const UserAnimals = () => {
  const { t } = useTranslation("userProfile");
  const userpets = {
    animals: [
      {
        name: "Zeus",
        sex: "Male",
        age: 5,
        vaccinated: "Yes",
        shelter: "120- Ankawa road",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2Fprofile.jpg?alt=media&token=fca2330f-4707-4e64-8969-e7f4198c0a91",
        myPhotos: [
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2F1.jpg?alt=media&token=8bbcc19a-5ed5-4ae1-a34f-87f978c9b5fc",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2F2.jpg?alt=media&token=4d7ba5e6-2bf4-46f2-b280-1d5ea3f6cb80",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2F3.jpg?alt=media&token=3cd0064c-d75c-4e9c-abc1-667c7a2abfa0",
        ],
        about:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
        preference:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
      },
      {
        name: "Edgar",
        sex: "Female",
        age: 4,
        vaccinated: "Yes",
        shelter: "120- Ankawa road",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2Fprofile%20edgar.jpg?alt=media&token=53d0180e-d79a-4e44-ba17-8b28c11ac0b5",
        myPhotos: [
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2Fedgar%201.jpg?alt=media&token=e4b06505-3463-4802-ad45-29e3a4ffc203",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2Fedgar%202.jpg?alt=media&token=782c1320-2f46-4fe1-93c0-71f8e07d97f2",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2Fedgar%203.jpg?alt=media&token=eb6c5c91-e871-488e-8f80-26a5d015922f",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2Fedgar%204.jpg?alt=media&token=c83f248b-5ab4-4f05-abfe-75d67a71bc67",
        ],
        about:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
        preference:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
      },
      {
        name: "Nala",
        sex: "Female",
        age: 1,
        shelter: "120- Ankawa road",
        vaccinated: "Yes",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FNala%20profile.jpg?alt=media&token=aedff2fd-ba39-4e36-8dad-c8145b6addc6",
        myPhotos: [
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FNala%201.jpg?alt=media&token=a4512324-cc54-4cff-88c2-81c9ae931b27",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FNala%202.jpg?alt=media&token=4a60108e-c4e0-4843-8c04-0f7f1c56bd1d",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FNala%203.jpg?alt=media&token=c7516c9c-6645-4322-a891-b494452a8693",
        ],

        about:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
        preference:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
      },
      {
        name: "Loki",
        sex: "Male",
        age: 2,
        shelter: "120- Ankawa road",
        vaccinated: "Yes",
        profilepic:
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FLoki%20profile.jpg?alt=media&token=89671b74-9e75-4d3a-bd0c-ceac004ba669",
        myPhotos: [
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FLoki%201.jpg?alt=media&token=474bb40c-8ade-46bd-b10c-065675098ef7",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FLoki%202.jpg?alt=media&token=b0909f8a-56aa-4b89-82dc-f057306e8ff4",
          "https://firebasestorage.googleapis.com/v0/b/kurdistan-animal-sanctuary.appspot.com/o/Animal%20photos%2FLoki%203.jpg?alt=media&token=1f5a85e5-a43a-4837-9604-a4bdb9d36fdb",
        ],
        about:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
        preference:
          "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
      },
    ],
  };

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
        {userpets.animals.map((item) => (
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
