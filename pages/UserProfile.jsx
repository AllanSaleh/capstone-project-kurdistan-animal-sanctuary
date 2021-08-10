import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import "../components/swiper.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthUserContext";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

export default function Home() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const { t } = useTranslation("userProfile");

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return (
    <>
      <head>
        <title>{t("userProfile.title")}</title>
      </head>
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
