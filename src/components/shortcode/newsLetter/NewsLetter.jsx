import React from "react";
import "./Newsletter.scss";
import arrowImg from "../../../assets/images/arrow.png";

/* ---------------- NEWSLETTER ONE ---------------- */

const Newsletter = () => {
  return (
    <section className="Sitecorenewsletter_wrapper">
      <div className="container custom-container-lg">
        <div className="newsletter__container">
          <div className="newsletter__content">
            <div className="newsletter__left">
              <h2>Subscribe our newsletter for any update information</h2>
            </div>

            <div className="newsletter__right">
              <img src={arrowImg} alt="arrow" className="arrow-img" />

              <div className="newsletter__form">
                <input type="email" placeholder="Type Email ID" />
                <button type="submit">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
