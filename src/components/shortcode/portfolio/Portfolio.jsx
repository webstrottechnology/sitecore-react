import React, { useEffect, useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.scss";
import {
  gallery2Data,
  gallery3Data,
  galleryData,
  gallery4Data,
} from "./PortfolioData";
import { FaPlus, FaLink, FaSearch } from "react-icons/fa";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

const Portfolio1 = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <AboutBannerBreadCrumb title="Portfolio" bgImage={sitecoreBg} />
      <div className="portfolio-img-gallery-wrapper1">
        <ul>
          {galleryData.map((item, i) => (
            <li key={item.id}>
              <div
                className="portfolio_img"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img src={item.img} alt={item.title} />

                <div className="portfolio_img_overlay">
                  <span>+</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={galleryData.map((item) => ({
            src: item.img,
          }))}
        />
      </div>
    </>
  );
};

const Portfolio2 = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="portfolio-img-gallery-wrapper2">
      <div className="container custom-container-lg ">
        {/* Heading */}
        <div className="section-heading">
          <span className="subHeading">Mobile App Work</span>
          <h4>Our Mobile App Designs</h4>
        </div>

        <div className="gallery-grid-style2">
          {gallery2Data.map((item, i) => (
            <div className={`gallery-item item-${i + 1}`} key={item.id}>
              <div className="portfolio_img_wrapper">
                <div className="portfolio_img">
                  <img
                    src={item.img}
                    alt="portfolio"
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                  />

                  {/* Overlay */}
                  <div className="portfolio_img_overlay">
                    <div className="portfolio_img_text">
                      <button
                        className="lightbox-btn"
                        onClick={() => {
                          setIndex(i);
                          setOpen(true);
                        }}
                      >
                        <FaPlus />
                      </button>

                      <a href="#">
                        <FaLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={gallery2Data.map((item) => ({
          src: item.img,
        }))}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </div>
  );
};

const Portfolio3 = () => {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [filter]);

  const filteredItems =
    filter === "all"
      ? gallery3Data
      : gallery3Data.filter((item) => item.category === filter);

  return (
    <section className="portfolio-img-gallery-wrapper3">
      <div className="container custom-container-lg">
        <div className="corprate-title">
          <h4>Portfolio</h4>
          <h2>Our Awesome Work</h2>
        </div>

        {/* FILTER MENU */}
        <div className="portfolio-menu" data-aos="fade-up" data-aos-delay="200">
          {["all", "web", "dev", "wp"].map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "control active" : "control"}
              onClick={() => setFilter(cat)}
            >
              {cat === "all"
                ? "All"
                : cat === "web"
                  ? "Web Design"
                  : cat === "dev"
                    ? "Development"
                    : "WordPress"}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="portfolio-grid" data-aos="zoom-in" data-aos-delay="250">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                className="portfolio-item"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img src={item.img} alt={item.title} />

                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <p className="category">{item.title}</p>

                    <div className="icon-group">
                      <span className="icon">
                        <FaLink />
                      </span>

                      <span
                        className="icon"
                        onClick={() => {
                          setIndex(i);
                          setOpen(true);
                        }}
                      >
                        <FaSearch />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LIGHTBOX */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={filteredItems.map((item) => ({
            src: item.img,
          }))}
          on={{
            view: ({ index }) => setIndex(index),
          }}
        />
      </div>
    </section>
  );
};

const Portfolio4 = () => {
  const [activeTab, setActiveTab] = useState("AllProjects");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const gridRef = useRef(null);

  // ✅ get current tab data
  const currentData = gallery4Data.data[activeTab] || [];

  /* ✅ MASONRY FIX */
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const rowHeight = 10;
    const rowGap = 20;

    const resizeAll = () => {
      const items = grid.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        const img = item.querySelector("img");

        const resize = () => {
          const height = img.getBoundingClientRect().height;
          const span = Math.ceil((height + rowGap) / (rowHeight + rowGap));
          item.style.gridRowEnd = "span " + span;
        };

        if (img.complete) resize();
        else img.onload = resize;
      });
    };

    resizeAll();
    window.addEventListener("resize", resizeAll);

    return () => window.removeEventListener("resize", resizeAll);
  }, [currentData]);

  return (
    <section className="portfolio-img-gallery-wrapper4">
      <div className="container custom-container-lg">
        {/* ✅ Tabs */}
        <ul className="nav">
          {gallery4Data.tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={
                  activeTab === tab.value ? "nav-link active" : "nav-link"
                }
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>

        {/* ✅ Gallery */}
        <div className="gallery-grid-style2" ref={gridRef}>
          {currentData.map((item, i) => (
            <div className={`gallery-item item-${i + 1}`} key={item.id}>
              <div className="portfolio_img_wrapper">
                <div className="portfolio_img">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                  />

                  {/* Overlay */}
                  <div className="portfolio_img_overlay">
                    <div className="portfolio_img_text">
                      {/* Lightbox */}
                      <button
                        className="lightbox-btn"
                        onClick={() => {
                          setIndex(i);
                          setOpen(true);
                        }}
                      >
                        <FaPlus />
                      </button>

                      {/* Link */}
                      <a href={item.link}>
                        <FaLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={currentData.map((item) => ({ src: item.img }))}
      />
    </section>
  );
};

const PortfolioColumn4 = () => {
  const [activeTab, setActiveTab] = useState("AllProjects");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const gridRef = useRef(null);

  const currentData = gallery4Data.data[activeTab];

  const images = [
    ...(currentData?.step1 || []),
    ...(currentData?.step2 || []),
    ...(currentData?.step3 || []),
  ];

  /* Masonry Height Fix */

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const rowHeight = 10;
    const rowGap = 20;

    const resizeAll = () => {
      const items = grid.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        const img = item.querySelector("img");

        const resize = () => {
          const height = img.getBoundingClientRect().height;

          const span = Math.ceil((height + rowGap) / (rowHeight + rowGap));

          item.style.gridRowEnd = "span " + span;
        };

        if (img.complete) resize();
        else img.onload = resize;
      });
    };

    resizeAll();

    window.addEventListener("resize", resizeAll);

    return () => window.removeEventListener("resize", resizeAll);
  }, [images]);

  return (
    <section className="portfolio-img-gallery-wrapper-column4">
      <div className="container custom-container-lg">
        {/* Tabs */}

        <ul className="nav">
          {gallery4Data.tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={
                  activeTab === tab.value ? "nav-link active" : "nav-link"
                }
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Gallery */}

        <div className="gallery-grid-style-column4" ref={gridRef}>
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <div className="portfolio_img_wrapper">
                <div className="portfolio_img">
                  <img
                    src={img}
                    alt="portfolio"
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                  />

                  <div className="portfolio_img_overlay">
                    <div className="portfolio_img_text">
                      <button
                        className="lightbox-btn"
                        onClick={() => {
                          setIndex(i);
                          setOpen(true);
                        }}
                      >
                        <FaPlus />
                      </button>

                      <a href="#">
                        <FaLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </section>
  );
};

export default Portfolio1;
export { Portfolio2, Portfolio3, Portfolio4, PortfolioColumn4 };
