import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { User } = useContext(AuthContext);
  const { title, img, description, price, _id } = service;
  const [Reviews, setReviews] = useState([]);
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const ReviewInfo = {
      ServiceID: _id,
      Username: User?.displayName,
      UserEmail: User?.email,
      UserImage: User?.photoURL,
      UserReview: review,
      Time: new Date(),
    };

    fetch("http://localhost:5000/AddReview", {
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
    fetch(`http://localhost:5000/reviews/?id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
        <section className="Reviews">
          <div className="p-6 sm:p-12 dark:bg-gray-800 dark:text-gray-100 mb-4">
            <div className=" w-full">
              <label className="label text-center text-2xl">
                Give an Honest Review
              </label>
              <form onSubmit={HandleForm}>
                <textarea
                  type="text"
                  name="review"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
                <button type="submit" className="btn btn-ghost w-full text-2xl">
                  Post
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {Reviews.map((review) => (
              <div>
                <div className="p-6 sm:p-12 dark:bg-gray-800 dark:text-gray-100">
                  <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img
                      src={User?.UserImage}
                      alt="User_Image"
                      className="self-center flex-shrink-0 w-12 h-12 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold text-center md:text-left">
                        {review?.Username}
                      </h4>
                      <p className="dark:text-gray-400">{review?.UserReview}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
