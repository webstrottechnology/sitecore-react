import React, { useState } from "react";
import { ProductInfoData } from "./ProductInfoData";
import { FaStar } from "react-icons/fa";
import "./ProductInfo.scss";
import { GoDotFill } from "react-icons/go";

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [rating, setRating] = useState(0);

  return (
    <section className="ipProductInfo">
      <div className="container custom-container-lg">
        {/* Tabs */}

        <ul className="nav nav-pills">
          <li>
            <button
              className={activeTab === "info" ? "active" : ""}
              onClick={() => setActiveTab("info")}
            >
              Product Information
            </button>
          </li>

          <li>
            <button
              className={activeTab === "seller" ? "active" : ""}
              onClick={() => setActiveTab("seller")}
            >
              Seller
            </button>
          </li>

          <li>
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Rating & Reviews
            </button>
          </li>
        </ul>

        {/* Product Information */}

        {activeTab === "info" && (
          <div className="tab-pane">
            <ul>
              {ProductInfoData.information.map((item, index) => (
                <li key={index}>
                  <div className="custTbl">
                    <div className="custTblLeft">
                      <GoDotFill />
                      {item.title}
                    </div>

                    <div className="custTblRight">
                      <span>:</span> {item.value}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Seller */}

        {activeTab === "seller" && (
          <div className="tab-pane">
            <p>{ProductInfoData.seller}</p>
          </div>
        )}

        {/* Reviews */}

        {activeTab === "reviews" && (
          <div className="tab-pane">
            <h2 className="reviews-title">01 Review</h2>

            {ProductInfoData.reviews.map((review, index) => (
              <div className="commentItem" key={index}>
                <div className="commentPost">
                  <div className="userProfile">
                    <img src={review.image} alt="image" />
                  </div>

                  <div className="postContent">
                    <div className="postGroup">
                      <div className="userName">
                        <p>{review.name}</p>
                        <span>{review.date}</span>
                      </div>

                      {/* Review stars */}

                      <div className="reviewStar">
                        {[...Array(5)].map((star, i) => (
                          <FaStar
                            key={i}
                            color={i < review.rating ? "#ff9900" : "#dcdcdc"}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="userComment">
                      <p>{review.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ADD REVIEW FORM */}

            <div className="leaveComment">
              <h2 className="reviews-title">Add a review</h2>

              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label>Your Name *</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Email Address *</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Rating */}

                  <div className="col-md-12">
                    <label>Your Rating *</label>

                    <div className="ratingStars">
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                          <FaStar
                            key={i}
                            size={22}
                            className="star"
                            color={
                              ratingValue <= rating ? "#ff9900" : "#dcdcdc"
                            }
                            onClick={() => setRating(ratingValue)}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label>Your Comment *</label>

                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Your Comment"
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label>
                      <input type="checkbox" /> I agree that my submitted data
                      is being collected and stored *
                    </label>
                  </div>
                </div>

                <a href="#" className="prouctInfo-btn filledroundedbtn md-btn mt-3">
                  <span>SUBMIT</span>
                </a>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductInfo;
