import React from "react";
import { useTranslation } from "next-i18next";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";

const ratingChanged = () => {};
const profileRating = ({ name, pic, rating }) => {
  const { t } = useTranslation("userProfile");
  return (
    <div className="flex flex-wrap md:flex-nowrap  py-14  font-Quicksand w-full">
      <div className="flex flex-row ">
        <div className="w-40 md:w-72 h-40 md:h-72 rounded-full ">
          <img
            className=" w-36 md:w-60 h-36 md:h-60 border-2 border-secondary p-2 rounded-full"
            src={pic}
            alt="animal profile "
          />
        </div>
        <div className="w-48">
          <div className="px-5 py-4 font-bold text-primary text-xl md:text-2xl ">
            <div>{name}</div>
          </div>
          <div className="hidden md:inline-block w-52 md:w-72 h-8 p-5 pt-6">
            <ReactStars
              count={5}
              value={rating}
              size={52}
              color="#D1D1D1"
              activeColor="#ffd700"
              onChange={ratingChanged}
            />
          </div>
          <div className=" inline-block md:hidden w-48 md:w-72 h-8 p-5 pt-6">
            <ReactStars
              count={5}
              value={rating}
              size={36}
              color="#D1D1D1"
              activeColor="#ffd700"
              onChange={ratingChanged}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col w-4/5  ">
        <div className="justify-self-start pt-8 md:pt-0 items-start md:justify-self-end md:pt-12">
          {/*  functionality will be added latter when we have something we can actually use  */}
          <button
            type="button"
            className="mr-3 w-28 h-10 text-primary bg-highlight hover:bg-darken rounded-lg "
          >
            {t("userProfile.message")}
          </button>
        </div>
      </div>
    </div>
  );
};
profileRating.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default profileRating;
