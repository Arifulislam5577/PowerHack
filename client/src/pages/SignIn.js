import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="py-10 flex items-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form className="space-y-4 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label for="name" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="w-full px-3 py-2 placeholder:text-sm border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full px-3 py-2 placeholder:text-sm border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#password"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 placeholder:text-sm border rounded-md bg-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 rounded-md bg-slate-900 text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="hover:underline dark:text-slate-900">
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
