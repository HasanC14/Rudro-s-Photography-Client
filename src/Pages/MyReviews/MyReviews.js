import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";
import swal from "sweetalert";
const MyReviews = () => {
  const { User } = useContext(AuthContext);
  const [Reviews, setReviews] = useState([]);
  const [NewReviews, setNewReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/MyReviews/?Username=${User?.displayName}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [User]);

  const HandleDelete = (id) => {
    swal("Are you sure you want to delete").then((value) => {
      if (value === true) {
      }
      swal({
        title: " Deleted Canceled",
        button: "OK",
      });
    });
    swal({
      title: "Are you sure you want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal({
                title: "Review Deleted",
                button: "OK",
              });
              const RemainingReview = Reviews.filter(
                (review) => review._id !== id
              );
              setReviews(RemainingReview);
            }
          });
      } else {
        swal({
          title: "Delete Canceled",
          button: "OK",
        });
      }
    });
  };

  const handleChange = (event) => {
    setNewReviews(event.target.value);
  };
  const HandleUpdate = (id) => {
    fetch(`http://localhost:5000/UpdateReview/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ UpdatedReview: NewReviews }),
    }).then((res) => res.json());
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        {Reviews.map((review) => (
          <div key={review._id}>
            <div className="p-6 sm:p-12 dark:bg-gray-800 dark:text-gray-100 rounded-2xl">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <div className="flex flex-col">
                  <p className="dark:text-gray-400">
                    Review: {review?.UserReview}
                  </p>
                  <p className="dark:text-gray-400">
                    ServiceID: {review?.ServiceID}
                  </p>
                  <p className="dark:text-gray-400">
                    Date: {review?.Time.split("T")[0]}
                  </p>
                  <p className="dark:text-gray-400">
                    Time: {review?.Time.split("T")[1].split(":")[0]}.
                    {review?.Time.split("T")[1].split(":")[1]}
                  </p>
                  <div className="text-2xl flex justify-between mt-5 ">
                    <button
                      onClick={() => HandleDelete(review._id)}
                      className="border-2 border-white rounded-full p-2"
                    >
                      <FaTrash></FaTrash>
                    </button>
                    <div className="flex justify-between mt-2">
                      <label htmlFor="my-modal-3">
                        <div className="border-2 border-white rounded-full p-2">
                          <FaEdit></FaEdit>
                        </div>
                      </label>
                      <input
                        type="checkbox"
                        id="my-modal-3"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box relative">
                          <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <form className="w-full space-y-1 dark:text-gray-100">
                            <label
                              htmlFor="UpdatedReview"
                              className="block text-lg font-medium"
                            >
                              Edit Review
                            </label>
                            <div className="flex">
                              <textarea
                                type="text"
                                name="UpdatedReview"
                                id="UpdatedReview"
                                onChange={handleChange}
                                className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-gray-400"
                              />
                              <button
                                type="submit"
                                onClick={() => HandleUpdate(review._id)}
                              >
                                <FaCheckCircle className="w-10 text-2xl" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
