import React from "react";
import "../styles/Home.module.css";

function Hero() {
  return (
    <div>
      <div className=" flex flex-row absolute z-1">
        <img src="/cat.png" alt="cat" />
      </div>
      <div className=" text-center mt-64 z-4 right-0 absolute tracking-widest text-3xl px-20 z-4">
        <p className="font-black uppercase text-green-700 ">Make a pet happy</p>
        <p className="font-black uppercase text-green-700">Adopt Now!</p>
        <button
          type="button"
          className=" py-2  px-20 font-semibold text-green-700 bg-yellow-300 hover:bg-yellow-500"
        >
          Go to Adoption page{" "}
        </button>
      </div>
      <img src="/paw.png" alt="paw" className="right-0 absolute z-1" />
    </div>
  );
}

export default Hero;
