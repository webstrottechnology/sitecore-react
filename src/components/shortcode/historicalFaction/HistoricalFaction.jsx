import React, { useState } from "react";
import "./HistoricalFaction.scss";

import HistoricalImg1 from "../../../assets/images/inner-pages/thumbnail1.png";
import HistoricalImg2 from "../../../assets/images/inner-pages/thumbnail2.png";
import HistoricalImg3 from "../../../assets/images/inner-pages/thumbnail3.png";

import {
  FiHeart,
  FiShoppingCart,
  FiShare2,
  FiStar,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

const images = [HistoricalImg1, HistoricalImg2, HistoricalImg3];

const HistoricalFiction = () => {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(0);

  // increase
  const increaseQty = () => {
    setQty(qty + 1);
  };

  // decrease (0 se niche nahi jayega)
  const decreaseQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="SiteproductDetails">
      <div className="container custom-container-lg">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 ">
            {/* LEFT SIDE */}
            <div className="thumbnails-left-box">
              {/* thumbnails */}
              <div className="thumbs">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className={active === i ? "active" : ""}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>

              {/* main image */}
              <div className="main">
                <img src={images[active]} alt="" />

                <div className="wishlist">
                  <FiHeart />
                </div>
              </div>

              {/* cart buttons */}
              <div className="cartRow">
                <a href="#" className="cart filledroundedbtn lg-btn">
                  <span>
                    <FiShoppingCart />
                    Add To Cart
                  </span>
                </a>

                <a href="#" className="share outlineroundedbtn lg-btn">
                  <span>
                    <FiShare2 />
                    Share
                  </span>
                </a>
              </div>

              {/* buy now */}
              <a href="#" className="buyNow mintGreenFilledBtn">
                Buy Now
              </a>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 ">
            {/* RIGHT SIDE */}
            <div className="thumbnails-right-box">
              <p className="category">Historical Fiction</p>

              <h2>Acts of Love and War</h2>

              {/* rating */}
              <div className="rating">
                <a href="#">
                  {" "}
                  <FiStar />
                </a>
                <a href="#">
                  {" "}
                  <FiStar />
                </a>
                <a href="#">
                  {" "}
                  <FiStar />
                </a>
                <a href="#">
                  {" "}
                  <FiStar />
                </a>
                <a href="#">
                  {" "}
                  <FiStar className="gray" />
                </a>
              </div>

              {/* price */}
              <div className="price">
                $23.00
                <span>$25.50</span>
              </div>

              {/* quantity */}
              <div className="qty">
                <h2>Quantity:</h2>

                <div className="box">
                  <button onClick={decreaseQty} disabled={qty === 0}>
                    <FiMinus />
                  </button>

                  <span>{qty}</span>

                  <button onClick={increaseQty}>
                    <FiPlus />
                  </button>
                </div>
              </div>

              {/* description */}
              <p className="desc">
                Guardians are defenders, careers and guides. Some look after
                individual people, others whole planets or universes, but all
                share a strong belief in their responsibility to protect their
                charges.
              </p>

              {/* stories list */}
              <div className="stories-list-box">
                <h2>The Stories Are:</h2>

                <ul className="nav flex-column">
                  <li>
                    <b>Awakening</b> - Alasdair Shaw
                  </li>

                  <li>
                    <b>The Lattice</b> - Jeff Tanyard
                  </li>

                  <li>
                    <b>Biting Shadow</b> - C Gold
                  </li>

                  <li>
                    <b>Gate of Dreams</b> - Rick Partlow
                  </li>

                  <li>
                    <b>The Following Star</b> - Elizabeth Baxter
                  </li>

                  <li>
                    <b>The Renewal</b> - Zen DiPietro
                  </li>

                  <li>
                    <b>Stowaway</b> - Benjamin Douglas
                  </li>

                  <li>
                    <b>Baptism of Fire</b> - Cora Buhlert
                  </li>

                  <li>
                    <b>Sleeping Giant</b> - Andrew Vaillencourt
                  </li>

                  <li>
                    <b>We Have the Stars</b> - JJ Green
                  </li>

                  <li>
                    <b>Warning Signs</b> - Edward M Grant
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricalFiction;
