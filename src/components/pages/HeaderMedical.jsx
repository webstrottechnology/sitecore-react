import React from "react";
import Header_Medical from "../shortcode/Header/Header_Medical";
import {MedicalTopBanner} from "../shortcode/banner/Banner";
import TopCategories from "../shortcode/homeMedical/HomeMedical";
import AboutInfo from "../shortcode/aboutInfo/AboutInfo";
import {AboutUs} from "../shortcode/homeMedical/HomeMedical"

const HeaderMedical = () => {
  return (
    <>
      <Header_Medical />
      <MedicalTopBanner/>
      <TopCategories/>
        <AboutInfo />
        <AboutUs/>
    </>
  );
};

export default HeaderMedical;
