/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const searchFilter = () => (
  <div className="border border-black flex flex-col w-3/12">
    <h1 className="mb-5 text-2xl">Search Filters</h1>
    <label htmlFor="PetType">PET TYPE</label>
    <input type="text" id="PetType" className="border-black border" />
    <label htmlFor="Breed">BREED</label>
    <input type="text" id="Breed" className="border-black border" />
    <label htmlFor="age">AGE</label>
    <input
      type="number"
      id="age"
      className="border-black border"
      min="0.2"
      max="20"
      step="0.1"
    />
    <label htmlFor="size">SIZE</label>
    <select type="text" id="size" className="border-black border">
      <option value="small">small</option>
      <option value="medium">medium</option>
      <option value="big">big</option>
    </select>
    <label htmlFor="gender">GENDER</label>
    <select id="gender" className="border-black border">
      <option value="female">female</option>
      <option value="male">male</option>
    </select>
    <label htmlFor="color">COLOR</label>
    <input type="text" id="color" className="border-black border" />
    <div className="flex items-center">
      <input type="checkbox" id="vaccinated" />
      <label htmlFor="vaccinated" className="ml-1">
        vaccinated
      </label>
    </div>
  </div>
);

export default searchFilter;
