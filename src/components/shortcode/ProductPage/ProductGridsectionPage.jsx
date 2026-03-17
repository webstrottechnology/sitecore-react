import React, { useState } from "react";

import {
  categories,
  authors,
  products,
  reviewRatings,
} from "./ProductDataPage";
import "./ProductPage.scss";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { FaThLarge, FaList } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Pagination from "../../shortcode/pagination/Pagination";

import promoImg from "../../../assets/images/product/product_left_sidebar_data_img.jpg";

const ProductGridSection = () => {
  const [view, setView] = useState("grid");

  /* STATE */
  const [price, setPrice] = useState(300);
  // wishlist state
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  return (
    <section className="w-100 clearfix ipProductGridWithSidebar">
      <div className="container custom-container-lg">
        <div className="ipProductGridViewInner">
          <div className="row">
            {/* LEFT SIDEBAR */}

            <div className="col-lg-4 col-xxl-3">
              <div className="ipProductGridLeft">
                {/* Categories */}

                <div className="ipFilterCard">
                  <div className="ipFilterCardHead">
                    <h5>Categories</h5>
                  </div>

                  <div className="ipFilterCardContant">
                    <ul className="ipCategoryList">
                      {categories.map((cat, index) => (
                        <li key={index}>
                          <a href="#">
                            <FiArrowRight className="catIcon" />

                            {cat}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Authors */}

                <div className="ipFilterCard">
                  <div className="ipFilterCardHead">
                    <h5>Authors</h5>
                  </div>

                  <div className="ipFilterCardContant">
                    <ul className="nav flex-column">
                      {authors.map((author, index) => (
                        <li key={index} className="nav-item">
                          <div className="ipFilterCardCheck">
                            <div className="ipFilterCardCheckInner">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                  />

                                  {author.name}
                                </label>
                              </div>
                            </div>

                            <div className="ipFilterCount">
                              <span>({author.count})</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Filter By Price */}

                <div className="ipFilterCard">
                  <div className="ipFilterCardHead">
                    <h5>Filter By Price</h5>
                  </div>

                  <div className="ipFilterCardContant">
                    <div className="ipPriceRange">
                      <input
                        type="range"
                        min="100"
                        max="900"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />

                      <div className="ipPriceValue">
                        <span>$100</span>
                        <span>${price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Rating */}

                <div className="ipFilterCard">
                  <div className="ipFilterCardHead">
                    <h5>Review Ratings</h5>
                  </div>

                  <div className="ipFilterCardContant">
                    <div className="ipFilterReviewCard">
                      {reviewRatings.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="ipFilterReview"
                        >
                          <div className="stars">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={
                                  i < item.star ? "star active" : "star"
                                }
                              />
                            ))}
                          </div>

                          <span>({String(item.count).padStart(2, "0")})</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Promo Card */}

                <div
                  className="ipFilterPromoCard"
                  style={{ backgroundImage: `url(${promoImg})` }}
                >
                  <span className="promoSmall">Kids Love Reading Books</span>

                  <h3>
                    Buy One, Get One <br />
                    30% off
                  </h3>

                  <a href="#" className="promoBtn">
                    BUY NOW
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="col-lg-8 col-xxl-9">
              <div className="ipProductGridRight">
                {/* TOP FILTER */}

                <div className="filter-bar-buttons">
                  <div className="showing-results">
                    <span>Showing 1-16 of 54 results</span>
                  </div>

                  <div className="filter-Column">
                    <div className="filter-short-by">
                      <label>Short By:</label>

                      <select className="form-select">
                        <option>Name</option>

                        <option>Size</option>

                        <option>Date Modified</option>
                      </select>
                    </div>

                    <div className="filter-buttons d-flex">
                      <button
                        className={`grid-view-button ${view === "grid" ? "active" : ""}`}
                        onClick={() => setView("grid")}
                      >
                        <FaThLarge />
                      </button>

                      <button
                        className={`list-view-button ${view === "list" ? "active" : ""}`}
                        onClick={() => setView("list")}
                      >
                        <FaList />
                      </button>
                    </div>
                  </div>
                </div>

                {/* PRODUCTS */}

                <div
                  className={`grid-list ${view === "grid" ? "grid-view-filter" : "list-view-filter"}`}
                >
                  <div className="row">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className={
                          view === "grid"
                            ? "col-md-4 list-view-filter-item"
                            : "col-md-12 list-view-filter-item"
                        }
                      >
                        <div className="bsFeaturedProductItem">
                          <div className="bsFeaturedProductImg">
                            <div className="bsFeaturedProductImgInner">
                              <a href={product.link}>
                                <img
                                  src={product.img}
                                  alt={product.title}
                                  className="img-fluid"
                                />
                              </a>

                              <a
                                className="btn-cart Temp-add-to-cart"
                                href={product.link}
                              >
                                <span>
                                  <IoCart />
                                  ADD TO CART
                                </span>
                              </a>

                              <span
                                className="bsIconNav"
                                onClick={() => toggleWishlist(product.id)}
                              >
                                <svg fill="none" viewBox="0 0 30 30">
                                  <path
                                    fill={
                                      wishlist.includes(product.id)
                                        ? "red"
                                        : "#858585"
                                    }
                                    d="M15 26.25c-.376 0-.743-.114-1.054-.326-4.605-3.126-6.599-5.27-7.699-6.61-2.343-2.856-3.465-5.789-3.434-8.965C2.85 6.71 5.77 3.75 9.322 3.75c2.583 0 4.371 1.455 5.413 2.667a.352.352 0 00.531 0c1.042-1.213 2.83-2.667 5.414-2.667 3.552 0 6.471 2.96 6.508 6.6.032 3.176-1.091 6.109-3.434 8.965-1.1 1.34-3.094 3.483-7.699 6.61-.31.211-.678.325-1.054.325z"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div className="bsFeaturedProductContant">
                            <span>{product.category}</span>

                            <h5>
                              <a href={product.link}>{product.title}</a>
                            </h5>

                            <h6>
                              <ins>{product.price}</ins>

                              <del>{product.oldPrice}</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="Pagination-Box">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;
