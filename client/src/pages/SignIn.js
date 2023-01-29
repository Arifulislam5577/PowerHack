import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../components/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { createNewUser } from "../redux/services/authService";

// SCHEME OF SIGNIN

const schema = yup.object({
  name: yup.string().required("Full Name is required").min(6).max(255),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email")
    .max(255),
  password: yup.string().required("Password is required").min(6).max(12),
});

const SignIn = () => {
  const redirect = useRedirect();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(createNewUser(data));
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [redirect, user, navigate]);
  return (
    <section className="py-10 flex items-center justify-center">
      <div className="flex flex-col max-w-sm p-6 rounded-md sm:p-10 bg-white ">
        <div className="mb-5 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>

          {error ? (
            <p className="text-sm text-red-500">{error}</p>
          ) : (
            <p className="text-sm text-gray-400">
              Sign in to create your account
            </p>
          )}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <FormInput
              name="name"
              placeholder="John Doe"
              type="text"
              label="Full Name"
              errorMessage={errors.name?.message}
              register={{ ...register("name") }}
            />
            <FormInput
              type="email"
              placeholder="example@gmail.com"
              name="email"
              errorMessage={errors.email?.message}
              label="Email Address"
              register={{ ...register("email") }}
            />
            <FormInput
              type="password"
              placeholder="******"
              name="password"
              errorMessage={errors.password?.message}
              label="Password"
              register={{ ...register("password") }}
            />
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 rounded-md bg-slate-900 text-white"
              >
                {loading ? "Loading..." : "Sign in"}
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to={`/login?redirect=${redirect}`}
                className="hover:underline dark:text-slate-900"
              >
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
