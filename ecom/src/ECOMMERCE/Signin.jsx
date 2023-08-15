import React from "react";
import "./Ecom.css";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";


function SignIn() {
  return (
    <>
      <Navbar/>


      <div className="main py-16 gap-12">
        <div className="signin-top">
          <i className="bi bi-shop" id="signin-icon"></i>
          <span className="text2">eSHOP</span>
        </div>

        <div style={{ border:"1px solid lightgrey",height:"70vh"}}>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-1 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign In
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-3 text-xs text-gray-500 sm:leading-4">
                By signing-in you agree to the eShop Website <br /> Conditions
                of Use & Sale. Please see our Privacy <br /> Notice our Cookies
                Notice and our interest-Based <br />
                Ads Notice.
              </p>
              <Link to="/">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-sm bg-gray-200 px-3 py-1.5 text-sm leading-6 text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-2 focus-visible:outline-indigo-600"
                >
                  Create your eShop Account
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
