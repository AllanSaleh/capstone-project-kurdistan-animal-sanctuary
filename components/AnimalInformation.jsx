import React from "react";
import PropTypes from "prop-types";

const AnimalInformation = ({ about, whatILike }) => (
  <div>
    <div>
      <h1 className="font-bold text-primary text-3xl pb-8">About me</h1>
      <p className="text-lg text-primary">{about}</p>
    </div>
    <div className="py-16">
      <h1 className="font-bold text-primary text-3xl pb-8">
        What I Like to do
      </h1>
      <p className="text-lg text-primary ">{whatILike}</p>
    </div>
  </div>
);
AnimalInformation.propTypes = {
  about: PropTypes.string.isRequired,
  whatILike: PropTypes.string.isRequired,
};
export default AnimalInformation;
