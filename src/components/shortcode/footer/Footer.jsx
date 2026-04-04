import React from "react";
import "./Footer.scss";
import { RiContactsBookLine } from "react-icons/ri";
import { footerOneLinks } from "./FooterData";
import { footerDataTwo } from "./FooterData";
import { footerDataThree } from "./FooterData";
import { footerDataFour } from "./FooterData";
import { footerDataFive } from "./FooterData";
import { footerDataSix } from "./FooterData";
import { footerDataSeven } from "./FooterData";
import { footerDataEight } from "./FooterData";
import { footerDataNine } from "./FooterData";
import { footerDataTen } from "./FooterData";
import { SiteCorefooterLinks } from "./FooterData";
import { FiSend } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { TbBrandXTwitter } from "react-icons/tb";
import { BsFillCircleFill } from "react-icons/bs";
import footerLogo from "../../../assets/images/sitecore_footer_logo.png";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

const FooterOne = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Footer" bgImage={sitecoreBg} />
      <div>
        <footer className="footerOne">
          {/* Newsletter */}
          <div className="footer-top">
            <h2>Subscribe to our newsletter</h2>

            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {footerOneLinks.map((section, i) => (
              <div className="footer-column" key={section.title}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, j) => (
                    <li key={link.title}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p>© 2026 YourBrand. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

const FooterTwo = () => {
  return (
    <div>
      <footer className="footerTwo">
        {/* Curved Top */}
        <div className="lux-footer__curve  footer-curve">
          <p className="lux-footer__title">
            {footerDataTwo.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        {/* Content */}
        <div className="lux-footer__content">
          {footerDataTwo.addresses.map((item, index) => (
            <div className="lux-footer__col" key={index}>
              <h4>{item.heading}</h4>
              {item.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}

          <div className="lux-footer__center">
            <p>{footerDataTwo.centerText}</p>
          </div>
        </div>

        {/* Social */}
        <div className="lux-footer__social">
          {footerDataTwo.socials.map((social, index) => (
            <span key={index}>{social}</span>
          ))}
        </div>

        {/* Bottom */}
        <div className="lux-footer__bottom">
          <p>{footerDataTwo.bottom.copyright}</p>

          <div className="lux-footer__logo">{footerDataTwo.bottom.logo}</div>

          <p>
            {footerDataTwo.bottom.links.map((link, i) => (
              <span key={i}>
                {link}
                {i !== footerDataTwo.bottom.links.length - 1 && " · "}
              </span>
            ))}
          </p>
        </div>
      </footer>
    </div>
  );
};

const FooterThree = () => {
  return (
    <div>
      <footer className="footerthree">
        <div className="footer-top">
          {/* Left Section */}
          <div className="footer-about">
            <p>
              We offer a wide range of handyman services to meet all your needs,
              from minor fixes to major renovations.
            </p>

            <ul className="social-icons">
              {footerDataThree.socialLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url} aria-label={item.label}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Section */}
          <div className="footer-links">
            <h4>Extra links</h4>
            <ul>
              {footerDataThree.footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              {footerDataThree.contactInfo.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big Brand Text */}
        <div className="footer-brand">
          <h1>
            Bienes<span>™</span>
          </h1>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 YourBrand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FooterFour = () => {
  return (
    <div>
      <footer className="footerFour">
        {/* CTA Section */}
        <div className="footer-cta">
          <h2>
            Your next big idea's just <br /> one prompt away.
          </h2>

          <button className="cta-btn">
            Get Started <span>→</span>
          </button>
        </div>

        {/* Footer Links */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-icon">◉</span>
            <span className="logo-text">dora</span>
          </div>

          <div className="footer-links">
            {footerDataFour.map((section, index) => (
              <div className="footer-col" key={index}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copy">© Dora Inc. 2026 All Rights Reserved</div>
      </footer>
    </div>
  );
};

const FooterFive = () => {
  return (
    <div>
      <footer className="footerFive">
        <div className="footer-container">
          {/* Left Brand Section */}
          <div className="footer-brand">
            <h3>{footerDataFive.brand.name}</h3>
            <span className="badge">{footerDataFive.brand.badge}</span>
            <p>{footerDataFive.brand.description}</p>

            <div className="footer-buttons">
              {footerDataFive.brand.buttons.map((btn, index) => (
                <button key={index} className={`btn ${btn.type}`}>
                  {btn.label} <span>{btn.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {footerDataFive.columns.map((col, index) => (
            <div className="footer-column" key={index}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* More Templates */}
          <div className="footer-column">
            <h4>More by Mix Design:</h4>
            <ul className="template-list">
              {footerDataFive.moreTemplates.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer Copyright */}
        <div className="footer-copy">
          <p>© Dora Inc. 2026 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

const FooterSix = () => {
  return (
    <div>
      <footer className="footerSix">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h2>{footerDataSix.brand.name}</h2>
            <p>{footerDataSix.brand.description}</p>

            <div className="awards">
              {footerDataSix.brand.awards.map((award, i) => (
                <div className="award" key={i}>
                  <strong>{award.count}</strong>
                  <span>{award.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerDataSix.columns.map((col, index) => (
            <div className="footer-column" key={index}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>{footerDataSix.newsletter.title}</h3>

            <div className="newsletter-input">
              <input
                type="email"
                placeholder={footerDataSix.newsletter.placeholder}
              />
              <button>
                <FiSend />
              </button>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="checkbox2A" />
              <label htmlFor="checkbox2A">
                {footerDataSix.newsletter.checkbox}
              </label>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-contact">
            {footerDataSix.contact.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="contact-item">
                  <Icon />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="footer-socials">
            {footerDataSix.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a key={index} href={social.link}>
                  <Icon />
                </a>
              );
            })}
          </div>

          <p className="copyright">{footerDataSix.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

const FooterSeven = () => {
  return (
    <div>
      <footer className="footerSeven">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              {/* Newsletter */}
              <div className="col-lg-3 col-md-6">
                <div className="f_widget company_widget">
                  <h3 className="f-title">
                    {footerDataSeven.newsletter.title}
                  </h3>
                  <p>{footerDataSeven.newsletter.desc}</p>

                  <form className="f_subscribe_two">
                    <input
                      type="email"
                      placeholder={footerDataSeven.newsletter.placeholder}
                    />
                    <button type="submit">
                      {footerDataSeven.newsletter.button}
                    </button>
                  </form>
                </div>
              </div>

              {/* Download */}
              <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget">
                  <h3 className="f-title">{footerDataSeven.download.title}</h3>
                  <ul className="f_list">
                    {footerDataSeven.download.links.map((item, i) => (
                      <li key={i}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Help */}
              <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget">
                  <h3 className="f-title">{footerDataSeven.help.title}</h3>
                  <ul className="f_list">
                    {footerDataSeven.help.links.map((item, i) => (
                      <li key={i}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social */}
              <div className="col-lg-3 col-md-6">
                <div className="f_widget social-widget">
                  <h3 className="f-title">{footerDataSeven.social.title}</h3>
                  <div className="f_social_icon">
                    {footerDataSeven.social.icons.map((item, i) => (
                      <a key={i} href={item.link}>
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background shapes */}
          <div className="footer_bg">
            <span className="footer_bg_one" />
            <span className="footer_bg_two" />
          </div>
        </div>

        {/* Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12">
                <p className="info_left">{footerDataSeven.bottom.left}</p>
              </div>
              <div className="col-lg-6 col-sm-12 text-right">
                <p className="info_right">{footerDataSeven.bottom.right}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FooterEight = () => {
  return (
    <div>
      <footer className="FooterEight">
        <div className="footer-inner">
          {/* Left */}
          <div className="footer-col about">
            <h2>{footerDataEight.about.title}</h2>
            <p>{footerDataEight.about.desc}</p>

            <div className="socials">
              {footerDataEight.about.socials.map((item, i) => (
                <a key={i} href={item.link}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>{footerDataEight.quickLinks.title}</h4>
            <ul>
              {footerDataEight.quickLinks.links.map((link, i) => (
                <li key={i}>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>{footerDataEight.newsletter.title}</h4>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder={footerDataEight.newsletter.placeholder}
              />
              <button>
                <FaPaperPlane />
              </button>
            </div>
          </div>

          {/* Address */}
          <div className="footer-col">
            <h4>{footerDataEight.address.title}</h4>
            <p>{footerDataEight.address.text}</p>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4>{footerDataEight.support.title}</h4>
            <ul>
              {footerDataEight.support.links.map((link, i) => (
                <li key={i}>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footerDataEight.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

const FooterTen = () => {
  return (
    <div>
      <footer className="footerTen">
        {footerDataTen.map((section) => {
          if (section.type === "social") {
            return (
              <div className="footer_social" key="social">
                <div className="footer_logo">
                  <img src={section.logo} alt="Aigocy Logo" />
                </div>

                <h2>
                  {section.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>

                <p>{section.subtitle}</p>

                <div className="footer_social-links">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a href={item.url} key={item.name} className="social-btn">
                        <span>{item.name}</span>
                        <i>
                          <Icon />
                        </i>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (section.type === "bottom") {
            return (
              <div className="footer_bottom" key="bottom">
                <ul className="footer_menu">
                  {section.menu.map((item) => (
                    <li key={item.title}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))}
                </ul>

                <p className="footer_copyright">{section.copyright}</p>
              </div>
            );
          }

          return null;
        })}
      </footer>
    </div>
  );
};

const FooterNine = () => {
  return (
    <div>
      <footer className="footerNine">
        <div className="footer_container">
          {footerDataNine.map((item, index) => (
            <div className="footer_box" key={index}>
              <h3>{item.title}</h3>

              {/* Links */}
              {item.type === "links" && (
                <ul>
                  {item.content.map((link, i) => (
                    <li key={i}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Center */}
              {item.type === "center" && (
                <>
                  <p>{item.description}</p>
                  <div className="footer_social">
                    {item.social.map((social, i) => (
                      <a href={social.url} key={i}>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </>
              )}

              {/* Contact */}
              {item.type === "contact" && (
                <>
                  <p>{item.email}</p>
                  <p>{item.address}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="footer_bottom">
          © Copyright 2026 | Habibi | All right reserved.
        </div>
      </footer>
    </div>
  );
};

const Sitecorefooter = () => {
  return (
    <footer className="SiteCore_footer_Wrapper">
      <div className="footerGroup">
        {/* Partner Logos */}
        <div className="container custom-container-lg">
          <div className="bsPartnerLogo">
            {SiteCorefooterLinks.partners.map((item, index) => (
              <div className="bsPartnerLogoItem" key={index}>
                <a href="#">
                  <img
                    src={item.img}
                    alt="partner-logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <hr className="hrLine" />

        {/* Footer Inner */}
        <div className="footerInner">
          <div className="container custom-container-lg">
            <div className="row footerInnerRow">
              {/* LEFT SIDE */}
              <div
                className="col-lg-6 footerInnerCol1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="footerLogoGroup">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="footerLogo">
                        <img
                          src={footerLogo}
                          alt="footer-logo"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="footerPara">
                        <p>{SiteCorefooterLinks.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subscribe */}
                <div className="subscribeGroup">
                  <h2>Subscribe For Latest News</h2>

                  <div className="subscribeInput">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <button className="mintGreenOutlineBtn lg-btn">
                    Subscribe Now
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div
                className="col-lg-6 footerInnerCol2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row">
                  {/* Categories */}
                  <div className="col-md-4">
                    <h4>Short Code</h4>

                    <ul className="nav flex-column">
                      {SiteCorefooterLinks.categories.map((item, index) => (
                        <li className="nav-item" key={index}>
                          <a className="nav-link" href={item.link}>
                            <BsFillCircleFill
                              style={{ fontSize: "8px", marginRight: "8px" }}
                            />{" "}
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Useful Links */}
                  <div className="col-md-4">
                    <h4>Useful Links</h4>
                    <ul className="nav flex-column">
                      {SiteCorefooterLinks.usefulLinks.map((item, index) => (
                        <li className="nav-item" key={index}>
                          <a className="nav-link" href={item.link}>
                            <BsFillCircleFill
                              style={{ fontSize: "8px", marginRight: "8px" }}
                            />{" "}
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* More Information */}
                  <div className="col-md-4">
                    <h4>More Information</h4>

                    <ul className="nav flex-column">
                      {SiteCorefooterLinks.moreInfo.map((item, index) => (
                        <li className="nav-item" key={index}>
                          <a className="nav-link" href={item.link}>
                            <BsFillCircleFill
                              style={{ fontSize: "8px", marginRight: "8px" }}
                            />{" "}
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <hr className="hrLine" />

                {/* Social + Support */}
                <div className="row socialMediaIconRow">
                  <div className="col-xl-6">
                    <div className="socialMediaIcon">
                      <ul className="nav">
                        {SiteCorefooterLinks.social.map((item, index) => {
                          let IconComponent;

                          // Map your icons here if SiteCorefooterLinks.social.icon has same name as react-icons or map manually
                          switch (item.icon) {
                            case "fa-whatsapp":
                              IconComponent = FaWhatsapp;
                              break;
                            case "fa-instagram":
                              IconComponent = FaInstagram;
                              break;
                            case "fa-facebook":
                              IconComponent = FaFacebookF;
                              break;
                            case "fa-twitter":
                              IconComponent = FaXTwitter;
                              break;
                            default:
                              IconComponent = null;
                          }

                          return (
                            <li className="nav-item" key={index}>
                              <a
                                className="nav-link"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {IconComponent && <IconComponent size={20} />}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="helpSupport">
                      <span>{SiteCorefooterLinks.support.text}</span>

                      <h5>
                        <a href={`tel:${SiteCorefooterLinks.support.phone}`}>
                          {SiteCorefooterLinks.support.phone}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footerCopyRight">
          <div className="container custom-container-lg">
            <hr className="hrLine" />

            <p>
              Copyright © 2026-27 <a href="#">Sitecore</a>. Design by Webstrot.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
export {
  FooterTwo,
  FooterThree,
  FooterFour,
  FooterFive,
  FooterSix,
  FooterSeven,
  FooterEight,
  Sitecorefooter,
  FooterNine,
  FooterTen,
};
