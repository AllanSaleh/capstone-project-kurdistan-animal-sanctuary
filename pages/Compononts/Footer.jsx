import React from "react";

export default function footer() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="bg-secondary">
      <div class="row">
        <img src="logo.png" />
      </div>
      <div class="col">
        <img src="Paw.png" />
      </div>
      <h1 className="text-left text-primary text-3xl font-bold font-Quicksand ">
        Contact Us
      </h1>
      <p className="text-left p-6 text-primary px-72 font-Quicksand ">
        Kurdistan Animal Sanctacy (KAS) <br />
        is NGO that saves <br />
        animals and looks for a loving
        <br />
        parent to adopt them
      </p>
      <h1 className="text-left text-primary text-3xl font-bold font-Quicksand ">
        Get in touch
      </h1>
      <p className="text-left p-6 text-primary px-72 font-Quicksand ">
        info@kas.com <br />
        964 123 456 7890 <br />
        KRG, Erbil, Iraq <br />
      </p>
    </div>
  );
}
