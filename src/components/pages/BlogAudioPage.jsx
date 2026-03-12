import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import BlogAudioSidebarPage from "../shortcode/BlogMainPage/BlogAudioSidebarPage";

const BlogAudioPage = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Blog Single Audio" bgImage={sitecoreBg} />
      <BlogAudioSidebarPage />
    </>
  );
};

export default BlogAudioPage;
