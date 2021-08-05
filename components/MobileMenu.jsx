import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";
import LoginandLanguage from "./LoginandLanguage";
import Navbutton from "./Navbutton";
import { useAuth } from "../contexts/AuthUserContext";

const MobileMenu = ({ state }) => {
  const { authUser, loading, signOut } = useAuth();
  const [logState, setLogState] = useState(false);
  const { t } = useTranslation("navbar");
  useEffect(() => {
    if (!loading && !authUser) {
      setLogState(false);
    } else {
      setLogState(true);
    }
  }, [authUser, loading]);
  return (
    <div className={state === true ? "block " : "hidden"}>
      <div className="flex felx-row bg-primary">
        <ul className=" px-5 flex flex-col">
          <li className="pb-1">
            <Navbutton name={t("navbar.Home")} link="./" className="w-20" />
          </li>

          <li className="pb-1">
            <Navbutton name={t("navbar.Contact")} link="./ContactUs" />
          </li>
          <li className="pb-1">
            <Navbutton name={t("navbar.Adopt")} link="./AdoptThePerfectPet" />
          </li>
          <li className="pb-1">
            <Navbutton name={t("navbar.Resources")} link="./Resource" />
          </li>
          {logState && (
            <li className="pb-1">
              <button
                type="button"
                className="mr-3 text-gray-300 hover:text-highlight"
                onClick={signOut}
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
        <LoginandLanguage />
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default MobileMenu;
