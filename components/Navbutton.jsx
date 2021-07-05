import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const Navbutton = ({ name, link }) => (
  <Link href={link}>
    <button type="button" className="mr-3 text-gray-300 hover:text-highlight">
      {name}
    </button>
  </Link>
);
Navbutton.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Navbutton;
