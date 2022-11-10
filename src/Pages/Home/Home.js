import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import Faq from "../Faq/Faq";
import Features from "../Features/Features";
import Hero from "../Swiper/Hero";
import { TabTitle } from "../../TitleChange";

const Home = () => {
  TabTitle("Home");
  const [Services, SetServices] = useState([]);
  useEffect(() => {
    fetch("https://rudro-photography-server.vercel.app/LimitServices")
      .then((res) => res.json())
      .then((data) => {
        SetServices(data);
      });
  }, []);
  return (
    <div>
      <Hero></Hero>
      <div className="flex justify-center mb-10">
        <div className="mt-10 text-white">
          <div className=" text-center">
            <p className="text-5xl font-bold">My Service Areas</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 lg:ml-0 ml-8">
            {Services.map((Service) => (
              <div
                className="card w-96 bg-base-100 shadow-xl image-full"
                key={Service._id}
              >
                <figure>
                  <img src={Service.img} alt="Shoes" />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title text-white text-4xl">
                    {Service.title}
                  </h2>
                  <p className="text-white">
                    {Service.description.slice(0, 100) + "..."}
                  </p>
                  <p className="text-white text-3xl">Price: {Service.price}</p>
                  <div className="card-actions justify-end ">
                    <Link to={`/Services/${Service._id}`} className="w-full">
                      <button className="btn  text-white">
                        See Full Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <Link to={"/Services"} className="w-full">
            <button className="btn btn-ghost text-white">
              See All Services
            </button>
          </Link>
        </div>
      </div>
      <Features></Features>
      <Blog title={true}></Blog>
      <Faq></Faq>
    </div>
  );
};

export default Home;
