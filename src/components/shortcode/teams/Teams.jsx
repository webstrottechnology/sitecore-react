import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Teams.scss";
import {
  team10Data,
  team11Data,
  team12Data,
  team6Data,
  team7Data,
  team8Data,
  team9Data,
  teamData,
  teams2Data,
  teams3Data,
  teams4Data,
  teams5Data,
} from "./TeamsData";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
  FaRss,
  FaDribbble,
  FaPinterestP,
  FaTimes,
} from "react-icons/fa";
import { FaPlus, FaYoutube, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import tempimg1 from "../../../assets/images/inner-pages/team01.png";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

const Teams = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Teams" bgImage={sitecoreBg} />
      <div className="teamOne-section">
        <div className="container">
          {/* Heading */}
          <div className="teamOne-header">
            <h2>Our Team Members</h2>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet.
            </p>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
            className="teamOne-slider"
          >
            {teamData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="team-card">
                  <img src={item.img} alt={item.name} />

                  {/* Overlay */}
                  <div className="overlay">
                    <div className="content">
                      <h4>{item.name}</h4>
                      <h5>({item.role})</h5>

                      <ul className="social">
                        <li>
                          {" "}
                          <a href="javascript:;">
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="javascript:;">
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="javascript:;">
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="javascript:;">
                            <FaGooglePlusG />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

const Teams2 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="team2-section">
      <div className="container">
        {/* Heading */}
        <div className="team2-text">
          <h3>Members</h3>
          <h2>Expert Team</h2>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet.
          </p>
        </div>

        {/* Arrows */}
        <div className="team2-arrows">
          <button ref={prevRef} className="team2-btn prev">
            <FaChevronLeft />
          </button>

          <button ref={nextRef} className="team2-btn next">
            <FaChevronRight />
          </button>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3500 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="section2-slider"
        >
          {teams2Data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="team2-card">
                <div className="team2-img">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="team2-content">
                  <h5>({item.role})</h5>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>

                  <ul className="team2-social">
                    <li>
                      {" "}
                      <a href="javascript:;">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="javascript:;">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="javascript:;">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="javascript:;">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Teams3 = () => {
  return (
    <div className="team3-section">
      {/* Overlay */}
      <div className="section3-overlay"></div>

      <div className="container">
        {/* Heading */}
        <div className="section3-header">
          <h2>Our Team</h2>

          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet.
          </p>
        </div>

        {/* Team Grid */}
        <div className="section3-grid">
          {teams3Data.map((item, index) => (
            <div className="team3-card" key={index}>
              {/* Image */}
              <div className="team-img">
                <img src={item.img} alt={item.name} />

                {/* Overlay */}
                <div className="team-overlay">
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
                    <a href="#">
                      <FaGooglePlusG />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="team-text">
                <h4>{item.name}</h4>
                <h5>({item.role})</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team4 = () => {
  return (
    <div className="team4-section">
      {/* Heading */}
      <div className="team4-header">
        <span>MEET OUR TEAM</span>
        <h2>
          People Behind <span>Bexon.</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="team4-grid">
        {teams4Data.map((item, i) => (
          <div className="team4-card" key={i}>
            <div className="team4-img">
              <img src={item.img} alt={item.name} />

              {/* Overlay */}
              <div className="team4-overlay">
                <div className="socials">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaInstagram />
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

            {/* Info */}
            <div className="team4-info">
              <h4>{item.name}</h4>
              <p>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team5 = () => {
  return (
    <div className="team5-section">
      {/* Heading */}
      <div className="container team5-header">
        <h2>Our Team</h2>
        <p>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet.
        </p>
      </div>

      {/* Slider */}
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 4 },
          }}
          className="team-slider"
        >
          {teams5Data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="team5-card">
                {/* Image */}
                <div className="team5-img">
                  <img src={item.img} alt={item.name} />
                </div>

                {/* Info */}
                <div className="team5-info">
                  <h4>{item.name}</h4>
                  <span>({item.role})</span>

                  {/* Social */}
                  <ul className="team5-social">
                    <li>
                      <a href="javascript:;">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <FaRss />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Team6 = () => {
  return (
    <div className="team6-section">
      <div className="container">
        <div className="team6-grid">
          {team6Data.map((item) => (
            <div className="team6-card" key={item.id}>
              {/* Image */}
              <div className="team6-img">
                <img src={item.img} alt={item.name} />
              </div>

              {/* Overlay */}
              <div className="team6-overlay">
                <h4>I AM CREATIVE</h4>

                <ul className="team6-social">
                  <li>
                    <a href="javascript:;">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team7 = () => {
  return (
    <div className="team7-section">
      <div className="container">
        {/* Heading */}
        <div className="section5-text">
          <h2>Our Team</h2>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          className="team-swiper"
        >
          {team7Data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="team-card">
                {/* Image */}
                <div className="team-img">
                  <img src={item.img} alt={item.name} />
                  <i>
                    <FaTwitter />
                  </i>
                </div>

                {/* Content */}
                <div className="team-content">
                  <h5>{item.role}</h5>
                  <h4>{item.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Team8 = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="team8-section">
      <div className="container">
        <div className="team-grid">
          {team8Data.map((item, index) => (
            <div
              key={index}
              className={`team-card ${active === index ? "active" : ""}`}
              onMouseEnter={() => setActive(index)}
            >
              {/* Image */}
              <div className="team-img">
                <img src={item.img} alt={item.name} />
              </div>

              {/* Content */}
              <h3>{item.name}</h3>
              <span>{item.role}</span>

              <div className="line"></div>

              <p>{item.desc}</p>

              {/* Social */}
              <div className="team-social">
                <a href="javascript:;">
                  <FaTwitter />
                </a>
                <a href="javascript:;">
                  <FaPinterestP />
                </a>
                <a href="javascript:;">
                  <FaFacebookF />
                </a>
                <a href="javascript:;">
                  <FaDribbble />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team9 = () => {
  return (
    <div className="team9-section ">
      <h2>Our Team</h2>

      <div className="team9-row">
        {team9Data.map((item, i) => (
          <div
            key={i}
            className="team9-card"
            style={{ background: item.color }}
          >
            <img src={item.img} alt="" />

            {/* Bottom Box */}
            <div className="team9-info-box">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
              <div className="team9-social">
                <a href="javascript:;">
                  <FaInstagram />
                </a>
                <a href="javascript:;">
                  <FaFacebookF />
                </a>
                <a href="javascript:;">
                  <FaTwitter />
                </a>
                <a href="javascript:;">
                  {" "}
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team10 = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="team10-section">
      {team10Data.map((item) => (
        <div
          className={`team-item ${activeId === item.id ? "active" : ""}`}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {/* Circle */}
          <div className="circle">
            <img src={item.img} alt={item.name} />
          </div>

          {/* Card */}
          <div className="info-card">
            <div className="card-img">
              <img src={item.img} alt={item.name} />
            </div>

            <h3>{item.name}</h3>
            <p>{item.role}</p>

            <div className="social-icon">
              <a href="javascript:;">
                <FaInstagram />
              </a>
              <a href="javascript:;">
                <FaFacebookF />
              </a>
              <a href="javascript:;">
                {" "}
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Team11 = () => {
  return (
    <div className="team11-section">
      <div className="container custom-container-lg">
        <div className="team-inner-wrapper">
          {/* Left Content */}
          <div className="team-box-contnet">
            <div className="corprate-title">
              <h4>Our Team</h4>
              <h2>We Help to Achieve Your Business Goal</h2>
              <p>
                It look like readable English. Many desktop publishing packages
                and web page editors now use Lorem Ipsum as their default model
                text.
              </p>
            </div>
            <a className="corprate-btn" href="#">
              View Our Team
            </a>
          </div>

          {/* Team Members */}
          {team11Data.map((member, index) => (
            <div className="team-box" key={index}>
              <div className="team-img">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team-text">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team12 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSocial = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="team12-section">
      <div className="container">
        {team12Data.map((member, index) => (
          <div className="team12-card-box" key={index}>
            <div className="imgBox">
              <img src={member.img} alt="" />

              {/* PLUS BUTTON */}
              <span
                className={`plus ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleSocial(index)}
              >
                <FaPlus />
              </span>

              {/* overlay */}
              <div
                className={`team12overlay ${openIndex === index ? "show" : ""}`}
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
                <a href={member.link}>{member.name}</a>
              </h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team13 = () => {
  return (
    <div className="team13-section">
      <div className="container">
        {/* LEFT IMAGE */}

        <div className="team13-image">
          <img src={tempimg1} alt="team" className="img-fluid" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="team13-content">
          <h2>Iris Martin</h2>
          <span className="role">Psychiatrist</span>

          {/* SOCIAL */}
          <div className="team13-social">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
          {/* TEXT */}
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p>
            Fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
export {
  Teams2,
  Teams3,
  Team4,
  Team5,
  Team6,
  Team7,
  Team8,
  Team9,
  Team10,
  Team11,
  Team12,
  Team13,
};
