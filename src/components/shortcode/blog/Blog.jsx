import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HomeBlogData } from "./blogData";
import {
  blogDataOne,
  blogDataTwo,
  blogDataThree,
  blogDataFour,
} from "./blogData";
import { Link } from "react-router-dom";
import { FiUser, FiMessageCircle, FiArrowUpRight } from "react-icons/fi";
import { FaUser, FaComment } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

import "./Blog.scss";

/* ---------------- HomeBlogData  ---------------- */

const Blog = () => {
  const { leftSliderBlog, rightListBlog } = HomeBlogData;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true); // for fade effect

  // Auto Slide with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) =>
          prev === leftSliderBlog.length - 1 ? 0 : prev + 1,
        );
        setFade(true);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [leftSliderBlog.length]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === leftSliderBlog.length - 1 ? 0 : prev + 1,
      );
      setFade(true);
    });
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? leftSliderBlog.length - 1 : prev - 1,
      );
      setFade(true);
    });
  };

  const active = leftSliderBlog[currentSlide];

  return (
    <>
      <section className="Sitecorehome_blog_wrapper">
        <div className="container custom-container-lg">
          <div className="blog__container">
            <div className="blog__top">
              <h4 className="blog__label">News</h4>
              <h2 className="blog__heading">Latest News</h2>
            </div>

            <div className="blog__wrapper">
              {/* LEFT SIDE */}
              <div
                className="blog__left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className={`blog__image ${fade ? "fade-in" : "fade-out"}`}>
                  <img src={active.image} alt={active.title} />
                </div>

                <div
                  className={`blog__contentBox ${fade ? "fade-in" : "fade-out"}`}
                >
                  <div className="blog__meta">
                    <span className="blog__date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        width="16px"
                        height="16px"
                        style={{ marginRight: "6px" }}
                      >
                        <path d="M7 11h2v2H7zm4 0h2v2h-2zm4-6h-1V3h-2v2H8V3H6v2H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V7c0-1.11-.89-2-2-2zm0 16H5V10h14v11z" />
                      </svg>
                      {active.date}
                    </span>
                    <span className="blog__tag">{active.tag}</span>
                  </div>

                  <h3>
                    <Link to="/blog-page">{active.title}</Link>
                  </h3>
                  <p>{active.description}</p>

                  <div className="blog__buttons">
                    <button onClick={prevSlide}>❮</button>
                    <button onClick={nextSlide}>❯</button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div
                className="blog__right"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {rightListBlog.map((item) => (
                  <div className="blog__item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="blog__info">
                      <h4>
                        <Link to="/image-post"> {item.title}</Link>
                      </h4>
                      <span className="blog__date-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 24 24"
                          width="14px"
                          height="14px"
                          style={{
                            marginRight: "4px",
                            verticalAlign: "middle",
                          }}
                        >
                          <path d="M7 11h2v2H7zm4 0h2v2h-2zm4-6h-1V3h-2v2H8V3H6v2H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V7c0-1.11-.89-2-2-2zm0 16H5V10h14v11z" />
                        </svg>
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const BlogSectionOne = () => {
  return (
    <div className="BlogSectionOne">
      <div className="container">
        {/* WRAPPER */}
        <div className="BlogInnerWrap">
          {blogDataOne.map((item) => (
            <div className="blog-card" key={item.id}>
              {/* IMAGE BLOG */}
              {item.type === "image" && (
                <div className="media">
                  <img src={item.image} alt={item.title} />
                </div>
              )}

              {/* SLIDER BLOG */}
              {item.type === "slider" && (
                <div className="media">
                  <Swiper navigation modules={[Navigation]}>
                    {item.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt="slide" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* VIDEO BLOG */}
              {item.type === "video" && (
                <div className="media video">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <div className="content">
                <span className="date">{item.date}</span>
                <p className="author">{item.author}</p>

                <h3>
                  <a href={item.link} className="title-link">
                    {item.title}
                  </a>
                </h3>

                <a href={item.link} className="btn-read-more">
                  Continue Reading
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSectionTwo = () => {
  return (
    <section className="BlogSectionTwo">
      <div className="container">
        <div className="blog-grid">
          {blogDataTwo.map((item) => (
            <div className="blog-card" key={item.id}>
              {/* IMAGE / SLIDER / VIDEO */}
              <div className="media">
                {item.type === "image" && (
                  <img src={item.image} alt={item.title} />
                )}

                {item.type === "slider" && (
                  <Swiper navigation modules={[Navigation]}>
                    {item.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt="slide" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                {item.type === "video" && (
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allowFullScreen
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="content">
                {/* META */}
                <div className="meta">
                  <span>
                    <FiUser /> {item.author}
                  </span>
                  <span>
                    <FiMessageCircle /> Comments({item.comments})
                  </span>
                </div>

                {/* TITLE */}
                <h3>
                  <a href={item.link}>{item.title}</a>
                </h3>

                {/* READ MORE */}
                <a href={item.link} className="readMoreBtn">
                  <span className="circle">
                    <FiArrowUpRight />
                  </span>
                  <span className="txtName">Read More</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSectionThree = () => {
  return (
    <section className="BlogSectionThree">
      <div className="custom-container-lg">
        {/* HEADER */}
        <div className="blog-header">
          <div className="title_box">
            <span className="subtitle">Our Blog</span>
            <h2>Our Latest Newsletter</h2>
          </div>

          <div className="nav-arrows">
            <button className="blog-prev active">
              <MdOutlineArrowBackIosNew />
            </button>
            <button className="blog-next">
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".blog-prev",
            nextEl: ".blog-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogDataThree.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="blog-card">
                {/* IMAGE */}
                <div className="image-box">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* CONTENT */}
                <div className="content">
                  <div className="date-badge">
                    <span>{item.date}</span>
                    <small>{item.month}</small>
                  </div>
                  <ul className="meta">
                    <li>
                      <FaUser /> by {item.author}
                    </li>
                    <li>
                      <FaComment /> {item.comments} comments
                    </li>
                  </ul>

                  <h3>
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <div className="latestNewBtn">
                    <Link to={item.link} class="outlineroundedbtn  lg-btn">
                      <span>Continue Reading </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* VIEW ALL */}
        <div className="view-all">
          <Link to="/blog-page" className="filledroundedbtn md-btn">
            <span>View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogSectionFour = () => {
  return (
    <section className="BlogSectionFour">
      <div className="custom-container-lg">
        {/* HEADER */}
        <div className="blog-header">
          <div className="title_box">
            <span className="subtitle">Our Blog</span>
            <h2>Our Latest Newsletter</h2>
          </div>

          <div className="nav-arrows">
            <button className="blog-prev active">
              <IoIosArrowBack />
            </button>
            <button className="blog-next">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".blog-prev",
            nextEl: ".blog-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogDataFour.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="blog-card">
                {/* IMAGE */}
                <div className="image-box">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* CONTENT */}
                <div className="content">
                  <div className="date-badge">
                    <span>{item.date}</span>
                    <small>{item.month}</small>
                  </div>
                  <ul className="meta">
                    <li>
                      <FaUser /> by {item.author}
                    </li>
                    <li>
                      <FaComment /> {item.comments} comments
                    </li>
                  </ul>

                  <h3>
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <div className="latestNewBtn">
                    <Link to={item.link} className="Home2OutlineGreenBtn">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* VIEW ALL */}
        <div className="view-all">
          <Link to="/blog" className="Home2FilledGreenBtn">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
export { BlogSectionOne, BlogSectionTwo, BlogSectionThree, BlogSectionFour };
