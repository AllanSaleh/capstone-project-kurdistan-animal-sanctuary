import React from "react";
import { appWithTranslation } from "next-i18next";
import "../styles/index.css";
import "../styles/Home.module.css";
import { AuthUserProvider } from "../contexts/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}
export default appWithTranslation(MyApp);
