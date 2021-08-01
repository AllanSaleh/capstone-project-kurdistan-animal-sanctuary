import React from "react";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";

const AnimalInformation = ({ about, whatILike }) => {
  const { t } = useTranslation("animalProfile");
  return (
    <div>
      <div>
        <h1 className="font-bold text-primary text-3xl pb-8">
          {t("animalProfile.aboutMe")}
        </h1>
        <p className="text-sm md:text-lg text-primary">{about}</p>
      </div>
      <div className="py-16">
        <h1 className="font-bold text-primary text-3xl pb-8">
          {t("animalProfile.whatIlike")}
        </h1>
        <p className="text-sm md:text-lg text-primary ">{whatILike}</p>
      </div>
    </div>
  );
};
AnimalInformation.propTypes = {
  about: PropTypes.string.isRequired,
  whatILike: PropTypes.string.isRequired,
};
export default AnimalInformation;
