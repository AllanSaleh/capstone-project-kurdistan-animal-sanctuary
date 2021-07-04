import React from "react";
import "../styles/Home.module.css";

function Hero() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div>
        <img src="/cat.png" alt="cat" className=""/>
        <img src="/paw.svg" alt="paw" />
      </div>
      <div>
        <p>Make a pet happy</p>
        <p>Adopt Now!</p>
        <button type="button">Go to Adoption page</button>
      </div>
    </div>
  );
}

export default Hero;
