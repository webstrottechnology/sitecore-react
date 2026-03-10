import React from "react";
import BlogLeftWrap from "../BlogLeftWrap/BlogLeftWrap";
import BlogRightWrap from "../BlogRightWrap/BlogRightWrap";

import "./SitecoreBlogPage.scss";

const BlogSinglepage = () => {
  return (
    <section className="w-100 clearfix SiteCoreblogSingle" id="blogSingle">
      <div className="container">
        <div className="blogSingleInner">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-8">
              <BlogRightWrap />
            </div>

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

export default BlogSinglepage;
