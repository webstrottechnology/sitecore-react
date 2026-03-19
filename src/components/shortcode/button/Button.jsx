import React from "react";
import { buttonData, gradientButtonData, textLinksData } from "./ButtonData";
import "./Button.scss";

const ButtonComponent1 = () => {
  return (
    <div className="button-wrapper-section">
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
                  className={`outlineroundedbtn  ${btn.sizeClass}`}
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
    <div className="button-wrapper-section">
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
    <div className="button-wrapper-section">
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
    <div className="button-wrapper-section">
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
    <div className="button-wrapper-section">
      <div className="section-heading">
        <h4>Gradient Button</h4>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="gradientbtnbox">
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
    <div className="button-wrapper-section">
      <div className="section-heading">
        <h4>Text Links</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {textLinksData.map((link) => (
                // Option 1: Regular anchor tag (opens in same tab)
                <a
                  key={link.id}
                  href={link.link}
                  className={link.className}
                  // Add target="_blank" rel="noopener noreferrer" if external
                >
                  {link.text}
                  {link.hasLine && <span className="gradient-line"></span>}
                </a>

                // Option 2: If using React Router for internal navigation:
                // <Link
                //   key={link.id}
                //   to={link.link}
                //   className={link.className}
                // >
                //   {link.text}
                //   {link.hasLine && <span className="gradient-line"></span>}
                // </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonComponent7 = () => {
  return (
    <div className="button-wrapper-section">
      <div className="section-heading">
        <h4>Filled Button</h4>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="btn-sizes">
              {buttonData.map((btn) => (
                <a
                  key={btn.id}
                  href={btn.link}
                  className={`mintGreenFilledBtn ${btn.sizeClass}`}
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

const ButtonComponent8 = () => {
  return (
    <div className="button-wrapper-section">
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
                  className={`mintGreenOutlineBtn ${btn.sizeClass}`}
                >
                  {btn.text}
                  {/* Text wrapped in span */}
                </a>
              ))}
            </div>
          </div>
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
  ButtonComponent8,
};
