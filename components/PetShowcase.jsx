import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import firestore from "../services/firebase";

const PetShowcase = () => {
  const { t } = useTranslation("homePage");
  const [animals, setAnimals] = useState([]);
  const getdata = async () => {
    const snapshot = await firestore.collection("animal photos").get();
    const items = [];
    snapshot.forEach((item) => items.push(item.data()));
    setAnimals(items);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className=" w-full h-5/6 pb-16 bg-secondary font-Quicksand">
      <div className="">
        <h1 className="text-center mx-auto w-full pt-6 pb-10 text-3xl w-72 font-bold text-primary md:text-7xl ">
          {t("homePage.makeApetHappy")}
        </h1>

        <div className="flex flex-col justify-around items-center px-20 md:px-24 md:flex-row">
          {animals.map((item) => (
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
              <div className="card h-48 w-48 py-5  relative rounded-lg cursor-pointer md:h-80 md:w-80 md:mr-5 ">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={item.profilepic}
                  alt="animal profile "
                />

                <div className="absolute left-14 bottom-7 bg-white w-20 h-8 font-semibold bg-opacity-90 rounded-lg md:h-12 md:w-3/5 md:left-16 md:bottom-6 ">
                  <p className="text-center opacity-100 text-xl text-secondary md:text-4xl">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PetShowcase;
