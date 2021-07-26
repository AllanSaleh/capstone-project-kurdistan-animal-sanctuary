import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Navbutton from "./Navbutton";

const MobileMenu = ({ state }) => (
  <div className={state === true ? "block" : "hidden"}>
    <div className="flex felx-row bg-primary">
      <ul className=" px-5 flex flex-col">
        <li className="pb-1">
          <Navbutton name="Home" link="./" className="w-20" />
        </li>
        <li className="pb-1">
          <Navbutton name="About" link="./" />
        </li>
        <li className="pb-1">
          <Navbutton name="Contact" link="./" />
        </li>
        <li className="pb-1">
          <Navbutton name="Adopt" link="./" />
        </li>
        <li className="pb-1">
          <Navbutton name="Resources" link="./" />
        </li>
      </ul>
      <div className=" w-full flex items-center">
        <Link href="./">
          <button
            type="button"
            className="mr-3.5 w-20 h-10 text-highlight border-2 border-highlight rounded-lg "
          >
            Login
          </button>
        </Link>
        <Link href="./">
          <button
            type="button"
            className="mr-3 w-20 h-10 text-primary bg-highlight hover:bg-darken rounded-lg "
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  </div>
);

MobileMenu.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default MobileMenu;
