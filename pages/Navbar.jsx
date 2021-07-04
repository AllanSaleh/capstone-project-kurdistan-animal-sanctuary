import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const img = [Image];

  return (
    <nav className="flex flex-row justify-between bg-primary  py-6 px-24 h-24 justify-items-center ">
      {" "}
      <div className="w-16 h-16 flex-1">
        {" "}
        <Link href="./">
          <img className="w-16 h-16 " src="./Logo.png" alt="animal profile " />
        </Link>{" "}
      </div>
      <div className="flex flex-row justify-around items-center flex-1">
        {" "}
        <div className="">
          <Link href="/">
            <button
              type="button"
              className="mr-2.5 text-gray-400 hover:text-highlight"
            >
              Home
            </button>
          </Link>
          <Link href="/">
            <button
              type="button"
              className="mr-3 text-gray-400 hover:text-highlight"
            >
              About
            </button>
          </Link>
          <Link href="/">
            <button
              type="button"
              className="mr-3 text-gray-400 hover:text-highlight"
            >
              Contact
            </button>
          </Link>
          <Link href="/">
            <button
              type="button"
              className="mr-3 text-gray-400 hover:text-highlight"
            >
              Adopt
            </button>
          </Link>
          <Link href="/">
            <button
              type="button"
              className="mr-3 text-gray-400  hover:text-highlight"
            >
              Resources
            </button>
          </Link>
        </div>{" "}
        <div className="pr-8">
          {" "}
          <Link href="/">
            <button
              type="button"
              className="mr-3  w-28 h-8 text-highlight border-2 border-highlight rounded-lg "
            >
              {" "}
              Login
            </button>
          </Link>
          <Link href="/">
            <button
              type="button"
              className="mr-3 w-28 h-8 text-primary bg-highlight rounded-lg "
            >
              {" "}
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
