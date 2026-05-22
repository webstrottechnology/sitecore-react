import React from "react";
import "./HomeJobPage.scss";

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
} from "./HomeJobPageData";

import jobYouImg from "../../../assets/images/homejob/jobyou-img.png";

import findJobImg from "../../../assets/images/homejob/findjob_img.png";
const JobDreamSection = () => {
  return (
    <section className="jobdream_section1">
      <div className="container custom-container-lg">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-6">
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
          <div className="col-lg-6">
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
                <h2 className="jobmain_heading">
                  <a href="javascript:;">Popular Categories</a>
                </h2>
              </div>

              <p className="jobpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>
            </div>

            <div className="popular_box2">
              <div className="popularbtn_box">
                <a href="javascript:;" className="indJob-btn">
                  Browse All Categories
                </a>
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
                            <a href="javascript:;">{item.title}</a>
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
                            <a href="javascript:;">{item.title}</a>
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
                <h2 className="jobmain_heading">
                  <a href="javascript:;">Job For You</a>
                </h2>
              </div>

              <p className="jobpara">
                Convallis gravida odio viverra nisi, aliquam sem netus. Sed
                atlacus. Nam integer nunc pellentesque nunc pulvinadonec
                scelerisque.
              </p>

              <div className="jobyoubtn_box">
                <a href="javascript:;" className="ind25-btn">
                  Browse All Categories
                </a>
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
                        <a href="javascript:;">{item.title}</a>
                      </h5>

                      <div className="foryoudetailbtnbox">
                        <a href="contact-us.html" className="foryoubtn">
                          Apply Now
                        </a>
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
                        <a href="javascript:;">{item.title}</a>
                      </h5>

                      <div className="foryoudetailbtnbox">
                        <a href="contact-us.html" className="foryoubtn">
                          Apply Now
                        </a>
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
                    <a href="javascript:;">
                      Find the job that suits you the most.
                    </a>
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
                          <a href="javascript:;">{item.icon}</a>
                        </span>

                        <a href="javascript:;">{item.title}</a>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="findjobbtn_box">
                  <a href="javascript:;" className="ind25-btn">
                    Browse Jobs
                  </a>
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
export { PopularCategoriesSection, JobForYouSection, FindJobSection };
