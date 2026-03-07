import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import { FormTwelve } from "../shortcode/forms/Form";
import { MobileAppDesign } from "../shortcode/services/Services";
import { SitecorefeatureItems } from "../shortcode/FeaturesWithIcon/FeatureWithIcon";
import { Portfolio2} from "../shortcode/portfolio/Portfolio";

const ServiceSingle = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Service Single" bgImage={sitecoreBg} />
      <MobileAppDesign />
      <Portfolio2 />
      <SitecorefeatureItems />
      <FormTwelve />
    </>
  );
};

export default ServiceSingle;
