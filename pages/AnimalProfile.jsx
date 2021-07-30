import React from "react";
import Navbar from "../components/Navbar";
import AnimalProfile from "../components/AnimalProfile";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  return (
    <>
      <Navbar />

      <AnimalProfile />

      <Footer />
    </>
  );
}
