import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import { PortfolioDetailsSection } from "../shortcode/features/Feature";
import SliderGallery from "../shortcode/sliderGallery/SliderGallery";
import { FormTwelve } from "../shortcode/forms/Form";

const PorfolioDetails = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Portfolio Details" bgImage={sitecoreBg} />
      <PortfolioDetailsSection />
      <SliderGallery />
      <FormTwelve />
    </>
  );
};

export default PorfolioDetails;
