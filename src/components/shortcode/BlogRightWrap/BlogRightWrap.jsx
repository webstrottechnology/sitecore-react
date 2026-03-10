import React from "react";
import "./BlogRightWrap.scss";
import { blogArticles } from "./BlogRightWrapData";
import { ImLink } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaUser, FaComments, FaTag } from "react-icons/fa";

const BlogRightAsideBox = () => {
  return (
    <div className="blogRightArticles">
      <div className="row blogWithSidebarRow">
        {blogArticles.map((blog) => (
          <div key={blog.id} className="col-md-12">
            <div className="latestNewsCardInner">
              {/* IMAGE */}
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

              {/* YOUTUBE */}
              {blog.type === "youtube" && (
                <div className="latestNewsCardImg ipYoutube">
                  <iframe src={blog.video} title="youtube" allowFullScreen />

                  <div className="latestNewsDate">
                    <Link to="#">
                      <h5>{blog.date}</h5>
                      <span>{blog.month}</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* VIMEO */}
              {blog.type === "vimeo" && (
                <div className="latestNewsCardImg ipVimeo">
                  <iframe
                    src={blog.video}
                    height="520"
                    title="vimeo"
                    allow="autoplay; fullscreen; picture-in-picture"
                  />

                  <div className="latestNewsDate">
                    <Link to="#">
                      <h5>{blog.date}</h5>
                      <span>{blog.month}</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* AUDIO */}
              {blog.type === "audio" && (
                <div className="latestNewsCardImg ipSoundCloudAudio">
                  <iframe
                    height="300"
                    src={blog.audio}
                    allow="autoplay"
                    title="audio"
                  />

                  <div className="latestNewsDate">
                    <Link to="#">
                      <h5>{blog.date}</h5>
                      <span>{blog.month}</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* SLIDER */}
              {blog.type === "slider" && (
                <div className="latestNewsCardImg ipSlider">
                  <div
                    id={`carousel${blog.id}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {blog.images.map((img, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                          <Link to={blog.link}>
                            <img
                              src={img}
                              alt="slider"
                              className="d-block w-100"
                            />
                          </Link>
                        </div>
                      ))}
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel${blog.id}`}
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel${blog.id}`}
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>

                  <div className="latestNewsDate">
                    <Link to="#">
                      <h5>{blog.date}</h5>
                      <span>{blog.month}</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* QUOTE */}
              {blog.type === "quote" && (
                <div className="latestNewsCardImg ipQuoteBlog">
                  <Link to={blog.link}>
                    <div className="ipQuote">
                      <p>{blog.quote}</p>

                      <div className="ipAwesomeAuthor">
                        <span>{blog.author}</span>
                        <span>
                          <ImLink />
                        </span>
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
                      className="Temp-read-more Temp-read-more-bg-color"
                    >
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRightAsideBox;
