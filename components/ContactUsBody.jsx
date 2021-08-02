/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useTranslation } from "next-i18next";

const ContactUsBody = () => {
  const { t } = useTranslation("contactus");
  return (
    <div className="flex flex-col items-center w-full pb-10">
      <h1 className="text-center mt-10 text-7xl text-highlight">
        {t("contactus.ContactUs")}
      </h1>
      <p className="text-center mt-12 text-primary">
        {t("contactus.houseWithoutFlower")}
      </p>
      <p className="text-center text-primary">{t("contactus.sendUsurNote")}</p>
      <form action="#" className="flex flex-col items-center w-4/6">
        <div className="flex flex-col justify-between w-full mt-10 lg:flex-row">
          <div className="flex flex-col">
            <label
              htmlFor="FullName"
              className="pl-1.5 text-primary text-xl mb-1"
            >
              {t("contactus.Fullname")}
            </label>
            <input
              className="border border-primary placeholder-primary rounded-2xl h-11 w-full lg:w-56 bg-secondary placeholder-opacity-100 pl-1.5 box-border outline-none"
              type="text"
              id="FullName"
              placeholder={t("contactus.Fullname")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="pl-1.5 text-primary text-xl mb-1">
              {t("contactus.Email")}
            </label>
            <input
              className="border border-primary placeholder-primary rounded-2xl h-11 w-full lg:w-56 bg-secondary placeholder-opacity-100 pl-1.5 box-border outline-none"
              type="email"
              id="email"
              placeholder={t("contactus.Email")}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="pl-1.5 text-primary text-xl mb-1"
            >
              {t("contactus.Phone")}
            </label>
            <input
              className="border border-primary placeholder-primary rounded-2xl h-11 w-full lg:w-56 bg-secondary placeholder-opacity-100 pl-1.5 box-border outline-none"
              type="tel"
              id="phoneNumber"
              placeholder={t("contactus.Phone")}
            />
          </div>
        </div>
        <textarea
          className="border border-primary placeholder-primary mt-5 rounded-2xl resize-none bg-secondary placeholder-opacity-100 pl-1.5 pt-1 box-border outline-none w-full"
          name="message"
          rows="10"
          placeholder={t("contactus.Help")}
        />
        <button
          className="mt-5 rounded-2xl w-28 h-10 text-primary bg-highlight active:bg-primary active:text-highlight font-medium"
          type="submit"
        >
          {t("contactus.Send")}
        </button>
      </form>
    </div>
  );
};

export default ContactUsBody;
