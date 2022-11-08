import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
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
      { path: "/AddService", element: <AddServices></AddServices> },
      {
        path: "/Services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
