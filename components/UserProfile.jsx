import React from "react";
import ProfileRating from "./Profile&Rating";

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
    <ProfileRating
      name={userdata.name}
      pic={userdata.pic}
      rating={userdata.rating}
    />
  );
};

export default UserProfile;
