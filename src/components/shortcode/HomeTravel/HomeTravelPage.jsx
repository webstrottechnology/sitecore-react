import React, { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  bannerSocialData,
  bannerCounterData,
  travelAboutData,
  holidayPackageData,
  travelJourneyData,
  travelBestPackageData,
  adventureTravelData,
  travelGalleryData,
  travelClearData,
  travelBlogData,
  travelContactData,
  travelBrandData,
  travelTestimonialData,
} from "./HomeTravelDataPage";
import "./HomeTravelPage.scss";

import bannerImg from "../../../assets/images/homeTravel/banner-img.png";

const TravelTopBannerSection = () => {
  return (
    <section className="travel-top-banner-main-wrapper">
      <div className="container custom-container-lg">
        <div className="travel-slider-caption-wrapper">
          <div className="travel-left wow bounceIn" data-wow-delay="100ms">
            <h1>
              Let's <strong>Make Your</strong> <span>Best Trip</span>{" "}
              <strong>Ever</strong>
            </h1>

            <p>
              Lorem Ipsum is simply dummy text of the printing and when an
              unknown printer took a galley.
            </p>

            <a className="travel-btn" href="#">
              <span>Explore More</span>
            </a>

            <div className="banner-social">
              {bannerSocialData.map((item) => (
                <a href={item.link} key={item.id}>
                  <span>{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="travel-right wow fadeinRight" data-wow-delay="200ms">
            <img src={bannerImg} alt="img" />

            <div className="banner-counter-wrapper">
              <div id="counter-stats">
                {bannerCounterData.map((item) => (
                  <div className="stats" key={item.id}>
                    <div className="count-icon">
                      <span>{item.icon}</span>
                    </div>

                    <div className="count-text">
                      <div className="counting" data-count={item.count}>
                        0
                      </div>
                      <h5>{item.title}</h5>
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

const TravelAboutSection = () => {
  return (
    <section className="travel-about-main-wrapper">
      <div className="container custom-container-lg">
        <div className="about-main-wrapper">
          <div
            className="travel-about-img wow fadeinLeft"
            data-wow-delay="100ms"
          >
            <div className="big-img">
              <img src={travelAboutData.bigImg} alt="img" />
            </div>

            <div className="about-small">
              <img src={travelAboutData.smallImg} alt="img" />
            </div>
          </div>

          <div
            className="travel-about-text wow fadeinRight"
            data-wow-delay="200ms"
          >
            <div className="travel-heading-title">
              <h4>{travelAboutData.subTitle}</h4>
              <h2>{travelAboutData.title}</h2>
              <p>{travelAboutData.description}</p>

              <a className="travel-btn" href={travelAboutData.buttonLink}>
                <span>{travelAboutData.buttonText}</span>
              </a>
            </div>

            <div className="travel-holidays-package-wrapper">
              {holidayPackageData.map((group) => (
                <div className="left-package" key={group.id}>
                  {group.items.map((item) => (
                    <div className="holiday" key={item.id}>
                      <h2>{item.count}</h2>
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TravelJourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalItems = travelJourneyData.timelineDates.length;
  const dateGap = 160;
  const lineWidth = totalItems * dateGap;

  const handlePrev = (e) => {
    e.preventDefault();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setActiveIndex((prev) => (prev < totalItems - 1 ? prev + 1 : prev));
  };

  return (
    <section className="travel-journey-main-wrapper">
      <div className="container custom-container-lg">
        <div className="travel-heading-title">
          <h4>{travelJourneyData.heading.subTitle}</h4>
          <h2>{travelJourneyData.heading.title}</h2>
        </div>

        <div className="h--timeline js-h--timeline h--timeline--loaded">
          <div className="h--timeline-container">
            <div className="h--timeline-dates">
              <div
                className="h--timeline-line"
                style={{
                  width: `${lineWidth}px`,
                  transform: `translateX(${
                    activeIndex > 4 ? -(activeIndex - 4) * dateGap : 0
                  }px)`,
                }}
              >
                <ol>
                  {travelJourneyData.timelineDates.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#0"
                        data-date={item.date}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveIndex(index);
                        }}
                        style={{ left: `${index * dateGap + 40}px` }}
                        className={`h--timeline-date ${
                          activeIndex === index
                            ? "h--timeline-date--selected"
                            : ""
                        } ${
                          index < activeIndex
                            ? "h--timeline-date--older-event"
                            : ""
                        }`}
                      >
                        {item.year}
                      </a>
                    </li>
                  ))}
                </ol>

                <span
                  className="h--timeline-filling-line"
                  aria-hidden="true"
                  style={{
                    transform: `scaleX(${
                      (activeIndex * dateGap + 40) / lineWidth
                    })`,
                  }}
                ></span>
              </div>
            </div>

            <nav className="h--timeline-navigation-container">
              <ul>
                <li>
                  <a
                    href="#0"
                    onClick={handlePrev}
                    className={`text-replace h--timeline-navigation h--timeline-navigation--prev ${
                      activeIndex === 0
                        ? "h--timeline-navigation--inactive"
                        : ""
                    }`}
                  >
                    Prev
                  </a>
                </li>
                <li>
                  <a
                    href="#0"
                    onClick={handleNext}
                    className={`text-replace h--timeline-navigation h--timeline-navigation--next ${
                      activeIndex === totalItems - 1
                        ? "h--timeline-navigation--inactive"
                        : ""
                    }`}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="h--timeline-events">
            <ol>
              {travelJourneyData.timelineEvents.map((item, index) => (
                <li
                  key={index}
                  className={`h--timeline-event ${
                    activeIndex === index ? "h--timeline-event--selected" : ""
                  } text-component`}
                >
                  <div className="h--timeline-event-content">
                    <div className="timeline-img">
                      <img src={item.image} alt={item.alt} />
                    </div>

                    <div className="timeline-content">
                      <h2>{item.year}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

const TravelBestPackageSection = () => {
  const [activeTab, setActiveTab] = useState(travelBestPackageData.tabs[0].id);

  return (
    <section className="travel-best-package-main-wrapper">
      <div className="container custom-container-lg">
        <div className="travel-heading-title">
          <h4>{travelBestPackageData.heading.subTitle}</h4>
          <h2>{travelBestPackageData.heading.title}</h2>
        </div>

        <div className="tave-tabs-wrapper">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {travelBestPackageData.tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  id={tab.tabId}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="tab-content" id="nav-tabContent">
            {travelBestPackageData.tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${
                  activeTab === tab.id ? "show active" : ""
                }`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={tab.tabId}
                tabIndex="0"
              >
                <div className="tab-img-wrapper">
                  {tab.packages.map((item, index) => (
                    <div className="tab-img" key={index}>
                      <img src={item.image} alt={item.alt} />

                      <div className="tab-img-content">
                        <h4>
                          <a href="#0">{item.title}</a>{" "}
                          <span>{item.startingText}</span>
                        </h4>
                        <p>
                          {item.personText} <span>{item.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AdventureTravelSection = () => {
  return (
    <section className="travel-adventure-main-wrapper">
      <div className="container custom-container-lg">
        <div className="adventure-wrapper">
          <div className="adventure-img wow fadeinLeft" data-wow-delay="100ms">
            <img
              src={adventureTravelData.image}
              alt={adventureTravelData.imageAlt}
            />
          </div>

          <div
            className="adventure-content wow fadeinRight"
            data-wow-delay="200ms"
          >
            <div className="travel-heading-title">
              <h4>{adventureTravelData.subTitle}</h4>
              <h2>{adventureTravelData.title}</h2>
              <p>{adventureTravelData.description}</p>
            </div>

            <ul className="bullet">
              {adventureTravelData.bulletPoints.map((item, index) => (
                <li key={index}>
                  <span>
                    <svg
                      width="23"
                      height="21"
                      viewBox="0 0 23 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.9031 0.682617L8.15924 19.6851L4.68798 20.9018L0 10.488L2.21874 9.98701L6.191 16.5001L19.4677 1.43413L22.9031 0.682617Z"
                        fill="#FB8500"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a className="travel-btn" href="#0">
              <span>{adventureTravelData.buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TravelGallerySection = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = travelGalleryData.galleryColumns.flatMap(
    (column) => column.images,
  );

  return (
    <>
      <section className="travel-gallery-main-wrapper">
        <div className="container custom-container-lg">
          <div className="travel-heading-title">
            <h4>{travelGalleryData.heading.subTitle}</h4>
            <h2>{travelGalleryData.heading.title}</h2>
            <p>{travelGalleryData.heading.description}</p>
          </div>

          <div className="gallery-main-wrapper">
            {travelGalleryData.galleryColumns.map((column, columnIndex) => (
              <div className="gallery-step1" key={columnIndex}>
                {column.images.map((item, index) => {
                  const currentIndex =
                    travelGalleryData.galleryColumns
                      .slice(0, columnIndex)
                      .reduce((total, col) => total + col.images.length, 0) +
                    index;

                  return (
                    <div className="portfolio_img_wrapper" key={index}>
                      <div className="portfolio_img">
                        <img
                          src={item.image}
                          className="img-responsive"
                          alt={item.alt}
                        />

                        <div className="portfolio_img_text">
                          <a
                            href="#0"
                            className="search img-link"
                            title={item.title}
                            onClick={(e) => {
                              e.preventDefault();
                              setPhotoIndex(currentIndex);
                              setOpen(true);
                            }}
                          >
                            <span>
                              <svg
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="49"
                                  width="2"
                                  height="100"
                                  fill="white"
                                />
                                <rect
                                  y="51"
                                  width="2"
                                  height="100"
                                  transform="rotate(-90 0 51)"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={galleryImages.map((item) => ({
          src: item.image,
          alt: item.alt,
        }))}
      />
    </>
  );
};

const TravelClearSection = () => {
  return (
    <section className="travel-clear-main-wrapper">
      <div className="container custom-container-lg">
        <div className="travel-heading-title">
          <h4>{travelClearData.heading.subTitle}</h4>
          <h2>{travelClearData.heading.title}</h2>
          <p>{travelClearData.heading.description}</p>
        </div>

        <div className="affordable-main-wrapper">
          {travelClearData.packages.map((item, index) => (
            <div
              className="affordable-box wow fadeinUp"
              data-wow-delay={item.delay}
              key={index}
            >
              <div className="afford-text">
                <img src={item.shapeImage} alt={item.shapeAlt} />

                <div className="top-text">
                  <p>{item.name}</p>
                  <h2>
                    {item.price} <span>{item.duration}</span>
                  </h2>
                </div>

                {item.tag && (
                  <div className="tag">
                    <p>{item.tag}</p>
                  </div>
                )}
              </div>

              <div className="afford-content">
                <ul>
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>

                <a className="travel-btn" href="#0">
                  <span>{item.buttonText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TravelTestimonialSection = () => {
  return (
    <section className="travel-testimonial-main-wrapper">
      <div className="container custom-container-lg">
        <div className="travel-heading-title">
          <h4>{travelTestimonialData.heading.subTitle}</h4>
          <h2>{travelTestimonialData.heading.title}</h2>
          <p>{travelTestimonialData.heading.description}</p>
        </div>

        <div className="travel-testimonial-slider">
          <div className="owl-carousel owl-theme">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".travel-testimonial-prev",
                nextEl: ".travel-testimonial-next",
              }}
            >
              {travelTestimonialData.testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div className="travel-testi-wrapper">
                      <div className="testi-img">
                        <span>
                          <img src={item.image} alt={item.alt} />
                        </span>

                        <h4>
                          <a href="#0">{item.name}</a>
                        </h4>

                        <p>{item.designation}</p>

                        <ul>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <li key={star}>
                              <svg
                                width="27"
                                height="26"
                                viewBox="0 0 27 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity={star <= item.rating ? "1" : "0.5"}
                                  d="M13.3125 20.8965L21.3465 26.0007L19.2145 16.3807L26.3125 9.9081L16.9655 9.07336L13.3125 0.000732422L9.6595 9.07336L0.3125 9.9081L7.4105 16.3807L5.2785 26.0007L13.3125 20.8965Z"
                                  fill="white"
                                />
                              </svg>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="testi-content">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="travel-testimonial-arrow travel-testimonial-prev"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              className="travel-testimonial-arrow travel-testimonial-next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TravelBlogSection = () => {
  return (
    <section className="travel-blog-main-wrapper">
      <div className="container custom-container-lg">
        <div className="travel-heading-title">
          <h4>{travelBlogData.heading.subTitle}</h4>
          <h2>{travelBlogData.heading.title}</h2>
          <p>{travelBlogData.heading.description}</p>
        </div>

        <div className="blog-iner-main-wrapper">
          <div className="blog-left-side">
            <div className="travel-blog-img">
              <a href={travelBlogData.leftBlog.link}>
                <img
                  src={travelBlogData.leftBlog.image}
                  alt={travelBlogData.leftBlog.alt}
                />
              </a>
            </div>

            <div className="travel-blog-content">
              <div className="date">
                <p>{travelBlogData.leftBlog.date}</p>

                <ul>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star}>
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity={
                            star <= travelBlogData.leftBlog.rating
                              ? undefined
                              : "0.18"
                          }
                          d="M9.58865 14.4827L15.1572 18.0206L13.6794 11.3528L18.5992 6.86648L12.1206 6.28791L9.58865 -0.000488281L7.05669 6.28791L0.578125 6.86648L5.49787 11.3528L4.02015 18.0206L9.58865 14.4827Z"
                          fill="#FB8500"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>

              <h4>
                <a href={travelBlogData.leftBlog.link}>
                  {travelBlogData.leftBlog.title}
                </a>
              </h4>

              <p>
                {travelBlogData.leftBlog.description}{" "}
                <em>{travelBlogData.leftBlog.highlight}</em>
              </p>

              <a className="travel-btn" href={travelBlogData.leftBlog.link}>
                <span>{travelBlogData.leftBlog.buttonText}</span>
              </a>
            </div>
          </div>

          <div className="blog-right-side">
            {travelBlogData.rightBlogs.map((item, index) => (
              <div className="blog-details-wrapper" key={index}>
                <div className="blog-right-img">
                  <a href={item.link}>
                    <img src={item.image} alt={item.alt} />
                  </a>
                </div>

                <div className="blog-right-content">
                  <div className="date">
                    <p>{item.date}</p>

                    <ul>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <li key={star}>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity={star <= item.rating ? undefined : "0.18"}
                              d="M9.58865 14.4827L15.1572 18.0206L13.6794 11.3528L18.5992 6.86648L12.1206 6.28791L9.58865 -0.000488281L7.05669 6.28791L0.578125 6.86648L5.49787 11.3528L4.02015 18.0206L9.58865 14.4827Z"
                              fill="#FB8500"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h4>
                    <a href={item.link}>{item.title}</a>
                  </h4>

                  <p>{item.description}</p>

                  <a className="travel-btn" href={item.link}>
                    <span>{item.buttonText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TravelContactSection = () => {
  return (
    <section className="travel-contact-main-wrapper">
      <div className="container custom-container-lg">
        <div className="travel-heading-title">
          <h4>{travelContactData.heading.subTitle}</h4>
          <h2>{travelContactData.heading.title}</h2>
          <p>{travelContactData.heading.description}</p>
        </div>

        <div className="travel-inner-main-wrapper">
          <div className="contact-img">
            <img
              src={travelContactData.image}
              alt={travelContactData.imageAlt}
            />
          </div>

          <div className="contact-form">
            <h2>{travelContactData.formTitle}</h2>

            <form>
              <div className="row">
                {travelContactData.fields.map((field, index) => (
                  <div className={field.colClass} key={index}>
                    <div className="form-group">
                      <label>{field.label}</label>

                      {field.type === "textarea" ? (
                        <textarea
                          className="form-control"
                          cols={field.cols}
                          rows={field.rows}
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          className="form-control"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="multi-btn">
                <button type="button" className="travel-btn">
                  <span>{travelContactData.buttonText}</span>
                </button>

                <p className="mb-0">
                  <span>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0667 16.8399C13.1556 16.8399 11.2927 16.413 9.47822 15.5593C7.6637 14.7056 6.0563 13.5776 4.656 12.1754C3.2557 10.7731 2.12978 9.16273 1.27822 7.34429C0.426667 5.52585 0.000592593 3.65962 0 1.74559C0 1.47844 0.0888888 1.25581 0.266667 1.0777C0.444444 0.899599 0.666667 0.810547 0.933334 0.810547H4.53333C4.74074 0.810547 4.92593 0.877336 5.08889 1.01091C5.25185 1.14449 5.34815 1.31517 5.37778 1.52296L5.95556 4.63978C5.98519 4.84757 5.98133 5.03695 5.944 5.20793C5.90667 5.37891 5.82163 5.5309 5.68889 5.66388L3.55556 7.84565C4.17778 8.91428 4.95556 9.91611 5.88889 10.8512C6.82222 11.7862 7.85185 12.5951 8.97778 13.2778L11.0667 11.1851C11.2 11.0515 11.3742 10.9515 11.5893 10.885C11.8044 10.8185 12.0154 10.7998 12.2222 10.8289L15.2889 11.4523C15.4963 11.4968 15.6667 11.5971 15.8 11.7533C15.9333 11.9094 16 12.0911 16 12.2983V15.9049C16 16.172 15.9111 16.3946 15.7333 16.5727C15.5556 16.7509 15.3333 16.8399 15.0667 16.8399Z"
                        fill="#FB8500"
                      />
                    </svg>
                  </span>
                  <a href={travelContactData.phoneLink}>
                    {travelContactData.phone}
                  </a>
                </p>

                <p className="mb-0">
                  <span>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.4548 8.48463L9.0018 10.1647L11.457 8.53065L16.9605 13.7688C16.8156 13.814 16.6608 13.8383 16.4997 13.8383H1.5003C1.3023 13.8383 1.1133 13.801 0.939601 13.7341L6.4548 8.48463ZM18 4.17982V12.3909C18 12.6054 17.9514 12.8086 17.865 12.9918L12.4704 7.85688L18 4.17982ZM8.49242e-07 4.22583L5.4378 7.81347L0.0954008 12.8997C0.032127 12.737 -0.00019101 12.5647 8.49242e-07 12.3909V4.22583ZM16.4997 0.814453C17.3277 0.814453 18 1.46217 18 2.26184V2.77064L8.9982 8.75727L8.49242e-07 2.82013V2.26184C8.49242e-07 1.46304 0.671401 0.814453 1.5003 0.814453H16.4997Z"
                        fill="#FB8500"
                      />
                    </svg>
                  </span>
                  <a href={travelContactData.emailLink}>
                    {travelContactData.email}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const TravelBrandSection = () => {
  return (
    <section className="travel-brand-main-wrappper">
      <div className="container custom-container-lg">
        <h2>{travelBrandData.title}</h2>

        <div className="brand-inner-wrapper">
          {travelBrandData.brands.map((brand, index) => (
            <div className="travel-brand" key={index}>
              <img src={brand.image} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTopBannerSection;
export {
  TravelAboutSection,
  TravelJourneySection,
  TravelBestPackageSection,
  AdventureTravelSection,
  TravelGallerySection,
  TravelClearSection,
  TravelBlogSection,
  TravelContactSection,
  TravelBrandSection,
  TravelTestimonialSection,
};
