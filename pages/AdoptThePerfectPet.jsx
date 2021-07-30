import React from "react";
import SearchFilter from "./SearchFilter";
import AnimalCard from "./AnimalCards";

const AdoptThePerfectPet = () => (
  <div className="flex flex-col w-full">
    <div className="h-40 bg-adopt_perfect_pet_header w-full h-40 flex flex-col justify-center item-center">
      <p className="inline-block w-4/5 text-center w-full text-4xl sm:text-5xl text-white">
        Adopt the perfect pet
      </p>
    </div>
    <div className="AdoptThePerfectPet flex flex-row w-full">
      <SearchFilter />
      <AnimalCard className="w-full flex items-center justify-evenly h-4/5" />
    </div>
  </div>
);

export default AdoptThePerfectPet;
