/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="arrow next z-10 absolute top-2/4 cursor-pointer"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleRight} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="arrow prev z-10 absolute top-2/4 cursor-pointer"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faAngleLeft} />
  </button>
);

export default PrevArrow;
