import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import { Portfolio4 } from "../shortcode/portfolio/Portfolio";
import { FormTwelve } from "../shortcode/forms/Form";

const PortfolioColumn3 = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Portfolio 3 Column" bgImage={sitecoreBg} />
      <Portfolio4 />
      <FormTwelve />
    </>
  );
};

export default PortfolioColumn3;
