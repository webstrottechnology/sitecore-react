import React, { useEffect, useState, useRef } from "react";
import "./HomeEventPage.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  eventSliderData,
  eventCounterData,
  eventMeetMarketData,
  eventSpeakersData,
  eventAboutData,
  eventJoinData,
  eventPricingData,
  eventScheduleData,
  eventTestimonialData,
  eventBlogData,
  eventPartnerData,
} from "./HomeEventpageData";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMicrophoneAlt,
  FaChair,
  FaShieldAlt,
  FaStar,
  FaUser,
  FaClock,
  FaRegStar,
  FaRegCommentDots,
} from "react-icons/fa";

const EventSliderSection = () => {
  return (
    <section className="event-slider-main-wrapper">
      <div className="container custom-container-lg">
        <div className="event-slider-caption-wrapper">
          <div className="event-left wow bounceIn" data-wow-delay="100ms">
            <div className="event-icon-4">
              <img src={eventSliderData.icon} alt={eventSliderData.iconAlt} />
            </div>

            <h2>
              <span></span>
              {eventSliderData.subTitle}
            </h2>

            <h1>{eventSliderData.title}</h1>

            <p>{eventSliderData.description}</p>

            <div className="input-box">
              <input
                type="email"
                placeholder={eventSliderData.placeholder}
                className="form-control"
              />

              <button className="register-btn">
                {eventSliderData.buttonText}
              </button>
            </div>
          </div>

          <div className="event-right wow fadeinRight" data-wow-delay="200ms">
            {eventSliderData.slides.map((item) => (
              <div className={item.className} key={item.id}>
                <img src={item.image} alt={item.alt} />
                <div className="overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EventCounterSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date(eventCounterData.countdownDate).getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(
          2,
          "0",
        ),
        minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="event-counter-main-wrapper">
      <div className="container custom-container-lg">
        <div className="event-heading-title">
          <h2>{eventCounterData.smallTitle}</h2>
          <h3>{eventCounterData.title}</h3>
          <h5>{eventCounterData.dateText}</h5>
        </div>

        <div className="custom-countdown-wrapper">
          <div id="countdown">
            <ul>
              <li>
                <span id="days">{timeLeft.days}</span>days
              </li>
              <li>
                <span id="hours">{timeLeft.hours}</span>Hours
              </li>
              <li>
                <span id="minutes">{timeLeft.minutes}</span>Minutes
              </li>
              <li>
                <span id="seconds">{timeLeft.seconds}</span>Seconds
              </li>
            </ul>
          </div>

          <Link className="event-btn" to={eventCounterData.buttonLink}>
            {eventCounterData.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

const EventMeetMarketSection = () => {
  return (
    <section className="event-meet-market-main-wrapper">
      <div className="container custom-container-lg">
        <div className="meet-market-main-wrapper">
          {eventMeetMarketData.map((item) => (
            <div
              className={item.wrapperClass}
              data-wow-delay={item.delay}
              key={item.id}
            >
              {item.imagePosition === "bottom" && (
                <>
                  <div className="event-heading-title">
                    <h2>{item.smallTitle}</h2>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="event-img">
                    <img src={item.image} alt={item.alt} />
                  </div>
                </>
              )}

              {item.imagePosition === "top" && (
                <>
                  <div className="event-img">
                    <img src={item.image} alt={item.alt} />
                  </div>

                  <div className="event-heading-title">
                    <h2>{item.smallTitle}</h2>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventSpeakersSection = () => {
  return (
    <section className="event-speakers-main-wrappper">
      <div className="container custom-container-lg">
        <div className="event-heading-title">
          <h2>{eventSpeakersData.heading.smallTitle}</h2>

          <h3>{eventSpeakersData.heading.title}</h3>
        </div>

        <div className="speakers-main-wrappper">
          {eventSpeakersData.speakers.map((item) => (
            <div className="speaker-box" key={item.id}>
              <div className="speaker-img">
                <img src={item.image} alt={item.alt} />
              </div>

              <div className="speaker-content">
                <h4>
                  <Link to={item.link}>{item.name}</Link>
                </h4>

                <p>{item.designation}</p>

                <ul>
                  <li>
                    <Link to="#">
                      <span>
                        <FaInstagram />
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <span>
                        <FaFacebookF />
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <span>
                        <FaTwitter />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="center-btn">
          <Link className="event-btn" to={eventSpeakersData.button.link}>
            {eventSpeakersData.button.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

const EventAboutSection = () => {
  return (
    <section className="event-about-main-wrapper">
      <div className="container custom-container-lg">
        <div className="event-heading-title">
          <h2>{eventAboutData.heading.smallTitle}</h2>

          <h3>{eventAboutData.heading.title}</h3>

          <p>{eventAboutData.heading.description}</p>
        </div>

        <div className="about-main-wrapper">
          {eventAboutData.aboutItems.map((item) => (
            <div className="about-event-box" key={item.id}>
              <div className={`event-num ${item.className}`}>
                <h2>{item.number}</h2>
              </div>

              <div className="event-content">
                <span>{item.icon}</span>

                <h4>{item.title}</h4>

                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="multi-btn">
          <Link className="event-btn" to="/contact">
            Buy Ticket
          </Link>

          <Link className="event-btn" to="/about-us">
            Read MOre
          </Link>
        </div>
      </div>
    </section>
  );
};

const EventJoinSection = () => {
  return (
    <section className="event-join-event-main-wrappper">
      <div className="container custom-container-lg">
        <div className="join-event-main-wrappper">
          <div
            className="join-event-content wow fadeinUp"
            data-wow-delay="100ms"
          >
            <div className="event-heading-title">
              <h2>{eventJoinData.heading.smallTitle}</h2>
              <h3>{eventJoinData.heading.title}</h3>
              <p>{eventJoinData.heading.description}</p>
            </div>

            <p>
              <span>
                <FaShieldAlt />
              </span>
              {eventJoinData.highlightText}
            </p>

            <Link className="event-btn" to={eventJoinData.buttonLink}>
              {eventJoinData.buttonText}
            </Link>
          </div>

          <div className="join-event-img">
            {eventJoinData.images.map((item) => (
              <div
                className="join-img wow fadeinUp"
                data-wow-delay={item.delay}
                key={item.id}
              >
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EventPricingSection = () => {
  return (
    <section className="event-pricing-list-main-wrapper">
      <div className="container custom-container-lg">
        <div className="event-heading-title">
          <h2>{eventPricingData.heading.smallTitle}</h2>

          <h3>{eventPricingData.heading.title}</h3>

          <p>{eventPricingData.heading.description}</p>
        </div>

        <div className="affordable-main-wrapper">
          {eventPricingData.pricingCards.map((item) => (
            <div
              className={item.wrapperClass}
              data-wow-delay={item.delay}
              key={item.id}
            >
              <div className="pricing-top-text">
                <img src={item.shape} alt="" />

                <div className="top-text">
                  <h4>{item.title}</h4>

                  <p>{item.ticketText}</p>

                  <img src={item.reviewImg} alt="img" />
                </div>

                <div className={`pricing-number ${item.numberClass}`}>
                  <h4>{item.price}</h4>
                </div>
              </div>

              <div className="pricing-bottom">
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index}>
                      <span>
                        <FaStar />
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                <Link className="event-btn" to="#">
                  Buy Ticket
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventScheduleSection = () => {
  return (
    <section className="event-schedule-main-wrapper">
      <div className="container custom-container-lg">
        <div className="event-heading-title">
          <h2>{eventScheduleData.heading.smallTitle}</h2>
          <h3>{eventScheduleData.heading.title}</h3>
          <p>{eventScheduleData.heading.description}</p>
        </div>

        <div className="schedule-main-inner-wrapper">
          <div className="schedule-content">
            {eventScheduleData.schedules.map((item) => (
              <div
                className="schedule-left-side wow fadeinUp"
                data-wow-delay={item.delay}
                key={item.id}
              >
                <div className="schedule-img">
                  <img src={item.image} alt={item.alt} />
                </div>

                <div className="schedule-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>

                  <ul>
                    <li>
                      <span>
                        <FaUser />
                      </span>
                      {item.speaker}
                    </li>

                    <li>
                      <span>
                        <FaClock />
                      </span>
                      {item.time}
                    </li>

                    <li>
                      <span>
                        <FaMapMarkerAlt />
                      </span>
                      {item.location}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="schedule-sidebar">
            <div
              className="register-sidebar wow fadeinUp"
              data-wow-delay="100ms"
            >
              <h4>{eventScheduleData.sidebar.title}</h4>

              {eventScheduleData.sidebar.dates.map((item) => (
                <div className="register-date-box" key={item.id}>
                  <h4>{item.date}</h4>
                  <p>{item.day}</p>

                  <div className="triangle">
                    <img src={eventScheduleData.sidebar.polygonImg} alt="img" />
                  </div>
                </div>
              ))}

              <div className="center-btn">
                <Link
                  className="event-btn"
                  to={eventScheduleData.sidebar.buttonLink}
                >
                  {eventScheduleData.sidebar.buttonText}
                </Link>
              </div>
            </div>

            <div className="blog-sidebar wow fadeinUp" data-wow-delay="300ms">
              <img
                src={eventScheduleData.blogSidebar.image}
                alt={eventScheduleData.blogSidebar.imageAlt}
              />

              <div className="overlay">
                <div className="overlay-text">
                  <img
                    src={eventScheduleData.blogSidebar.logo}
                    alt={eventScheduleData.blogSidebar.logoAlt}
                  />

                  <h2>{eventScheduleData.blogSidebar.title}</h2>
                  <h3>{eventScheduleData.blogSidebar.subtitle}</h3>

                  <Link
                    className="event-btn"
                    to={eventScheduleData.blogSidebar.buttonLink}
                  >
                    {eventScheduleData.blogSidebar.buttonText}
                  </Link>

                  <p>{eventScheduleData.blogSidebar.website}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="center-btn">
          <Link
            className="event-btn"
            to={eventScheduleData.downloadButton.link}
          >
            {eventScheduleData.downloadButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

const EventTestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="event-testimonial-main-wrapper">
      <div className="container custom-container-lg">
        <div className="testimonial-main-inner-wrapper">
          <div className="event-testimonial-slider-wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              // modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="owl-carousel owl-theme"
            >
              {eventTestimonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-item">
                    <div className="testi-content">
                      <p>{item.description}</p>

                      <div className="testi-name">
                        <h4>
                          <a href="javascript:;">{item.name}</a>
                        </h4>

                        <p>{item.designation}</p>

                        <ul className="review">
                          {[...Array(item.rating)].map((_, index) => (
                            <li key={`star-${index}`}>
                              <FaStar />
                            </li>
                          ))}

                          {[...Array(5 - item.rating)].map((_, index) => (
                            <li key={`reg-star-${index}`}>
                              <FaRegStar />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="testi-img">
                      <img src={item.image} alt="img" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="event_testimonial_nav">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <HiArrowLongLeft />
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <HiArrowLongRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventBlogSection = () => {
  return (
    <section className="event-our-blog-main-wrapper">
      <div className="container custom-container-lg">
        <div className="inner-blog-main-wrappper">
          {eventBlogData.map((item) => (
            <div
              className="blog-wrapper wow fadeinUp"
              data-wow-delay={item.delay}
              key={item.id}
            >
              {item.showHeading && (
                <div className="event-heading-title">
                  <h2>{item.headingSmall}</h2>
                  <h3>{item.headingTitle}</h3>
                </div>
              )}

              {item.blogs.map((blog) => (
                <div className="blog-img" key={blog.id}>
                  <img src={blog.image} alt={blog.alt} />

                  <div className="overlay-blog">
                    <h4>{blog.category}</h4>

                    <h3>
                      <Link to={blog.link}>{blog.title}</Link>
                    </h3>

                    <ul>
                      <li>
                        <span>
                          <FaUser />
                        </span>
                        {blog.author}
                      </li>

                      <li>
                        <span>
                          <FaCalendarAlt />
                        </span>
                        {blog.date}
                      </li>

                      <li>
                        <span>
                          <FaRegCommentDots />
                        </span>
                        {blog.comments}
                      </li>
                    </ul>

                    <p>{blog.description}</p>

                    <Link to={blog.link}>{blog.btnText}</Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventPartnerSection = () => {
  return (
    <section className="event-partner-msin-wrappper">
      <div className="container custom-container-lg">
        <h2 className="d-none">Partner</h2>

        <div className="partner-main-wrappper">
          {eventPartnerData.map((item) => (
            <div className="partner" key={item.id}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default EventSliderSection;
export {
  EventCounterSection,
  EventMeetMarketSection,
  EventSpeakersSection,
  EventAboutSection,
  EventJoinSection,
  EventPricingSection,
  EventScheduleSection,
  EventTestimonialSection,
  EventBlogSection,
  EventPartnerSection,
};
