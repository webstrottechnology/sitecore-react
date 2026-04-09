import React from "react";
import Header_Medical from "../shortcode/Header/Header_Medical";
import { MedicalTopBanner } from "../shortcode/banner/Banner";
import TopCategories from "../shortcode/homeMedical/HomeMedical";
import AboutInfo from "../shortcode/aboutInfo/AboutInfo";
import {
  MedicalTeam,
  ProfessionalHealthVideo,
  MedicalAboutUs,
  MedicalTestimonials,
  MedicalCounter,
} from "../shortcode/homeMedical/HomeMedical";
import MedicalSliderGallery from "../shortcode/sliderGallery/SliderGallery";
import { FormTwelve } from "../shortcode/forms/Form";
import { Sitecorefooter } from "../shortcode/footer/Footer";
const HomeMedical = () => {
  return (
    <>
      <Header_Medical />
      <MedicalTopBanner />
      <TopCategories />
      <AboutInfo />
      <MedicalAboutUs />
      <MedicalTeam />
      <ProfessionalHealthVideo />
      <MedicalTestimonials />
      <MedicalSliderGallery />
      <MedicalCounter />
      <FormTwelve />
      <Sitecorefooter />
    </>
  );
};

export default HomeMedical;
