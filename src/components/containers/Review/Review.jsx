import React, { useState, useEffect } from "react";
import ReviewHeader from "./ReviewHeader";
import ReviewFooter from "./ReviewFooter";
import Rating from "./Rating";
import ReviewRating from "./ReviewRating";
import { SELECT_PRODUCT } from "../../../constant/constant";

const ReviewSection = ({ details, dispatch }) => {
  const [step, setStep] = useState(1);
  const [review, setReview] = useState("");
  const [flow, setFlow] = useState("EDIT");
  const [rating, setRating] = useState(Array(5).fill(0));

  useEffect(() => {
    const savedData = localStorage.getItem(details?.title);
    if (savedData) {
      const review = JSON.parse(savedData);
      setReview(review.review);
      setRating([
        ...Array(review.rating).fill(1),
        ...Array(5 - review.rating).fill(0),
      ]);
      setStep(2);
      setFlow("NON_EDIT");
    }

    return () => {
      setFlow("EDIT");
      setReview("");
      setStep(1);
      setRating(Array(5).fill(0));
    };
  }, [details?.title]);

  const buttonHandler = (step) => {
    if (step === "NEXT") {
      setStep((prev) => prev + 1);
    } else if (step === "PREVIOUS") {
      setStep((prev) => prev - 1);
    } else {
      submitHandler();
    }
  };

  const submitHandler = () => {
    const alreadyExists = localStorage.getItem(details.title);
    if (!alreadyExists) {
      localStorage.setItem(
        details.title,
        JSON.stringify({
          rating: rating?.filter((item) => item === 1).length,
          review: review,
        })
      );
      setRating(Array(5).fill(0));
      setReview("");
      dispatch({ type: SELECT_PRODUCT, payload: null });
    }
  };

  const saveRating = (value) => {
    const temp = [...rating];
    for (let i = 0; i <= value; i++) {
      temp[i] = 1;
    }
    for (let i = value + 1; i < rating.length; i++) {
      temp[i] = 0;
    }
    setRating(temp);
  };

  return (
    <div className="reviewContainer">
      <ReviewHeader step={step} />
      {step === 1 && (
        <Rating flow={flow} rating={rating} saveRating={saveRating} />
      )}
      {step === 2 && (
        <ReviewRating
          flow={flow}
          rating={rating}
          review={review}
          reviewHandler={(value) => setReview(value)}
        />
      )}
      {flow === "EDIT" && (
        <ReviewFooter currentStep={step} reviewAction={buttonHandler} />
      )}
    </div>
  );
};

export default ReviewSection;
