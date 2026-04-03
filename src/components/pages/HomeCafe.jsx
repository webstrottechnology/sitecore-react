import React from "react";
import { BlogSectionFour } from "../shortcode/blog/Blog";
import { HomeCafeFooter } from "../shortcode/footer/Footer";
import HomeCafeBreakfast, {
  HomeCafeBrand,
  HomeCafeGallery,
  HomeCafeTestimonial,
  HomeCafeVideo,
} from "../shortcode/HomeCafeComponent/HomeCafeComponent";

const HomeCafe = () => {
  return (
    <div>
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
