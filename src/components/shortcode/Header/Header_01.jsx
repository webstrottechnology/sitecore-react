import React, { useState, useRef, useEffect } from "react";
import "./Header_01.scss";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import img1 from "../../../assets/images/portfolio/12.jpg";
import img2 from "../../../assets/images/portfolio/13.jpg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";

import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

const Header_01 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  // Top Bar State
  const [language, setLanguage] = useState("English");
  const [city, setCity] = useState("EUR");

  const [langOpen, setLangOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);


  // ================= CART STATE =================

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Boyfriend Shirts",
      price: 10.56,
      img: img1,
      qty: 1,
    },
    {
      id: 2,
      name: "Versatile Shacket",
      price: 7.7,
      img: img2,
      qty: 2,
    },
  ]);


  // Increase Qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // Decrease Qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );



  const searchRef = useRef(null);
  const userRef = useRef(null);
  const langRef = useRef(null);
  const cityRef = useRef(null);


  const toggle = (name) => {
    setActive(active === name ? null : name);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const close = (e) => {
      if (
        langRef.current &&
        !langRef.current.contains(e.target) &&
        cityRef.current &&
        !cityRef.current.contains(e.target)
      ) {
        setLangOpen(false);
        setCityOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => document.removeEventListener("mousedown", close);
  }, []);


  return (
    <>
      {/* ================= TOP BAR ================= */}
        <AboutBannerBreadCrumb title="Header" bgImage={sitecoreBg} />

      <div className="header_01_section">
        <div className="top-bar">
          <div className="container top-inner">
            {/* Left */}
            <div className="top-left">
              {/* Language */}
              <div
                className={`top-dropdown ${langOpen ? "open" : ""}`}
                ref={langRef}
                onClick={() => {
                  setLangOpen(!langOpen);
                  setCityOpen(false);
                }}>
                <span>{language} <FiChevronDown /></span>
                {langOpen && (
                  <div className="top-menu">
                    <p onClick={() => setLanguage("English")}>English</p>
                    <p onClick={() => setLanguage("Hindi")}>Hindi</p>
                    <p onClick={() => setLanguage("French")}>French</p>
                  </div>
                )}
              </div>

              <span className="divider">|</span>
              {/* City */}
              <div
                className={`top-dropdown ${cityOpen ? "open" : ""}`}
                ref={cityRef}
                onClick={() => {
                  setCityOpen(!cityOpen);
                  setLangOpen(false);
                }}>

                <span>{city} <FiChevronDown /></span>
                {cityOpen && (
                  <div className="top-menu">
                    <p onClick={() => setCity("Delhi")}>EUR</p>
                    <p onClick={() => setCity("Mumbai")}>USD</p>
                    <p onClick={() => setCity("Pune")}>GBP</p>
                    <p onClick={() => setCity("Bangalore")}>USA</p>
                  </div>
                )}
              </div>
              <span className="divider">|</span>
              <span className="call">Call Us 3965410</span>
            </div>
            {/* Right */}
            <div className="top-right">
              Free delivery on order over
              <span> €200.00</span>
            </div>
          </div>
        </div>

        <div className="header_01">
          <div className="header-inner container">
            <div className="logo">Sitecore</div>
            {/* Desktop Menu */}
            <nav className="navbar-list">
              <ul>
                <li>
                  <a href="#">Home</a>
                  <FiChevronDown />
                  <div className="mega-menu">
                    <div className="col">
                      <div className="mega-menu-box">
                        <h2>Home Group One</h2>
                        <ul className="mega-list-box">
                          <li>
                            <a href="#">Home Fashion</a>
                          </li>
                          <li>
                            <a href="#">Home Fashion Two</a>
                          </li>
                          <li>
                            <a href="#">Home Fashion Three</a>
                          </li>
                          <li>
                            <a href="#">Home Fashion Four</a>
                          </li>
                          <li>
                            <a href="#">Home Fashion Five</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mega-menu-box">
                        <h2>Home Group Two</h2>
                        <ul className="mega-list-box">
                          <li>
                            <a href="#">Home Furniture</a>
                          </li>
                          <li>
                            <a href="#">Home Electronics</a>
                          </li>
                          <li>
                            <a href="#">Home Book</a>
                          </li>
                          <li>
                            <a href="#">Home Plants</a>
                          </li>
                          <li>
                            <a href="#">Home Organic</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mega-menu-box">
                        <h2>Home Group Three</h2>
                        <ul className="mega-list-box">
                          <li>
                            <a href="#">Home Banner</a>
                          </li>
                          <li>
                            <a href="#">Home Auto</a>
                          </li>
                          <li>
                            <a href="#">Home Book</a>
                          </li>
                          <li>
                            <a href="#">Home Handmade</a>
                          </li>
                          <li>
                            <a href="#">Home Pet</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mega-menu-box">
                        <h2>Home Group Four</h2>
                        <ul className="mega-list-box">
                          <li>
                            <a href="#">Home Banner</a>
                          </li>
                          <li>
                            <a href="#">Home Auto</a>
                          </li>
                          <li>
                            <a href="#">Home Cake</a>
                          </li>
                          <li>
                            <a href="#">Home Handmade</a>
                          </li>
                          <li>
                            <a href="#">Home Pet</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="pages-dropdown" >
                  <a href="#">Shop</a>
                  <FiChevronDown />

                  <div className="pages-dropdown-menu">
                    <a href="#">Cart</a>
                    <a href="#">Checkout</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Compare</a>
                    <a href="#">My Account</a>
                  </div>
                </li>
                <li><a href="#">Collection</a></li>
                <li className="pages-dropdown">
                  <a href="#">Pages</a>
                  <FiChevronDown />

                  <div className="pages-dropdown-menu">
                    <a href="#">Cart</a>
                    <a href="#">Checkout</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Compare</a>
                    <a href="#">My Account</a>
                  </div>
                </li>

                <li className="pages-dropdown" >
                  <a href="#">Blog</a>
                  <FiChevronDown />

                  <div className="pages-dropdown-menu">
                    <a href="#">Cart</a>
                    <a href="#">Checkout</a>
                    <a href="#">Wishlist</a>
                    <a href="#">Compare</a>
                    <a href="#">My Account</a>
                  </div>
                </li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>

            {/* Icons */}
            <div className="icons">
              {/* Search */}
              <div className="icon-btn" ref={searchRef}>
                <FiSearch onClick={() => setSearchOpen(!searchOpen)} />

                {searchOpen && (
                  <div className={`search-overlay2 ${searchOpen ? "open" : ""}`}>

                    <div className="search-box">

                      <FiX onClick={() => setSearchOpen(false)} />

                      <input type="text" placeholder="Search products..." />

                      <button>Search</button>

                    </div>

                  </div>

                )}

              </div>

              {/* User */}
              <div className="icon-btn user-icon">

                <FiUser onClick={() => setUserOpen(!userOpen)} />

                <div className={`user-menu ${userOpen ? "show" : ""}`}>
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                  <a href="#">My Account</a>
                </div>

              </div>


              <div className="icon-badge">
                <FiHeart />
                <span>0</span>
              </div>

              <div
                className="icon-badge"
                onClick={() => setCartOpen(true)}
              >
                <FiShoppingBag />
                <span>2</span>
              </div>


              <FiMenu
                className="menu-btn"
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
            <div className="mobile-header">
              <FiX className="crossIcon" onClick={() => setMenuOpen(false)} />
              <input type="text" placeholder="Search..." />
            </div>

            <ul className="mobile-nav">
              <li onClick={() => toggle("home")}>
                <span>Home</span>
                {active === "home" ? <FiMinus /> : <FiPlus />}
              </li>

              {active === "home" && (
                <div className="submenu">
                  <a href="#">Home Fashion</a>
                  <a href="#">Home Furniture</a>
                  <a href="#">Home Electronics</a>
                </div>
              )}

              <li onClick={() => toggle("shop")}>
                <span>Shop</span>
                {active === "shop" ? <FiMinus /> : <FiPlus />}
              </li>

              {active === "shop" && (
                <div className="submenu">
                  <a href="#">Shop Layout</a>
                  <a href="#">Product Details</a>
                </div>
              )}
              <li>Collection</li>
              <li onClick={() => toggle("pages")}>
                <span>Pages</span>
                {active === "pages" ? <FiMinus /> : <FiPlus />}
              </li>
              {active === "pages" && (
                <div className="submenu">
                  <a href="#">Cart</a>
                  <a href="#">CheckOut</a>
                  <a href="#">Wishlist</a>
                  <a href="#">Compare</a>
                  <a href="#">My Account</a>
                </div>
              )}

              <li onClick={() => toggle("blogs")}>
                <span>Blogs</span>
                {active === "blogs" ? <FiMinus /> : <FiPlus />}
              </li>
              {active === "blogs" && (
                <div className="submenu">
                  <a href="#">Blog Standard</a>
                  <a href="#">Blog No Sidebar</a>
                  <a href="#">Blog Right Sidebar</a>
                  <a href="#">Blog Details Standard</a>
                </div>
              )}
              <li>Contact</li>
            </ul>

            <div className="mobile-footer">
              <div className="select-box">
                <label>Language</label>
                <select>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>

              <div className="select-box">
                <label>Currency</label>
                <select>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>INR</option>
                </select>
              </div>

              <div className="contact">
                <p><MdOutlinePhoneInTalk /> (1245) 2456 012</p>
                <p><CiMail />info@yourdomain.com</p>
              </div>
            </div>
          </div>

          {/* cart sidebar start  */}

          {/* ================= CART SIDEBAR ================= */}

          <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
            <div className="cart-header">
              <h4>My Cart ({cartItems.length})</h4>
              <FiX className="closeBtn" onClick={() => setCartOpen(false)} />
            </div>

            <div className="cart-body">

              {cartItems.map((item) => (

                <div className="cart-item" key={item.id}>

                  <img src={item.img} alt="" className="img-box"/>

                  <div className="text-box">
                    <h5>{item.name}</h5>
                    <p>${item.price}</p>
                  </div>

                  <div className="qty">

                    <button
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>

                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>

              </div>

              <button>View Cart</button>
              <button className="checkout">Checkout</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Header_01;

