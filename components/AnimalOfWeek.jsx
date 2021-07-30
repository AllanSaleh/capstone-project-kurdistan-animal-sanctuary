import React from "react";

import Image from "next/image";

import Link from "next/link";
import catPhoto from "../public/Group 790.png";

export default function AnimalOfWeek() {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/zGrMtLL/paw.png)" }}
      className=" bg-no-repeat  bg-contain 	"
    >
      <div className="block p-7 px-4 md:px-24">
        <h1 className="pb-8 text-center text-primary text-3xl font-Quicksand font-bold">
          Animal of the week
        </h1>
        <div className="block md:flex">
          <div className="w-36 md:w-44 h-36 md:h-44 rounded-full mx-auto   ">
            <Link href="./">
              <img
                className="  w-32 md:w-36 h-32 md:h-36 border-2 border-highlight p-2 rounded-full cursor-pointer"
                src="./Group 790.png"
                alt="animal profile "
              />
            </Link>
          </div>
          <p className=" mx-auto md:mx-0  font-Quicksand text-justify w-10/12">
            lorem ipsum dolor sit amet lorem, consectetur adipiscing elits
            lorem. lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
            consectetur adipiscing elits lorem. lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elits lorem.
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
            consectetur adipiscing elits lorem. lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elits lorem.
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
            consectetur adipiscing elits lorem. lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elits lorem.
          </p>
        </div>
      </div>
    </div>
  );
}
