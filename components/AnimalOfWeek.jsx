import React from "react";

import Image from "next/image";

import catPhoto from "../public/Group 790.png";

export default function AnimalOfWeek() {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/zGrMtLL/paw.png)" }}
      className=" bg-no-repeat  bgSize	"
    >
      <div className="block p-7">
        <h1 className="text-center text-primary text-3xl font-Quicksand font-bold">
          Animal of the week
        </h1>
        <div className="flex">
          <div className="w-9/12">
            <Image src={catPhoto} />
          </div>
          <p className="text-center font-Quicksand">
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
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
            consectetur adipiscing elits lorem. lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elits lorem.
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
            consectetur adipiscing elits lorem. lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem, consectetur adipiscing elits lorem.
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem,
            consectetur adipiscing elits lorem. lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
}
