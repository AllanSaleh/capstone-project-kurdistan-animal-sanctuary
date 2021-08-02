import React,{ useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthUserContext';

export default function Home() {

  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])
  
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
