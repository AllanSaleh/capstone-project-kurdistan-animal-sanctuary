import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import Contacts from "../components/ContactUsBody";
import Footer from "../components/Footer";

export default function Home() {
  // let name = 'Allan';
  const { t } = useTranslation("contactus");
  return (
    <>
      <head>
        <title>{t("contactus.title")}</title>
      </head>
      <Navbar />

      <Contacts />

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
        "contactus",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
