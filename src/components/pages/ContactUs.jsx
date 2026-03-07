import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import { FormThirteen } from "../shortcode/forms/Form";
import { FormTwelve } from "../shortcode/forms/Form";
const ContactUs = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Contact Us" bgImage={sitecoreBg} />
      <FormThirteen />
      <FormTwelve />
    </>
  );
};

export default ContactUs;
