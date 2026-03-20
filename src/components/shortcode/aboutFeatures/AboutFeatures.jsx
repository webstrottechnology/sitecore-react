import React from "react";
import stayConnectedData from "./aboutFeaturesData";
import "./AboutFeatures.scss";

/* ---------------- ABOUT FEATURES PAGE---------------- */

const AboutFeatures = () => {
  return (
    <section className="innerPageStayConnected" id="innerPageStayConnected">
      <div className="container custom-container-lg">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-5">
            <div className="innerPageStayConnectedImg1 fadein">
              <img
                src={stayConnectedData.image1}
                alt="Stay Connected"
                className="w-100 img-fluid"
              />
            </div>
          </div>

          <div className="col-md-12 col-lg-6 col-xl-7">
            <div className="innerPageStayConnectedContant">
              <div className="commHeading1">
                <span className="subHeading fadein">
                  {stayConnectedData.subHeading}
                </span>

                <h4 className="fadein">{stayConnectedData.heading}</h4>

                <p className="fadein">{stayConnectedData.description}</p>

                <div className="innerPageStayConnectedImg2 fadein">
                  <img
                    src={stayConnectedData.image2}
                    alt="Stay Connected Secondary"
                    className="w-100 img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
