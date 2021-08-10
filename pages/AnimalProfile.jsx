import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import AnimalProfile from "../components/AnimalProfile";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  const { t } = useTranslation("animalProfile");
  return (
    <>
      <head>
        <title>{t("animalProfile.animalProfile")}</title>
      </head>
      <Navbar />

      <AnimalProfile />

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
        "animalProfile",
      ])),
      // Will be passed to the page component as props
    },
  };
}
