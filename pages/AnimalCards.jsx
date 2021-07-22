/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import animalCardData from "../mockData/AnimalCardData";

const animalCard = () => (
  <div>
    {animalCardData.map((animal) => (
      <a href="#">
        <div className="border border-black flex flex-col w-40 rounded-md items-center h-48">
          <img className="w-40 h-28 rounded-md" src={animal.imgURL} alt="" />
          <p className="mt-2.5">{animal.name}</p>
          <div>
            <span>{animal.gender}</span>
            <span className="ml-1">{animal.type}</span>
          </div>
        </div>
      </a>
    ))}
  </div>
);

export default animalCard;
