import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageViewer } from "react-image-viewer-dv";
import { TabTitle } from "../../TitleChange";

const Services = () => {
  const [Services, SetServices] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    TabTitle("Services");
    fetch("https://rudro-photography-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        SetServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center mb-10">
      <div className="mt-10 text-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 lg:ml-0 ml-8">
          {Loading ? (
            <div className="flex justify-center">
              <p className="text-5xl text-center font-bold">My Service Areas</p>
              <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin dark:border-gray-800"></div>
            </div>
          ) : (
            Services.map((Service) => (
              <div
                key={Service._id}
                className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-800 dark:text-gray-50"
              >
                <ImageViewer>
                  <img
                    src={Service.img}
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                </ImageViewer>
                <div className="mt-6 mb-2">
                  <span className="block text-lg font-medium tracking-widest uppercase dark:text-gray-400">
                    {Service.price}
                  </span>
                  <h2 className="text-xl font-semibold tracking-wide">
                    {Service.title}
                  </h2>
                </div>
                <p className="dark:text-gray-100">
                  {Service.description.slice(0, 100) + "..."}
                </p>
                <Link to={`/Services/${Service._id}`} className="w-full">
                  <button className=" hover:underline hover:text-gray-400 text-white text-xl">
                    See Full Details
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
