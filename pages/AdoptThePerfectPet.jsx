import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import AdoptThePerfectPetComponent from "../components/AdoptThePerfectPetComponent";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  const { t } = useTranslation("navbar");
  return (
    <>
      <head>
        <title>{t("navbar.Adopt")}</title>
      </head>
      <Navbar />

      <AdoptThePerfectPetComponent />

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
        "adoptTheperfectPet",
      ])),
      // Will be passed to the page component as props
    },
  };
}
