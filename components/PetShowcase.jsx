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
    <section className="petshowcase bg-secondary font-Quicksand">
      <div className="px-24">
        <h1 className="text-center pt-6 pb-20 text-7xl font-bold text-primary">
          Make a Pet Happy
        </h1>
        <div className="flex flex-row justify-around">
          {img.map((item) => (
            <Link href="./">
              <div className="card relative rounded-lg cursor-pointer">
                <img
                  className=" img-showcase rounded-lg"
                  src={item["image-path"]}
                  alt="animal profile "
                />

                <div className="absolute left-16 bottom-6 bg-white w-3/5 h-12 bg-opacity-90 rounded-lg">
                  <p className="text-center opacity-100 text-4xl text-secondary">
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
