import React from "react";

const ratingMessage = () => {
  const a = 5;
  return (
    <div className="flex py-14 px-20">
      <div className="flex flex-row ">
        <div className="w-64 h-64 ">
          <img
            className=" w-56 h-56 rounded-full"
            src={a}
            alt="animal profile "
          />
        </div>
        <div>
          <div className="px-5 py-4 font-bold text-primary ">
            <div> </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col w-4/5  ">
        <div className=" justify-self-end pt-12">
          <button
            type="button"
            className="mr-3 w-28 h-10 text-primary bg-highlight hover:bg-darken rounded-lg "
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ratingMessage;
