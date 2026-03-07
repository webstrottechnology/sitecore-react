import { Link } from "react-router-dom";
import "./Breadcrumb.scss";

import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";
import bgImage1 from "../../../assets/images/breadcrumbs2.png";
import bgImage3 from "../../../assets/images/breadcrumbs3.png";

import { FiHome } from "react-icons/fi";
import { SlArrowRight } from "react-icons/sl";
import { BsDot } from "react-icons/bs";

/* ---------------- BREADCRUMB ONE ---------------- */

const Breadcrumb1 = () => {
  return (
    <div className="BreadcrumbFirst">
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 01</h2>
          </div>

          <div className="breadcrumb_links">
            <Link to="/">Home</Link>
            <Link className="accordian-link" to="/components/breadcrumb">
              / &nbsp; BreadCrumb
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB TWO ---------------- */

const Breadcrumb2 = () => {
  return (
    <div
      className="BreadcrumbSecond"
      style={{ backgroundImage: `url(${bgImage1})` }}
    >
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 02</h2>
          </div>
          <div className="breadcrumb_links">
            <Link to="/">Home</Link>
            <Link to="/components/counter">/ &nbsp; Counter</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB THREE ---------------- */

const Breadcrumb3 = () => {
  return (
    <div
      className="BreadcrumbThree"
      style={{ backgroundImage: `url(${bgImage3})` }}
    >
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 03</h2>
          </div>
          <div className="breadcrumb_links">
            <Link to="/">Home</Link>
            <Link to="/components/aboutus">/ &nbsp; About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB FOUR ---------------- */

const Breadcrumb4 = () => {
  return (
    <div className="BreadcrumbFour">
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 04</h2>
          </div>
          <div className="breadcrumb_links">
            <Link to="/">Home</Link>
            <Link to="/pages">/ &nbsp; Pages</Link>
            <Link to="/components/aboutus">/ &nbsp; About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB FIVE ---------------- */

const Breadcrumb5 = () => {
  return (
    <div className="BreadcrumbFive">
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 05</h2>
          </div>

          <nav className="breadcrumb_nav">
            <Link to="/" className="home_icon">
              <FiHome />
            </Link>

            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/accordion">Accordion</Link>

            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/header">Header</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB SIX ---------------- */

const Breadcrumb6 = () => {
  return (
    <div className="BreadcrumbSix">
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 06</h2>
          </div>

          <div className="breadcrumb_nav">
            <Link to="/">Home</Link>
            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/blog">Blog Single</Link>
            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/blog-detail">Blog Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB SEVEN ---------------- */

const Breadcrumb7 = () => {
  return (
    <div className="BreadcrumbSeven">
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 07</h2>
          </div>

          <nav className="breadcrumb_links">
            <Link to="/" className="home_icon_circle">
              <FiHome />
            </Link>

            <span>
              <SlArrowRight />
            </span>
            <Link to="/components">Components</Link>

            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/home">Home</Link>

            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/footer">Footer</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB EIGHT ---------------- */

const Breadcrumb8 = () => {
  return (
    <div className="BreadcrumbEight">
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 08</h2>
          </div>

          <nav className="breadcrumb_links">
            <Link to="/components">Components</Link>
            <span>
              <BsDot />
            </span>
            <Link to="/components/accordion">Accordion</Link>
            <span>
              <BsDot />
            </span>
            <Link to="/components/tabs">Tabs</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB NINE ---------------- */

const Breadcrumb9 = () => {
  return (
    <div
      className="BreadcrumbNine"
      style={{ backgroundImage: `url(${bgImage1})` }}
    >
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 09</h2>
          </div>

          <nav className="breadcrumb_links">
            <Link to="/components/home">Home</Link>
            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/performance">Performance</Link>
            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/stats">Stats</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BREADCRUMB TEN ---------------- */

const Breadcrumb10 = () => {
  return (
    <div className="BreadcrumbTen">
      <div className="container">
        <div className="breadcrumbInnerBox">
          <div className="breadcrumb_title">
            <h2>BreadCrumb 10</h2>
          </div>

          <nav className="breadcrumb_links">
            <Link to="/" className="home_badge">
              <FiHome />
            </Link>
            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/projects">Projects</Link>
            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/insights">Insights</Link>
            <span>
              <SlArrowRight />
            </span>
            <Link to="/components/summary">Summary</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* ---------------- SITE CORE BREADCRUMB ---------------- */

const AboutBannerBreadCrumb = ({ title, bgImage = sitecoreBg }) => {
  return (
    <section
      className="about-banner-breadcrumb"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="custom-container-lg">
        <div className="banner-content">
          <h1>{title}</h1>

          <div className="breadcrumb">
            <Link className="Title_link" to="/">
              Home
            </Link>
            <span className="divider">/</span>
            <span className="Title_link active">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- EXPORTS ---------------- */

export default Breadcrumb1;

export {
  Breadcrumb2,
  Breadcrumb3,
  Breadcrumb4,
  Breadcrumb5,
  Breadcrumb6,
  Breadcrumb7,
  Breadcrumb8,
  Breadcrumb9,
  Breadcrumb10,
  AboutBannerBreadCrumb,
};
