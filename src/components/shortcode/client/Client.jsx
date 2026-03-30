import React from "react";
import brand1 from "../../../assets/images/home-01/brand1.png";
import brand2 from "../../../assets/images/home-01/brand2.png";
import brand3 from "../../../assets/images/home-01/brand3.png";
import brand4 from "../../../assets/images/home-01/brand4.png";
import { ClientLogoData1, clientLogoData2 } from "./ClientData";
import "./Client.scss";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";
const ClientLogos = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Client Logos" bgImage={sitecoreBg} />
      <div className="client2-wrapper padd-100 w-100">
        <div className="container custom-container-lg">
          <div className="row">
            {ClientLogoData1.map((logo) => (
              <div key={logo.id} className="col-lg-3 col-md-6 col-sm-12 col-12">
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img src={logo.imgSrc} alt={logo.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ClientStyle01 = () => {
  return (
    <div className="client1-wrapper padd-100 w-100">
      <div className="container shoCustomContainer">
        {/* Single row – Bootstrap will wrap columns automatically */}
        <div className="row">
          {clientLogoData2.map((logo) => (
            <div key={logo.id} className="col-lg-3 col-md-6 col-sm-12 pd-2">
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img src={logo.imgSrc} alt={logo.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
export { ClientLogos, ClientStyle01 };
