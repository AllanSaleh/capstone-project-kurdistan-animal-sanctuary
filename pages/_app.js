import React from "react";
import { appWithTranslation } from "next-i18next";
import "../styles/index.css";
import "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default appWithTranslation(MyApp);
