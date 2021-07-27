/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const SearchFilter = () => (
  <div className="flex flex-col w-3/12 mx-10">
    <h1 className="mb-5 text-2xl sm:text-3xl text-secondary mt-16">
      Search Filters
    </h1>
    <label htmlFor="PetType">PET TYPE</label>
    <input
      type="text"
      id="PetType"
      className="border-primary border focus:outline-none focus:ring focus:border-primary"
    />
    <label htmlFor="Breed" className="mt-1">
      BREED
    </label>
    <input
      type="text"
      id="Breed"
      className="border-primary border focus:outline-none focus:ring focus:border-primary"
    />
    <label htmlFor="age" className="mt-1">
      AGE
    </label>
    <input
      type="number"
      id="age"
      className="border-primary border focus:outline-none focus:ring focus:border-primary"
      min="0.2"
      max="20"
      step="0.1"
    />
    <label htmlFor="size" className="mt-1">
      SIZE
    </label>
    <select
      type="text"
      id="size"
      className="border-primary border focus:outline-none focus:ring focus:border-primary"
    >
      <option value="small">small</option>
      <option value="medium">medium</option>
      <option value="big">big</option>
    </select>
    <label htmlFor="gender" className="mt-1">
      GENDER
    </label>
    <select
      id="gender"
      className="border-primary border focus:outline-none focus:ring focus:border-primary"
    >
      <option value="female">female</option>
      <option value="male">male</option>
    </select>
    <label htmlFor="color" className="mt-1">
      COLOR
    </label>
    <input
      type="text"
      id="color"
      className="border-primary border focus:outline-none focus:ring focus:border-primary"
    />
    <div className="flex items-center mt-1">
      <input type="checkbox" id="vaccinated" className="outline-primary" />
      <label htmlFor="vaccinated" className="ml-1">
        vaccinated
      </label>
    </div>
    <div className="flex justify-center mt-5">
      <img src="./images/Doggo.png" alt="dog" className="w-52 h-52" />
    </div>
  </div>
);

export default SearchFilter;
