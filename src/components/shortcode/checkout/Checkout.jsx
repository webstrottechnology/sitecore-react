import React, { useState } from "react";
import { productData, shippingOptions, paymentMethods } from "./checkoutData";
import "./Checkout.scss";
import cardImages from "../../../assets/images/inner-pages/icons/cards-images.webp";

const Checkout = () => {
  const [shipping, setShipping] = useState(shippingOptions[0].id);
  const [payment, setPayment] = useState(paymentMethods[0].id);

  const subtotal = productData.price;
  const shippingPrice =
    shippingOptions.find((item) => item.id === shipping)?.price || 0;

  const total = subtotal + shippingPrice;

  return (
    <section className="w-100 clearfix checkout" id="checkout">
      <div className="container">
        <div className="checkoutInner">
          <div className="row">
            {/* LEFT FORM */}
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="commentBox">
                <div className="commentBoxInner">
                  <div className="commentBoxHeading">
                    <h4>Personal Information</h4>
                  </div>

                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">Phone</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="commentBoxHeading">
                        <h4>Billing Detail</h4>
                      </div>

                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">Address</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">Zip</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">Country</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="commentFormGroup">
                          <label className="form-label">State</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="commentBoxHeading">
                        <h4>Shipping Detail</h4>
                      </div>

                      <div className="col-md-12">
                        <div className="commentFormGroup">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="shipDifferent"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="shipDifferent"
                            >
                              Ship to a different address
                            </label>
                          </div>
                        </div>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Notes About Your Order"
                        />
                      </div>
                    </div>

                    <button className="btn medCommBtn borderRadiusRounded">
                      <span>Place Order</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="checkoutAside">
                {/* PRODUCT BOX */}

                <div className="productBox">
                  <div className="asideProductItem">
                    <div className="asideHeading">
                      <h4>Product</h4>
                    </div>

                    <div className="asideProdtBx">
                      <div className="asideImg">
                        <div className="asideImgInner">
                          <img
                            src={productData.image}
                            alt="product"
                            className="img-fluid"
                          />
                        </div>

                        <div className="asideContent">
                          <h5>{productData.name}</h5>
                          <p>QTY : {productData.qty}</p>
                        </div>
                      </div>

                      <div className="asidePrice">
                        <span>${productData.price}</span>
                      </div>
                    </div>

                    <div className="subTotals">
                      <div className="subTotalsHead">
                        <p>Subtotals</p>
                      </div>
                      <div className="subTotalsNo">
                        <span>${subtotal}</span>
                      </div>
                    </div>

                    <hr className="horizLine" />

                    {/* SHIPPING */}

                    {shippingOptions.map((item) => (
                      <div className="subPrice" key={item.id}>
                        <div className="subPriceHeading custom-radios">
                          <input
                            type="radio"
                            id={item.id}
                            name="shipping"
                            checked={shipping === item.id}
                            onChange={() => setShipping(item.id)}
                          />

                          <label htmlFor={item.id}>
                            <span>{item.label}</span>
                          </label>
                        </div>

                        <div className="asideProductPrice">
                          <span>${item.price}</span>
                        </div>
                      </div>
                    ))}

                    <hr className="horizLine" />

                    <div className="subTotals">
                      <div className="subTotalsHead">
                        <p>Totals</p>
                      </div>
                      <div className="subTotalsNo">
                        <span>${total}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PAYMENT METHOD */}

                <div className="paymentMethod">
                  <div className="asideHeading">
                    <h4>Payment Method</h4>
                  </div>

                  <div className="paymentOptName custom-radios">
                    {paymentMethods.map((method) => (
                      <div className="paymentformGroup" key={method.id}>
                        <input
                          type="radio"
                          id={method.id}
                          name="payment"
                          checked={payment === method.id}
                          onChange={() => setPayment(method.id)}
                        />

                        <label htmlFor={method.id}>
                          <div className="paymentText">
                            <span className="title">{method.title}</span>

                            {method.description && (
                              <span className="desc">{method.description}</span>
                            )}
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="cardImg">
                    <img src={cardImages} alt="cards" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
