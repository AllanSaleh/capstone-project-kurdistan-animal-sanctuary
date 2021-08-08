import React from "react";
import { useRouter } from "next/router";
import ProfileDetail from "./Profile&Detail";
import AnimalInformation from "./AnimalInformation";
import AnimalPictures from "./AnimalPictures";

const AnimalProfile = () => {
  const router = useRouter();

  return (
    <div className=" px-7 md:px-36 font-Quicksand">
      <ProfileDetail
        name={router.query.name}
        pic={router.query.photo}
        sex={router.query.sex}
        age={router.query.age}
        shelter={router.query.shelter}
        vaccinated={router.query.vaccinated}
      />

      <AnimalInformation
        about={router.query.about}
        whatILike={router.query.WhatILike}
      />

      <AnimalPictures collection={router.query.collection} />
    </div>
  );
};

export default AnimalProfile;
