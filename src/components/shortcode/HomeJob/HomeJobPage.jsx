import React, { useState } from "react";
import "./HomeJobPage.scss";
import { Link } from "react-router-dom";

import {
  heroContentDataSction1,
  radioOptionsDataSction1,
  jobTitlesDataSction1,
  categoriesJobDataSction1,
  peopleImagesDataSction1,
  peopleStatusDataSction1,
  popularCategoriesData,
  jobForYouSectionData,
  findJobButtonData,
  jobWorkingProcessData,
  trustedLogoGroupsData,
  jobTrustedPlansData,
  jobTeamData,
  jobTeamNavData,
  jobSpeakerData,
  jobProcessData,
  jobBlogData,
  jobQuestionData,
  jobSubscribeData,
} from "./HomeJobPageData";

import jobYouImg from "../../../assets/images/homejob/jobyou-img.png";
import findJobImg from "../../../assets/images/homejob/findjob_img.png";
import playBtnImg from "../../../assets/images/homejob/jobplay-video-button.png";
import workingBgImg from "../../../assets/images/homejob/jobworking_bgimg.png";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



import { FaRegUser, FaFileUpload, FaSearch } from "react-icons/fa";

// JobDreamSection

const JobDreamSection = () => {
  return (
    <section className="jobdream_section1">
      <div className="container custom-container-lg">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-md-12 col-lg-6">
            <div className="jobdream_box1">
              {/* SIDE TAG */}
              <div className="jobdream_side">
                <span className="line"></span>

                <div className="platform_box">
                  <p>{heroContentDataSction1.tag}</p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="jobdream_content">
                {/* TITLE */}
                <h1>
                  {heroContentDataSction1.title}

                  <span>{heroContentDataSction1.highlight}</span>

                  {heroContentDataSction1.subtitle}
                </h1>

                {/* RADIO */}
                <div className="radio_box">
                  {radioOptionsDataSction1.map((item) => (
                    <label key={item.id}>
                      <input type="radio" name="jobType" />

                      {item.label}
                    </label>
                  ))}
                </div>

                {/* FORM */}
                <form className="jobdream_form">
                  <div className="select_box border_right">
                    <select>
                      <option>Job Title</option>

                      {jobTitlesDataSction1.map((item) => (
                        <option key={item.id}>{item.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="select_box">
                    <select>
                      <option>All Category</option>

                      {categoriesJobDataSction1.map((item) => (
                        <option key={item.id}>{item.category}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="search_btn">
                    Search
                  </button>
                </form>

                {/* PEOPLE */}
                <div className="people_box">
                  <div className="people_images">
                    {peopleImagesDataSction1.map((item) => (
                      <img key={item.id} src={item.image} alt="people" />
                    ))}

                    <span>+</span>
                  </div>

                  <div className="people_content">
                    <h5>{peopleStatusDataSction1.totalPeople}</h5>

                    <p>{peopleStatusDataSction1.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-12 col-lg-6">
            <div className="jobdream_box2">
              <img
                src={heroContentDataSction1.image}
                alt="dream-img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PopularCategoriesSection

const PopularCategoriesSection = () => {
  return (
    <section className="w-100 clearfix">
      <div className="career_popular_wrapper">
        <div className="container custom-container-lg">
          <div className="popular_innerwrapper1">
            <div className="popular_box1">
              <div className="popularheadingbox">
                <h2 className="jobmain_heading">Popular Categories</h2>
              </div>

              <p className="jobpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>
            </div>

            <div className="popular_box2">
              <div className="popularbtn_box">
                <Link to="/" className="indJob-btn">
                  Browse All Categories
                </Link>
              </div>
            </div>
          </div>

          <div className="popular_innerwrapper2">
            <ul>
              {popularCategoriesData.map((item) => (
                <li key={item.id}>
                  <div className="categoriesdetailbox">
                    {item.reverse ? (
                      <>
                        <div className="catebox2">
                          <h5>
                            <Link to="/">{item.title}</Link>
                          </h5>

                          <p>({item.positions} open Positions )</p>
                        </div>

                        <div className="catebox1">
                          <span>{item.icon}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="catebox1">
                          <span>{item.icon}</span>
                        </div>

                        <div className="catebox2">
                          <h5>
                            <Link to="/">{item.title}</Link>
                          </h5>

                          <p>({item.positions} open Positions )</p>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// JobForYouSection

const JobForYouSection = () => {
  return (
    <div className="jobyou_wrapper_section">
      <div className="container custom-container-lg">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="jobyou-box1">
              <div className="jobyouheadingbox">
                <h2 className="jobmain_heading">Job For You</h2>
              </div>

              <p className="jobpara">
                Convallis gravida odio viverra nisi, aliquam sem netus. Sed
                atlacus. Nam integer nunc pellentesque nunc pulvinadonec
                scelerisque.
              </p>

              <div className="jobyoubtn_box">
                <Link to="/" className="indJob-btn">
                  Browse All Categories
                </Link>
              </div>

              <div className="jobsearchimg_box">
                <img src={jobYouImg} alt="jobyou-img" />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-6">
            <div className="jobyou-box2">
              <ul>
                {jobForYouSectionData.slice(0, 2).map((item) => (
                  <li key={item.id}>
                    <div className="jobforyoudetailbox">
                      <span>
                        <img src={item.image} alt={item.title} />
                      </span>

                      <h5>
                        <Link to="/">{item.title}</Link>
                      </h5>

                      <div className="foryoudetailbtnbox">
                        <Link to="contact-us.html" className="foryoubtn">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="jobyoumargin">
                {jobForYouSectionData.slice(2, 4).map((item) => (
                  <li key={item.id}>
                    <div className="jobforyoudetailbox">
                      <span>
                        <img src={item.image} alt={item.title} />
                      </span>

                      <h5>
                        <Link to="/">{item.title}</Link>
                      </h5>

                      <div className="foryoudetailbtnbox">
                        <Link to="contact-us.html" className="foryoubtn">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  FindJobSection

const FindJobSection = () => {
  return (
    <section className="w-100 clearfix">
      <div className="findjob_wrapper_section">
        <div className="container custom-container-lg">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center">
              <div className="findjob_box1">
                <div className="findjobimg_box">
                  <img src={findJobImg} alt="findjob-img" />
                </div>

                <div className="findjob_contentbox">
                  <h2>
                    25
                    <sup>+</sup>
                  </h2>

                  <div className="findyou">
                    <h6>Year Of</h6>

                    <h5>Experience</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="findjob_box2">
                <div className="findjobheadingbox">
                  <h2 className="jobmain_heading">
                    <Link to="/">Find the job that suits you the most.</Link>
                  </h2>
                </div>

                <p className="jobpara">
                  Convallis gravida odio viverra nisi, aliquam sem netus. Sed at
                  semper at lacus. Nam integer nunc pellentesque nunc
                  pulvinadonec scelerisque. Malesuada massa facilisis aliquam
                  nunc ut nisl tincidunt nibh. Massa feugiat vitae habitant
                  metus viverra. Praesent massa.
                </p>

                <ul>
                  {findJobButtonData.map((item) => (
                    <li key={item.id}>
                      <div className="findjobbutton_box">
                        <span>
                          <Link to="/">{item.icon}</Link>
                        </span>

                        <Link to="/">{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="findjobbtn_box">
                  <Link to="/" className="indJob-btn">
                    Browse Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//  JobWorkingProcessSection

const JobWorkingProcessSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="w-100 clearfix">
        <div
          className="jobworking_wrapper_section"
          style={{
            backgroundImage: `url(${workingBgImg})`,
          }}
        >
          <div className="jobworking_innerbox">
            <div className="findworkingheadingbox">
              <h2 className="jobmain_heading">
                {jobWorkingProcessData.heading}
              </h2>
            </div>

            <p className="jobworkingpara">
              {jobWorkingProcessData.description}
            </p>

            <div className="jobworking_btn">
              <button
                type="button"
                className="video-play-button youtube-link border-0 bg-transparent"
                onClick={() => setIsVideoOpen(true)}
              >
                <img src={playBtnImg} alt="btn-img" className="sus-play-btn" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div className="video-popup-overlay">
          <div className="video-popup-content">
            <button
              className="video-close-btn"
              onClick={() => setIsVideoOpen(false)}
            >
              ×
            </button>

            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1"
              title="YouTube video player"
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

// JobTrustedSection

const JobTrustedSection = () => {
  return (
    <section className="clearfix w-100">
      <div className="jobtrusted_wrapper_section">
        <div className="container custom-container-lg">
          <div className="jobtrustd_innerwap">
            <div className="jobtrustedheadingbox">
              <h2 className="jobmain_heading text-center">
                We are Trusted by Popular 800+ Company
              </h2>
            </div>

            <div className="jobtrusted_logowrapper">
              <div className="joblogobox1">
                <ul>
                  {trustedLogoGroupsData.left.map((item) => (
                    <li key={item.id} className={item.className}>
                      <span>
                        <img src={item.img} alt={item.alt} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="joblogobox2">
                <div className="joblogdetailbox">
                  <span>
                    {/* SVG logo yaha same HTML wala paste kar sakti ho */}
                  </span>

                  <p>
                    Convallis gravida odio viverra nisi, aliquam sem netus.
                    Sedpellentesque nunc pulvinadonec scelerisque. Malesuada f
                    acilisaliquam nunc tincidunt nibh. Massa feugiat
                    habitaviverra. Praesent massa habitant sapien odi praesent
                    id.
                  </p>

                  <div className="jobtrustedbtn_box">
                    <Link to="/" className="jobtrusted-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="joblogobox1">
                <ul>
                  {trustedLogoGroupsData.right.map((item) => (
                    <li key={item.id} className={item.className}>
                      <span>
                        <img src={item.img} alt={item.alt} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="jobplan-wrapper">
            <div className="jobplanheadingbox">
              <h2 className="jobmain_heading text-center">
                Buy Our Plans And Packeges
              </h2>
            </div>

            <div className="jobstandard_wrap">
              <div className="row">
                {jobTrustedPlansData.map((plan) => (
                  <div className="col-12 col-md-6 col-lg-4" key={plan.id}>
                    <div className="jobstandard_box">
                      <h3>
                        <Link to="#">{plan.title}</Link>
                      </h3>

                      <div className="jobdate_box">
                        <h5>
                          <span>$</span>
                          {plan.price}
                        </h5>
                        <p>{plan.duration}</p>
                      </div>

                      <ul>
                        {plan.features.map((feature, index) => (
                          <li key={index}>
                            <span>
                              <FaRegCheckCircle />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="jobstandard_btnbox">
                        <Link to="#">{plan.btnText}</Link>
                      </div>
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

//  JobTeamSection

const JobTeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTeam = jobTeamData[activeIndex];

  return (
    <section className="clearfix w-100">
      <div className="jobteam_wrapper_section padding100ind25">
        <div className="container custom-container-lg">
          <div className="jobteamslider_wrapper">
            <div className="slider owl-carousel owl-theme">
              <div className="item">
                <div className="jobteam_sliderbox" key={activeIndex}>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="jobteam_sliderimgbox">
                        <img src={activeTeam.image} alt={activeTeam.alt} />
                      </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="jobteam_slidercontentbox">
                        <div className="jobteamheadingbox">
                          <h2 className="jobmain_heading">
                            <Link to="#">{activeTeam.heading}</Link>
                          </h2>
                        </div>

                        <h5>{activeTeam.name}</h5>
                        <h6>{activeTeam.designation}</h6>
                        <p>{activeTeam.description}</p>

                        <ul>
                          <li>
                            <span>
                              <FaFacebookF />
                            </span>
                          </li>
                          <li>
                            <span>
                              <FaXTwitter />
                            </span>
                          </li>
                          <li>
                            <span>
                              <FaWhatsapp />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider2 owl-carousel owl-theme">
              {jobTeamNavData.map((item, index) => (
                <button
                  type="button"
                  className={`item ${activeIndex === index ? "active" : ""}`}
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={item.image} alt={item.alt} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//  JobSpeakerSection

const JobSpeakerSection = () => {
  return (
    <section className="clearfix w-100">
      <div className="jobspeaker_wrapper_section padding100ind25">
        <div className="container custom-container-lg">
          <div className="row">
            {jobSpeakerData.map((item) => (
              <div className="col-12 col-md-12 col-lg-6" key={item.id}>
                <div className="jobspeaker_box">
                  <div className="jobspaeker_iconbox">
                    <span>{item.icon}</span>
                  </div>

                  <div className="jobspeaker_textbox">
                    <div className="joabspeakerheadingbox">
                      <h2 className="jobmain_heading">
                        <Link to="/">{item.title}</Link>
                      </h2>
                    </div>

                    <p>{item.description}</p>

                    <div className="jobspeaker_btn">
                      <Link to={item.btnLink}>
                        {item.btnText}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="jobspeaker_shape1">
          <img src={jobSpeakerData[0].shape1} alt="jobspeaker-img" />
        </span>

        <span className="jobspeaker_shape2">
          <img src={jobSpeakerData[0].shape2} alt="jobspeaker-img" />
        </span>
      </div>
    </section>
  );
};

//  JobProcessSection

const JobProcessSection = () => {
  return (
    <section className="w-100 clearfix">
      <div className="job_process_wrapper_section">
        <div className="container custom-container-lg">
          <div className="joabprocessheadingbox">
            <h2 className="jobmain_heading text-center">
              <Link to="#">Our Job Process</Link>
            </h2>
          </div>

          <div className="job_process_box">
            {jobProcessData.map((item) => (
              <div className={`process_box ${item.className}`} key={item.id}>
                <div className="job_processcircle">{item.icon}</div>

                <h5>{item.title}</h5>

                <p>{item.description}</p>

                <div className="jobspeaker_btn">
                  <Link to={item.btnLink}>
                    {item.btnText}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const JobBlogSection = () => {
  return (
    <div className="job_blog_wrapper_section">
      <div className="container custom-container-lg">
        <div className="jobblogheadingbox">
          <h2 className="jobmain_heading">
            <Link to="/">Our Latest Blog</Link>
          </h2>
        </div>

        <div className="jobblog_btnbox">
          <Link to="/blog-with-sidebar" className="indJob-btn">
            See All Blogs
          </Link>
        </div>

        <div className="jobblog_column_section">
          <div className="row">
            {jobBlogData.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="jobblog_box">
                  <div className="jobblog_img_wrapper">
                    <div className="img_box shine-effect">
                      <img src={item.image} alt={item.alt} />
                    </div>
                  </div>

                  <div className="jobcontent_box">
                    <div className="jobblogdate_box">
                      <span>
                        <FaCalendarAlt />
                      </span>
                      {item.date}
                    </div>

                    <h3>
                      <Link to="/">{item.title}</Link>
                    </h3>

                    <p>{item.description}</p>

                    <div className="blogcontent_btnbox">
                      <Link to="/blog-with-sidebar">
                        Read More
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const JobQuestionSection = () => {
  return (
    <section className="clearfix w-100">
      <div className="jobquestion_wrapper_section">
        <div className="container custom-container-lg">
          <div className="job_quesinnerbox">
            <div className="jobquestionheadingbox">
              <h2 className="jobmain_heading text-center">
                <Link to="#">{jobQuestionData.heading}</Link>
              </h2>
            </div>

            <p>{jobQuestionData.description}</p>

            <div className="jobquestion_btnbox">
              <ul>
                <li>
                  <form>
                    <input
                      type="text"
                      placeholder={jobQuestionData.placeholder}
                    />
                  </form>
                </li>

                <li>
                  <div className="letstalk_btn">
                    <Link to={jobQuestionData.btnLink}>
                      {jobQuestionData.btnText}
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className="jobquestionimgbox">
              <img src={jobQuestionData.image} alt={jobQuestionData.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JobSubscribeSection = () => {
  return (
    <section className="clearfix w-100">
      <div className="jobsubscribe_wrapper_section">
        <div className="container custom-container-lg">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="jobsubscribe_imgbox">
                <img
                  src={jobSubscribeData.image}
                  alt={jobSubscribeData.imageAlt}
                />
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="jobsubscribe_textbox">
                <div className="jobsubscribeheadingbox">
                  <h2 className="jobmain_heading text-center">
                    <Link to="#">{jobSubscribeData.heading}</Link>
                  </h2>
                </div>

                <p>{jobSubscribeData.description}</p>

                <div className="prosubcribe_form_wrapper">
                  <form>
                    <div className="prosearch-box">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={jobSubscribeData.placeholder}
                        name="email"
                      />

                      <div className="food-form-btn">
                        <button type="submit" className="indJob-btn">
                          <span>
                            <MdOutlineEmail />
                          </span>
                          {jobSubscribeData.buttonText}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default JobDreamSection;
export {
  PopularCategoriesSection,
  JobForYouSection,
  FindJobSection,
  JobWorkingProcessSection,
  JobTrustedSection,
  JobTeamSection,
  JobSpeakerSection,
  JobProcessSection,
  JobBlogSection,
  JobQuestionSection,
  JobSubscribeSection,
};
