import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Whyadopt from "../components/WhyAdopt";
import AnimalOfWeek from "../components/AnimalOfWeek";
import PetShowcase from "../components/PetShowcase";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  const { t } = useTranslation("navbar");
  return (
    <>
      <head>
        <title>{t("navbar.Home")}</title>
      </head>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "navbar",
        "footer",
        "homePage",
      ])),
      // Will be passed to the page component as props
    },
  };
}
