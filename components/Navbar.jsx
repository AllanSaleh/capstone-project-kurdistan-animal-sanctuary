import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LoginandLanguage from "./LoginandLanguage";
import MobileMenu from "./MobileMenu";
import Navbutton from "./Navbutton";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const { t } = useTranslation("navbar");

  const handleclick = () => {
    if (display === true) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  return (
    <div>
      <nav className="flex flex-row-reverse  md:flex-row bg-primary  py-6 px-2 h-20 md:h-24 justify-items-center font-Quicksand">
        <div className="w-2/4  h-14 relative md:h-20">
          <Link href="./">
            <img
              className="w-12 h-12 absolute -top-2 -left-5 md:left-0 cursor-pointer md:w-16 md:h-16"
              src="./Logo.png"
              alt="Website logo "
            />
          </Link>
        </div>
        <div className="flex flex-row  items-center w-2/4 md:justify-around md:items-center">
          <div className="  float-right whitespace-nowrap hidden md:inline-block">
            <span>
              <Navbutton name={t("navbar.Home")} link="./" />

              <Navbutton name={t("navbar.Contact")} link="./ContactUs" />
              <Navbutton name={t("navbar.Adopt")} link="./AdoptThePerfectPet" />
              <Navbutton name={t("navbar.Resources")} link="./Resource" />
            </span>
            <LoginandLanguage />
          </div>

          <div className="inline-block  float-right whitespace-nowrap md:hidden items-center justify-center">
            <button
              type="button"
              className=" w-full h-full font-bold rounded-lg    text-secondary flex "
              onClick={() => {
                handleclick();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu state={display} />
    </div>
  );
};
export default Navbar;
