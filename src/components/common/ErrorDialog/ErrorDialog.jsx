import React from "react";
import Error from "../../../images/error.png";
import Button from "../Button/Button";
const ErrorDialog = ({ dispatch }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={Error}
        alt="error"
        style={{ width: "50px", height: "50px", margin: "20px" }}
      />
      <Button onClick={dispatch}>Retry</Button>
    </div>
  );
};

export default ErrorDialog;
