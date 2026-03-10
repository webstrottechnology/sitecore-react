import React from "react";
import { Link } from "react-router-dom";

import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

const AboutBannerBreadCrumb = ({ title, bgImage = sitecoreBg }) => {
  return (
    <section
      className="about-banner-breadcrumb"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="custom-container-lg">
        <div className="banner-content">
          <h1>{title}</h1>

          <div className="breadcrumb">
            <Link className="Title_link" to="/">
              Home
            </Link>
            <span className="divider">/</span>
            <span className="Title_link active">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerBreadCrumb;
