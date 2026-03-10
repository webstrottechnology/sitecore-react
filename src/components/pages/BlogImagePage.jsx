import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import BlogImageSidebarPage from "../shortcode/BlogMainPage/BlogImageSidebarPage";

const BlogImagePage = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Blog With Sidebar" bgImage={sitecoreBg} />
      <BlogImageSidebarPage />
    </>
  );
};

export default BlogImagePage;
