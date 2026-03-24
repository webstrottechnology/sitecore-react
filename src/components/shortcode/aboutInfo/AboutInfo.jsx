import React from "react";
import { AboutUsData } from "./aboutInfoData";
import "./AboutInfo.scss";
import { Link } from "react-router-dom";

/* ---------------- ABOUT US PAGE ---------------- */

const AboutInfo = () => {
  return (
    <section className="innerPagesAboutUs">
      <div className="container custom-container-lg">
        <div className="innerPagesAboutUsInner">
          <div className="row">
            {/* LEFT */}
            <div className="col-md-12 col-lg-12 col-xl-4">
              <div className="commHeading1">
                <h4 className="subHeading">{AboutUsData.badge}</h4>
                <h2>{AboutUsData.heading}</h2>
                <p>{AboutUsData.subText}</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-md-12 col-lg-12 col-xl-8">
              <div className="innerPagesAboutContent">
                <div className="innerPagesAboutRow">
                  <div className="innerPagesAboutContentInner">
                    <div className="innerPagesAboutYearNum">
                      <svg height="100%" width="100%" className="text-line">
                        <text
                          x="50%"
                          y="50%"
                          dominantBaseline="middle"
                          textAnchor="middle"
                        >
                          {AboutUsData.experience.years}+
                        </text>
                      </svg>
                    </div>

                    <div className="innerPagesAboutYearTxt">
                      <h6>{AboutUsData.experience.label}</h6>
                      <p>{AboutUsData.experience.description}</p>
                    </div>
                  </div>

                  <div className="weCareForLearnMoreBtn">
                    <Link to="/services" className="filledroundedbtn md-btn">
                      <span>{AboutUsData.buttonText}</span>
                    </Link>
                  </div>
                </div>

                <div className="innerPagesAboutPara">
                  <p>{AboutUsData.experience.details}</p>
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div className="col-md-12">
              <div className="innerPagesAboutCircleItem">
                {AboutUsData.services.map((item) => (
                  <div className="innerPagesAboutCircle" key={item.id}>
                    <Link to="/services-single" className="medLink">
                      <span className="icon">
                        <img src={item.icon} alt="icon" />
                      </span>

                      <div className="innerPagesAboutCircleInner">
                        <div className="innerPagesAboutInnerContent">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <span className="arrow">→</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
