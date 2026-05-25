import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";
import "./HederJob.scss";
import Logo from "../../../assets/images/homejob/header-logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { IoLanguage } from "react-icons/io5";
import { useCart } from "../CartContextWrap/CartContext";

const HeaderJob = ({ direction, setDirection }) => {
  const [sidebar, setSidebar] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const [isFixed, setIsFixed] = useState(false);

  // ccurrency js format
  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  // ✅ SCROLL FIX HEADER
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobile = (menu) => {
    setMobileDrop(mobileDrop === menu ? null : menu);
  };

  const homeLinks = [
    { label: "Home Corporate", path: "/" },
    { label: "Home Medical", path: "/home-medical" },
    { label: "Home Cafe", path: "/home-cafe" },
    { label: "Home Job", path: "/home-job" },
  ];
  const navigate = useNavigate();
  return (
    <>
      <header
        className={`HeaderJobWrapper menu-items-wrapper ${
          isFixed ? "menu-fixed fadeInDown" : ""
        }`}
      >
        <div className="container custom-container-lg">
          {/* LOGO */}
          <div className="logo job_logo_wrap">
            <Link to="/">
              {" "}
              <img src={Logo} alt="image" />{" "}
            </Link>
          </div>

          <div className="inner_wrapper">
            {/* NAV */}
            <ul className="nav">
              {/* HOME */}
              <li className="mega-parent">
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => toggleMenu("home")}
                  aria-expanded={mobileDrop === "home"}
                >
                  Home <FiChevronDown />
                </button>
                <div className="mega-menu-box dropdwonMenu">
                  <div>
                    {homeLinks.map((item, i) => (
                      <Link key={i} to={item.path}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              {/* NORMAL */}
              <li className="mega-parent">
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => toggleMenu("pages")}
                  aria-expanded={mobileDrop === "pages"}
                >
                  Pages <FiChevronDown />
                </button>

                <div className="mega-menu-box dropdwonMenu">
                  <div>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/404">404 Error</Link>
                    <Link to="/coming-soon">Coming Soon</Link>
                    <Link to="/login">Login / Register</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/services-single">Services Single</Link>
                    <Link to="/team-01">Team 01</Link>
                    <Link to="/team-02">Team 02</Link>
                    <Link to="/team-single">Team Single</Link>
                  </div>
                </div>
              </li>
              <li className="mega-parent">
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => toggleMenu("portfolio")}
                  aria-expanded={mobileDrop === "portfolio"}
                >
                  Portfolio <FiChevronDown />
                </button>
                <div className="mega-menu-box dropdwonMenu">
                  <div>
                    <Link to="/portfolio-3-column">Portfolio 3 column</Link>
                    <Link to="/portfolio-4-column">Portfolio 4 column</Link>
                    <Link to="/portfolio-details">Portfolio Details</Link>
                  </div>
                </div>
              </li>
              <li className="mega-parent">
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => toggleMenu("blog")}
                  aria-expanded={mobileDrop === "blog"}
                >
                  Blog <FiChevronDown />
                </button>
                <div className="mega-menu-box dropdwonMenu">
                  <div>
                    <Link to="/blog-page">Blog With Sidebar</Link>
                    <Link to="/image-post">Image Post</Link>
                    <Link to="/slider-post">Slider Post</Link>
                    <Link to="/youtube-post">Youtube Post</Link>
                    <Link to="/vimeo-post">Vimeo Post</Link>
                    <Link to="/audio-post">Audio Post</Link>
                    <Link to="/quote-post">Quote Post</Link>
                  </div>
                </div>
              </li>
              <li className="mega-parent">
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => toggleMenu("shop")}
                  aria-expanded={mobileDrop === "shop"}
                >
                  Shop <FiChevronDown />
                </button>
                <div className="mega-menu-box dropdwonMenu">
                  <div>
                    <Link to="/product-with-sidebar">Product Sidebar</Link>
                    <Link to="/product-single-01">Product Single 01</Link>
                    <Link to="/product-single-02">Product Single 02</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/checkout">Checkout</Link>
                  </div>
                </div>
              </li>
              <li className="mega-parent">
                <button
                  type="button"
                  className="dropdown-trigger"
                  onClick={() => toggleMenu("shortcode")}
                  aria-expanded={mobileDrop === "shortcode"}
                >
                  ShortCode <FiChevronDown />
                </button>

                <div className="mega-menu-box">
                  <div>
                    <h4>Shortcode (1)</h4>
                    <Link to="/components/accordion">Accordion</Link>
                    <Link to="/components/alert">Alert</Link>
                    <Link to="/components/button">Button</Link>
                    <Link to="/components/client">Client</Link>
                    <Link to="/components/counter">Counter</Link>
                    <Link to="/components/features-with-icon">
                      Feature With Icon
                    </Link>
                  </div>

                  <div>
                    <h4>Shortcode (2)</h4>
                    <Link to="/components/form">Form</Link>
                    <Link to="/components/list">List</Link>
                    <Link to="/components/portfolio">Portfolio</Link>
                    <Link to="/components/pricingPlan">Pricing Table</Link>
                    <Link to="/components/features">Features with Images</Link>
                    <Link to="/components/heading">Headings</Link>
                  </div>

                  <div>
                    <h4>Shortcode (3)</h4>
                    <Link to="/components/social-icons">Social Icons</Link>
                    <Link to="/components/Tabs">Tab</Link>
                    <Link to="/components/teams">Team</Link>
                    <Link to="/components/Testimonial">Testimonial</Link>
                    <Link to="/components/Header">Headers</Link>
                    <Link to="/components/footer">Footer</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* RIGHT */}

            <div className="right">
              <FiSearch
                className="search-icon"
                onClick={() => setSearchOpen(true)}
              />
              {/* CART ICON */}
              <div
                className="SitecoreCartIcon"
                onClick={() => setCartOpen(true)}
              >
                <FiShoppingCart />
                <span className="cart-count">{cartItems.length}</span>
              </div>
              {/* ✅ RTL BUTTON */}
              <button
                className="rtl-toggle-btn rtl-toggle-btnBlack"
                onClick={() =>
                  setDirection(direction === "ltr" ? "rtl" : "ltr")
                }
              >
                <IoLanguage />
              </button>
              <Link to="/contact" className="indJob-btn md-btn">
                Let's Talk
              </Link>

              {/* MOBILE MENU BUTTON */}

              <FiMenu
                className="mobile-menu-btn"
                onClick={() => setSidebar(true)}
              />
            </div>
          </div>
        </div>

        <div className={`mobile-sidebar ${sidebar ? "show" : ""}`}>
          <FiX className="close" onClick={() => setSidebar(false)} />
          <div className="sidebar-logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            <li>
              <div
                className="mobile-title"
                onClick={() => toggleMobile("home")}
              >
                Home <FiChevronDown />
              </div>

              <div
                className={`mobile-dropdown ${
                  mobileDrop === "home" ? "show" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">Home Corporate</Link>
                  </li>
                  <li>
                    <Link to="/home-medical">Home Medical</Link>
                  </li>
                  <li>
                    <Link to="/home-cafe">Home Cafe</Link>
                  </li>
                  <li>
                    <Link to="/home-job">Home Job</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* PAGES */}
            <li>
              <div
                className="mobile-title"
                onClick={() => toggleMobile("pages")}
              >
                Pages
                <FiChevronDown />
              </div>
              <div
                className={`mobile-dropdown ${
                  mobileDrop === "pages" ? "show" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/404">404 Error</Link>
                  </li>
                  <li>
                    <Link to="/coming-soon">Coming Soon</Link>
                  </li>
                  <li>
                    <Link to="/login-register">Login / Register</Link>
                  </li>
                  <li>
                    <Link to="/services">Service</Link>
                  </li>
                  <li>
                    <Link to="/service-single">Service Single</Link>
                  </li>
                  <li>
                    <Link to="/team-01">Team 01</Link>
                  </li>
                  <li>
                    <Link to="/team-02">Team 02</Link>
                  </li>
                  <li>
                    <Link to="/team-single">Team Single</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* PORTFOLIO */}
            <li>
              <div
                className="mobile-title"
                onClick={() => toggleMobile("portfolio")}
              >
                Portfolio
                <FiChevronDown />
              </div>
              <div
                className={`mobile-dropdown ${
                  mobileDrop === "portfolio" ? "show" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/portfolio-3-column">Portfolio 3 Column</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-4-column">Portfolio 4 Column</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-details">Portfolio Details</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <div
                className="mobile-title"
                onClick={() => toggleMobile("blog")}
              >
                Blog
                <FiChevronDown />
              </div>
              <div
                className={`mobile-dropdown ${
                  mobileDrop === "blog" ? "show" : ""
                }`}
              >
                <ul>
                  {/* With Sidebar */}
                  <li>
                    <Link to="/blog-page">Blog With Sidebar</Link>
                  </li>
                  <li>
                    <Link to="/image-post">Image Post</Link>
                  </li>
                  <li>
                    <Link to="/slider-post">Slider Post</Link>
                  </li>
                  <li>
                    <Link to="/youtube-post">Youtube Post</Link>
                  </li>
                  <li>
                    <Link to="/vimeo-post">Vimeo Post</Link>
                  </li>
                  <li>
                    <Link to="/audio-post">Audio Post</Link>
                  </li>
                  <li>
                    <Link to="/quote-post">Quote Post</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <div
                className="mobile-title"
                onClick={() => toggleMobile("shop")}
              >
                Shop
                <FiChevronDown />
              </div>
              <div
                className={`mobile-dropdown ${
                  mobileDrop === "shop" ? "show" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/product-with-sidebar">Product Sidebar</Link>
                  </li>
                  <li>
                    <Link to="/product-single-01">Product Single 01</Link>
                  </li>
                  <li>
                    <Link to="/product-single-02">Product Single 02</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <div
                className="mobile-title"
                onClick={() => toggleMobile("shortcode")}
              >
                ShortCode
                <FiChevronDown />
              </div>
              <div
                className={`mobile-dropdown ${
                  mobileDrop === "shortcode" ? "show" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/components/accordion">Accordion</Link>
                  </li>
                  <li>
                    <Link to="/components/alert">Alert</Link>
                  </li>
                  <li>
                    <Link to="/components/button">Button</Link>
                  </li>
                  <li>
                    <Link to="/components/client">Client</Link>
                  </li>
                  <li>
                    <Link to="/components/counter">Counter</Link>
                  </li>
                  <li>
                    <Link to="/components/form">Form</Link>
                  </li>
                  <li>
                    <Link to="/components/list">List</Link>
                  </li>
                  <li>
                    <Link to="/components/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/components/pricing-table">Pricing Table</Link>
                  </li>
                  <li>
                    <Link to="/components/social-icon">Social Icon</Link>
                  </li>
                  <li>
                    <Link to="/components/tabs">Tabs</Link>
                  </li>
                  <li>
                    <Link to="/components/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/components/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/components/feature-with-icon">
                      Feature With Icon
                    </Link>
                  </li>
                  <li>
                    <Link to="/components/feature-with-images">
                      Feature With Images
                    </Link>
                  </li>
                  <li>
                    <Link to="/components/Header">Headers</Link>
                  </li>
                  <li>
                    <Link to="/components/footer">Footer</Link>
                  </li>
                  <li>
                    <Link to="/components/heading">Heading</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div
          className={`overlay ${sidebar ? "show" : ""}`}
          onClick={() => setSidebar(false)}
        ></div>
      </header>
      <div className={`SitecoreCartDrawer ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <FiX onClick={() => setCartOpen(false)} />
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="InnerContent">
                  <div className="ImgBox">
                    <img src={item.img} alt="image" />
                  </div>

                  <div className="info">
                    <h4>{item.name}</h4>

                    {/* ✅ FIXED PRICE */}
                    <p>{formatPrice(item.price)}</p>

                    <div className="qty">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>
                </div>

                <div className="CancelBox">
                  <FiX onClick={() => removeItem(item.id)} />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          {/* ✅ FIXED TOTAL */}
          <h4>Total: {formatPrice(totalPrice)}</h4>

          <div className="cart-buttons">
            <Link
              to="/cart"
              className="filledroundedbtn md-btn"
              onClick={() => setCartOpen(false)}
            >
              <span>View Cart</span>
            </Link>

            <Link
              to="/checkout"
              className="filledroundedbtn md-btn"
              onClick={() => setCartOpen(false)}
            >
              <span>Checkout</span>
            </Link>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        className={`SitecoreCartOverlay ${cartOpen ? "show" : ""}`}
        onClick={() => setCartOpen(false)}
      ></div>
      <div className={`search-overlay ${searchOpen ? "active" : ""}`}>
        <div className="search-box">
          {/* INPUT */}

          <input type="text" placeholder="Search..." />

          {/* SEARCH ICON */}

          <FiSearch className="search-icon" />

          {/* CLOSE BUTTON */}

          <FiX className="close-btn" onClick={() => setSearchOpen(false)} />
        </div>

        {/* CLICK OUTSIDE CLOSE */}

        <div className="search-bg" onClick={() => setSearchOpen(false)}></div>
      </div>
    </>
  );
};

export default HeaderJob;
