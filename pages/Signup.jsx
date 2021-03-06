import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import SignUp from "../components/SingUp";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  const { t } = useTranslation("signUp");
  return (
    <>
      <head>
        <title>{t("signUp.title")}</title>
      </head>
      <Navbar />

      <SignUp />

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
        "signUp",
      ])),
      // Will be passed to the page component as props
    },
  };
}
