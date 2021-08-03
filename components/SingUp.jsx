import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { useAuth } from "../contexts/AuthUserContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          router.push("/UserProfile");
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    else setError("Password do not match");
    event.preventDefault();
  };

  const { t } = useTranslation("signUp");
  return (
    <div className="bg-background h-screen bg-clip-content bg-no-repeat  bg-cover flex">
      <backgroundImage />
      <div className="mx-5 my-auto sm:m-auto bg-secondary bg-opacity-80 max-w-lg rounded-xl text-center w-96 ">
        <div className="w-80 m-auto ">
          <form onSubmit={onSubmit}>
            <p className="text-primary text-4xl sm:text-5xl text-center font-Quicksand p-10 font-bold">
              {t("signUp.joinUs")}
            </p>
            <div className="flex flex-col ">
              <input
                faIcon="envelope"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                id="signUpEmail"
                placeholder={t("signUp.email")}
                className="border mb-6 border-primary rounded text-primary text-sm h-10 bg-secondary pl-1"
              />
              <input
                placeholder={t("signUp.password")}
                type="password"
                name="passwordOne"
                value={passwordOne}
                onChange={(event) => setPasswordOne(event.target.value)}
                id="signUpPassword"
                className="border  mb-6 mx-auto sm:mx-0 w-4/5 sm:w-full border-primary rounded  text-primary text-sm h-10 bg-secondary pl-1"
                type="password"
              />
              <input
                placeholder={t("signUp.password")}
                type="password"
                name="password"
                value={passwordTwo}
                onChange={(event) => setPasswordTwo(event.target.value)}
                id="signUpPassword2"
                className="border  mb-6 mx-auto sm:mx-0 w-4/5 sm:w-full border-primary rounded  text-primary text-sm h-10 bg-secondary pl-1"
                type="password"
              />
            </div>
            <div className="flex flex-row ml-9 sm:ml-0">
              <input
                placeholder={t("signUp.firstName")}
                className="border border-primary rounded text-primary text-sm w-28 sm:w-30 h-10 bg-secondary pl-1"
              />
              <span className="mr-6" />
              <input
                placeholder={t("signUp.LastName")}
                className="border mb-6 border-primary rounded text-primary text-sm w-28 w-30 h-10 bg-secondary pl-1"
              />
            </div>
            <button
              type="submit"
              className="place-items-center text rounded text-center mb-6 py-2 px-20 font-bold text-primary bg-highlight hover:bg-darken"
            >
              {t("signUp.signUp")}
            </button>
          </form>
        </div>
        <div className="text-center text-primary font-Quicksand text-sm font-bold">
          <h1>{t("signUp.Continue")}</h1> <br />
          <div className="flex flex-row items-center justify-center  pb-4 sm:p-8">
            <span>
              <a href="www.facebook.com">
                <img
                  alt="fb"
                  className="w-10"
                  src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
                />
              </a>
            </span>
            <span className="ml-10" />
            <span>
              <a href="www.Google.com">
                <img
                  alt="Google"
                  className="w-10"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                />
              </a>
            </span>
            <span className="ml-10" />
            <span>
              <a href="www.Twitter.com">
                <img
                  alt="Twitter"
                  className="w-10"
                  src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
