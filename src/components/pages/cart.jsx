import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import ShopCart from "../shortcode/shopCart/ShopCart";
import { FormTwelve } from "../shortcode/forms/Form";

const cart = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Cart" bgImage={sitecoreBg} />
      <ShopCart />
      <FormTwelve />
    </>
  );
};

export default cart;
