import React from "react";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";

const UserDescription = ({ about }) => {
  const { t } = useTranslation("userProfile");
  return (
    <div className="  ">
      <h1 className=" font-bold text-primary text-3xl pb-8">
        {t("userProfile.aboutMe")}
      </h1>
      <p className="text-sm md:text-lg text-primary">{about}</p>
    </div>
  );
};
UserDescription.propTypes = {
  about: PropTypes.string.isRequired,
};
export default UserDescription;
