import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggaleHandle = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg"
          alt="bg-img"
        />
      </div>
      <form className=" w-4/12 absolute  bg-black p-12 my-36 left-0 bg-opacity-70 right-0 m-auto text-white rounded-lg">
        <h1 className="text-white m-2 font-bold text-2xl">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full rounded-lg bg-gray-200"
          />
        )}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 m-2 w-full rounded-lg bg-gray-200"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full rounded-lg bg-gray-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded-lg  bg-gray-200"
        />
        <button className="bg-red-700 p-2 m-2 w-full rounded-lg">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <div class="flex items-center h-5 pl-3 w-full">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
          <label
            for="remember"
            class="ms-2  text-sm font-medium text-white dark:text-gray-300"
          >
            Remember me
          </label>
          <span class="text-sm font-medium p-4 pl-[134px] text-white dark:text-gray-300">
            Need Help?
          </span>
        </div>

        <div className="text-gray-100 text-sm mt-8 p-4">
          <div className="text">
            {isSignInForm ? "New to Netflix? " : "Alerady Have an account? "}
            <a
              onClick={toggaleHandle}
              className="text-white text-lg cursor-pointer"
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </a>
          </div>
          <p className="mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
