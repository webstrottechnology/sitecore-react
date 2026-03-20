import React, { useState } from "react";

import { Productcartdata } from "./ProductCartSectionData";
import "./ProductCartSection.scss";
import { IoCart } from "react-icons/io5";

const ProductCartSection = () => {
  const [view, setView] = useState("grid");
  // wishlist state
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  return (
    <div
      className={`ProductCartSection  grid-list ${view === "grid" ? "grid-view-filter" : "list-view-filter"}`}
    >
      <div className="container custom-container-lg">
        <div className="ProductCartSection-title">
          <h4>Books in this series: (4 books)</h4>
        </div>
        <div className="row">
          {Productcartdata.map((product) => (
            <div
              key={product.id}
              className={
                view === "grid"
                  ? "col-12 col-md-6 col-lg-4 col-xl-4 list-view-filter-item"
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
                      className="btn-cart filledsqaurebtn"
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
                            wishlist.includes(product.id) ? "red" : "#858585"
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
    </div>
  );
};

export default ProductCartSection;
