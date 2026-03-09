import React from "react";
import { BrandStoryData } from "./aboutBrandStoryData";
import "./AboutBrandStory.scss";

import brandStoryImg from "../../../assets/images/inner-pages/aboutBrandStory-img.png";

const AboutBrandStory = () => {
  return (
    <section
      className="innerPagesBrandStory"
      style={{ "--brandStoryImg": `url(${brandStoryImg})` }}
    >
      <div className="container">
        <div className="location-wrapper">
          {/* LEFT CONTENT */}
          <div className="location-content">
            <div className="commHeading1">
              <h4>{BrandStoryData.heading}</h4>
              <p>{BrandStoryData.description}</p>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="location-accord">
            <div className="accordion" id="brandStoryAccordion">
              {BrandStoryData.stats.map((item, index) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                    >
                      {/* LEFT TEXT */}
                      <div className="d-flex">
                        <span className="stat-number">{item.number}</span>
                        <span className="stat-title">{item.title}</span>
                      </div>

                      {/* CUSTOM RIGHT ARROW */}
                      <div className="custom-arrow"></div>
                    </button>
                  </h2>

                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    data-bs-parent="#brandStoryAccordion"
                  >
                    <div className="accordion-body">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrandStory;
