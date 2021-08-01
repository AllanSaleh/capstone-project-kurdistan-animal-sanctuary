/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import AnimalCard from "./AnimalCards";

const AdoptThePerfectPet = () => {
  const { t } = useTranslation("adoptTheperfectPet");
  const [allValues, setAllValues] = useState({
    petType: "",
    breed: "",
    age: "",
    size: "",
    gender: "",
    color: "",
    vaccinated: "",
  });

  const searching = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col w-full">
      <div className="h-40 bg-adopt_perfect_pet_header w-full h-40 flex flex-col justify-center item-center">
        <p className="inline-block w-4/5 text-center w-full text-4xl sm:text-5xl text-white">
          {t("adoptTheperfectPet.adopt")}
        </p>
      </div>
      <div className="AdoptThePerfectPet flex flex-row w-full">
        <div className="flex flex-col w-3/12 mx-10">
          <h1 className="mb-5 text-2xl sm:text-3xl text-secondary mt-16">
            {t("adoptTheperfectPet.searchFilters")}
          </h1>
          <label htmlFor="PetType">{t("adoptTheperfectPet.petType")}</label>
          <input
            type="text"
            id="PetType"
            name="petType"
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            onChange={searching}
          />
          <label htmlFor="Breed" className="mt-1">
            {t("adoptTheperfectPet.breed")}
          </label>
          <input
            type="text"
            id="Breed"
            name="breed"
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            onChange={searching}
          />
          <label htmlFor="age" className="mt-1">
            {t("adoptTheperfectPet.age")}
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            min="0.2"
            max="20"
            step="0.1"
            onChange={searching}
          />
          <label htmlFor="size" className="mt-1">
            {t("adoptTheperfectPet.size")}
          </label>
          <select
            type="text"
            id="size"
            name="size"
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            onChange={searching}
          >
            <option value="small">{t("adoptTheperfectPet.small")}</option>
            <option value="medium">{t("adoptTheperfectPet.medium")}</option>
            <option value="big">{t("adoptTheperfectPet.big")}</option>
          </select>
          <label htmlFor="gender" className="mt-1">
            {t("adoptTheperfectPet.gender")}
          </label>
          <select
            id="gender"
            name="gender"
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            onChange={searching}
          >
            <option value="female">{t("adoptTheperfectPet.female")}</option>
            <option value="male">{t("adoptTheperfectPet.male")}</option>
          </select>
          <label htmlFor="Color" className="mt-1">
            {t("adoptTheperfectPet.color")}
          </label>
          <input
            type="text"
            id="Color"
            name="color"
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            onChange={searching}
          />
          <label htmlFor="vaccinated" className="mt-1">
            {t("adoptTheperfectPet.vaccinated")}
          </label>
          <select
            id="vaccinated"
            name="vaccinated"
            className="border-primary border focus:outline-none focus:ring focus:border-primary"
            onChange={searching}
          >
            <option value="yes">{t("adoptTheperfectPet.yes")}</option>
            <option value="no">{t("adoptTheperfectPet.no")}</option>
          </select>
          <div className="flex justify-center mt-5">
            <img src="./images/Doggo.png" alt="dog" className="w-52 h-52" />
          </div>
        </div>
        <AnimalCard
          className="w-full flex items-center justify-evenly h-4/5"
          petType={allValues.petType}
          size={allValues.size}
          gender={allValues.gender}
          breed={allValues.breed}
          age={allValues.age}
          color={allValues.color}
          vaccinated={allValues.vaccinated}
        />
      </div>
    </div>
  );
};

export default AdoptThePerfectPet;
