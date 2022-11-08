import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../Images/Hero/Heroimg.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(87, 85, 85, 0.52), rgba(10, 10, 10, 0.73)),url(${image})`,
          }}
        ></div>
        <SwiperSlide>
          <div className="text md:m-20 mt-20 mb-10" data-swiper-parallax="-100">
            <div
              className="lg:text-6xl text-5xl font-bold"
              data-swiper-parallax="-300"
            >
              AFFORDABLE PRICING
            </div>

            <div className="mt-5">
              <button className="px-8 py-3 font-bold rounded-full bg-gray-100 text-gray-800">
                <Link to={"/appointment"}>See Services</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text md:m-20 mt-20 mb-10" data-swiper-parallax="-100">
            <div
              className="lg:text-6xl text-5xl font-bold"
              data-swiper-parallax="-300"
            >
              GREAT CUSTOMER SERVICE
            </div>

            <div className="mt-5">
              <button className="px-8 py-3 font-bold rounded-full bg-gray-100 text-gray-800 ">
                <Link to={"/appointment"}>See Services</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text md:m-20 mt-20 mb-10" data-swiper-parallax="-100">
            <div
              className="lg:text-6xl text-5xl font-bold"
              data-swiper-parallax="-300"
            >
              CUSTOM SERVICES
            </div>

            <div className="mt-5">
              <button className="px-8 py-3 font-bold rounded-full bg-gray-100 text-gray-800 ">
                <Link to={"/appointment"}>See Services</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
