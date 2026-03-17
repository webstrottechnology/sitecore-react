import React from "react";
import "./Heading.scss";
import { HiOutlineSparkles } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

/* ---------------- HEADING ONE ---------------- */

const Heading = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Heading" bgImage={sitecoreBg} />
      <div className="heading_wrapper">
        <div className="container">
          <div className="heading_title">
            <h2>How you can help?</h2>
            <div className="heading-underline">
              <span className="line"></span>

              <span className="center-shape">
                <span className="diamond"></span>
                <div className="center-diamond"></div>
                <span className="diamond"></span>
              </span>

              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// headings2

const Heading2 = () => {
  return (
    <div className="heading2_wrapper">
      <div className="heading2_title heading_title">
        <span className="sparkle">
          <HiOutlineSparkles />
        </span>

        <h2>What’s new?</h2>

        <span className="sparkle">
          <HiOutlineSparkles />
        </span>
      </div>
    </div>
  );
};

// headings3

const Heading3 = () => {
  return (
    <div className="heading3_wrapper ">
      <div className="heading_title">
        <h2>My Story</h2>
        <p>So you get to know me better</p>
      </div>

      <div className="underline">
        <span className="line"></span>
        <span className="diamond"></span>
        <span className="diamond"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

// headings4

const Heading4 = () => {
  return (
    <div className="heading4_wrapper ">
      <div className="heading_title">
        <h2>HEADING STYLE FOUR</h2>
      </div>
      <div className="separator">
        <span className="line"></span>
        <span className="symbol">§</span>
        <span className="line"></span>
      </div>
    </div>
  );
};

// headings5

const Heading5 = ({ text = "YOURNAME" }) => {
  return (
    <div className="heading5_wrapper">
      <div className="heading5_line heading_title">
        <div className="line top"></div>

        <h2>{text}</h2>

        <div className="line bottom"></div>
      </div>
    </div>
  );
};

// headings6

const Heading6 = ({
  title = "STYLE SIX HEADING",
  tagline = "Example Tagline Text",
}) => {
  return (
    <div className="heading6_wrapper heading_title">
      <h2>{title}</h2>
      <p>{tagline}</p>

      <div className="heading6_underline">
        <span className="line"></span>
        <span className="center-line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

// headings7

const Heading7 = ({ text = "LUMINEX" }) => {
  return (
    <div className="heading7_wrapper">
      <h1 data-text={text}>{text}</h1>
    </div>
  );
};

// headings8

const Heading8 = ({ text = "CREATIVE SPACE" }) => {
  return (
    <div className="heading8_wrapper heading_title">
      <span className="star left">
        <HiStar />
      </span>

      <h2>{text}</h2>

      <span className="star right">
        <HiStar />
      </span>
    </div>
  );
};

// headings9

const Heading9 = ({
  title = "HEADING STYLE NINE",
  tagline = "Example Tagline Text",
}) => {
  return (
    <div className="heading9_wrapper heading_title">
      <h2>{title}</h2>

      <div className="heading9_line"></div>

      <p>{tagline}</p>
    </div>
  );
};

// headings10

const Heading10 = ({ title = "Style Ten", tagline = "TAGLINE KEYWORDS" }) => {
  return (
    <div className="heading10_wrapper heading_title">
      <h2 className="heading_title">{title}</h2>

      <div className="heading10_tagline">
        <span className="line"></span>
        <p>{tagline}</p>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Heading;
export {
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading7,
  Heading8,
  Heading9,
  Heading10,
};
