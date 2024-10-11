// src/components/Rating.js
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  // Create an array of stars based on the rating
  const stars = Array(5).fill(0); // Total 5 stars

  return (
    <div className="flex space-x-1">
      {stars.map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <FaStar className="text-yellow-400" />
          ) : (
            <FaRegStar className="text-yellow-400" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
