import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { CategoriesData, AboutData } from "./HomeMedicalData";
import "./HomeMedical.scss";

const TopCategories = () => {
  const swiperRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const MAX_SLIDE = 4;

  return (
    <section className="medicalTopCategories">
      <div className="container custom-container-lg">
        <div className="medTopCategoriesInner">
          <div className="medTopCategoriesHeading">
            <h3>Our Top Categories</h3>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              let index = swiper.activeIndex;
              if (index > MAX_SLIDE) index = MAX_SLIDE;
              setSlideIndex(index);
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {CategoriesData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="medCategoriesItem">
                  <div className="medCategoriesIcon">
                    <span>
                      <img src={item.icon} alt={item.title} />
                    </span>
                  </div>
                  <div className="medCategoriesTxt">
                    <p>{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Range Slider */}
          <div className="slider-container">
            <input
              type="range"
              min={0}
              max={MAX_SLIDE}
              step="1"
              value={slideIndex}
              onChange={(e) => {
                const index = parseInt(e.target.value);
                swiperRef.current.slideTo(index);
                setSlideIndex(index);
              }}
              className="range-slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const { subHeading, heading, description, buttonText, images, emergency } =
    AboutData;

  return (
    <section className="aboutUs" id="aboutUs">
      <div className="container custom-container-lg">
        <div className="aboutUsInner">
          <div className="row aboutUsRow">
            {/* LEFT IMAGE SIDE */}
            <div className="col-lg-6 aboutUsCol">
              <div className="aboutUsGallery">
                <img
                  src={images.main}
                  alt="about"
                  className="img-fluid mainImg"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6 aboutUsCol">
              <div className="aboutUsContent">
                <div className="aboutUsContentInner">
                  <span className="subHeading">{subHeading}</span>
                  <h4>{heading}</h4>
                  <p>{description}</p>

                  <a href="#" className="filledroundedbtn xl-btn">
                    <span>{buttonText}</span>
                  </a>
                </div>

                <div className="emergencyMedical">
                  <div className="emergencyMedicalIcon">
                    <span>
                      <img src={emergency.icon} alt="icon" />
                    </span>
                  </div>
                  <div className="emergencyMedicalContent">
                    <h4>{emergency.title}</h4>
                    <p>{emergency.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
export { AboutUs };
