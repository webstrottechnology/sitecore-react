import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import ProductGridSection from "../shortcode/ProductPage/ProductGridsectionPage";

const ProductGridPage = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Product With Sidebar" bgImage={sitecoreBg} />
      <ProductGridSection />
    </>
  );
};

export default ProductGridPage;
