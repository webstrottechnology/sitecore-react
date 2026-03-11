import React from "react";
import "./BlogSinglePagesSidebar.scss";

import {
  blogDetail,
  blogParagraphs,
  tags,
  socialIcons,
  comments,
} from "./BlogSingleDataSidebar";

const BlogImageSidebarSection = () => {
  return (
    <div className="blogSingleBlog">
      <div className="latestNewsCardInner">
        {/* Image */}
        <div className="latestNewsCardImg">
          <a href={blogDetail.titleLink}>
            <img src={blogDetail.image} alt="blog" />
          </a>

          <div className="latestNewsDate">
            <h5>{blogDetail.date}</h5>
            <span>{blogDetail.month}</span>
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
              <div className="commentLeft">
                <a href={item.profileLink}>
                  <img src={item.img} alt={item.name} />
                </a>
              </div>

              <div className="commentRight">
                <h5>
                  <a href={item.profileLink}>{item.name}</a>
                </h5>

                <p>{item.text}</p>

                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogImageSidebarSection;
