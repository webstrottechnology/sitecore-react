import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AboutTestimonialData } from "./aboutTestimonialData";
import "./AboutTestimonial.scss";
import quotationIcon from "../../../assets/images/inner-pages/icons/about-quotation-icon.png";

import "swiper/css";
import "swiper/css/navigation";

const AboutTestimonial = () => {
  return (
    <section className="innerPagesTestimonial">
      <div className="ourTestimonialHead">
        <span className="subHeading">Testimonial</span>
        <h4>Our Happy Clients Say</h4>
      </div>

      <Swiper
        // modules={[Navigation, Autoplay]}
        slidesPerView={2.1}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        navigation
        className="testimonialSlider"
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile pe 1 card
            centeredSlides: false, // Mobile pe center mode off kar do, warna sliding bigad sakti hai
          },
          768: {
            slidesPerView: 1.4, // Tablet pe thoda sa side dikhana
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 2.1, // Desktop pe 2.1 card
            centeredSlides: true,
          },
        }}
      >
        {AboutTestimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonialCard">
              <div className="testimonialContent">
                <div className="quote">
                  <img src={quotationIcon} alt="quotation-icon" />
                </div>
                <p>{item.content}</p>
              </div>

              <div className="testimonialUser">
                <div className="userImg">
                  <img src={item.image} alt={item.name} />
                </div>
                <h5>{item.name}</h5>
                <span>{item.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutTestimonial;
