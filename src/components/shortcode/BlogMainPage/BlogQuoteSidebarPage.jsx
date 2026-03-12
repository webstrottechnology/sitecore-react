import React from "react";
import "./SitecoreBlogPage.scss";
import BlogLeftWrap from "../BlogLeftWrap/BlogLeftWrap";
import { FormFourteen } from "../forms/Form";
import BlogQuoteSidebarSection from "../BlogSingleWrap/BlogQuoteSidebar";

const BlogQuoteSidebarPage = () => {
  return (
    <section className="w-100 clearfix SiteCoreblogSingle" id="blogSingle">
      <div className="container custom-container-lg">
        <div className="blogSingleInner">
          <div className="row">
            {/* Left Side */}
            <div className="col-md-12 col-lg-8">
              <BlogQuoteSidebarSection />
              <FormFourteen />
            </div>

            {/* Right Side */}
            <div className="col-md-12 col-lg-4">
              <BlogLeftWrap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogQuoteSidebarPage;
