import React, { useState } from "react";
import { ShopCartData } from "./shopCartData";
import truck from "../../../assets/images/inner-pages/icons/truck.webp";
import "./ShopCart.scss";

const ShopCart = () => {
  const [cart, setCart] = useState(ShopCartData);

  const increment = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item,
    );
    setCart(updated);
  };

  const decrement = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
    );
    setCart(updated);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <section className="SiteCoreShopCart">
      <div className="container custom-container-lg">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-xl-8">
            {/* SHIPPING BAR */}
            <div className="shippingProgressBar">
              <p>Congratulations, you've got free shipping!</p>

              <div className="progressWrapper">
                <div className="progressTrack"></div>
                <div className="progressFill"></div>

                <div className="progressIcon">
                  <img src={truck} alt="truck" />
                </div>
              </div>
            </div>

            {/* CART TABLE */}
            <div className="cartTbl">
              <div className="cartTableWrapper">
                <table>
                  <thead>
                    <tr className="thead-row">
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="productsDetail">
                            <div className="productsImg">
                              <img src={item.image} alt="" />
                            </div>
                            <h6>{item.title}</h6>
                          </div>
                        </td>

                        <td>${item.price}.00</td>

                        <td>
                          <div className="qty-container">
                            <button onClick={() => decrement(item.id)}>
                              -
                            </button>

                            <input
                              value={item.qty}
                              readOnly
                              className="input-qty"
                            />

                            <button onClick={() => increment(item.id)}>
                              +
                            </button>
                          </div>
                        </td>

                        <td className="subtotal">
                          ${item.price * item.qty}.00
                        </td>

                        <td>
                          <span className="removeItem">✕</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* COUPON */}
              <div className="couponCode">
                <input placeholder="Coupan Code" />

                <a href="#" className=" filledroundedbtn">
                  <span>APPLY COUPN</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-4">
            <div className="checkoutAside">
              <h4>Cart Total</h4>

              <div className="rowItem">
                <p>Subtotals</p>
                <span>${subtotal}.00</span>
              </div>

              <hr className="horizLine" />

              <div className="shipping">
                <p>Shipping</p>

                <label>
                  <div className="label-content">
                    <input type="radio" name="shipping" defaultChecked />
                    Flate Rate
                  </div>
                  <span>$40.00</span>
                </label>

                <label>
                  <div className="label-content">
                    <input type="radio" name="shipping" />
                    Local Pickup
                  </div>
                  <span>$40.00</span>
                </label>
              </div>

              <hr className="horizLine" />

              <div className="rowItem">
                <p>Totals</p>
                <span>${subtotal}.00</span>
              </div>
              <div className="weCareForLearnMoreBtn">
                <a href="#" className="filledroundedbtn">
                  <span>PROCEED TO CHECKOUT</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCart;
