import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whyadopt from "../components/WhyAdopt";
import AnimalOfWeek from "../components/AnimalOfWeek";
import PetShowcase from "../components/PetShowcase";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  return (
    <>
      <Navbar />

      <Hero />
      <Whyadopt />
      <AnimalOfWeek />
      <PetShowcase />
      <SuccessStories />
      <Footer />
    </>
  );
}
