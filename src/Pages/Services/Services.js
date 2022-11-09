import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [Services, SetServices] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/services")
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
                className="card w-96 bg-base-100 shadow-xl image-full"
                key={Service._id}
              >
                <figure>
                  <img src={Service.img} alt="Service_Image" />
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
