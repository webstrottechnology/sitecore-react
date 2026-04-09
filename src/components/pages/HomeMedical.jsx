import React from "react";
import Header_Medical from "../shortcode/Header/Header_Medical";
import { MedicalTopBanner } from "../shortcode/banner/Banner";
import MedicalTopCategories from "../shortcode/homeMedical/HomeMedical";
import AboutInfo from "../shortcode/aboutInfo/AboutInfo";
import { MedicalAboutUs } from "../shortcode/homeMedical/HomeMedical";

const HomeMedical = () => {
  return (
    <>
      <Header_Medical />
      <MedicalTopBanner />
      <MedicalTopCategories />
      <AboutInfo />
      <MedicalAboutUs />
    </>
  );
};

export default HomeMedical;
