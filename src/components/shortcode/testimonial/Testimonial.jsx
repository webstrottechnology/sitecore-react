import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  TestimonialData,
  TestimonialData2,
  TestimonialData3,
  testimonialData4,
  TestimonialData5,
  testimonialData6,
  testimonialData7,
  testimonialData8,
  testimonialData9,
  testimonialData10,
  testimonialData11,
} from "./testimonialData";

/* ---------------- TESTIMONIAL ONE ---------------- */

const Testimonial = () => {
  return (
    <div className="testimonial_wrapper">
      <div className="container">
        <div className="testimonial_title_wrapper">
          <h2>OUR TESTIMONIALS</h2>
          <h3>What Our Students Say About Us</h3>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial_swiper"
        >
          {TestimonialData.map((item) => (
            <SwiperSlide key={item.id} className="swiper_slide_custom">
              <div className="testimonial_card_wrapper">
                <div className="testimonia_Card_content">
                  <div className="top-text">
                    <p className="text">{item.text}</p>
                  </div>

                  <div className="bottom_text">
                    <div className="bottom_text_img">
                      <img src={item.img} alt="" />
                    </div>

                    <div className="bottom_text_info">
                      <p className="name">{item.name}</p>
                      <p className="companyName">{item.companyName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

/* ---------------- TESTIMONIAL Two ---------------- */

const Testimonial2 = () => {
  return (
    <div className="testimonial-two">
      <div className="container">
        <div className="testimonial_title_wrapper">
          <h2>Our Client Say</h2>
          <h3>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet.
          </h3>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-two-swiper"
        >
          {TestimonialData2.map((item) => (
            <SwiperSlide key={item.id} className="swiper_slide_custom">
              <div className="testimonial-two-card">
                <img src={item.img} alt={item.name} />
                <p className="text">“{item.text}”</p>
                <h4>
                  <a href="#">{item.name}</a>
                </h4>
                <span>{item.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

/* ---------------- TESTIMONIAL Three ---------------- */

const Testimonial3 = () => {
  return (
    <div className="testimonial-three">
      <div className="container">
        <div className="testimonial_title_wrapper">
          <h2>What other say for us</h2>
          <h3>Our team created best opportunities for your business.</h3>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            991: { slidesPerView: 2 },
          }}
          className="testimonial-swiper"
        >
          {TestimonialData3.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-three-card">
                <div className="testimonial-three-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="testimonial-three-text">
                  <h4>
                    <a href="#">{item.name}</a>
                  </h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="testimonial-navigation">
          <div className="testimonial-prev">‹</div>
          <div className="testimonial-next">›</div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- TESTIMONIAL Four ---------------- */

const Testimonial4 = () => {
  return (
    <section className="testimonial-dark">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={40}
          loop={false}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonialData4.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="avatar">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="content">
                  <div className="testimonial_icon">
                    <img src={item.img2} alt={item.name} />
                  </div>

                  <h4>
                    <a href="#">{item.name}</a>
                  </h4>

                  <p>{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="dark_btn">
          <button className="testimonial-prev"></button>
          <button className="testimonial-next"></button>
        </div>
      </div>
    </section>
  );
};

/* ---------------- TESTIMONIAL Five ---------------- */

const Testimonial5 = () => {
  return (
    <section className="testimonial-five">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {TestimonialData5.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="avatar">
                  <img src={item.image} alt={item.name} />
                </div>

                <p className="message">{item.message}</p>

                <h4 className="name">{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* ---------------- TESTIMONIAL SIX ---------------- */

const Testimonial6 = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,

    appendDots: (dots) => (
      <div className="line-dots">
        <ul>{dots}</ul>
      </div>
    ),

    customPaging: () => <button className="line-dot"></button>,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonial-six">
      <div className="overlay">
        <div className="container">
          <div className="testimonial_title_wrapper">
            <h2 className="title">What's Clients Says?</h2>
          </div>

          <Slider {...settings}>
            {testimonialData6.map((item) => (
              <div key={item.id}>
                <div className="testimonial-six-card">
                  <div className="avatar">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h4>
                    <a href="#">{item.name}</a>
                  </h4>
                  <span>{item.role}</span>

                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

/* ---------------- TESTIMONIAL SEVEN ---------------- */

const Testimonial7 = () => {
  return (
    <section className="testimonial-center">
      <div className="container">
        <h2 className="testimonial_title_wrapper">
          Testimonials Carousel – Cards Comments
        </h2>

        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          speed={600}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            991: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
        >
          {testimonialData7.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="avatar">
                  <img src={item.img} alt={item.name} />
                </div>
                <h4>
                  <a href="#">{item.name}</a>
                </h4>
                <span>{item.role}</span>
                <p>“{item.text}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* ---------------- TESTIMONIAL EIGHT ---------------- */

const Testimonial8 = () => {
  return (
    <section className="testimonial-eight">
      <div className="overlay">
        <div className="container">
          <div className="testimonial_title_wrapper">
            <h2>Testimonials</h2>
            <h3>What our clients say</h3>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            speed={500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-eight-swiper"
          >
            {testimonialData8.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="card-top">
                      <img src={item.img} alt={item.name} className="avatar" />

                      <div className="role-content">
                        <div className="name-role">
                          <h4>
                            <a href="#">{item.name}</a>
                          </h4>
                          <span>{item.role}</span>
                        </div>

                        <div className="stars">{"★".repeat(item.rating)}</div>
                      </div>
                    </div>

                    <p className="testimonial-text">{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

/* ---------------- TESTIMONIAL NINE ---------------- */

const Testimonial9 = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    autoplay: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonial-nine">
      <div className="container">
        <div className="testimonial_title_wrapper center">
          <h2>Our Reviews</h2>
          <span className="line"></span>
        </div>

        <Slider {...settings}>
          {testimonialData9.map((item) => (
            <div key={item.id}>
              <div className="testimonial-nine-card">
                <div className="avatar-wrapper">
                  <span className="quote">❝</span>
                  <img src={item.img} alt={item.name} />
                </div>

                <h4>
                  <a href="#">{item.name}</a>
                </h4>
                <span className="role">{item.role}</span>

                <p className="text">{item.text}</p>
                <div className="textimonial9_btn">
                  <a href="#" className="btn-surprise">
                    {item.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

/* ---------------- TESTIMONIAL TEN ---------------- */

const Testimonial10 = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const swiperRef = useRef(null);

  return (
    <section className="testimonial-ten">
      <div className="container">
        <div className="testimonial_title_wrapper center">
          <h2>What People Feel</h2>
          <h3>Real stories from our academy family</h3>
        </div>

        <Slider {...settings}>
          {testimonialData10.map((item) => (
            <div key={item.id}>
              <div className="testimonial-ten-card">
                <span className="quote-icon">❝</span>

                <p className="text">{item.text}</p>
                <div className="rating">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <div className="user">
                  <img src={item.img} alt={item.name} />
                  <div className="user-content">
                    <h4>
                      <a href="#">{item.name}</a>
                    </h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

/* ---------------- TESTIMONIAL ELEVEN ---------------- */

const Testimonial11 = () => {
  return (
    <div className="testimonial11_wrapper">
      <div className="container custom-container-lg" >
        <div className="testimonial_title_wrapper center">
          <h2>Testimonial</h2>
          <h3>What Our Client Say</h3>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={700}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialData11.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial11_card">
                <div className="testimonial11_top">
                  <div className="testimonial_top_left">
                    <img src={item.image} alt={item.name} />
                    <div className="rating">
                      {" "}
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </div>
                    <h4>
                      <a href="#">{item.name}</a>
                    </h4>
                  </div>
                  <span className="quote-icon">{item.icon}</span>
                </div>
                <p>{item.role}</p>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
export {
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
  Testimonial7,
  Testimonial8,
  Testimonial9,
  Testimonial10,
  Testimonial11,
};
