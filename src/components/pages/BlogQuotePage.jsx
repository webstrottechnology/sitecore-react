import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import BlogQuoteSidebarPage from "../shortcode/BlogMainPage/BlogQuoteSidebarPage";

const BlogQuotePage = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Blog Single Quote" bgImage={sitecoreBg} />
      <BlogQuoteSidebarPage />
    </>
  );
};

export default BlogQuotePage;
