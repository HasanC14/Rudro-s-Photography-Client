import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";
const MyReviews = () => {
  const { User } = useContext(AuthContext);
  const [Reviews, setReviews] = useState([]);
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
  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        {Reviews.map((review) => (
          <div>
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
                  <div className="flex justify-between mt-5">
                    <div>
                      <button>
                        <FaRegEdit></FaRegEdit>
                      </button>
                    </div>
                    <div>
                      <button onClick={() => HandleDelete(review._id)}>
                        <FaTrashAlt></FaTrashAlt>
                      </button>
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
