import React, { useState, useRef } from "react";
import "./Accordian.scss";
import {
  FiChevronDown,
  FiChevronRight,
  FiChevronUp,
  FiMinus,
  FiPlus,
} from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { MdArrowOutward, MdOutlineDesktopWindows } from "react-icons/md";
import {
  data,
  dataEight,
  dataFive,
  dataFour,
  dataNine,
  dataSeven,
  dataSix,
  dataTen,
  dataThree,
  dataTwo,
} from "./AccordianData";
import { FaArrowRightLong } from "react-icons/fa6";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

/* ---------------- ACCORDION ONE ---------------- */

const Accordian = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <AboutBannerBreadCrumb title="Accordion" bgImage={sitecoreBg} />
      <div className="accordian-container">
        <div className="accordian-box">
          <h2>The Accordion</h2>

          <p className="description">
            The accordion is a graphical control element comprising a vertically
            stacked list of items.
          </p>

          {data.map((item, index) => (
            <div
              key={index}
              className={`accordian-item ${active === index ? "active" : ""}`}
            >
              <button
                className="accordian-header"
                onClick={() => setActive(active === index ? null : index)}
              >
                <span className="icon">
                  {active === index ? <FiMinus /> : <FiPlus />}
                </span>
                {item.title}
              </button>

              <div className="accordian-body">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
/* ---------------- ACCORDION TWO ---------------- */

const AccordianTwo = () => {
  const [active2, setActive2] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (id, index) => {
    if (active2 === id) {
      contentRefs.current[index].style.height = "0px";
      setActive2(null);
    } else {
      if (active2 !== null) {
        const prevIndex = contentRefs.current.findIndex(
          (el) => el.style.height !== "0px",
        );
        if (contentRefs.current[prevIndex]) {
          contentRefs.current[prevIndex].style.height = "0px";
        }
      }

      contentRefs.current[index].style.height =
        contentRefs.current[index].scrollHeight + "px";

      setActive2(id);
    }
  };

  return (
    <div className="accordianTwo">
      <h2 className="accordianTwo-title">accordian’s</h2>
      <p className="accordianTwo-subtitle">
        We’ve gathered the most frequently asked questions from our users.
      </p>

      <div className="accordianTwo-card">
        {dataTwo.map((item, index) => (
          <div className="accordianTwo-item" key={item.id}>
            <div
              className={`accordianTwo-header ${
                active2 === item.id ? "active" : ""
              }`}
              onClick={() => toggleAccordion(item.id, index)}
            >
              <div className="accordianTwo-count">
                <span className="accordianTwo-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4>{item.question}</h4>
              </div>

              <span className="icon">
                {active2 === item.id ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="accordianTwo-content"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- ACCORDION THREE ---------------- */

const AccordianThree = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordianThree">
      <h2 className="accordianThree-title">Frequently Asked Questions</h2>
      <p className="accordianThree-subtitle">
        Quick answers to help you get the most out of IELTS Revise.
      </p>

      <div className="accordianThree-card">
        {dataThree.map((item, index) => (
          <div
            key={index}
            className={`accordianThree-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="accordianThree-header"
              onClick={() => toggle(index)}
            >
              <h4>{item.question}</h4>
              <span className="icon">
                {activeIndex === index ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </div>

            <div className="accordianThree-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- ACCORDION FOUR ---------------- */
const AccordianFour = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="accordianFour">
      <div className="accordianFour-wrapper">
        {dataFour.map((item, index) => (
          <div
            key={index}
            className={`accordianFour-card ${active === index ? "active" : ""}`}
            onMouseEnter={() => active !== index && setActive(index)}
          >
            {active === index ? (
              <div
                className="accordianFour-card-content"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="accordianFour-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#">
                    <BiShareAlt />
                    {item.link}
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            ) : (
              <div className="accordianFour-card-title">
                <span>{item.title}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- ACCORDION FIVE ---------------- */
const AccordionFive = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="accordionFive">
      <h2 className="title">The Accordion</h2>
      <p className="subtitle">
        The accordion is a graphical control element comprising a vertically
        stacked list of items.
      </p>

      <div className="accordion-list">
        {dataFive.map((item, index) => (
          <div
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <div
              className="accordion-header"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="left">
                <span className="icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc.split(".")[0]}</p>
                </div>
              </div>

              <span className="plus">{activeIndex === index ? "−" : "+"}</span>
            </div>

            <div className="accordion-body">
              <div className="content">
                <p>{item.para}</p>

                {item.video && (
                  <video src={item.video} muted loop controls playsInline />
                )}

                {item.image && <img src={item.image} alt="accordion visual" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- ACCORDION SIX ---------------- */
const AccordionSix = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordionSix">
      <div className="faq-card">
        <h2>FAQ’s</h2>
        <p className="subtitle">
          We’ve gathered the most frequently asked questions from our users.
        </p>

        <div className="faq-list">
          {dataSix.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                {item.question}
                <FiChevronDown className="icon" />
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- ACCORDION SEVEN ---------------- */
const AccordionSeven = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordionSeven">
      <h2>Discover Our Solutions</h2>
      <p className="subtitle">
        Explore a world of possibilities with our comprehensive solutions. Dive
        into the details of how our offerings can benefit you and your
        organization.
      </p>

      <div className="accordion-list">
        {dataSeven.map((item, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="accordion-header" onClick={() => toggle(index)}>
              <span>{item.title}</span>
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
            </div>

            <div className="accordion-body-7">
              <p>{item.desc}</p>
              {activeIndex === index && (
                <a href="#" className="view-more">
                  View more <FaArrowRightLong />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- ACCORDION EIGHT ---------------- */
const AccordianEight = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-eight">
      <div className="accordionEight-wrapper">
        {dataEight.map((item, index) => (
          <div
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <button className="accordion-header" onClick={() => toggle(index)}>
              <span>{item.title}</span>
              <span className="icon">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- ACCORDION NINE ---------------- */
const AccordianNine = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-nine">
      <div className="faq-header">
        <span className="badge">FAQ Section</span>
        <h2>Frequently Asked Questions</h2>
        <p>Get answers to your questions and learn about our platform.</p>
      </div>

      <div className="faq-list">
        {dataNine.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <FiChevronDown className="icon" />
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- ACCORDION TEN ---------------- */
const AccordionTen = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="accordionTen">
      <div className="accordianTen-wrapper">
        {dataTen.map((item, index) => (
          <div
            key={index}
            className={`acc-item ${active === index ? "active" : ""}`}
          >
            <div className="acc-header" onClick={() => toggle(index)}>
              <h4>{item.title}</h4>
              <span className="icon">
                {active === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>

            <div className="acc-body">
              {item.content && (
                <div className="inner">
                  <h5>{item.content.heading}</h5>
                  <ul>
                    {item.content.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- EXPORTS ---------------- */

export default Accordian;
export {
  AccordianTwo,
  AccordianThree,
  AccordianFour,
  AccordionFive,
  AccordionSix,
  AccordionSeven,
  AccordianEight,
  AccordianNine,
  AccordionTen,
};
