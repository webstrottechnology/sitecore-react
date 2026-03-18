import React from "react";
import "./FeatureWithIcon.scss";
import { Link } from "react-router-dom";
import { FeaturesWithIconDataOne } from "./FeatureWithIconData";
import { FeaturesWithIconDataTwo } from "./FeatureWithIconData";
import { FeaturesWithIconDataThree } from "./FeatureWithIconData";
import { FeaturesWithIconDataFour } from "./FeatureWithIconData";
import { FeaturesWithIconDataFive } from "./FeatureWithIconData";
import { FeaturesWithIconDataSix } from "./FeatureWithIconData";
import { FeaturesWithIconDataSeven } from "./FeatureWithIconData";
import { FeaturesWithIconDataEight } from "./FeatureWithIconData";
import { FeaturesWithIconDataNine } from "./FeatureWithIconData";
import { FeaturesWithIconDataTen } from "./FeatureWithIconData";
import { SitecoreFeaturesData } from "./FeatureWithIconData";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

const FeatureWithIconOne = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Feature With Icon" bgImage={sitecoreBg} />
      <div>
        <section className="features-with-icon-one">
          <div className="features-container">
            {FeaturesWithIconDataOne.map((item) => (
              <div className="features-card" key={item.id}>
                <div className="features-icon">{item.icon}</div>
                <h4 className="features-title">
                  <a href={item.link}>{item.title}</a>
                </h4>
                <p className="features-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

const FeatureWithIconTwo = () => {
  return (
    <section className="features-with-icon-two">
      <div className="features_container">
        {FeaturesWithIconDataTwo.map((item) => (
          <div className="features_item" key={item.id}>
            <div className="features_icon">{item.icon}</div>
            <h4 className="features_title">
              <a href={item.link}>{item.title}</a>
            </h4>
            <p className="features_desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeatureWithIconThree = () => {
  return (
    <section className="features-with-icon-three">
      <div className="features_container">
        {FeaturesWithIconDataThree.map((item) => (
          <div className="features_card" key={item.id}>
            <div className="features_icon">{item.icon}</div>

            <h4 className="features_title">
              <Link to={item.link}>{item.title}</Link>
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeatureWithIconFour = () => {
  return (
    <section className="features-with-icon-four">
      <div className="features_container">
        {FeaturesWithIconDataFour.map((item) => (
          <div className="features_card" key={item.id}>
            <div className="features_icon">{item.icon}</div>

            <h3 className="features_title">
              <Link to={item.link}>{item.title}</Link>
            </h3>

            <p className="features_desc">{item.desc}</p>

            <Link to={item.link} className="features_more">
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeatureWithIconFive = () => {
  return (
    <section className="features-with-icon-five">
      <div className="features_container">
        {FeaturesWithIconDataFive.map((item) => (
          <div className="feature-card" key={item.id}>
            <div className="feature_card_icon">
              <span>{item.icon}</span>
            </div>

            <div className="feature_card_content">
              <a href={item.link} className="feature_card_title">
                {item.title}
              </a>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeatureWithIconSix = () => {
  return (
    <section className="features-with-icon-six">
      <div className="container">
        <div className="tech-grid">
          {FeaturesWithIconDataSix.map((item) => (
            <div className="tech-card" key={item.id}>
              <div className="tech-icon" style={{ color: item.color }}>
                {item.icon}
              </div>

              {/* Title with anchor link */}
              <h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureWithIconSeven = () => {
  return (
    <section className="features-with-icon-seven">
      <div className="container">
        <div className="features-grid">
          {FeaturesWithIconDataSeven.map((item) => (
            <div className="feature-card" key={item.id}>
              <div
                className="feature-icon"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>

              <h3>
                <a href={item.link}>{item.title}</a>
              </h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureWithIconEight = () => {
  return (
    <section className="features-with-icon-eight">
      <div className="container">
        <div className="services-grid">
          {FeaturesWithIconDataEight.map((item) => (
            <div className="service-card" key={item.id}>
              <div
                className="service-icon"
                style={{ background: item.gradient }}
              >
                {item.icon}
              </div>

              <h3>
                <a href={item.link}>{item.title}</a>
              </h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureWithIconNine = () => {
  return (
    <section className="features-with-icon-nine">
      <div className="container">
        <div className="reveal-grid">
          {FeaturesWithIconDataNine.map((item) => (
            <div className="reveal-card" key={item.id}>
              <span
                className="reveal-strip"
                style={{ backgroundColor: item.accent }}
              ></span>

              <div className="reveal-icon" style={{ color: item.accent }}>
                {item.icon}
              </div>

              <h3>
                <a href={item.link}>{item.title}</a>
              </h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureWithIconTen = () => {
  return (
    <section className="features-with-icon-ten">
      <div className="container">
        <ul className="timeline">
          {FeaturesWithIconDataTen.map((item) => (
            <li className="timeline-item" key={item.id}>
              <span className="timeline-icon" style={{ color: item.color }}>
                {item.icon}
              </span>

              <div className="timeline-content">
                <h3>
                  <a href={item.link}>{item.title}</a>
                </h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const SitecorefeatureItems = () => {
  return (
    <section className="SitecoreinnerPageWhatWeDo">
      <div className="container custom-container-lg">
        <div className="mobileAppDesignHead text-center">
          <span className="subHeading">What We Do</span>
          <h4>The Expertise of Our Mobile App Design</h4>
        </div>

        <div className="row">
          {SitecoreFeaturesData.map((service) => {
            const Icon = service.icon;

            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={service.id}>
                <div className="innerPageWhatWeDoCard">
                  <Link to={service.link} className="serviceIcon">
                    <Icon size={32} />
                  </Link>

                  <h5>
                    <Link to={service.link}>{service.title}</Link>
                  </h5>

                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureWithIconOne;
export {
  FeatureWithIconTwo,
  FeatureWithIconThree,
  FeatureWithIconFour,
  FeatureWithIconFive,
  FeatureWithIconSix,
  FeatureWithIconSeven,
  FeatureWithIconEight,
  FeatureWithIconNine,
  FeatureWithIconTen,
  SitecorefeatureItems,
};
