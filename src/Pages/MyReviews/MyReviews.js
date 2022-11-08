import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyReviews = () => {
  const [Reviews, setReviews] = useState([]);
  const { User } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/MyReviews/?Username=${User.displayName}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(Reviews);
  return <div></div>;
};

export default MyReviews;
