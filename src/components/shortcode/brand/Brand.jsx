import React from "react";
import "./Brand.scss";

import brand1 from "../../../assets/images/home-01/brand1.png";
import brand2 from "../../../assets/images/home-01/brand2.png";
import brand3 from "../../../assets/images/home-01/brand3.png";
import brand4 from "../../../assets/images/home-01/brand4.png";

const Brand = () => {
  const brands = [brand1, brand2, brand3, brand4];

  return (
    <section className="corprate-brand-main-wrapper">
      <h2 className="d-none">Brand</h2>

      <div className="container custom-container">
        <div className="brand-main-wrapper">
          {brands.map((item, index) => (
            <div className="brand" key={index}>
              <img src={item} alt={`brand-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
