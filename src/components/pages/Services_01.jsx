import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import { ServicesGrid } from "../shortcode/services/Services";
import { FormTwelve } from "../shortcode/forms/Form";
import AboutBrandStory from "../shortcode/aboutBrandStory/AboutBrandStory";
import AboutTestimonial from "../shortcode/aboutTestimonial/AboutTestimonial";
import { ConnectBusiness } from "../shortcode/features/Feature";

const Services_01 = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Services" bgImage={sitecoreBg} />
      <ServicesGrid />
      <AboutBrandStory />
      <ConnectBusiness />
      <AboutTestimonial />
      <FormTwelve />
    </>
  );
};

export default Services_01;
