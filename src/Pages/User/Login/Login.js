import React, { useContext, useState } from "react";
import LoginImg from "../../../Images/Login/login.png";
import swal from "sweetalert";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import "./Login.css";

const Login = () => {
  const { Login, LoginWithGoogle, LoginWithGitHub } = useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then(() => {
        navigate(from, { replace: true });
        swal({
          title: "Login Successful",
          button: "OK",
        });
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const HandleGoogle = () => {
    LoginWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
        swal({
          title: "Login Successful",
          button: "OK",
        });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const HandleGitHub = () => {
    LoginWithGitHub()
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
        swal({
          title: "Login Successful",
          button: "OK",
        });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="flex md:justify-center md:flex-row flex-col-reverse items-center m-10">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:text-gray-100">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Login to your account
          </h2>
          <p className="text-sm text-center dark:text-gray-400">
            Don't have a account?
            <Link
              to="/Register"
              className="focus:underline hover:underline hover:text-white"
            >
              Sign up here
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              onClick={HandleGoogle}
            >
              <FaGoogle></FaGoogle>
              <p>Login with Google</p>
            </button>
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              onClick={HandleGitHub}
            >
              <FaGithub></FaGithub>
              <p>Login with GitHub</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          <form
            onSubmit={HandleForm}
            className="space-y-8 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="hasan@gmail.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <a
                href="/"
                className="text-xs hover:underline dark:text-gray-400 hover:text-white"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-300 dark:text-gray-900"
            >
              LOGIN
            </button>
          </form>
        </div>
        <div>
          <img src={LoginImg} alt="Login_Image" className="w-[700px]" />
        </div>
      </div>
      <div className="mb-5">
        <p className="text-center text-xl text-red-700">{error}</p>
      </div>
    </div>
  );
};

export default Login;
