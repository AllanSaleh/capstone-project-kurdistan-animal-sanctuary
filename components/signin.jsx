import React from "react";
import { useTranslation } from "next-i18next";

const Signin = () => {
  const { t } = useTranslation("signIn");
  return (
    <div className="bg-background h-screen bg-clip-content bg-no-repeat  bg-cover flex">
      <backgroundImage />
      <div className="m-auto bg-secondary bg-opacity-80 max-w-lg rounded-xl text-center w-80 md:w-96">
        <div className="w-60 md:w-80 m-auto ">
          {/*  inputs + button */}
          <p className="text-primary text-4xl sm:text-5xl text-center font-Quicksand p-10 font-bold">
            {t("signIn.signIn")}
          </p>
          <div className="flex flex-col ">
            <input
              faIcon="envelope"
              placeholder={t("signIn.email")}
              className="border mb-6 border-primary rounded text-primary text-sm h-10 bg-secondary"
            />

            <input
              placeholder={t("signIn.password")}
              className="border  mb-6 mx-auto sm:mx-0 w-4/5 sm:w-full border-primary rounded  text-primary text-sm h-10 bg-secondary"
              type="password"
            />
          </div>

          <label htmlFor="membrme" className="text-primary">
            <input type="checkbox" name="membrme" className="mb-4" />
            {t("signIn.rememberMe")}
          </label>

          <button
            type="submit"
            className="place-items-center text rounded text-center mb-6 py-2 px-20 font-bold text-primary bg-highlight hover:bg-darken"
          >
            {t("signIn.signIn")}
          </button>
        </div>
        <div className="text-center ">
          {/*  facebook + google + remaining text */}
          <div className="flex justify-evenly ">
            <span>
              <a href="http://www.facebook.com">
                <img
                  alt="fb"
                  className="w-10 "
                  src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
                />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/">
                <img
                  alt="twitter"
                  className="w-10 "
                  src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                />
              </a>
            </span>

            <span>
              <a href="http://google.com">
                <img
                  alt="Google"
                  className="w-10"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                />
              </a>
            </span>
          </div>
          <div className="py-5">
            <a href="forgetpassword">{t("signIn.forgetPassword")}</a> <br />
            <a href="signup">{t("signIn.dontHaveAccount")}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
