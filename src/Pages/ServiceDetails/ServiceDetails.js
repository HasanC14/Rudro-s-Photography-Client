import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { title, img, description, price } = service;
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-10">
        <section className="Service">
          <div className="max-w-lg p-4 shadow-md dark:bg-gray-800 dark:text-gray-100">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={img}
                  alt="Service_Image"
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </div>
              <div className="space-y-2 text-gray-400">
                <h3 className="text-4xl font-bold ">{title}</h3>
                <p className="leading-snug">{description}</p>
                <p className="text-2xl">Price: {price}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="Reviews"></section>
      </div>
    </div>
  );
};

export default ServiceDetails;
