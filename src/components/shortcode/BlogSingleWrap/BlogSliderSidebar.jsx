import React from "react";
import "./BlogSinglePagesSidebar.scss";
import { FaReply } from "react-icons/fa";
import {
  blogDetail,
  blogParagraphs,
  tags,
  socialIcons,
  comments,
  blogSliderDetail,
} from "./BlogSingleDataSidebar";

const BlogSliderSidebarSection = () => {
  return (
    <div className="BlogSinglePagesSection">
      <div className="latestNewsCardInner">
        {/* Slider */}
        <div className="latestNewsCardImg SliderNewsCardWrap">
          <div
            id={`carousel${blogSliderDetail.id}`}
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {blogSliderDetail.images.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <a href={blogSliderDetail.titleLink}>
                    <img
                      src={img}
                      alt="blog slider"
                      className="d-block w-100"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carousel${blogSliderDetail.id}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            {/* Next Button */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carousel${blogSliderDetail.id}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          {/* Date Badge */}
          <div className="latestNewsDate">
            <a href="#">
              <h5>{blogSliderDetail.date}</h5>
              <span>{blogSliderDetail.month}</span>
            </a>
          </div>
        </div>

        {/* Meta */}
        <div className="latestNewsList">
          <span>
            <a href={blogDetail.authorLink}>{blogDetail.author}</a>
          </span>

          <span>
            <a href={blogDetail.commentsLink}>
              {blogDetail.commentsCount} Comments
            </a>
          </span>

          {blogDetail.categories.map((cat, index) => (
            <span key={index}>
              <a href={cat.link}>{cat.name}</a>
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="latestNewsTxt">
          <h4>
            <a href={blogDetail.titleLink}>{blogDetail.title}</a>
          </h4>

          {blogParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* TAGS + SHARE */}
        <div className="blogTagsShare">
          {/* Tags */}
          <div className="blogTags">
            <span className="tagTitle">Tags :</span>

            {tags.map((tag, index) => (
              <a
                key={index}
                href={tag.link}
                className={`tagItem ${tag.active ? "activeTag" : ""}`}
              >
                {tag.name}
              </a>
            ))}
          </div>

          {/* Share */}
          <div className="shareGroup">
            <span className="shareHeading">Share :</span>

            <ul>
              {socialIcons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Comments */}
        <div className="coment" id="comments">
          <h2>Comments ({comments.length})</h2>

          {comments.map((item, index) => (
            <div className="commentGroup" key={index}>
              {/* Profile Image */}
              <div className="commentLeft">
                <a href={item.profileLink}>
                  <img src={item.img} alt={item.name} />
                </a>
              </div>

              {/* Comment Content */}
              <div className="commentRight">
                {/* Name + Share */}
                <div className="commentTop">
                  <h5>
                    <a href={item.profileLink}>{item.name}</a>
                  </h5>

                  <a href={item.shareLink} className="commentShare">
                    <FaReply /> {item.shareText}
                  </a>
                </div>

                {/* Comment Text */}
                <p>{item.text}</p>

                {/* Date */}
                <span className="commentDate">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSliderSidebarSection;
