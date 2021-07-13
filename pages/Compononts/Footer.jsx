import React from "react";

export default function footer() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer>
      <div className="bg-secondary">
        <div className="">
          <img src="Paw.png" alt="Paw" width={1000} hight={100} />
        </div>
        <div className=" pl-72 pb-10 -m-36">
          <img src="logo.png" alt="Logo" width={100} hight={100} />
        </div>
        <h1 className="pl-80 text-primary font-bold font-Quicksand">
          About Us
        </h1>
        <p className="pl-80 text-primary font-Quicksand ">
          Kurdistan Animal Sanctacy (KAS) <br />
          is NGO that saves <br />
          animals and looks for a loving
          <br />
          parent to adopt them
        </p>
        <h1 className="px-96 ml-96  text-primary font-bold font-Quicksand">
          Get in touch
        </h1>
        <p className="px-96 ml-96 text-primary font-Quicksand ">
          info@kas.com <br />
          964 123 456 7890 <br />
          KRG, Erbil, Iraq <br />
        </p>
      </div>
    </footer>
  );
}
