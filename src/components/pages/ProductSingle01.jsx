import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import HistoricalFaction from "../shortcode/historicalFaction/HistoricalFaction";

const ProductSingle01 = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Product Single 01" bgImage={sitecoreBg} />
      <HistoricalFaction />
    </>
  );
};

export default ProductSingle01;
