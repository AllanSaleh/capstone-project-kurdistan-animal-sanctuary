import React from "react";
import Link from "next/link";

const PetShowcase = () => {
  const img = [
    {
      name: "Tomas",
      "image-path": "./cat1.jpeg",
      url: "https://i.imgur.com/fWhk9kd.jpeg",
    },
    {
      name: "Lucy",
      "image-path": "./cat2.jpeg",
      url: "https://i.imgur.com/uvFEcJN.jpeg",
    },
    {
      name: "Zeus",
      "image-path": "./dog.jpeg",
      url: "https://i.imgur.com/wqF89Ol.jpeg",
    },
  ];

  return (
    <section className=" w-full h-5/6 pb-16 bg-secondary font-Quicksand">
      <div className="px-20 md:px-24">
        <h1 className="text-center pt-6 pb-10 text-2xl  font-bold text-primary md:text-7xl ">
          Make a Pet Happy
        </h1>
        <div className="flex flex-col justify-around items-center  md:flex-row">
          {img.map((item) => (
            <Link href="./">
              <div className="card h-48 w-48 py-5  relative rounded-lg cursor-pointer md:h-80 md:w-80 md:mr-5 ">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={item["image-path"]}
                  alt="animal profile "
                />

                <div className="absolute left-14 bottom-7 bg-white w-20 h-8 font-semibold bg-opacity-90 rounded-lg md:h-12 md:w-3/5 md:left-16 md:bottom-6 ">
                  <p className="text-center opacity-100 text-xl text-secondary md:text-4xl">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PetShowcase;
