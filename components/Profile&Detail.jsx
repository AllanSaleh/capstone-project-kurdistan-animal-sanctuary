import React from "react";
import PropTypes from "prop-types";

const ProfileDetail = ({ name, pic, sex, age, vaccinated, shelter }) => (
  <div className="flex py-14  ">
    <div className="flex flex-row ">
      <div className="w-72 h-72 rounded-full ">
        <img
          className=" w-60 h-60 border-2 border-secondary p-2 rounded-full"
          src={pic}
          alt="animal profile "
        />
      </div>
      <div>
        <div className=" ">
          <div className="px-5 py-4 pb-5 font-bold text-primary text-2xl ">
            {name}
          </div>
          <div className="flex flex row text-xl text-gray-700 text-opacity-50 font-medium">
            <div className="pl-5  ">
              <ul>
                <li className="pb-5 ">Sex</li>
                <li className="pb-5 ">Age</li>
                <li className="pb-5 ">Vaccinated</li>
                <li className="pb-5 ">Shelter</li>
              </ul>
            </div>
            <div className="pl-12 ">
              <ul className="w-48">
                <li className="pb-5 ">{sex}</li>
                <li className="pb-5 ">{age} Years old </li>
                <li className="pb-5 ">{vaccinated}</li>
                <li className="pb-5 ">{shelter}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-flow-col w-4/5  ">
      <div className=" justify-self-end pt-12">
        {/*  functionality will be added latter when we have something we can actually use  */}
        <button
          type="button"
          className="mr-3 w-48 h-12 text-primary bg-highlight hover:bg-darken rounded-lg font-medium"
        >
          Apply For Adoption
        </button>
      </div>
    </div>
  </div>
);
ProfileDetail.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  shelter: PropTypes.string.isRequired,
  vaccinated: PropTypes.string.isRequired,
};

export default ProfileDetail;
