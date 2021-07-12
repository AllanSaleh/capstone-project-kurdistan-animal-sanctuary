import React from "react";
import ProfileDetail from "./Profile&Detail";
import AnimalInformation from "./AnimalInformation";
import AnimalPictures from "./AnimalPictures";

const AnimalProfile = () => {
  const animalData = {
    animalId: 2,
    name: "Zeus",
    pic: "./dog.jpeg",
    sex: "Male",
    age: 3,
    shelter: "120- Ankawa road",
    vaccinated: "yes",

    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ",

    like: "Lorem Ipsum is simply dummy jhkhtext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ",
  };
  return (
    <div className=" px-36 font-Quicksand">
      <ProfileDetail
        name={animalData.name}
        pic={animalData.pic}
        sex={animalData.sex}
        age={animalData.age}
        shelter={animalData.shelter}
        vaccinated={animalData.vaccinated}
      />
      <AnimalInformation about={animalData.about} whatILike={animalData.like} />
      <AnimalPictures animalId={animalData.animalId} />
    </div>
  );
};

export default AnimalProfile;
