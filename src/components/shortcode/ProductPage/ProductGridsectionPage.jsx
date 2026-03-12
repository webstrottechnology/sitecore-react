import React, { useState } from "react";
import { categories, authors, products } from "./ProductDataPage";
import "./ProductPage.scss";

const ProductGridSection = () => {
  const [view, setView] = useState("grid");

  return (
    <section className="w-100 clearfix ipProductGridWithSidebar">
      <div className="container">
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
                  <ul className="nav flex-column">
                    {categories.map((cat, i) => (
                      <li className="nav-item" key={i}>
                        <a className="nav-link">{cat}</a>
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
                    {authors.map((author, i) => (
                      <li className="nav-item" key={i}>
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
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="col-lg-8 col-xxl-9">
            <div className="ipProductGridRight">
              {/* FILTER BAR */}

              <div className="filter-bar-buttons">
                <div className="showing-results">
                  <span>Showing 1-16 of 54 results</span>
                </div>

                <div className="filter-Column">
                  <div className="filter-short-by">
                    <select className="form-select">
                      <option>Name</option>
                      <option>Size</option>
                      <option>Item Type</option>
                      <option>Date Modified</option>
                    </select>
                  </div>

                  {/* GRID LIST BUTTON */}

                  <div className="filter-buttons">
                    <div
                      className={`grid-view-button ${view === "grid" ? "active" : ""}`}
                      onClick={() => setView("grid")}
                    >
                      <i className="fa fa-th-large"></i>
                    </div>

                    <div
                      className={`list-view-button ${view === "list" ? "active" : ""}`}
                      onClick={() => setView("list")}
                    >
                      <i className="fa fa-list"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* PRODUCT GRID */}

              <div
                className={`grid-list ${view === "grid" ? "grid-view-filter" : "list-view-filter"}`}
              >
                <div className="row">
                  {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                      <div className="bsFeaturedProductItem">
                        <div className="bsFeaturedProductImg">
                          <a href="#">
                            <img
                              src={product.image}
                              alt="product"
                              className="img-fluid"
                            />
                          </a>
                        </div>

                        <div className="bsFeaturedProductContant">
                          <span>{product.category}</span>

                          <h5>{product.title}</h5>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;
