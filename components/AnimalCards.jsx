/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "next-i18next";
import animalCardData from "../mockData/AnimalCardData";

const AnimalCard = (props) => {
  const { t } = useTranslation("adoptTheperfectPet");
  return (
    <div className="animalCardConatiner">
      <h1 className="text-secondary text-2xl sm:text-3xl mb-4 mt-7 ml-16">
        {t("adoptTheperfectPet.animalsNeedsAlovingHome")}
      </h1>
      <div className="flex flex-row w-full h-full flex-wrap justify-evenly mt-1 animalContainer overflow-y-scroll overflow-y-visible">
        {animalCardData
          .filter(
            (animal) =>
              animal.size.indexOf(props.size) >= 0 &&
              animal.gender.indexOf(props.gender) >= 0 &&
              animal.petType.toLowerCase().indexOf(props.petType) >= 0 &&
              animal.breed.toLowerCase().indexOf(props.breed) >= 0 &&
              animal.age.indexOf(props.age) >= 0 &&
              animal.petColor.toLowerCase().indexOf(props.color) >= 0 &&
              animal.Petvaccinated.indexOf(props.vaccinated) >= 0
          )
          .map((animal) => (
            <a href="#">
              <div className="border border-black flex flex-col rounded-md items-center h-48 mt-2 mx-8">
                <img
                  className="w-56 h-28 rounded-md"
                  src={animal.imgURL}
                  alt=""
                />
                <p className="mt-2.5 text-secondary">{animal.name}</p>
                <div>
                  <span>{animal.genderName}</span>
                  <span className="ml-1">{animal.petType}</span>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default AnimalCard;
