import React from "react";
import PropTypes from "prop-types";

const UserDescription = ({ about }) => (
  <div>
    <h1 className="font-bold text-primary text-2xl pb-8">About me</h1>
    <p>{about}</p>
  </div>
);
UserDescription.propTypes = {
  about: PropTypes.string.isRequired,
};
export default UserDescription;
