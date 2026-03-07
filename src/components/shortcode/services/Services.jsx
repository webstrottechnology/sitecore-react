import React from "react";
import "./Services.scss";
import { services, servicesData, whyChooseUsData } from "./servicesData";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import mobileImg from "../../../assets/images/inner-pages/mobile-app-img.png"; // apna path set karein

/* ---------------- SERVICES ONE ---------------- */

const Services = () => {
  return (
    <div className="SiteCoreServices_wrapper">
      <div className="container custom-container-lg">
        <div className="services_title">
          <h4>Our Services</h4>
          <h2>
            We provide Various Service <br /> For Your Business
          </h2>
        </div>
        <ul className="services_list">
          {servicesData.map((item, index) => (
            <li key={index} className={`services_Card card_${index}`}>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href="#">{item.link}</a>
            </li>
          ))}
        </ul>

        <div className="services_btn">
          <a href="javascript:;">View All Services</a>
        </div>
      </div>
    </div>
  );
};

/* ---------------- SERVICES TWO ---------------- */

const WhyChooseUs = () => {
  return (
    <div className="SitecoreChooseData_wrapper">
      <div className="container custom-container-lg">
        <div className="data_left_content">
          <h4>{whyChooseUsData.sectionTag}</h4>
          <h2>{whyChooseUsData.heading}</h2>
          <p>{whyChooseUsData.description}</p>

          <ul>
            {whyChooseUsData.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <a href="#:;">{whyChooseUsData.button.text}</a>
        </div>

        <div className="data_right_content">
          {whyChooseUsData.features.map((item) => (
            <div key={item.id} className="card">
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <div className="tempservicesGrid">
      <div className="container">
        <div className="grid">
          {services.map((item, index) => (
            <div className="service-card-box" key={index}>
              <div className="iconCircle">{item.icon}</div>
              <h4>
                <Link to={item.link}>{item.title}</Link>
              </h4>
              <p>{item.desc}</p>

              <div className="arrow">
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileAppDesign = () => {
  return (
    <section className="MobileAppDesignWrapper">
      <div className="container custom-container-lg ">
        {/* LEFT CONTENT */}
        <div className="mobile-content ">
          <div className="icon-box">
            <span className="icon">
              <FaMobileAlt size={32} />
            </span>
          </div>

          <h2>Mobile App Design</h2>

          <p>
            We believe in mobile app development with technologies for
            businesses that are time-saving and productivity-enhancing. Since
            every business is built upon a set of unique principles, our app
            developers work together to create unique mobile apps that stand out
            from your competitors.
          </p>

          <p>
            We are the best application development company delivering
            exceptional values to our clients. Our team of best app developers
            has a proven record in developing mobile and web applications.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mobile-image">
          <img src={mobileImg} alt="Mobile App Design" />
        </div>
      </div>
    </section>
  );
};

export default Services;
export { WhyChooseUs, ServicesGrid, MobileAppDesign };
