import React from "react";
import "../styles/Home.module.css";

function Hero() {
  return (
    <div>
      <div className=" flex flex-row absolute z-1">
        <img src="/cat.png" alt="cat" />
      </div>
      <div className=" text-center mt-32 z-20 right-0 absolute tracking-widest text-3xl px-20 z-4">
        <p className="font-black uppercase text-primary text-5xl mb-8 ">
          Make a pet happy
        </p>
        <p className="font-black uppercase text-primary mb-8 ">Adopt Now!</p>
        <button
          type="button"
          className=" py-2  px-20 font-semibold text-primary bg-highlight hover:bg-darken"
        >
          Go to Adoption page{" "}
        </button>
      </div>
      <img src="/paw.png" alt="paw" className="right-0 absolute z-10" />
    </div>
  );
}

export default Hero;
