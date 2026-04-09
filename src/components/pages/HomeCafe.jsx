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

const HomeCafe = () => {
  return (
    <div>
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
