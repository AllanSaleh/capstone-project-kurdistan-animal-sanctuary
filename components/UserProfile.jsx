import React from "react";
import ReactStars from "react-rating-stars-component";

const UserProfile = () => {
  const userdata = {
    name: "Daban Sadiq",
    pic: "./profile.jpeg",
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto ex nam corporis repellat. Officia harum modi, minus fuga sapiente dolores, a quisquam natus, necessitatibus dolorem odit consectetur optio animi!",
    rating: 3,

    animals: [
      {
        id: 2,
        img: "./cat.png",
      },
      {
        id: 4,
        img: "./dog.png",
      },
    ],
  };

  return (
    <div className="flex py-14 px-20">
      <div className="flex flex-row ">
        <div className="w-64 h-64 ">
          <img
            className=" w-56 h-56 rounded-full"
            src={userdata.pic}
            alt="animal profile "
          />
        </div>
        <div>
          <div className="px-5 py-4 font-bold text-primary ">
            <div>{userdata.name} </div>
          </div>
          <div className=" inline-block w-72 h-8 p-5 pt-6">
            <ReactStars
              count={5}
              value={userdata.rating}
              size={54}
              color="#D1D1D1"
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col w-4/5  ">
        <div className=" justify-self-end pt-12">
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
};

export default UserProfile;
