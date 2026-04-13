import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import SliderGalleryData from "./sliderGalleryData";
import "./SliderGallery.scss";

const SliderGallery = () => {
  return (
    <section className="portfolioGallery">
      <Swiper
        modules={[Navigation]}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        observer={true}
        observeParents={true}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
      breakpoints={{
    576: {
      slidesPerView: 1.4,
    },
    768: {
      slidesPerView: 1.6,
    },
    992: {
      slidesPerView: 1.8,
    },
    1200: {
      slidesPerView: 2,
    },
  }}
        className="portfolioGallerySlider"
      >
        {SliderGalleryData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="galleryItem">
              <img src={item.image} alt="slider" />

              <div className="galleryText">
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="galleryNav">
        <button className="prevBtn">
          <FaArrowLeftLong />
          Previous</button>
        <button className="nextBtn">Next 
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default SliderGallery;
