import React from 'react'
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import BlogSliderSidebarPage from '../shortcode/BlogMainPage/BlogSliderSidebarPage';
const BlogSliderPage = () => {
  return (
    <div>
       <AboutBannerBreadCrumb title="Blog Single Slider" bgImage={sitecoreBg} />
       <BlogSliderSidebarPage />
    </div>
  )
}

export default BlogSliderPage;
