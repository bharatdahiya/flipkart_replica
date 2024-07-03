import React from "react";
import Rating from "./Rating";
import "./Review.css";

const ReviewRating = ({ rating, review, reviewHandler }) => {
  return (
    <div className="reviewRating">
      <Rating rating={rating} flow="static" />
      <textarea
        value={review}
        onChange={(e) =>
          e.target.value.length < 100 && reviewHandler(e.target.value)
        }
        placeholder="Please provide your review"
        required
      />
      <div className="counter">{review.length} / 100</div>
    </div>
  );
};

export default ReviewRating;
