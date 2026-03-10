import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import BlogSinglepage from "../shortcode/BlogMainPage/BlogSidebar";

const BlogPageCategory = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Blog With Sidebar" bgImage={sitecoreBg} />
      <BlogSinglepage />
    </>
  );
};

export default BlogPageCategory;
