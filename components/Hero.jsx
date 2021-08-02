import React from "react";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("homePage");
  return (
    <div className="bg-white w-80 md:w-96 h-96 mb-10 md:mb-32">
      <img src="/paw.png" alt="paw" className="right-0 absolute z-0" />
      <div className=" flex flex-row absolute z-1 opacity-0 md:opacity-100">
        <img src="/cat.png" alt="cat" />
      </div>
      <div className=" text-center mt-32 z-20 right-0 absolute tracking-widest text-xl md:text-3xl px-0 md:px-20 z-4">
        <p className="font-black uppercase text-primary text-5xl mb-8 ">
          {t("homePage.whyAdopt")}
        </p>
        <p className="font-black uppercase text-primary mb-8 ">
          {t("homePage.adoptNow")}
        </p>
        <button
          type="button"
          className=" py-2  px-20 font-semibold text-primary bg-highlight hover:bg-darken"
        >
          {t("homePage.adoptionPage")}{" "}
        </button>
      </div>
    </div>
  );
}

export default Hero;
