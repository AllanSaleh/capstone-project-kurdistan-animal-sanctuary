/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

const SearchFilter = () => {
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
    <div className="flex flex-col w-3/12 mx-10">
      <h1 className="mb-5 text-2xl sm:text-3xl text-secondary mt-16">
        Search Filters
      </h1>
      <label htmlFor="PetType">PET TYPE</label>
      <input
        type="text"
        id="PetType"
        name="petType"
        className="border-primary border focus:outline-none focus:ring focus:border-primary"
        onChange={searching}
      />
      <label htmlFor="Breed" className="mt-1">
        BREED
      </label>
      <input
        type="text"
        id="Breed"
        name="breed"
        className="border-primary border focus:outline-none focus:ring focus:border-primary"
        onChange={searching}
      />
      <label htmlFor="age" className="mt-1">
        AGE
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
        SIZE
      </label>
      <select
        type="text"
        id="size"
        name="size"
        className="border-primary border focus:outline-none focus:ring focus:border-primary"
        onChange={searching}
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
        name="gender"
        className="border-primary border focus:outline-none focus:ring focus:border-primary"
        onChange={searching}
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
        name="color"
        className="border-primary border focus:outline-none focus:ring focus:border-primary"
        onChange={searching}
      />
      <label htmlFor="vaccinated" className="mt-1">
        vaccinated
      </label>
      <select
        id="vaccinated"
        name="vaccinated"
        className="border-primary border focus:outline-none focus:ring focus:border-primary"
        onChange={searching}
      >
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
      <div className="flex justify-center mt-5">
        <img src="./images/Doggo.png" alt="dog" className="w-52 h-52" />
      </div>
    </div>
  );
};

export default SearchFilter;
