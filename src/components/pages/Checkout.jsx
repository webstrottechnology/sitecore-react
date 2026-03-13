import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import SitecoreCheckout from "../shortcode/sitecoreCheckout/SitecoreCheckout";
import { FormTwelve } from "../shortcode/forms/Form";

const Checkout = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Checkout" bgImage={sitecoreBg} />
      <SitecoreCheckout />
      <FormTwelve />
    </>
  );
};

export default Checkout;
