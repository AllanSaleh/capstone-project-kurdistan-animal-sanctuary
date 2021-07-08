import React from "react";
import ProfileRating from "./Profile&Rating";
import UserDescription from "./UserDescription";

const UserProfile = () => {
  const userdata = {
    name: "Daban Sadiq",
    pic: "./profile.jpeg",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ",
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
    <div className=" px-20 font-Quicksand">
      <ProfileRating
        name={userdata.name}
        pic={userdata.pic}
        rating={userdata.rating}
      />
      <UserDescription about={userdata.about} />
    </div>
  );
};

export default UserProfile;
