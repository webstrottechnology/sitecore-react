import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BannerData,
  Banner2Data,
  Banner3Data,
  Banner4Data,
  Banner5Data,
  Banner6Data,
  Banner7Data,
  Banner8Data,
  Banner9Data,
  Banner10Data,
  MedicalBannerData,
} from "./bannerData";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "./Banner.scss";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import MenImg from "../../../assets/images/left-men.jpg";
import WomenImg from "../../../assets/images/left-women.jpg";

import BgImg from "../../../assets/images/home-01/home-bg.png";
import TitleShape from "../../../assets/images/home-01/title-shape.png";
import SliderImg from "../../../assets/images/home-01/slider-img.png";
import { Link } from "react-router-dom";

/* ---------------- BANNER ONE ---------------- */

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        loop
        speed={1300}
        className="clip-slider"
      >
        {BannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide">
              <img src={item.image} alt="image" />
            </div>
            <div className="overlay" />
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/* ---------------- BANNER TWO ---------------- */

const Banner2 = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const total = Banner2Data.length;

  const showSlide = (index) => {
    setDirection(index > active ? "right" : "left");
    setActive(index);
  };

  const next = () => {
    setDirection("right");
    setActive((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection("left");
    setActive((prev) => (prev - 1 + total) % total);
  };

  /* keyboard arrows */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === 37) prev();
      if (e.keyCode === 39) next();
    };
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, []);

  return (
    <>
      <div className="banner2_wrapper">
        <article className="kontext capable animate">
          {Banner2Data.map((item, i) => (
            <div
              key={item.id}
              className={`layer 
              ${i === active ? "show" : "hide"} 
              ${direction}`}
              style={{ background: item.bg }}
            >
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span className="dimmer"></span>
            </div>
          ))}
        </article>

        {/* bullets */}
        <ul className="bullets">
          {Banner2Data.map((_, i) => (
            <li
              key={i}
              className={i === active ? "active" : ""}
              onClick={() => showSlide(i)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

/* ---------------- BANNER THREE ---------------- */

const Banner3 = () => {
  const [slides, setSlides] = useState(Banner3Data);

  const nextSlide = () => {
    setSlides((prev) => {
      const copy = [...prev];
      copy.push(copy.shift());
      return copy;
    });
  };

  const prevSlide = () => {
    setSlides((prev) => {
      const copy = [...prev];
      copy.unshift(copy.pop());
      return copy;
    });
  };

  return (
    <div className="banner3_wrapper">
      <div className="banner3_container">
        <div className="slide">
          {slides.map((item, index) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {index === 1 && (
                <div className="banner3-content">
                  <div className="content">
                    <div className="name">{item.title}</div>
                    <div className="des">{item.description}</div>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <a href="#" className="see-more">
                        See More
                      </a>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="button">
          <button onClick={prevSlide}>◁</button>
          <button onClick={nextSlide}>▷</button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- BANNER FUR ---------------- */

const Banner4 = () => {
  const [slides, setSlides] = useState(Banner4Data);
  const [animKey, setAnimKey] = useState(0);

  const nextSlide = () => {
    setSlides((prev) => {
      const copy = [...prev];
      copy.push(copy.shift());
      return copy;
    });
    setAnimKey((k) => k + 1);
  };

  const prevSlide = () => {
    setSlides((prev) => {
      const copy = [...prev];
      copy.unshift(copy.pop());
      return copy;
    });
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="banner4">
      <div className="banner4_slider">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`banner4_slide ${index === 0 ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {index === 0 && (
              <div className="banner4_content" key={animKey}>
                <span className="topText">{item.topText}</span>
                <h1 className="title">{item.title}</h1>
                <a href="#" className="cta">
                  {item.button}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="banner4_btns">
        <button onClick={prevSlide}>‹</button>
        <button onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

/* ---------------- BANNER FIVE ---------------- */

const Banner5 = () => {
  const [key, setKey] = useState(0);

  return (
    <section className="banner5">
      <Swiper
        // modules={[Autoplay, Navigation]}
        // autoplay={{ delay: 4500, disableOnInteraction: false }}
        // loop
        // speed={1200}
        // navigation={{
        //   prevEl: ".banner5_prev",
        //   nextEl: ".banner5_next",
        // }}
        onSlideChange={() => setKey((k) => k + 1)}
      >
        {Banner5Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="banner5_bg">
              <img src={item.image} alt="image" />
            </div>
            <div className="banner5-content">
              {/* CENTER CONTENT */}
              <div className="banner5_center" key={key}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>

              {/* RIGHT BUTTON */}
              <div className="banner5_right">
                <a href="#" className="banner5_btn">
                  {item.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT ARROWS */}
      <div className="banner5_nav">
        <button className="banner5_prev">‹</button>
        <button className="banner5_next">›</button>
      </div>
    </section>
  );
};

/* ---------------- BANNER SIX ---------------- */

const Banner6 = () => {
  const [animKey, setAnimKey] = useState(0);

  return (
    <section className="banner6">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={() => setAnimKey((k) => k + 1)}
      >
        {Banner6Data.map((item) => (
          <SwiperSlide key={item.id}>
            {/* BACKGROUND IMAGE */}
            <div
              className="banner6_bg"
              style={{ backgroundImage: `url(${item.bg})` }}
            />

            <div className="banner6_wrap">
              {/* LEFT TEXT */}
              <div className="banner6_left" key={animKey}>
                <h1>{item.title}</h1>

                <div className="rating">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                  <span>
                    {item.price} <del>{item.oldPrice}</del>
                  </span>
                </div>

                <div className="buttons">
                  <a href="#" className="primary">
                    SHOP NOW
                  </a>
                  <a href="#" className="secondary">
                    ALL PRODUCT
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

/* ---------------- BANNER SEVEN ---------------- */

const Banner7 = () => {
  return (
    <section className="banner7">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        speed={1400}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
      >
        {Banner7Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="banner7_slide"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="banner7_content">
                <h1>{item.title}</h1>
                <p>
                  <span>Starting price</span>
                  <strong>{item.price}</strong>
                </p>

                <div className="buttons">
                  <a href="#" className="primary">
                    SHOP STORE
                  </a>
                  <a href="#" className="secondary">
                    ▶ WATCH
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

/* ---------------- BANNER EIGHT ---------------- */

const effects = ["from-left", "from-right", "clip"];

const Banner8 = () => {
  const [effect, setEffect] = useState("from-left");

  const onChange = () => {
    const random = effects[Math.floor(Math.random() * effects.length)];
    setEffect(random);
  };

  return (
    <section className="banner8">
      {/* LEFT STATIC */}
      <div className="banner8_left">
        <div className="left_top" style={{ backgroundImage: `url(${MenImg})` }}>
          <div className="left_top_content">
            <h2>
              49% <span>OFF</span>
            </h2>
            <p>Mens Collection</p>
          </div>
        </div>

        <div
          className="left_bottom"
          style={{ backgroundImage: `url(${WomenImg})` }}
        >
          <h2>
            Hot <span>Discount</span>
          </h2>
          <p>New Arrivals</p>
        </div>
      </div>

      {/* RIGHT SLIDER */}
      <div className="banner8_right">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          speed={1200}
          autoplay={{ delay: 5000 }}
          navigation
          onSlideChange={onChange}
        >
          {Banner8Data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`slide ${effect}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="overlay" />
                <div className="banner8-content">
                  <div className="content">
                    <span className="tag">{item.tag}</span>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>

                    <div className="btn">
                      <a href="#" className="shop-now">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* ---------------- BANNER NINE ---------------- */

const Banner9 = () => {
  const [active, setActive] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % Banner9Data.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner9">
      {Banner9Data.map((item, index) => (
        <div
          key={item.id}
          className={`slide ${index === active ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="overlay" />

          <div className="container">
            <div className="banner9_content">
              {/* LEFT INFO BOX */}
              <div className="left">
                <div className="infoBox">
                  <h3>28K+</h3>
                  <span>BUSINESS REVENUE</span>
                  <div className="stars">★ ★ ★ ★ ★</div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="right">
                <span className="topText">{item.top}</span>

                <h1>
                  {item.big}
                  <strong>{item.small}</strong>
                </h1>

                <p>{item.text}</p>

                <a href="#" className="banner9-btn">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* SLIDE NUMBERS */}
      <div className="banner9-num">
        <div className="numbers">
          {Banner9Data.map((_, i) => (
            <span
              key={i}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- BANNER TEN ---------------- */

const Banner10 = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % Banner10Data.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner10">
      {Banner10Data.map((item, index) => (
        <div
          key={item.id}
          className={`slide ${index === active ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="overlay" />

          {/* CENTER CONTENT */}
          <div className="content">
            <span className="topText">MAKE YOUR STRATEGY STRONG</span>

            <h1>
              {item.title} <strong>{item.highlight}</strong>
            </h1>

            <p>{item.text}</p>

            <div className="buttons">
              <a
                href="#"
                className="primary"
                onClick={() =>
                  setActive((prev) => (prev + 1) % Banner10Data.length)
                }
              >
                Get Started
              </a>

              <a
                href="#"
                className="secondary"
                onClick={() =>
                  setActive((prev) => (prev + 1) % Banner10Data.length)
                }
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* RIGHT DOTS */}
      <div className="dots">
        {Banner10Data.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
};

/* ---------------- BANNER ELEVEN ---------------- */

const Banner11 = () => {
  return (
    <>
      <div className="banner11" style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="container custom-container">
          <div className="order-strip-wrapper">
            <span>%</span>
            <p className="mb-0">50% Off On Your First Order</p>
          </div>

          {/* CAPTION */}
          <div className="slider-caption">
            <h1>
              Transforming Your Ideas Into
              <span>Digital Reality</span>
            </h1>
            <img src={TitleShape} alt="shape" />
          </div>

          <div className="BtnBox">
            <Link to="/contact" className="mintGreenFilledBtn md-btn">
              Get Started
            </Link>
          </div>

          {/* IMAGE + PROGRESS */}
          <div className="slider-img">
            <img src={SliderImg} alt="slider" />
          </div>
        </div>
      </div>
    </>
  );
};

const MedicalTopBanner = () => {
  const data = MedicalBannerData;

  return (
    <section className="medicalTopBanner">
      <div className="container custom-container-lg">
        <div className="medicalTopBannerInner">
          <div className="row">
            {/* LEFT */}
            <div className="col-md-6">
              <div className="medTopBannerContent">
                <div className="higherLevelCare">
                  <a href="#">
                    <div className="higherLevelInner">
                      <span>{data.tag}</span>
                    </div>
                  </a>
                </div>
                <h1>
                  {data.title1} <span>{data.highlightText}</span> {data.title2}
                </h1>

                <p>{data.description}</p>

                <a href="/about-us" className="filledroundedbtn md-btn">
                  <span>{data.buttonText}</span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-md-6">
              <div className="medTopBannerImage">
                <div className="medTopBannerInnerImg">
                  <Link to="/" className="icon1">
                    <img
                      src={data.images.icon1}
                      className="floatingIcon icon1"
                      alt="image"
                    />
                  </Link>
                  <div className="girlImage ">
                    <img
                      src={data.images.doctor}
                      className="doctorImg img-fluid"
                      alt="image"
                    />
                  </div>
                  <Link to="/" className="icon2">
                    <img
                      src={data.images.icon2}
                      className="floatingIcon icon2"
                      alt="image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
export {
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  Banner8,
  Banner9,
  Banner10,
  Banner11,
  MedicalTopBanner,
};
