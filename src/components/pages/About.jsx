// src/pages/About.jsx
import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import AboutTestimonial from "../shortcode/aboutTestimonial/AboutTestimonial";
import AboutInfo from "../shortcode/aboutInfo/AboutInfo";
import AboutBrandStory from "../shortcode/aboutBrandStory/AboutBrandStory";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import AboutVideo from "../shortcode/aboutVideo/AboutVideo";
import AboutFeatures from "../shortcode/aboutFeatures/AboutFeatures";
import { FormTwelve } from "../shortcode/forms/Form";
import Header_Medical from "../shortcode/Header/Header_Medical";
import { BlogSectionThree } from "../shortcode/blog/Blog";

const About = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="About Us" bgImage={sitecoreBg} />
      <AboutInfo />
      <AboutFeatures />
      <BlogSectionThree />
      <AboutVideo />
      <AboutBrandStory />
      <AboutTestimonial />
      <FormTwelve />
      <Header_Medical/>
    </>
  );
};

export default About;
