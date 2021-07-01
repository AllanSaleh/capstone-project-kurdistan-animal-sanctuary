import React from "react";

const PetShowcase = () => {
  const img = [
    "https://i.imgur.com/fWhk9kd.jpeg",
    "https://i.imgur.com/uvFEcJN.jpeg",
    "https://i.imgur.com/fWhk9kd.jpeg",
  ];

  return (
    <section className="petshowcase bg-secondary ">
      <div className="px-24">
        <h1 className="text-center pt-6 pb-20 text-7xl font-bold text-primary">
          {" "}
          Make a Pet Happy{" "}
        </h1>
        <div className="flex flex-row justify-around">
          {" "}
          {img.map((item) => (
            <div className="card relative rounded-lg">
              {" "}
              <a href={item}>
                {" "}
                <img
                  className=" img-showcase rounded-lg"
                  src={item}
                  alt="animal profile "
                />
              </a>
              <div className="absolute left-16 bottom-6 bg-white w-48 h-12 bg-opacity-90 rounded-lg">
                <p className="text-center opacity-100 text-4xl text-secondary">
                  {" "}
                  name{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PetShowcase;
