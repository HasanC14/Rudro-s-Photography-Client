import React, { useContext } from "react";
import logo from "../../../Images/Logo/logo.png";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import swal from "sweetalert";
const Header = () => {
  const { User, LogOut } = useContext(AuthContext);
  const HandleLogout = () => {
    LogOut()
      .then(() => {
        swal({
          title: "Logout Successful",
          button: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" bg-gray-800">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="flex-1">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-12" />
          </Link>
          <Link
            to={"/"}
            className=" font-bold normal-case text-xl md:block hidden ml-3"
          >
            <p className="text-3xl">Rudro's</p>
            <p>Photography</p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/Blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/Services"}>Services</Link>
            </li>
            {User?.uid ? (
              <li>
                <Link to={"/AddServices"}>Add Services</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to={"/Login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/Register"}>Register</Link>
                </li>
              </>
            )}
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {User?.uid ? (
                <div className="rounded-full">
                  <img src={User.photoURL} alt="" />
                </div>
              ) : (
                <div className="rounded-full">
                  <FaRegUser></FaRegUser>
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="bg-gray-800">{User?.displayName}</p>
              </li>
              <li>
                <Link to={"/MyReviews"}>My Reviews</Link>
              </li>
              <li>
                <button onClick={HandleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
