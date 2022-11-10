import React, { useContext, useEffect, useState } from "react";
import { ImageViewer } from "react-image-viewer-dv";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { User } = useContext(AuthContext);
  const { title, img, description, price, _id } = service;
  const [Reviews, setReviews] = useState([]);
  const [update, setUpdate] = useState(false);
  const [Loading, setLoading] = useState(true);
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    if (!review) {
      swal({
        title: "Type Something First",
        button: "OK",
      });
      return;
    }
    const ReviewInfo = {
      ServiceID: _id,
      Username: User?.displayName,
      UserEmail: User?.email,
      UserImage: User?.photoURL,
      UserReview: review,
      Time: new Date(),
    };

    fetch("https://rudro-photography-server.vercel.app/AddReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(ReviewInfo),
    })
      .then((res) => res.json())
      .then(() => {
        swal({
          title: "Review Added",
          button: "OK",
        });
        form.reset();
      });
  };

  useEffect(() => {
    fetch(`https://rudro-photography-server.vercel.app/reviews/?id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
        setUpdate(!update);
      });
  }, [_id, update]);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-10">
        <section className="Service">
          <div className="max-w-lg p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-100">
            <div className="space-y-4">
              <div className="space-y-2">
                <ImageViewer>
                  <img
                    src={img}
                    alt="Service_Image"
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                </ImageViewer>
              </div>
              <div className="space-y-2 text-gray-400">
                <h3 className="text-4xl font-bold ">{title}</h3>
                <p className="leading-snug">{description}</p>
                <p className="text-2xl">Price: {price}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="Reviews">
          <div className="p-6 sm:p-12 rounded-lg  dark:bg-gray-800 dark:text-gray-100 mb-4">
            <div className=" w-full">
              {User ? (
                <form
                  onSubmit={HandleForm}
                  className="w-full space-y-1 dark:text-gray-100"
                >
                  <label for="price" className="block text-2xl font-medium">
                    Give an Honest Review
                  </label>
                  <div className="flex">
                    <textarea
                      type="text"
                      name="review"
                      placeholder="Type here"
                      id="price"
                      className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400"
                    />
                    <button
                      type="submit"
                      className="flex items-center px-3  sm:text-sm rounded-r-md dark:bg-gray-700 hover:text-gray-700 hover:bg-white text-xl font-bold"
                    >
                      Post
                    </button>
                  </div>
                </form>
              ) : (
                <p className="text-center text-2xl">
                  <Link to={"/Login"} className="hover:text-gray-400 underline">
                    Login
                  </Link>
                  First to Add Review
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 ">
            {Loading ? (
              <div className="flex justify-center">
                <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin dark:border-gray-800"></div>
              </div>
            ) : (
              Reviews.map((review) => (
                <div>
                  <div className="p-6 sm:p-12 dark:bg-gray-800 dark:text-gray-100 rounded-lg ">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                      <img
                        src={review?.UserImage}
                        alt="User_Image"
                        className="self-center flex-shrink-0 w-12 h-12 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-center md:text-left">
                          {review?.Username}
                        </h3>
                        <p className="dark:text-gray-400 text-xs">
                          {review?.Time.split("T")[1].split(":")[0]}.
                          {review?.Time.split("T")[1].split(":")[1]} ({" "}
                          {review?.Time.split("T")[0]})
                        </p>
                        <p className="dark:text-gray-400 text-xs"></p>

                        <p className="dark:text-gray-400 text-lg">
                          {review?.UserReview}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
