import React, { useState } from "react";

import pricingPlanData, {
  pricingPlan2Data,
  pricingPlan3Data,
  pricingPlan4Data,
  pricingPlan5Data,
  pricingPlan6Data,
  pricingPlan7Data,
  pricingPlan8Data,
  pricingPlan9Data,
  pricingPlan10Data,
} from "./pricingPlanData";
import "./PricingPlan.scss";
import { FaHome } from "react-icons/fa";

/* ---------------- PRICING PLAN ONE ---------------- */

const PricingPlan = () => {
  return (
    <div className="pricing_wrapper">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2>Find the Perfect Plan for You</h2>
        </div>
        <div className="pricing_cards">
          {pricingPlanData.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan-card ${index === 1 ? "active2" : ""}`}
            >
              <div className="content">
                <h3 className="name">{plan.name}</h3>
                <span className="price">{plan.price}</span>
              </div>

              <ul className="list">
                <p>Includes:</p>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <a href={plan.link} className="button">
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN TWO ---------------- */

const PricingPlan2 = () => {
  return (
    <div className="pricing_wrapper2">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2>Pricing Plans for Everyone</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit maiores, amet cumque odio id tenetur eum quo
            necessitatibus neque quos ea corrupti, nulla similique, a quis!
            Incidunt cum accusantium explicabo?
          </p>
        </div>
        <div className="pricing_cards">
          {pricingPlan2Data.map((plan) => (
            <div className="pricing_inner_Card" key={plan.id}>
              <div className="card-main">
                <div className="card-top">
                  <h3>{plan.name}</h3>
                  <span>{plan.type}</span>
                </div>
                <div className="card-price">
                  {plan.price}
                  <span>/Month</span>
                </div>
              </div>

              <ul className="list">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <a href="#">BUY NOW</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN THREE ---------------- */

const PricingPlan3 = () => {
  return (
    <div className="price_wrapper3">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2>To get Unlimited Access for Everything</h2>
        </div>
        <div className="pricing_cards">
          {pricingPlan3Data.map((item) => (
            <div
              key={item.id}
              className={`pricing_card ${item.featured ? "gradient" : ""}`}
            >
              <h3>{item.title}</h3>

              <div className="price">
                {item.price}
                <span>{item.duration}</span>
                <small>{item.billing}</small>
              </div>

              <button className={item.featured ? "dark" : ""}>
                {item.buttonText}
              </button>

              <ul className="list">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <p className="link">{item.link}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN FOUR ---------------- */

const PricingPlan4 = () => {
  return (
    <div className="pricing_wrapper pricing_wrapper4">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2>Find the Perfect Plan for You</h2>
        </div>
        <div className="pricing_cards">
          {pricingPlan4Data.map((plan) => (
            <div key={plan.id} className="plan-card">
              <div className="content">
                <h3 className="name">{plan.title}</h3>
                <span className="price">{plan.price}</span>
              </div>

              <ul className="list">
                <p>Includes:</p>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <a href={plan.link} className="pricing-custom-btn">
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN FIVE ---------------- */

const PricingPlan5 = () => {
  return (
    <div className="pricing_wrapper pricing_wrapper5">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2>Find the Perfect Plan for You</h2>
        </div>
        <div className="pricing_cards">
          {pricingPlan5Data.map((plan) => (
            <div key={plan.id} className="plan-card">
              <div className="content">
                <h3 className="name">{plan.title}</h3>
                <span className="price">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </div>

              <ul className="list">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="pricing5_button">
                <a href={plan.link} className="button">
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN SIX ---------------- */

const PricingPlan6 = () => {
  return (
    <div className="pricing_wrapper6">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2 className="title">Choose your best plan</h2>
        </div>
        <div className="pricing_cards">
          {pricingPlan6Data.map((plan) => (
            <div key={plan.id} className={`pricing_card ${plan.gradient}`}>
              <h3>{plan.title}</h3>

              <ul className="list">
                {plan.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="pricing_bottom">
                <div className="price">
                  {plan.price}
                  <span>{plan.duration}</span>
                </div>

                <a href="#" className="signup_btn">
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN SEVEN ---------------- */

const PricingPlan7 = () => {
  return (
    <div className="pricing_wrapper7">
      <div className="container">
        <div className="pricing_cards">
          {pricingPlan7Data.map((plan) => (
            <div
              key={plan.id}
              className={`pricing_card ${plan.featured ? "active" : ""}`}
            >
              {/* TOP */}
              <div className="card_top">
                <span className="icon">
                  <FaHome />
                </span>
                <h3>{plan.title}</h3>
                <p>
                  {plan.price} <span>{plan.duration}</span>
                </p>
              </div>

              {/* BODY */}
              <div className="card_body">
                <ul className="list">
                  {plan.features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <a href="#">
                  <button className="get_now">Get Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN EIGHT ---------------- */

const PricingPlan8 = () => {
  return (
    <div className="pricing_wrapper8">
      <div className="container">
        <div className="pricing_cards">
          {pricingPlan8Data.map((plan) => (
            <div
              key={plan.id}
              className={`pricing_card ${plan.active ? "active" : ""}`}
            >
              <span className="border-x border-top"></span>
              <span className="border-y border-right"></span>
              <span className="border-x border-bottom"></span>
              <span className="border-y border-left"></span>
              <h4>{plan.title}</h4>

              <div className="price">{plan.price}</div>

              <ul className="list">
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a href="#"><button>{plan.buttonText}</button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN NINE ---------------- */

const PricingPlan9 = () => {
  const [billingPeriod, setBillingPeriod] = useState("Monthly");

  return (
    <div className="pricing_wrapper9">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2>Choose your business plan</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            omnis voluptatibus enim, suscipit magnam nostrum voluptates soluta,
            itaque quasi debitis cumque nulla nesciunt laboriosam sapiente
            quibusdam, porro at et error?
          </p>
        </div>
        <div className="billing-toggle">
          <span className={billingPeriod === "monthly" ? "active" : ""}>
            Monthly
          </span>

          <label className="switch">
            <input
              type="checkbox"
              checked={billingPeriod === "yearly"}
              onChange={() =>
                setBillingPeriod(
                  billingPeriod === "monthly" ? "yearly" : "monthly",
                )
              }
            />
            <span className="slider"></span>
          </label>

          <span className={billingPeriod === "yearly" ? "active" : ""}>
            Yearly
          </span>
        </div>

        <div className="pricing_cards">
          {pricingPlan9Data.map((plan) => (
            <div key={plan.id} className="pricing_card">
              <h3 className="name">{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price">
                $
                {billingPeriod === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
                <span>
                  Billed {billingPeriod === "monthly" ? "Monthly" : "Annually"}
                </span>
              </div>
              <div className="feature_content list">
                {plan.features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>
              <a href="#">{plan.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- PRICING PLAN TEN ---------------- */

const PricingPlan10 = () => {
  const [billingPeriod2, setBillingPeriod2] = useState("Monthly");
  return (
    <div className="pricing_wrapper9 pricing_wrapper10">
      <div className="container">
        <div className="pricing_title_wrapper">
          <h2>Prestige Pricing</h2>
          <p>Choose the perfect plan for your needs</p>
        </div>
        <div className="billing-toggle">
          <span className={billingPeriod2 === "Monthly" ? "active" : ""}>
            Monthly
          </span>

          <label className="switch">
            <input
              type="checkbox"
              checked={billingPeriod2 === "Monthly"}
              onChange={() =>
                setBillingPeriod2(
                  billingPeriod2 === "Monthly" ? "Yearly" : "Monthly",
                )
              }
            />
            <div className="slider"></div>
          </label>

          <span className={billingPeriod2 === "Yearly" ? "active" : ""}>
            Yearly
          </span>
        </div>

        <div className="pricing_cards">
          {pricingPlan10Data.map((plan) => (
            <div key={plan.id} className="pricing_card">
              <h3 className="name">{plan.name}</h3>
              <div className="price">
                $
                {billingPeriod2 === "Monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
              </div>
              <ul className="list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <strong>{feature.title}</strong>
                    <p>{feature.desc}</p>
                  </li>
                ))}
              </ul>
              <a href="#">{plan.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
export {
  PricingPlan2,
  PricingPlan3,
  PricingPlan4,
  PricingPlan5,
  PricingPlan6,
  PricingPlan7,
  PricingPlan8,
  PricingPlan9,
  PricingPlan10,
};
