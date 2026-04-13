import React from "react";
import { useState, useEffect } from "react";
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
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);
  return (
    <div>
      <HeaderCafe direction={direction} setDirection={setDirection} />
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
