import React from "react";
import { BlogSectionFour } from "../shortcode/blog/Blog";
import { HomeCafeFooter } from "../shortcode/footer/Footer";
import HomeCafeBreakfast, {
  HomeCafeAboutUs,
  HomeCafeBrand,
  HomeCafeChefs,
  HomeCafeGallery,
  HomeCafeOfferSection,
  HomeCafeService,
  HomeCafeSliderSection,
  HomeCafeTabMenu,
  HomeCafeTestimonial,
  HomeCafeVideo,
} from "../shortcode/HomeCafeComponent/HomeCafeComponent";
import HeaderCafe from "../shortcode/Header/HeaderCafe";

const HomeCafe = () => {
  return (
    <div>
      <HeaderCafe />
      <HomeCafeSliderSection />
      <HomeCafeService />
      <HomeCafeAboutUs />
      <HomeCafeOfferSection />
      <HomeCafeTabMenu />
      <HomeCafeChefs />
      <HomeCafeVideo />
      <HomeCafeBreakfast />
      <HomeCafeGallery />
      <HomeCafeBrand />
      <HomeCafeTestimonial />
      <BlogSectionFour />
      <HomeCafeFooter />
    </div>
  );
};

export default HomeCafe;
