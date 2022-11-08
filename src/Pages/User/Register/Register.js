import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/AuthProvider";
import SignUpImg from "../../../Images/Register/Register.png";
import "./Register.css";
const Register = () => {
  const { Register, UpdateUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const Username = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    Register(email, password)
      .then(() => {
        swal({
          title: "Successfully Registered",
          button: "OK",
        });
        form.reset();
        setError("");
        navigate("/");
        const profile = { displayName: Username, photoURL: photoURL };
        UpdateUser(profile)
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <section className="py-6 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x mt-14">
          <div>
            <img src={SignUpImg} alt="Login_Image" />
          </div>
          <form
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid items-center justify-center"
            onSubmit={HandleForm}
          >
            <label className="block w-96">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="username"
                placeholder="Hasan Chowdhury"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 text-black dark:bg-gray-800"
              />
            </label>
            <label className="block w-96">
              <span className="mb-1">Photo Url</span>
              <input
                type="text"
                name="photoURL"
                placeholder="https://xyz.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 text-black dark:bg-gray-800"
              />
            </label>
            <label className="block w-96">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="hasan@gmail.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 text-black dark:bg-gray-800"
              />
            </label>
            <label className="block w-96">
              <span className="mb-1">Password</span>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 text-black dark:bg-gray-800"
              />
            </label>
            <p className="text-sm text-center dark:text-gray-400">
              Already have an account?
              <Link
                to="/Login"
                className="focus:underline hover:underline hover:text-white"
              >
                Login here
              </Link>
            </p>
            <p className="text-sm text-center text-red-600">{error}</p>
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-gray-400 dark:text-gray-900 focus:ring-gray-800 hover:ring-gray-800 w-96"
            >
              SING UP
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
