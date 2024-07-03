import React from "react";
import "./Review.css";

const ReviewHeader = ({ step }) => {
  return (
    <>
      <div className="reviewheader">
        {Array(3)
          .fill(1)
          .map((item, index) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className={`avatar ${step === index + 1 ? "selected" : ""}`}
                  >
                    {index + 1}
                  </div>
                  {index === 0 && <h3>Rating</h3>}
                  {index === 1 && <h3>Review</h3>}
                  {index === 2 && <h3>Summary</h3>}
                </div>
                {index !== 2 && <div className="line"></div>}
              </>
            );
          })}
      </div>
    </>
  );
};

export default ReviewHeader;
