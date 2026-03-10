import React from "react";
import "./SitecoreBlogPage.scss";
import BlogLeftWrap from "../BlogLeftWrap/BlogLeftWrap";

const BlogImageSidebarPage = () => {
  return (
    <section className="w-100 clearfix SiteCoreblogSingle" id="blogSingle">
      <div className="container">
        <div className="blogSingleInner">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-8"></div>

            {/* Right Side */}
            <div className="col-lg-4">
              <BlogLeftWrap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogImageSidebarPage;
