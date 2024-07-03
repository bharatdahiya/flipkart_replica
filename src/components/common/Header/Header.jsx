import React from "react";
import './Header.css'
import FlipkartLogo from "../../../images/flipkart-logo.png";
const Header = () => {
  return (
    <header className="header">
      <img src={FlipkartLogo} alt="applogo" />
    </header>
  );
};

export default Header;
