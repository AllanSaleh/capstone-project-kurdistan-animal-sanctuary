import React from "react";
import Link from "next/link";
import Navbutton from "./Navbutton";

const Navbar = () => (
  <nav className="flex flex-row  bg-primary  py-6 px-24 h-24 justify-items-center ">
    {" "}
    <div className="w-2/4 h-20 relative">
      {" "}
      <Link href="./">
        <img
          className="w-16 h-16 absolute -top-2"
          src="./Logo.png"
          alt="animal profile "
        />
      </Link>{" "}
    </div>
    <div className="flex flex-row justify-around items-center  w-2/4">
      {" "}
      <div>
        <Navbutton name="Home" link="./" />
        <Navbutton name="About" link="./" />
        <Navbutton name="Contact" link="./" />
        <Navbutton name="Adopt" link="./" />
        <Navbutton name="Resources" link="./" />
      </div>{" "}
      <div className="pr-8">
        {" "}
        <Link href="/">
          <button
            type="button"
            className="mr-3.5  w-28 h-10 text-highlight border-2 border-highlight rounded-lg "
          >
            {" "}
            Login
          </button>
        </Link>
        <Link href="/">
          <button
            type="button"
            className="mr-3 w-28 h-10 text-primary bg-highlight rounded-lg "
          >
            {" "}
            Sign up
          </button>
        </Link>
      </div>
    </div>
  </nav>
);
export default Navbar;
