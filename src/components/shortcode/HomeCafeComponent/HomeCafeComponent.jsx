import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImArrowLeft2 } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";
import { FaUtensils, FaUsers } from "react-icons/fa";
import "./HomeCafeComponent.scss";
import {
  HomeCafebreakfastData,
  HomeCafetestimonialData,
  HomeCafeBrandData,
  HomeCafeGalleryData,
  HomeCafeVideoData,
  HomeCafeChefData,
  HomeCafeMenuTabs,
  HomeCafeMenuItems,
  HomeCafeOfferData,
  HomeCafeAboutData,
  HomeCafeServiceData,
  HomeCafeSliderData,
} from "./HomeCafeDataComponent";
import { VscAdd } from "react-icons/vsc";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// ✅ Breakfast

const HomeCafeBreakfast = () => {
  const {
    titleSmall,
    titleMain,
    awards,
    descriptionShort,
    descriptionLong,
    image,
    imageTitle,
    buttonText,
    buttonLink,
  } = HomeCafebreakfastData;

  return (
    <section className="cafe-breakfast-main-wrapper">
      <div className="container custom-container-lg">
        <div className="breakfast-wrapper">
          {/* LEFT IMAGE */}
          <div className="breakfast-img">
            <img src={image} alt="breakfast" />
            <div className="img-back">
              <h4>{imageTitle}</h4>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="breakfast-text">
            {/* TITLE */}
            <div className="cafe-menu-title">
              <h4>{titleSmall}</h4>
              <h2>{titleMain}</h2>
            </div>

            {/* AWARDS */}
            <div className="winning-award">
              <h2>{awards.count}</h2>
              <div className="award-text">
                <h4>{awards.title}</h4>
                <p>{awards.description}</p>
              </div>
            </div>

            {/* TEXT */}
            <div className="text-back">
              <p>{descriptionShort}</p>
            </div>

            <div className="text-para">
              <p>{descriptionLong}</p>
            </div>

            {/* BUTTON */}
            <Link to={buttonLink} className="Home2FilledGreenBtn cafe-btn">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Testimonial

const HomeCafeTestimonial = () => {
  const { titleSmall, titleMain, buttonText, buttonLink, testimonials } =
    HomeCafetestimonialData;

  return (
    <section className="cafe-testi-main-wrapper">
      <div className="container custom-container-lg">
        <div className="cafe-testimonial-main-wrapper">
          {/* LEFT CONTENT */}
          <div className="testimonial-content">
            <div className="cafe-menu-title">
              <h4>{titleSmall}</h4>
              <h2>{titleMain}</h2>

              <Link to={buttonLink} className="Home2FilledGreenBtn cafe-btn">
                {buttonText}
              </Link>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="testimonial-slider-wrapper">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* INDICATORS */}
              <div className="carousel-indicators">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={item.active ? "active" : ""}
                    aria-current={item.active ? "true" : undefined}
                  >
                    <img src={item.image} alt={item.name} />
                  </button>
                ))}
              </div>

              {/* SLIDES */}
              <div className="carousel-inner">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className={`carousel-item ${item.active ? "active" : ""}`}
                  >
                    <div className="test-text">
                      <p>{item.text}</p>
                      <h4>{item.name}</h4>
                      <small>{item.role}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// HomeCafeBrand
const HomeCafeBrand = () => {
  return (
    <section className="cafe-brand-main-wrapper">
      <div className="container custom-container-lg">
        {/* Hidden Heading for SEO */}
        <h2 className="d-none">Cafe Brand</h2>

        <div className="brand-main-wrapper">
          {HomeCafeBrandData.map((item) => (
            <div className="brand-img" key={item.id}>
              <img src={item.img} alt={`brand-${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//  HomeCafeGallery
const HomeCafeGallery = () => {
  const { titleSmall, titleMain, buttonText, buttonLink, gallery } =
    HomeCafeGalleryData;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 🔥 flatten all images for lightbox
  const allImages = gallery.flatMap((section) =>
    section.images.flatMap((img) =>
      typeof img === "object" ? img.nested : img,
    ),
  );

  const renderImage = (img, i) => (
    <div className="portfolio_img_wrapper" key={i}>
      <div className="portfolio_img">
        <img src={img} alt="gallery" />

        <div className="portfolio_img_text">
          <span
            onClick={() => {
              setIndex(allImages.indexOf(img));
              setOpen(true);
            }}
            style={{ cursor: "pointer" }}
          >
            <VscAdd size={30} color="#fff" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="cafe-gallery-main-wrappper">
      <div className="container  custom-container-lg">
        {/* TOP */}
        <div className="gallery-top-wrapper">
          <div className="cafe-menu-title">
            <h4>{titleSmall}</h4>
            <h2>{titleMain}</h2>
          </div>

          <Link to={buttonLink} className="Home2FilledGreenBtn cafe-btn">
            {buttonText}
          </Link>
        </div>

        {/* GALLERY */}
        <div className="gallery-main-wrapper">
          {gallery.map((section, i) => (
            <div className={`gallery-${section.type}`} key={i}>
              {section.images.map((img, idx) => {
                if (typeof img === "object") {
                  return (
                    <div className="gallery-step3" key={idx}>
                      {img.nested.map((nestedImg, nIdx) =>
                        renderImage(nestedImg, nIdx),
                      )}
                    </div>
                  );
                }
                return renderImage(img, idx);
              })}
            </div>
          ))}
        </div>

        {/* 🔥 LIGHTBOX */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={allImages.map((img) => ({ src: img }))}
        />
      </div>
    </section>
  );
};

//  HomeCafeVideo
const HomeCafeVideo = () => {
  const { video, thumbnail, playIcon, pauseIcon } = HomeCafeVideoData;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="cafe-video-main-wrapper">
      <div className="video-box-wrapper">
        <div className="video-wrap">
          <div className="video-player">
            {/* VIDEO */}
            <video ref={videoRef} className="company-vedio">
              <source src={video} type="video/mp4" />
            </video>

            {/* THUMBNAIL */}
            {!isPlaying && (
              <div className="video-img" onClick={handleVideoToggle}>
                <img src={thumbnail} alt="thumbnail" />
              </div>
            )}

            {/* WAVES */}
            {!isPlaying && (
              <div className="wrapper">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
            )}

            {/* PLAY / PAUSE BUTTON */}
            <img
              id="myBtn"
              src={isPlaying ? pauseIcon : playIcon} // 🔥 main logic
              alt="video-btn"
              className="click-btn show-text"
              onClick={handleVideoToggle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ ARROWS
const PrevArrow = ({ onClick }) => (
  <button className="slick-prev custom-arrow" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-next custom-arrow" onClick={onClick}>
    <FaChevronRight />
  </button>
);

// ✅ MAIN COMPONENT
const HomeCafeChefs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="cafe-our-chefs-main-wrapper">
      <div className="container custom-container-lg">
        <div className="cafe-menu-title">
          <h4>Our Chefs</h4>
          <h2>Expert Team Available</h2>
        </div>
      </div>

      <div className="cafe-team-slider-wrapper">
        <Slider {...settings}>
          {HomeCafeChefData.map((chef) => (
            <div key={chef.id} className="item">
              <div className="team-wrapper">
                <div className="team-img">
                  <img src={chef.image} alt={chef.name} />
                </div>

                <div className="team-text">
                  <h4>
                    <Link to="/team-single"> {chef.name}</Link>
                  </h4>
                  <p>{chef.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// HomeCafeTabMenu

const HomeCafeTabMenu = () => {
  const [activeTab, setActiveTab] = useState("product"); // default active

  return (
    <section className="cafe-our-menu-main-wrapper">
      <div className="container custom-container-lg">
        {/* TITLE */}
        <div className="cafe-menu-title">
          <h4>Our Menu</h4>
          <h2>The Best Food At The Best Price</h2>
        </div>

        {/* TABS */}
        <div className="cafe-menu-tab-wrapper">
          <ul className="nav nav-tabs justify-content-center">
            {HomeCafeMenuTabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CONTENT */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="product-chart-wrpapper">
                {HomeCafeMenuItems[activeTab]?.map((item, index) => (
                  <div className="product-list" key={index}>
                    <h4>
                      <a href="#!">{item.title}</a>
                    </h4>
                    <p>
                      <small>{item.desc}</small>
                      <span>{item.price}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//  HomeCafeOfferSection

const HomeCafeOfferSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // ❌ important
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="cafe-offer-main-wrapper">
      <div className="container custom-container-lg">
        {/* TITLE + ARROWS */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="cafe-offer-title">
            <h4>Services</h4>
            <h2>We Offer You</h2>
          </div>
        </div>

        {/* SLIDER */}
        <div className="offer-slider-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {HomeCafeOfferData.map((item) => (
              <div className="item" key={item.id}>
                <div className="offer-box-wrapper">
                  <div className="offer-img">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="offer-text">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="ArrowBox">
          {/* 🔥 CUSTOM ARROWS IN PARENT */}
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <ImArrowLeft2 />
            <span>Previous</span>
          </button>

          <button onClick={() => sliderRef.current?.slickNext()}>
            <span>Next</span>
            <ImArrowRight2 />
          </button>
        </div>
      </div>
    </section>
  );
};

//  HomeCafeAboutUs

const HomeCafeAboutUs = () => {
  const data = HomeCafeAboutData;
  return (
    <section className="cafe-about-main-wrapper">
      <div className="container custom-container-lg">
        <div className="cafe-about-wrapper">
          {/* LEFT TEXT */}
          <div className="about-text">
            <div className="title_box">
              <h4>{data.titleSmall}</h4>
              <h2>{data.titleMain}</h2>
              <p>{data.description}</p>
            </div>
            <div className="work-experience-wrapper">
              {data.experience.map((item, index) => (
                <div className="work-experience" key={item.id}>
                  {/* 🔥 ICON ADD */}
                  <div className="icon">
                    {index === 0 ? <FaUtensils /> : <FaUsers />}
                  </div>

                  <h4>{item.number}</h4>
                  <h2>
                    <Link to="/">{item.title}</Link>
                  </h2>
                  <p>{item.desc}</p>
                </div>
              ))}

              {/* SIDE IMAGE */}
              <div className="work-img">
                <img src={data.images.side} alt="img" />
              </div>

              {/* BOTTOM TEXT */}
              <div className="work-text">
                <h2>{data.bottomText}</h2>
                <Link to="/about-us" className="Home2FilledGreenBtn cafe-btn">
                  {data.buttonText}
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-img">
            <div className="abt-img1">
              <img src={data.images.main} alt="img" />
            </div>

            <div className="inner-img">
              <div className="abt-img2">
                <img src={data.images.small1} alt="img" />
              </div>

              <div className="abt-img3">
                <img src={data.images.small2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//  HomeCafeService

const HomeCafeService = () => {
  return (
    <section className="cafe-service-main-wrapper">
      <div className="container custom-container-lg">
        <div className="cafe-service-block-wrapper">
          {HomeCafeServiceData.map((item) => {
            const Icon = item.icon;

            return (
              <div className="service-box" key={item.id}>
                {/* ICON */}
                <div className="service-icon">
                  <span>
                    <Icon />
                  </span>
                </div>

                {/* TEXT */}
                <div className="service-text">
                  <h4>
                    <Link to="/">{item.title}</Link>
                  </h4>
                  <p>{item.desc}</p>

                  <a href="#" className="arrow-btn">
                    <FaArrowRightLong />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// HomeCafeSlider
const HomeCafeSliderSection = () => {
  const data = HomeCafeSliderData;

  return (
    <section className="cafe-slider-main-wrapper">
      <div className="container custom-container-lg">
        <div className="cafe-slider-caption-wrapper">
          {/* LEFT CONTENT */}
          <div className="cafe-left">
            <h4>{data.smallTitle}</h4>

            <h1>
              {data.mainTitle} <span>{data.highlight}</span> {data.mainTitleEnd}
            </h1>

            <p>{data.description}</p>

            <div className="slide-btn-sec">
              {/* BUTTON */}
              <div className="slide-btn">
                <Link to="/Contact" className="Home2FilledGreenBtn cafe-btn">
                  {data.buttonText}
                </Link>
              </div>

              {/* CONTACT */}
              <div className="slide-contact">
                <span className="icon">
                  <FaPhoneAlt />
                </span>

                <p>
                  {data.contactText} <span>{data.phone}</span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="cafe-right">
            <img src={data.image} alt="slider" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCafeBreakfast;

export {
  HomeCafeTestimonial,
  HomeCafeBrand,
  HomeCafeGallery,
  HomeCafeVideo,
  HomeCafeChefs,
  HomeCafeTabMenu,
  HomeCafeOfferSection,
  HomeCafeAboutUs,
  HomeCafeService,
  HomeCafeSliderSection,
};
