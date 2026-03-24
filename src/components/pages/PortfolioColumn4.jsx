import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import { Portfolio3 } from "../shortcode/portfolio/Portfolio";
import { FormTwelve } from "../shortcode/forms/Form";

const PortfolioColumn3 = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Portfolio 4 Column" bgImage={sitecoreBg} />
      <Portfolio3/>
      <FormTwelve />
    </>
  );
};

export default PortfolioColumn3;
