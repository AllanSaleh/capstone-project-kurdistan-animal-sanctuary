import React from "react";
import "../components/swiper.module.css";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

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
