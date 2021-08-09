import React from "react";
import { useTranslation } from "next-i18next";

export default function whyAdopt() {
  const { t } = useTranslation("homePage");
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="bg-secondary py-6 ">
      <h1 className="text-center text-primary text-4xl font-bold font-Quicksand ">
        {t("homePage.whyAdopt")}
      </h1>
      <p className="text-center p-6  text-lg text-primary md:px-64 font-Quicksand ">
        {t("homePage.whyAdoptPara")}
      </p>
    </div>
  );
}
