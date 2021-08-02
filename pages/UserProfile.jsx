import React from "react";
import "../components/swiper.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "navbar",
        "footer",
        "userProfile",
      ])),
      // Will be passed to the page component as props
    },
  };
}
