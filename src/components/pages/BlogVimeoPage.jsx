import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import BlogVimeoSidebarPage from "../shortcode/BlogMainPage/BlogVimeoSidebarPage";

const BlogVimeoPage = () => {
  return (
    <div>
      <AboutBannerBreadCrumb title="Blog Single Vimeo" bgImage={sitecoreBg} />
      <BlogVimeoSidebarPage />
    </div>
  );
};

export default BlogVimeoPage;
