import React from "react";
import "./BlogRightWrap.scss";
import { blogArticles } from "./BlogRightWrapData";

import { Link } from "react-router-dom";
import { FaUser, FaComments, FaTag } from "react-icons/fa";

const BlogRightAsideBox = () => {
  return (
    <div className="blogRightArticles blogWithSidebar py-0">
      <div className="blogArticlesInner">
        <div className="latestNewsCard">
          <div className="row blogWithSidebarRow">
            {blogArticles.map((blog) => (
              <div key={blog.id} className="col-md-12 blogWithSidebarCol">
                <div className="latestNewsCardInner fadein">
                  {/* IMAGE BLOG */}
                  {blog.type === "image" && (
                    <div className="latestNewsCardImg">
                      <Link to={blog.link}>
                        <img src={blog.img} alt={blog.title} />
                      </Link>

                      <div className="latestNewsDate">
                        <Link to="#">
                          <h5>{blog.date}</h5>
                          <span>{blog.month}</span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* YOUTUBE BLOG */}
                  {blog.type === "youtube" && (
                    <div className="latestNewsCardImg ipYoutube">
                      <iframe
                        src={blog.video}
                        title="youtube"
                        allowFullScreen
                      />

                      <div className="latestNewsDate">
                        <Link to="#">
                          <h5>{blog.date}</h5>
                          <span>{blog.month}</span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* QUOTE BLOG */}
                  {blog.type === "quote" && (
                    <div className="latestNewsCardImg ipQuoteBlog">
                      <Link to={blog.link}>
                        <div className="ipQuote">
                          <p>{blog.quote}</p>

                          <div className="ipAwesomeAuthor">
                            <span>{blog.author}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* CONTENT */}

                  {blog.type !== "quote" && (
                    <div className="latestNewsCardInnerContent">
                      <div className="latestNewsList">
                        <Link to="#">
                          <FaUser />
                          <span>By {blog.author}</span>
                        </Link>

                        <Link to="#">
                          <FaComments />
                          <span>{blog.comments} Comments</span>
                        </Link>

                        <Link to="#">
                          <FaTag />
                          <span>{blog.category}</span>
                        </Link>
                      </div>

                      <div className="latestNewsTxt">
                        <h4>
                          <Link to={blog.link}>{blog.title}</Link>
                        </h4>

                        <p>{blog.desc}</p>
                      </div>

                      <div className="latestNewBtn">
                        <Link
                          to={blog.link}
                          className="btn medCommBtn borderRadiusRounded"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRightAsideBox;
