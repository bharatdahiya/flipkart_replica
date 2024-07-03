import React from "react";
import Button from "../../common/Button/Button";
import './Review.css'
const ReviewFooter = ({ currentStep, reviewAction }) => {
  return (
    <div className="footer">
      {currentStep > 1 && (
        <Button onClick={() => reviewAction("PREVIOUS")}>Previous</Button>
      )}
      <Button
        onClick={() =>
          currentStep === 1 ? reviewAction("NEXT") : reviewAction("SUBMIT")
        }
      >
        {currentStep === 2 ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default ReviewFooter;
