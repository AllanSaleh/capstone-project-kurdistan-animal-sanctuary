import React from "react";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";

const profileRating = ({ name, pic, rating }) => (
  <div className="flex py-14  font-Quicksand">
    <div className="flex flex-row ">
      <div className="w-64 h-64 rounded-full ">
        <img
          className=" w-56 h-56 rounded-full"
          src={pic}
          alt="animal profile "
        />
      </div>
      <div>
        <div className="px-5 py-4 font-bold text-primary text-2xl ">
          <div>{name}</div>
        </div>
        <div className=" inline-block w-72 h-8 p-5 pt-6">
          <ReactStars
            count={5}
            value={rating}
            size={54}
            color="#D1D1D1"
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
    <div className="grid grid-flow-col w-4/5  ">
      <div className=" justify-self-end pt-12">
        {/* do not know what the supposed functionality of this button is */}
        <button
          type="button"
          className="mr-3 w-28 h-10 text-primary bg-highlight hover:bg-darken rounded-lg "
        >
          Message
        </button>
      </div>
    </div>
  </div>
);
profileRating.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default profileRating;
