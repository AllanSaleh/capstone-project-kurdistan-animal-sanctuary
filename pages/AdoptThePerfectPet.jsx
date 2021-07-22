import React from "react";
import SearchFilter from "./SearchFilter";
import AnimalCard from "./AnimalCards";

const AdoptThePerfectPet = () => (
  <div className="flex flex-col w-full">
    <div className="flex flex-row w-full">
      <SearchFilter />
      <AnimalCard className="w-full flex items-center justify-evenly h-4/5" />
    </div>
  </div>
);

export default AdoptThePerfectPet;
