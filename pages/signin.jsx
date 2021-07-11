/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Signin = () => (
  <div className="bg-background h-screen bg-clip-content  ">
    <div className="m-auto bg-secondary bg-opacity-50 max-w-lg rounded ">
      <div className="w-80 m-auto ">
        {/*  inputs + button */}
        <p className="text-primary text-5xl text-center font-Quicksand p-10">
          Sign In
        </p>
        <div className="flex flex-col ">
          <input
            placeholder="Email"
            className="border-2 mb-2 border-primary rounded text-primary"
          />
          <input
            placeholder="Password"
            className="border-2 mb-2 border-primary rounded text-primary"
            type="password"
          />
        </div>

        <input type="checkbox" name="membrme" className="mb-4" />
        <label htmlFor="membrme" className="text-primary">
          Remember me
        </label>

        <button
          type="submit"
          className="rounded text-center mb-6 py-2 px-20 font-bold text-primary bg-highlight hover:bg-darken"
        >
          Sign In
        </button>
      </div>
      <div className="text-center  ">
        {/*  facebook + google + remaining text */}
        <div className="flex flex-row items-center justify-center">
          <span>
            <a href="http://www.facebook.com">
              <img
                alt="fb"
                className="w-10 "
                src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
              />
            </a>
          </span>
          <span className="ml-10" />
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
        <a href="forgetpassword">Forget password?</a> <br />
        <a href="signup">Don't have an account yet?</a>
      </div>
    </div>
  </div>
);
export default Signin;
