import React from "react";
import "./ErrorPage.scss";
import Logo from "../../../assets/images/home-01/logo.png";
import ErrorImg01 from "../../../assets/images/inner-pages/404.png";

const ErrorPage = () => {
  return (
    <div className="error404">
      <div className="error404-container">
        {/* Logo */}
        <div className="error404-logo">
          <img src={Logo} alt="logo" />
        </div>

        {/* 404 Number */}
        <div className="errorImgBox">
          <img src={ErrorImg01} alt="" className="img-fluid" />
        </div>

        {/* Title */}
        <h2 className="error404-title">Page Not Found</h2>

        {/* Subtitle */}
        <p className="error404-subtitle">
          Sorry, We Can’t Find The page You Were looking for!
        </p>

        {/* Button */}
        <div className="btnBox">
          <a href="/" className="error404-btn">
            Back To Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
