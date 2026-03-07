import React from "react";
import "./ComingSoon.scss";
import Logo from "../../../assets/images/home-01/logo.png";

const ComingSoon = () => {
  return (
    <section className="comingsoon_section">

      <div className="container">

        {/* Logo */}
        <div className="logo">
        <img src={Logo} alt="" />
        </div>

        {/* small text */}
        <p className="subtitle">we're</p>

        {/* main title */}
        <h1 className="title">
          COMING SOON
        </h1>

        {/* form */}
        <div className="form">

          <input
            type="email"
            placeholder="Your Email"
          />

          <a href="#" className="notifyBtn">
            NOTIFY ME
          </a>

        </div>

      </div>

    </section>
  );
};

export default ComingSoon;
