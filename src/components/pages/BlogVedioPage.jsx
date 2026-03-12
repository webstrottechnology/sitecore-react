import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import BlogVedioSidebarPage from "../shortcode/BlogMainPage/BlogVedioSidebarPage";

const BlogVedioPage = () => {
  return (
    <div>
      <AboutBannerBreadCrumb title="Blog Single Vedio" bgImage={sitecoreBg} />
      <BlogVedioSidebarPage />
    </div>
  );
};

export default BlogVedioPage;
