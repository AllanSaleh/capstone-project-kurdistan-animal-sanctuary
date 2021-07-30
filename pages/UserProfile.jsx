import React from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  return (
    <>
      <Navbar />

      <UserProfile />

      <Footer />
    </>
  );
}
