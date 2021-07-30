import React, { useState } from "react";
import Link from "next/link";

const login = () => {
  const [logState, setLogState] = useState(false);

  const Logging = () => {
    if (logState === true) {
      setLogState(false);
    } else {
      setLogState(true);
    }
  };
  return (
    <span>
      <span
        className={
          logState === true
            ? "inline-block  absolute sm:top-4  ml-4 cursor-pointer right-20 sm:right-auto sm:w-16 sm:h-16"
            : "hidden"
        }
      >
        <Link href="./UserProfile">
          <button
            type="button"
            onClick={() => {
              Logging();
            }}
          >
            <img
              className="w-16 h-16  cursor-pointer  rounded-full   "
              src="./profile.png"
              alt="Website logo "
            />
          </button>
        </Link>
      </span>
      <span
        className={
          logState === true ? "hidden" : "block mt-7 sm:inline-block sm:mt-0 "
        }
      >
        <Link href="./">
          <button
            type="button"
            className="mr-3.5 w-28 h-10 text-highlight border-2 border-highlight rounded-lg "
            onClick={() => {
              Logging();
            }}
          >
            Login
          </button>
        </Link>
        <Link href="./">
          <button
            type="button"
            className=" w-28 h-10 text-primary bg-highlight hover:bg-darken rounded-lg "
          >
            Sign up
          </button>
        </Link>
      </span>
      <span
        className={
          logState === true
            ? "bg-secondary text-sm text-white leading-none  rounded-full inline-flex mt-20 sm:mt-0 ml-24 sm:ml-24"
            : "bg-secondary text-sm text-white leading-none  rounded-full inline-flex mt-6 sm:mt-0 ml-24  sm:ml-14"
        }
      >
        <button
          type="button"
          className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-black focus:text-primary foucs:bg-primary rounded-l-full px-4 py-2 active"
        >
          <span>en</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-black focus:text-primary foucs:bg-primary rounded-l-full px-4 py-2"
        >
          <span>ku</span>
        </button>
      </span>
    </span>
  );
};

export default login;
