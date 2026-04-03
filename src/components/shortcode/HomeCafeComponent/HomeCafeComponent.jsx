import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeCafeComponent.scss";
import {
  HomeCafebreakfastData,
  HomeCafetestimonialData,
  HomeCafeBrandData,
  HomeCafeGalleryData,
  HomeCafeVideoData,
} from "./HomeCafeDataComponent";
import { VscAdd } from "react-icons/vsc";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
            <VscAdd  size={30} color="#fff" />
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
  const { video, thumbnail, buttonIcon } = HomeCafeVideoData;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
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
        <h2 className="d-none">Cafe Video</h2>

        <div className="video-wrap">
          <div className="video-player">

            {/* VIDEO */}
            <video
              ref={videoRef}
              className="company-vedio"
              onClick={handleVideoToggle}
            >
              <source src={video} type="video/mp4" />
            </video>

            {/* THUMBNAIL (hide when playing) */}
            {!isPlaying && (
              <div className="video-img">
                <img src={thumbnail} alt="thumbnail" className="main-img" />
              </div>
            )}

            {/* WAVES ANIMATION */}
            <div className="wrapper">
              <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
            </div>

            {/* PLAY BUTTON */}
            <img
              src={buttonIcon}
              alt="play-btn"
              className="click-btn show-text d-md-block d-sm-block d-block"
              onClick={handleVideoToggle}
              style={{ cursor: "pointer" }}
            />

          </div>
        </div>
      </div>
    </section>
  );
};



export default HomeCafeBreakfast;

export { HomeCafeTestimonial, HomeCafeBrand, HomeCafeGallery, HomeCafeVideo};
