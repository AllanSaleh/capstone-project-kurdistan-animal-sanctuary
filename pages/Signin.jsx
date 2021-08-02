import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import Signin from "../components/signin";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  return (
    <>
      <Navbar />

      <Signin />

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
        "signIn",
      ])),
      // Will be passed to the page component as props
    },
  };
}
