import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import Resouces from "../components/ResourcesCenter";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  return (
    <>
      <Navbar />

      <Resouces />

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
        "resources",
      ])),
      // Will be passed to the page component as props
    },
  };
}