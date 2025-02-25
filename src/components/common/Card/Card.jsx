import React from "react";
import "./Card.css";

const Card = ({ children, onClick, className }) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
