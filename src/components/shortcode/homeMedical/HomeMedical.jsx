import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  CategoriesData,
  AboutData,
  MedicalTeamData,
  VideoSectionData,
  medicalTestimonialData,
  SliderGalleryData,
  counterSectionData,
} from "./HomeMedicalData";
import "./HomeMedical.scss";
import { FaPlus, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import testimonialLeftImg from "../../../assets/images/home_medical/medicalTestimonialLeftImg.png";
import likeIcon from "../../../assets/images/home_medical/icons/like.png";
import leftArrow from "../../../assets/images/home_medical/icons/testimonialLeftArrow.png";
import rightArrow from "../../../assets/images/home_medical/icons/testimonialRightArrow.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const MedicalTopCategories = () => {
  const swiperRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const MAX_SLIDE = 4;

  return (
    <section className="medicalTopCategories">
      <div className="container custom-container-lg">
        <div className="medTopCategoriesInner">
          <div className="medTopCategoriesHeading">
            <h3>Our Top Categories</h3>
          </div>

          <div className="custom-nav">
            <button className={`custom-prev ${isBeginning ? "disabled" : ""}`}>
              <FaAngleLeft />
            </button>

            <button className={`custom-next ${isEnd ? "disabled" : ""}`}>
              <FaAngleRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".custom-prev";
              swiper.params.navigation.nextEl = ".custom-next";
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              let index = swiper.activeIndex;
              if (index > MAX_SLIDE) index = MAX_SLIDE;
              setSlideIndex(index);

              // ⭐ arrow state update
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
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

const MedicalAboutUs = () => {
  const { subHeading, heading, description, buttonText, images, emergency } =
    AboutData;

  return (
    <section className="MedicalAboutUs" id="aboutUs">
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

                  <a href="/about-us" className="filledroundedbtn xl-btn">
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

const MedicalTeam = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSocial = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="MedicalTeam-section">
      <div className="container custom-container-lg">
        {/* ✅ TITLE */}
        <div className="section-header">
          <span>Our Team</span>
          <h2>Expert Team Available</h2>
        </div>

        {/* ✅ SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={4}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {MedicalTeamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team12-card-box">
                <div className="imgBox">
                  <img src={member.img} alt="" />

                  <span
                    className={`plus ${openIndex === index ? "active" : ""}`}
                    onClick={() => toggleSocial(index)}
                  >
                    <FaPlus />
                  </span>

                  <div
                    className={`team12overlay ${
                      openIndex === index ? "show" : ""
                    }`}
                  >
                    <div className="social">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info">
                  <h3>
                    <Link to={member.link}>{member.name}</Link>
                  </h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ CUSTOM ARROWS */}
        <div className="slider-buttons">
          <div className="custom-prev">
            <FaAngleLeft />
          </div>
          <div className="custom-next">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfessionalHealthVideo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="professionalHealthVideo">
        <div
          className="professionalHealthVideoInner"
          style={{
            backgroundImage: `url(${VideoSectionData.backgroundImage})`,
          }}
        >
          <div className="profHealthVideo">
            <a
              href="javascript:;"
              className="playBtn pulse"
              onClick={() => setOpen(true)}
            >
              <img src={VideoSectionData.playIcon} alt="play-btn" />
            </a>

            <p>{VideoSectionData.title}</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="videoModal"
          onClick={() => setOpen(false)} // 👈 OUTSIDE CLICK
        >
          {/* CLOSE BUTTON */}
          <span className="closeBtn" onClick={() => setOpen(false)}>
            ✕
          </span>
          <div
            className="videoModalContent"
            onClick={(e) => e.stopPropagation()} // 👈 VIDEO CLICK STOP
          >
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${VideoSectionData.youtubeId}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

const MedicalTestimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="MedicalTestimonials">
      <div className="container custom-container-lg">
        <div className="row testimonialsRow">
          {/* LEFT IMAGE */}
          <div className="col-lg-4">
            <div className="testimonialsImg">
              <img src={testimonialLeftImg} alt="img" />

              <div className="fiveStar">
                <div className="fiveStarIcon">
                  <img src={likeIcon} alt="like icon" className="img-fluid" />
                </div>
                <div className="fiveStarTxt">
                  <span>90%</span>
                  <h5>Clients Satisfy</h5>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-8">
            <div className="testimonialsContent">
              <div className="testimonialsHeadingSlider">
                <span>TESTIMONIALS</span>
                <h2>What Our Customers Are Talking About Us</h2>
              </div>

              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
              >
                {medicalTestimonialData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonialSlide">
                      <div className="testimonialsSlider">
                        {/* 🔥 BOX */}
                        <div className="testimonialsSliderOuter">
                          <div className="testimonialsSliderInner">
                            {/* Rating */}
                            <div className="ratingGroup">
                              <div className="star">
                                {[...Array(5)].map((_, i) => (
                                  <span
                                    key={i}
                                    className={
                                      i < item.rating
                                        ? "starYellow"
                                        : "starGray"
                                    }
                                  >
                                    ★
                                  </span>
                                ))}
                              </div>
                              <h6>{item.title}</h6>
                            </div>

                            {/* Text */}
                            <p>{item.description}</p>
                          </div>
                        </div>

                        {/* 🔽 USER + NAV */}
                        <div className="slideBottomContent">
                          <div className="userProfile">
                            <div className="userProfileImg">
                              <img src={item.image} alt={item.name} />
                            </div>

                            <div className="userInfo">
                              <h4>{item.name}</h4>
                              <span>{item.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="customNav">
                  <button onClick={() => swiperRef.current.slidePrev()}>
                    <FaArrowLeftLong />
                    <span>Previous</span>
                  </button>

                  <button onClick={() => swiperRef.current.slideNext()}>
                    <span>Next</span>
                    <FaArrowRightLong />
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MedicalSliderGallery = () => {
  return (
    <section className="portfolioGallery">
      {/* TITLE UPPER */}
      <div className="sliderGallery-title">
        <h2>Our Gallery</h2>
        <p>Safety And Comfortable</p>
      </div>

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
          576: { slidesPerView: 1.4 },
          768: { slidesPerView: 1.6 },
          992: { slidesPerView: 1.8 },
          1200: { slidesPerView: 2 },
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
          <img className="leftArrow" src={leftArrow} alt="prev" /> Previous
        </button>
        <button className="nextBtn">Next →</button>
      </div>
    </section>
  );
};

const MedicalCounter = () => {
  const { doctorImage, counters } = counterSectionData;

  // section screen me aaye tabhi counter start hoga
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="mediLatestCounter" ref={ref}>
      <div className="mediDoctorImages">
        <img src={doctorImage} alt="doctor" />
      </div>

      <div className="mediCounterInner">
        <div className="container custom-container-lg">
          <div className="mediCounterItems">
            {counters.map((item) => (
              <div className="mediCounterItem" key={item.id}>
                <div className="mediCounterIcon">
                  <span>
                    <img src={item.icon} alt="icon" />
                  </span>
                </div>

                <div className="mediCounterContant">
                  <h4>
                    {inView && (
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </h4>
                  <span className="label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTopCategories;
export {
  MedicalAboutUs,
  MedicalTeam,
  ProfessionalHealthVideo,
  MedicalTestimonials,
  MedicalSliderGallery,
  MedicalCounter,
};
