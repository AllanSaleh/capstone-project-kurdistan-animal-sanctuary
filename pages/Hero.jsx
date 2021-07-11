import React from "react";
import "../styles/Home.module.css";

function Hero() {
  return (
    <div className="">
      <div className=" flex flex-row absolute z-1 ">
        <img src="/cat.png" alt="cat" />
      </div>
      <div className=" text-center mt-64 z-4 right-0 absolute tracking-widest text-3xl px-20 z-4">
        <p className="font-black uppercase text-primary font- ">
          Make a pet happy
        </p>
        <p className="font-bold uppercase text-primary font-Quicksand">
          Adopt Now!
        </p>
        <button
          type="button"
          className=" py-2  px-20 font-semibold text-primary bg-highlight hover:bg-darken"
        >
          Go to Adoption page{" "}
        </button>
      </div>
      <img src="/paw.png" alt="paw" className="right-0 absolute z-1" />
    </div>
  );
}

export default Hero;
