import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services from "../../Pages/Services/Services";
import Login from "../../Pages/User/Login/Login";
import Register from "../../Pages/User/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Blog", element: <Blog></Blog> },
      { path: "/Services", element: <Services></Services> },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
      { path: "/MyReviews", element: <MyReviews></MyReviews> },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
