import React from "react";
import "./BlogleftWrap.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import {
  Blogcategories,
  BlogrecentPosts,
  BlogpopularPosts,
  BlogTags,
  BlogsocialIcons,
  Blognewsletter,
} from "./BlogLeftWrapData";

const BlogLeftAsideBox = () => {
  return (
    <div className="blogLeftArticles">
      {/* Search */}
      <div className="searchKeyword customCard fadein">
        <div className="searchKeywordInner">
          <h4>Search Keyword</h4>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search here"
              />

              <button className="input-group-text">
                <FiSearch />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Categories */}
      <div className="postCategories customCard fadein">
        <h4>Post Categories</h4>

        <div className="list-group">
          {Blogcategories.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`list-group-item ${item.active ? "active" : ""}`}
            >
              <p>{item.name}</p>
              <span>{item.count}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Post */}
      <div className="recentPost customCard fadein">
        <h4>Recent Post</h4>

        <div className="recentPostList">
          {BlogrecentPosts.map((post, index) => (
            <div className="recentPostGroupList" key={index}>
              <Link to={post.link}>
                <div className="recentPostImg">
                  <img src={post.img} alt="recentPost" />
                </div>

                <div className="recentPostTxt">
                  <p>{post.title}</p>
                  <span>{post.date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Post */}
      <div className="recentPost customCard fadein">
        <h4>Popular Post</h4>

        <div className="recentPostList">
          {BlogpopularPosts.map((post, index) => (
            <div className="recentPostGroupList" key={index}>
              <Link to={post.link}>
                <div className="recentPostImg">
                  <img src={post.img} alt="popularPost" />
                </div>

                <div className="recentPostTxt">
                  <p>{post.title}</p>
                  <span>{post.date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="popularTags customCard fadein">
        <h4>Popular Tags</h4>

        <div className="tagGroup">
          <ul className="nav">
            {BlogTags.map((tag, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={tag.link}
                  className={`nav-link tag ${index === 0 ? "tagActive" : ""}`}
                >
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="ipSocialMedia customCard fadein">
        <h4>Social Icons</h4>

        <div className="ipSocialMediaIcon">
          <ul className="nav">
            {BlogsocialIcons.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link tag"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletterCard customCard fadein">
        <h4>{Blognewsletter.title}</h4>

        <p>{Blognewsletter.desc}</p>

        <form className="newsletterForm">
          <input type="email" placeholder={Blognewsletter.placeholder} />

          <button type="submit">{Blognewsletter.button}</button>
        </form>
      </div>
    </div>
  );
};

export default BlogLeftAsideBox;
