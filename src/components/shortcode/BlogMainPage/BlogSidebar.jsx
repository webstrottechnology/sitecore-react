import React from "react";
import BlogLeftWrap from "../BlogLeftWrap/BlogLeftWrap";
import BlogRightWrap from "../BlogRightWrap/BlogRightWrap";

import "./SitecoreBlogPage.scss";
import Pagination from "../pagination/Pagination";

const BlogSinglepage = () => {
  return (
    <section className="w-100 clearfix SiteCoreblogSingle" id="blogSingle">
      <div className="container custom-container-lg">
        <div className="blogSingleInner">
          <div className="row">
            {/* Left Side */}
            <div className="col-md-12 col-lg-8">
              <BlogRightWrap />
            </div>

            {/* Right Side */}
            <div className="col-md-12 col-lg-4">
              <BlogLeftWrap />
            </div>
            <div className="col-md-12 col-lg-12">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSinglepage;
