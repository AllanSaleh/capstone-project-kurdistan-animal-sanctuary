import React from "react";
import PropTypes from "prop-types";
import LoginandLanguage from "./LoginandLanguage";
import Navbutton from "./Navbutton";

const MobileMenu = ({ state }) => (
  <div className={state === true ? "block " : "hidden"}>
    <div className="flex felx-row bg-primary">
      <ul className=" px-5 flex flex-col">
        <li className="pb-1">
          <Navbutton name="Home" link="./" className="w-20" />
        </li>

        <li className="pb-1">
          <Navbutton name="Contact" link="./ContactUs" />
        </li>
        <li className="pb-1">
          <Navbutton name="Adopt" link="./AdoptThePerfectPet" />
        </li>
        <li className="pb-1">
          <Navbutton name="Resources" link="./Resource" />
        </li>
      </ul>
      <LoginandLanguage />
    </div>
  </div>
);

MobileMenu.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default MobileMenu;
