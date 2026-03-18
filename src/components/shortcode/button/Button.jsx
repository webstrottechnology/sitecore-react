import React from "react";
import {
  buttonData,
  gradientButtonData,
  textLinksData,
  buttonData2,
} from "./ButtonData";
import "./Button.scss";

const ButtonComponent1 = () => {
  return (
    <div className="button-wrapper-section1">
      <div className="section-heading">
        <h4>Outline Button</h4>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {buttonData.map((btn) => (
                <a
                  key={btn.id}
                  href={btn.link}
                  className={`outlineroundedbtn ${btn.sizeClass}`}
                >
                  <span>{btn.text}</span> {/* Text wrapped in span */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonComponent2 = () => {
  return (
    <div className="button-wrapper-section2">
      <div className="section-heading">
        <h4>Filled Button </h4>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {buttonData.map((btn) => (
                <a
                  key={btn.id}
                  href={btn.link}
                  className={`filledroundedbtn ${btn.sizeClass}`}
                >
                  <span>{btn.text}</span> {/* Text wrapped in span */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonComponent3 = () => {
  return (
    <div className="button-wrapper-section3">
      <div className="section-heading">
        <h4>Flat Background Button </h4>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {buttonData.map((btn) => (
                <a
                  key={btn.id}
                  href={btn.link}
                  className={`filledsqaurebtn ${btn.sizeClass}`}
                >
                  <span>{btn.text}</span> {/* Text wrapped in span */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonComponent4 = () => {
  return (
    <div className="button-wrapper-section4">
      <div className="section-heading">
        <h4>Flat Outline Button </h4>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {buttonData.map((btn) => (
                <a
                  key={btn.id}
                  href={btn.link}
                  className={`outlinesqaurebtn ${btn.sizeClass}`}
                >
                  <span>{btn.text}</span> {/* Text wrapped in span */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonComponent5 = () => {
  return (
    <div className="button-wrapper-section5">
      <div className="section-heading">
        <h4>Gradient Button</h4>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {gradientButtonData.map((btn) => (
                <a key={btn.id} href={btn.link} className={btn.className}>
                  {btn.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonComponent6 = () => {
  return (
    <div className="button-wrapper-section6">
      <div className="section-heading">
        <h4>Text Links</h4>
      </div>
      <div className="container shoCustomContainer">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {textLinksData.map((link) => (
                <a key={link.id} href={link.link} className={link.className}>
                  {link.text}
                  {link.hasLine && <span className="gradient-line"></span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Button Component
const CorporateButton = ({ text, link, variant = "filled" }) => {
  return (
    <a
      href={link}
      className={`corprate-btn ${variant === "filled" ? "filled" : "outline"}`}
    >
      {text}
    </a>
  );
};

// Example usage with data mapping
const ButtonComponent7 = () => {
  return (
    <div className="button-wrapper-section7">
      <div className="section-heading">
        <h4>Fill / Outline Button </h4>
      </div>
      <div className="container">
        <div className="row">
          {buttonData2.map((btn) => (
            <div key={btn.id} className="col-md-3 col-sm-6">
              <CorporateButton
                text={btn.text}
                link={btn.link}
                variant={btn.variant}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent1;
export {
  ButtonComponent2,
  ButtonComponent3,
  ButtonComponent4,
  ButtonComponent5,
  ButtonComponent6,
  ButtonComponent7,
};
