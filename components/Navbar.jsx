import React from "react";
import Link from "next/link";
import Navbutton from "./Navbutton";

const Navbar = () => (
  <nav className="flex flex-row bg-primary py-6 px-24 h-24 justify-items-center font-Quicksand">
    <div className="w-2/4 mr-40 h-20 relative">
      <Link href="./">
        <img
          className="w-16 h-16 absolute -top-2 cursor-pointer"
          src="./Logo.png"
          alt="Website logo "
        />
      </Link>
    </div>
    <div className="flex flex-row justify-around items-center w-2/4">
      <div className="inline-block float-right whitespace-nowrap">
        <Navbutton name="Home" link="./" />
        <Navbutton name="About" link="./" />
        <Navbutton name="Contact" link="./" />
        <Navbutton name="Adopt" link="./" />
        <Navbutton name="Resources" link="./" />
      </div>
      <div className="pr-8 whitespace-nowrap">
        <Link href="./">
          <button
            type="button"
            className="mr-3.5 w-28 h-10 text-highlight border-2 border-highlight rounded-lg "
          >
            Login
          </button>
        </Link>
        <Link href="./">
          <button
            type="button"
            className="mr-3 w-28 h-10 text-primary bg-highlight hover:bg-darken rounded-lg "
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  </nav>
);
export default Navbar;