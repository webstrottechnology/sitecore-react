import React, { useState, useEffect } from "react";
import "./Features.scss";
import {
  FeaturesData,
  features2Left,
  features2Right,
  FeaturesData3,
  FeaturesData4,
  FeatureData5,
  FeatureData7,
  FeatureData8,
  FeatureData9,
  FeatureData10,
  FeatureData11,
  FeatureData12,
  connectBusinessData,
  portfolioDetails,
} from "./featuresData";
import featureImg from "../../../assets/images/feature-img1.jpg";
import featureImg2 from "../../../assets/images/feature-img2.jpg";
import featureImg3 from "../../../assets/images/feature-img3.jpg";
import featureImg4 from "../../../assets/images/feature-img4.png";

import furnitureImg1 from "../../../assets/images/feature6-1.jpg";
import furnitureImg2 from "../../../assets/images/feature6-2.jpg";
import furnitureImg3 from "../../../assets/images/feature6-3.jpg";

/* ---------------- FEATURE ONE ---------------- */

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-container">
          <div className="features-image">
            <img src={featureImg} alt="Features" />
          </div>

          <div className="features-content">
            <span className="features-tag">Services</span>
            <h2 className="features-title">
              Our <span>Features</span>
            </h2>

            {FeaturesData.map((item) => {
              const Icon = item.icon;
              return (
                <div className="feature-item" key={item.id}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <div className="text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE TWO ---------------- */

const Features2 = () => {
  return (
    <section className="features_wrapper2">
      <div className="container">
        <div className="feature-title">
          <p>SERVICES</p>
          <h2>
            Our <span>Features 2</span>
          </h2>
        </div>
        <div className="features2-wrapper">
          {/* LEFT */}
          <div className="features2-col left">
            {features2Left.map((item) => {
              const Icon = item.icon;
              return (
                <div className="feature2-item" key={item.id}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER IMAGE */}
          <div className="features2-image">
            <img src={featureImg2} alt="Features" />
          </div>

          {/* RIGHT */}
          <div className="features2-col right">
            {features2Right.map((item) => {
              const Icon = item.icon;
              return (
                <div className="feature2-item" key={item.id}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE THREE ---------------- */

const Features3 = () => {
  const { title, description1, description2, buttonText, image } =
    FeaturesData3;

  return (
    <section className="features_wrapper3">
      <div className="container">
        <div className="features_wrapper3-wrapper">
          {/* IMAGE */}
          <div className="features_wrapper3-image">
            <img src={featureImg3} alt="feature" />
          </div>

          {/* CONTENT */}
          <div className="features_wrapper3-content">
            <h2>{title}</h2>
            <p>{description1}</p>
            <p>{description2}</p>

            <a href="#" className="features_wrapper3-btn">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE FOUR ---------------- */

const Features4 = () => {
  return (
    <section className="features_wrapper4">
      <div className="container features4-container">
        {/* RIGHT TEXT */}

        <div className="features4-content">
          <span className="features4-tag">{FeaturesData4.tag}</span>

          <h1 className="features4-title">
            {FeaturesData4.title} <span>{FeaturesData4.highlighted}</span>
          </h1>

          <p className="features4-desc">{FeaturesData4.description}</p>

          <a href="#" className="features4-btn">
            {FeaturesData4.buttonText}
          </a>
        </div>

        {/* LEFT IMAGE */}
        <div className="features4-image">
          <img src={featureImg4} alt="Feature Hero" />
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE FIVE ---------------- */

const Features5 = () => {
  const [activeWatch, setActiveWatch] = useState(FeatureData5.watches[0]);

  return (
    <section className="features_wrapper5">
      <div className="container features5-container">
        {/* LEFT IMAGE */}
        <div className="features5-image">
          <img src={activeWatch.image} alt="Luxury Watch" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="features5-content">
          <span className="offer">{FeatureData5.offer}</span>

          <h1>
            {FeatureData5.title} <span>{FeatureData5.highlighted}</span>
          </h1>

          <p>{FeatureData5.description}</p>

          <a href="#" className="features5-btn">
            {FeatureData5.buttonText}
          </a>

          {/* THUMBNAILS WITH LOGIC */}
          <div className="features5-thumbs">
            {FeatureData5.watches.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt="watch"
                className={activeWatch.id === item.id ? "active" : ""}
                onClick={() => setActiveWatch(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE SIX ---------------- */

const Features6 = () => {
  return (
    <section className="features_wrapper6">
      <div className="container features6-container">
        {/* LEFT BIG IMAGE */}
        <div className="features6-left">
          <img src={furnitureImg1} alt="Decoration" />

          <div className="features6-overlay">
            <span>Home Latest</span>
            <h3>Decoration Decals</h3>
            <a href="#">View more →</a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="features6-right">
          <h2>
            New Decoration <br /> Solutions for Home.
          </h2>

          <p>
            We provide qualified interior designers for your desired furniture,
            all are the best in their field. All have unique ideas and
            creativity so your dream home comes true.
          </p>

          <div className="features6-images">
            <img src={furnitureImg2} alt="Interior" />
            <img src={furnitureImg3} alt="Interior" />
          </div>

          <a href="#" className="features6-btn">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE SEVEN ---------------- */

const Features7 = () => {
  return (
    <section
      className="features_wrapper7"
      style={{
        backgroundImage: `url(${FeatureData7.rightImage})`,
      }}
    >
      <div className="container features7-container">
        {/* LEFT GRID */}
        <div className="features7-left">
          {FeatureData7.leftGrid.map((item) =>
            item.type === "card" ? (
              <div className="features7-card" key={item.id}>
                <item.icon />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ) : (
              <div className="features7-img" key={item.id}>
                <img src={item.image} alt="jewellery" />
              </div>
            ),
          )}
        </div>

        {/* CENTER CONTENT */}
        <div className="features7-content">
          <span>{FeatureData7.center.tag}</span>
          <h2>{FeatureData7.center.title}</h2>
          <p>{FeatureData7.center.description}</p>
          <a href="#" className="features7-btn">
            {FeatureData7.center.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE EIGHT ---------------- */

const Features8 = () => {
  const {
    tag,
    title,
    highlighted,
    description,
    checklist,
    phone,
    signature,
    images,
  } = FeatureData8;

  return (
    <section className="features_wrapper8">
      <div className="container features8-container">
        {/* LEFT IMAGES */}
        <div className="features8-images">
          <div className="image-wrapper">
            <img src={images.main} alt="about" className="main-img" />

            {/* FLOATING IMAGE */}
            <div className="floating-img">
              <img src={images.overlay} alt="meeting" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="features8-content">
          <span className="tag">{tag}</span>

          <h2>
            {title} <br />
            <span>{highlighted}</span>
          </h2>

          <p>{description}</p>

          <ul className="features8-list">
            {checklist.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Icon />
                  {item.text}
                </li>
              );
            })}
          </ul>

          <div className="features8-contact">
            <div className="icon">
              <phone.icon />
            </div>
            <div className="text">
              <span>{phone.label}</span>
              <h4>{phone.number}</h4>
            </div>
          </div>

          <div className="features8-signature">
            <img src={signature.image} alt="signature" />
            <h5>{signature.name}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE NINE ---------------- */

const Features9 = () => {
  const { tag, title, highlighted, description, features, buttonText, images } =
    FeatureData9;

  return (
    <section className="feature9">
      <div className="container feature9-container">
        {/* LEFT IMAGE */}
        <div className="feature9-images">
          <div className="main-img">
            <img src={images.main} alt="business" />
          </div>
          {/* FLOATING IMAGE */}
          <div className="floating-img">
            <img src={images.small} alt="meeting" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="feature9-content">
          <span className="tag">{tag}</span>

          <h2>
            {title} <br />
            <span>{highlighted}</span>
          </h2>

          <p>{description}</p>

          <ul>
            {features.map((item) => (
              <li key={item.id}>
                <item.icon />
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.subtitle}</span>
                </div>
              </li>
            ))}
          </ul>

          <a href="#" className="feature9-btn">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE TEN ---------------- */

const Features10 = () => {
  const { title, subtitle, image, cards } = FeatureData10;
  return (
    <section className="feature10">
      <div className="container feature10-container">
        {/* TOP CONTENT */}
        <div className="feature10-header feature-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* IMAGE */}
        <div className="feature10-image">
          <img src={image} alt="workspace" />
        </div>

        {/* BOTTOM CARDS */}
        <div className="feature10-cards">
          {cards.map((item) => (
            <div className="feature10-card" key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- FEATURE ELEVEN ---------------- */

const Features11 = () => {
  const [progress, setProgress] = useState(
    FeatureData11.progress.map((item) => ({ ...item, current: 0 })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((item) => {
          if (item.current < item.percentage) {
            return { ...item, current: item.current + 1 };
          }
          return item;
        }),
      );
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="AboutWrapperInformation">
      <div className="container custom-container-lg">
        {/* ===== About Image ===== */}
        <div className="about_image">
          <img src={FeatureData11.image.src} alt={FeatureData11.image.alt} />
        </div>

        {/* ===== About Content ===== */}
        <div className="about_content">
          {/* ===== Title Section ===== */}
          <div className="about_title">
            <h5>{FeatureData11.sectionTitle}</h5>
            <h3>{FeatureData11.heading}</h3>
            <p>{FeatureData11.description}</p>
          </div>

          {/* ===== Services List ===== */}
          <ul className="about_list">
            {FeatureData11.services.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>

          {/* ===== Progress Item ===== */}
          <div className="progress_wrapper">
            {progress.map((item) => (
              <div key={item.id} className="progress_item">
                <h5>{item.title}</h5>

                <div className="progress_bar_wrapper">
                  <span className="progress_number">{item.current}%</span>

                  <div className="progress_bar">
                    <div
                      className="progress_fill"
                      style={{ width: `${item.current}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- FEATURE TWELEVE ---------------- */

const Features12 = () => {
  const { tag, title, subtitle, description, buttonText, images } =
    FeatureData12;

  return (
    <section className="feature12">
      <div className="container custom-container-lg">
        <div className="feature12-container">
          {/* LEFT SIDE */}
          <div className="feature12-left">
            <span className="tag">{tag}</span>

            <h2>
              {title}
              <br />
              <span>{subtitle}</span>
            </h2>

            <p>{description}</p>

            <a href="#" className="btn">
              {buttonText}
            </a>

            {/* SMALL IMAGE */}
            <div className="small-img">
              <img src={images.secondary} alt="small" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="feature12-right">
            <img src={images.main} alt="big" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ConnectBusiness = () => {
  return (
    <section className="connectBusiness">
      <div className="connectBusinessContainer">
        {/* Left Image */}
        <div className="connectBusinessImage">
          <img src={connectBusinessData.image} alt="connect-business" />
        </div>

        {/* Right Content */}
        <div className="connectBusinessContent">
          <div className="connectBusinessContactInner">
            <h2>{connectBusinessData.title}</h2>

            <p>{connectBusinessData.description}</p>

            <div className="connectBusinessList">
              <ul>
                {connectBusinessData.listLeft.map((item, index) => (
                  <li key={index}>
                    → <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul>
                {connectBusinessData.listRight.map((item, index) => (
                  <li key={index}>
                    → <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioDetailsSection = () => {
  return (
    <section
      className="w-100 clearfix innerPagePortfolioDetails"
      id="innerPagePortfolioDetails"
    >
      <div className="container custom-container-lg">
        <div className="innerPagePortfolioDetailInner">
          <div className="row">
            <div className="col-lg-6">
              <div className="portfolioCategoryName">
                <h4>{portfolioDetails.category}</h4>
              </div>
              <div className="ipPortfolioDetailTxt">
                <h2>{portfolioDetails.title}</h2>
                {portfolioDetails.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
              <div className="viewWebsiteBtn d-flex">
                <a
                  href={portfolioDetails.buttonLink}
                  className="btn medCommBtn borderRadiusRounded fadein Temp-read-more medCommBtn"
                >
                  <span>{portfolioDetails.buttonText}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ipPortfolioDetailImg">
                <img
                  src={portfolioDetails.image}
                  alt={portfolioDetails.alt}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
export {
  Features2,
  Features3,
  Features4,
  Features5,
  Features6,
  Features7,
  Features8,
  Features9,
  Features10,
  Features11,
  Features12,
  ConnectBusiness,
  PortfolioDetailsSection,
};
