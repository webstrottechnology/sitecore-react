import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import HistoricalFiction02 from "../shortcode/thumbnails02/HistoricalFiction02";
import ProductInfo from "../shortcode/productInfo/ProductInfo";
import ProductCartSection from "../shortcode/productCartSection/ProductCartSection";
import { FormTwelve } from "../shortcode/forms/Form";

const ProductSingle02 = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Product Single 02" bgImage={sitecoreBg} />
      <HistoricalFiction02 />
      <ProductInfo />
      <ProductCartSection />
      <FormTwelve />
    </>
  );
};

export default ProductSingle02;
