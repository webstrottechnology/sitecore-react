import React, { useState } from "react";
import "./HistoricalFiction02.scss";
import { Link } from "react-router-dom";

import img1 from "../../../assets/images/thumbnail/thumbnail1.png";
import img2 from "../../../assets/images/thumbnail/thumbnail2.png";
import img3 from "../../../assets/images/thumbnail/thumbnail3.png";

import offerIcon01 from "../../../assets/images/inner-pages/icons/offer1.webp";
import offerIcon02 from "../../../assets/images/inner-pages/icons/offer2.webp";
import offerIcon03 from "../../../assets/images/inner-pages/icons/offer3.webp";

import arrowIcon from "../../../assets/images/inner-pages/icons/brand-story-right-arrow.webp";
import { FaStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const images = [img1, img2, img3];

const HistoricalFiction02 = () => {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);

  const inc = () => setQty((prev) => prev + 1);
  const dec = () => qty > 1 && setQty((prev) => prev - 1);

  return (
    <section className="SitecoreProductSingle">
      <div className="container custom-container-lg">
        <div className="wrapper">
          {/* LEFT IMAGE */}
          <div className="row">
            <div className="col-md-12 col-lg-7 col-xl-6 col-xxl-5">
              <div className="leftSection">
                <div className="imageBox">
                  <img src={images[active]} alt="product" />
                  <div className="share">
                    <FaShareAlt />
                  </div>
                </div>

                {/* THUMBNAILS */}
                <div className="thumbs">
                  <button className="previous-btn">▲</button>

                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className={active === i ? "active" : ""}
                      onClick={() => setActive(i)}
                    />
                  ))}

                  <button className="next-btn">▼</button>
                </div>
              </div>
            </div>
            {/* RIGHT CONTENT */}
            <div className="col-md-12 col-lg-5 col-xl-6 col-xxl-7">
              <div className="rightSection">
                <span className="category">Historical Fiction</span>
                <h2>Acts of Love and War</h2>

                <div className="rating">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="gray" />
                </div>

                <div className="price">
                  $23.00 <span>$25.50</span>
                </div>

                {/* ✅ Quantity */}
                <div className="qty">
                  <span className="quantity">Quantity:</span>
                  <div className="box">
                    <button onClick={dec}>-</button>
                    <span>{qty}</span>
                    <button onClick={inc}>+</button>
                  </div>
                </div>

                <p className="desc">
                  Guardians are defenders, careers and guides. Some look after
                  individual people, others whole planets or universes, but all
                  share a strong belief in their responsibility to protect their
                  charges.
                </p>

                {/* OFFERS */}
                <h3>Offers (9)</h3>

                <div className="offers">
                  <div className="offer">
                    <div className="left">
                      <div className="icon green">
                        <img src={offerIcon01} alt="percentage" />
                      </div>
                      <div className="offer-content">
                        <h4>ADDITIONAL OFFERS</h4>
                        <span>Historical Fiction</span>
                        <p>2 Offer/s Available</p>
                      </div>
                    </div>
                    <img src={arrowIcon} alt="arrow" />
                  </div>

                  <div className="offer">
                    <div className="left">
                      <div className="icon green">
                        <img src={offerIcon02} alt="percentage" />
                      </div>
                      <div className="offer-content">
                        <h4>BANK OFFERS</h4>
                        <span>
                          Get $ 50 - 500 Cashback on using Wallet on...
                        </span>
                        <p>2 Offer/s Available</p>
                      </div>
                    </div>
                    <img src={arrowIcon} alt="arrow" />
                  </div>

                  <div className="offer">
                    <div className="left">
                      <div className="icon green">
                        <img src={offerIcon03} alt="percentage" />
                      </div>
                      <div className="offer-content">
                        <h4>COUPONS</h4>
                        <span>
                          Shop for $ 499 and get a $ 299 Fiction Just for $
                          149..
                        </span>
                        <p>2 Offer/s Available</p>
                      </div>
                    </div>
                    <img src={arrowIcon} alt="arrow" />
                  </div>

                  <span className="more">+5 More</span>
                </div>

                {/* BUTTONS */}
                <div className="buttons">
                  <Link to="/cart" className="cart filledroundedbtn">
                    <span>Add To cart</span>
                  </Link>
                  <Link to="/checkout" className="buy outlineroundedbtn">
                    <span>Buy Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalFiction02;
