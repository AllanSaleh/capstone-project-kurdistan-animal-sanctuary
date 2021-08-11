import React from "react";
import { useTranslation } from "next-i18next";

function Hero() {
  const { t } = useTranslation("homePage");
  return (
    <div className="bg-white w-full md:w-80 md:w-96 h-96 mb-10 md:mb-32  ">
      <div className=" flex flex-row mt-2 absolute z-1 opacity-0 md:opacity-100">
        <img src="/cat.png" alt="cat" />
      </div>
      <img src="/paw.png" alt="paw" className="right-0 absolute z-0" />
      <div className=" text-center mt-32 z-20 right-20 absolute tracking-widest text-xl md:text-3xl px-0 md:px-20 z-4">
        <p className="font-black uppercase text-primary text-5xl mb-2 ml-6 ">
          {t("homePage.whyAdopt")}
        </p>
        <p className="font-black uppercase text-primary mb-8 ">
          {t("homePage.adoptNow")}
        </p>
        <form action="/AdoptThePerfectPet" className="ml-10 w-full md:ml-0">
          <button
            className=" py-3 md:py-2 px-12 md:px-20 font-semibold rounded-lg  text-primary bg-highlight hover:bg-darken"
            type="submit"
          >
            {t("homePage.adoptionPage")}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Hero;
