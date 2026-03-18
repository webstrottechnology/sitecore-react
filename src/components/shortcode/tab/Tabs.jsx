import { useState, useRef } from "react";
import "./Tabs.scss";
import {
  tabsData,
  tabsData2,
  tabsData3,
  tabsData4,
  tabsData5,
  tabsData6,
  tabsData7,
  tabsData8,
  tabsData9,
  tabsData10,
} from "./tabsData";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";
/* ---------------- Tabs ONE ---------------- */

const Tabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <>
      <AboutBannerBreadCrumb title="Tab" bgImage={sitecoreBg} />
      <div className="tabs_wrapper">
        <div className="container">
          <div className="tabs_title">
            <h2>Photo Gallery</h2>
            <p>
              Explore our collection of stunning images organised by category.
              Click the tabs to filter the gallery.
            </p>
          </div>
          <div className="tabs_button">
            {tabsData.map((item, index) => (
              <button
                key={item.id}
                className={currentTabIndex === index ? "active" : ""}
                onClick={() => setCurrentTabIndex(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="tabs_card">
            <div className="cards_container">
              {tabsData[currentTabIndex].content.map((card, index) => (
                <div className="card" key={index}>
                  <img src={card.image} alt={card.title} />
                  <div className="card_body">
                    <h3>
                      <a href="#">{card.title}</a>
                    </h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ---------------- Tabs TWO ---------------- */

const Tabs2 = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleTabClick = (index) => {
    if (index === currentTabIndex) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentTabIndex(index);
      setIsFading(false);
    }, 400); // 👈 CSS transition ke barabar
  };

  return (
    <div className="tabs_wrapper2">
      <div className="container">
        <div className="tabs_title">
          <h2>Accessible Tab Panel</h2>
          <p>The top 3 smartest dog breeds according to what I saw online</p>
        </div>
        <div className="tabs_button">
          {tabsData2.map((item, index) => (
            <button
              key={item.id}
              className={currentTabIndex === index ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="tabs_card">
          <div className={`cards_container  ${isFading ? "fade-out" : ""}`}>
            {tabsData2[currentTabIndex].content}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs THREE ---------------- */

const Tabs3 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);

  const handleTabClick = (index) => {
    if (index === activeTab) return;

    setFade(true);

    setTimeout(() => {
      setActiveTab(index);
      setFade(false);
    }, 300);
  };

  return (
    <div className="tabs_wrapper3">
      <div className="container">
        <div className="tabs_title">
          <h2>Discover the potential of our product</h2>
        </div>

        {/* Tabs */}
        <div className="tabs_button feature_tabs">
          {tabsData3.map((item, index) => (
            <button
              key={item.id}
              className={activeTab === index ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="tabs_content tabs_card">
          <div className={`content_left ${fade ? "fade-out" : "fade-in"}`}>
            <h3>{tabsData3[activeTab].title}</h3>
            <p>{tabsData3[activeTab].description}</p>
            <a href="#" className="learn_more_btn">
              Learn More
            </a>
          </div>

          <div className={`content_right ${fade ? "fade-out" : "fade-in"}`}>
            <img
              src={tabsData3[activeTab].image}
              alt={tabsData3[activeTab].label}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs FOUR ---------------- */

const Tabs4 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeContent, setFadeContent] = useState(true);

  const handleTabClick = (index) => {
    if (activeTab === index) {
      // Close current tab and move to next automatically
      const nextIndex = (index + 1) % tabsData4.length;
      setFadeContent(false);
      setTimeout(() => {
        setActiveTab(nextIndex);
        setFadeContent(true);
      }, 300);
    } else {
      setFadeContent(false);
      setTimeout(() => {
        setActiveTab(index);
        setFadeContent(true);
      }, 300);
    }
  };

  return (
    <div className="tabs_wrapper4">
      <div className="container">
        <div className="tabs_title">
          <h2>Explore Features</h2>
          <p>Click on the tabs to open content like an accordion.</p>
        </div>

        <div className="tabs_content4 tabs_card">
          {/* Left Side - Tabs / Accordion */}
          <div className="tabs_left">
            {tabsData4.map((tab, index) => (
              <div
                key={tab.id}
                className={`accordion_item ${activeTab === index ? "open" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                <div className="accordion_title">
                  <span className="tab_icon">{tab.icon}</span>
                  {tab.label}
                  <span>{activeTab === index ? "-" : "+"}</span>
                </div>
                <div
                  className={`accordion_content ${activeTab === index ? "fade-in" : ""}`}
                >
                  <p>{tab.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className={`tabs_right ${fadeContent ? "fade-in" : "fade-out"}`}>
            <img
              src={tabsData4[activeTab].image}
              alt={tabsData4[activeTab].label}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs FIVE ---------------- */

const Tabs5 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const firstLoad = useRef(true);

  const handleTabClick = (index) => {
    if (index === activeTab) return;

    setAnimate(false);

    setTimeout(() => {
      setActiveTab(index);
      setAnimate(true);
    }, 50);
  };

  return (
    <div className="tabs_wrapper5">
      <div className="container">
        <div className="tabs_title">
          <h2>My Professional Journey</h2>
          <p>Education, skills, experience and interview highlights</p>
        </div>

        <div className="tabs_button5">
          {tabsData5.map((tab, index) => (
            <button
              key={tab.id}
              className={activeTab === index ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
              <span className="underline"></span>
            </button>
          ))}
        </div>

        <div className={`tabs_content5 ${animate ? "animate" : ""}`}>
          <div className="content_left">
            <img
              src={tabsData5[activeTab].image}
              alt={tabsData5[activeTab].label}
            />
          </div>

          <div className="content_right">
            <h3>{tabsData5[activeTab].title}</h3>
            {tabsData5[activeTab].content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs SIX ---------------- */

const Tabs6 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    setFade(true);
    setTimeout(() => {
      setActiveTab(index);
      setFade(false);
    }, 300);
  };

  return (
    <div className="tabs_wrapper6">
      <div className="container">
        <div className="tabs_container">
          <div className="tabs_buttons_left tabs_button ">
            {tabsData6.map((tab, index) => (
              <button
                key={tab.id}
                className={activeTab === index ? "active" : ""}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Side - Content */}
          <div
            className={`tabs_content_right ${fade ? "fade-out" : "fade-in"}`}
          >
            <div className="tab_content_inner">
              {/* Heading with full-width orange line */}
              <h3 className="tab_heading">
                {tabsData6[activeTab].heading}
                <span className="underline"></span>
              </h3>
              <div className="tab_content_inner_col">
                <img
                  src={tabsData6[activeTab].image}
                  alt={tabsData6[activeTab].name}
                  className="tab_image"
                />
                <div className="tab_text">
                  <p>
                    <span className="highlight">Name: </span>
                    {tabsData6[activeTab].name}
                  </p>
                  <p>
                    <span className="highlight">Release Year:</span>{" "}
                    {tabsData6[activeTab].year}
                  </p>
                  <p>
                    <span className="highlight">Description:</span>{" "}
                    {tabsData6[activeTab].description}
                  </p>
                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs SEVEN ---------------- */

const Tabs7 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs7_wrapper">
      <div className="container">
        <div className="tabs_title">
          <h2>Explore Our Tabs</h2>
          <p>
            Try to add or remove some content, the CSS and the JavaScript will
            adapt to your needs
          </p>
        </div>
        <div className="tabs7_container">
          {/* Left Side - Buttons */}
          <div className="tabs7_buttons tabs_button">
            {tabsData7.map((tab, index) => (
              <button
                key={tab.id}
                className={activeTab === index ? "active" : ""}
                onClick={() => setActiveTab(index)}
              >
                <span className="underline"></span>
                {tab.label}
                <span className="active_line"></span>
              </button>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="tabs7_content tabs_card">
            <div className="static_heading">
              <h2>Welcome here!</h2>
              <p>
                Try to add or remove some content, the CSS and the JavaScript
                will adapt to your needs
              </p>
            </div>

            <div className="dynamic_content">
              {tabsData7.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`tab_content_item ${
                    activeTab === index ? "active" : ""
                  }`}
                >
                  <h3>{tab.label}</h3>
                  <p>{tab.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs EIGHT ---------------- */

const Tabs8 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);

  const handleTabClick = (index) => {
    if (index === activeTab) return;
    setFade(true);
    setTimeout(() => {
      setActiveTab(index);
      setFade(false);
    }, 300);
  };

  return (
    <div className="tabs_wrapper8">
      <div className="container">
        <div className="tabs_title">
          <h2>Strategy That Delivers</h2>
        </div>
        <div className="tabs_button">
          {tabsData8.map((tab, idx) => (
            <button
              key={tab.id}
              className={activeTab === idx ? "active" : ""}
              onClick={() => handleTabClick(idx)}
            >
              <span className="icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={`tabs_content tabs_card ${fade ? "fade-out" : "fade-in"}`}
        >
          <div className="left">
            <img
              src={tabsData8[activeTab].image}
              alt={tabsData8[activeTab].label}
            />
          </div>
          <div className="right">
            <h3>{tabsData8[activeTab].title}</h3>
            <a href="#" className="action">
              {tabsData8[activeTab].button}
            </a>
            <p>{tabsData8[activeTab].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs NINE ---------------- */

const Tabs9 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="tabs9_wrapper">
      <div className="container">
        <div className="tabs_title">
          <h2>Solutions That Work</h2>
        </div>
        <div className="tabs9_buttons tabs_button">
          {tabsData9.map((tab, idx) => (
            <button
              key={tab.id}
              className={activeTab === idx ? "active" : ""}
              onClick={() => {
                setActiveTab(idx);
                setOpenAccordion(null);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={`tabs9_content tabs_card ${tabsData9[activeTab].style}`}
        >
          {tabsData9[activeTab].content.map((item, idx) => (
            <div
              key={idx}
              className={`accordion_item ${openAccordion === idx ? "open" : ""}`}
            >
              <div
                className="accordion_title"
                onClick={() => handleAccordionClick(idx)}
              >
                {item.title}
                <span className="icon">
                  {openAccordion === idx ? "-" : "+"}
                </span>
              </div>
              <div
                className="accordion_body"
                style={{ maxHeight: openAccordion === idx ? "200px" : "0" }}
              >
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- Tabs TEN ---------------- */

const Tabs10 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs_wrapper10">
      <div className="container">
        <div className="tabs_title">
          <h2>Our Strategic Services</h2>
        </div>
        <div className="tabs_button top_tabs">
          {tabsData10.map((tab, index) => (
            <button
              key={tab.id}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="tabs10_content">
          <div className="left">
            <img
              src={tabsData10[activeTab].image}
              alt={tabsData10[activeTab].title}
            />
          </div>

          <div className="right">
            <h2>{tabsData10[activeTab].title}</h2>

            {tabsData10[activeTab].features.map((item, idx) => (
              <div className="feature_item" key={idx}>
                <span className="icon">{item.icon}</span>
                <div>
                  <h4>{item.heading}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

            <a href="#" className="discover_btn">
              DISCOVER NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
export { Tabs2, Tabs3, Tabs4, Tabs5, Tabs6, Tabs7, Tabs8, Tabs9, Tabs10 };
