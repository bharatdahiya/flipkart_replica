import React from "react";
import EmptyStar from "../../../images/icons/EmptyStar";
import StarFilled from "../../../images/icons/StartFilled";
import "./Review.css";
const Rating = ({ rating, saveRating, flow }) => {
  return (
    <div style={{margin: '0 20px'}}>
      <h4>Please provide your rating</h4>
      <div className="stars">
        {rating?.map((item, index) => {
          const star = item === 0 ? <EmptyStar /> : <StarFilled />;
          return (
            <div
              key={index}
              className="starRating"
              onClick={() => {
                if (flow === "EDIT") {
                  saveRating(index);
                }
              }}
            >
              {star}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
