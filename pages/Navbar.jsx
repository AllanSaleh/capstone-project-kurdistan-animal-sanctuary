import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const img = [Image];

  return (
    <nav className="flex flex-row justify-around">
      {" "}
      <div>
        {" "}
        <Link href="./">
          <img
            className=" img-showcase rounded-lg"
            src="./Logo.png"
            alt="animal profile "
          />
        </Link>{" "}
      </div>
      <div className="flex flex-row justify-around">
        {" "}
        <div>
          <Link href="/">
            <button type="button">Home</button>
          </Link>
          <Link href="/">
            <button type="button">About</button>
          </Link>
          <Link href="/">
            <button type="button">Contact</button>
          </Link>
          <Link href="/">
            <button type="button">Adopt</button>
          </Link>
          <Link href="/">
            <button type="button">Resources</button>
          </Link>
        </div>{" "}
        <div>
          {" "}
          <Link href="/">
            <button type="button"> sign up</button>
          </Link>
          <Link href="/">
            <button type="button"> sign in</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
