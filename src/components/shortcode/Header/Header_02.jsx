import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import "./Header_02.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Logo from "../../../assets/images/home-01/coprologo2.png";
import "swiper/css";

import { bannerData, sliderData, accordionData, menuData } from "./headerData";
import { BannerData } from "../banner/bannerData";

/* ================= HEADER ================= */

const Header = ({ setSidebar }) => {
  const [search, setSearch] = useState(false);

  return (
    <header className="header-02">
      <FiMenu className="icon" onClick={() => setSidebar(true)} />

      <h2>
        <Link to="/">
          {" "}
          <img src={Logo} alt="image" />{" "}
        </Link>
      </h2>

      <div className="header-right">
        {search && (
          <div className="search-overlay">
            {/* Search Input with Icon */}
            <div className="search-input-box">
              <FiSearch className="search-icon" />

              <input type="text" placeholder="Search here..." autoFocus />
            </div>

            {/* Close Button */}
            <FiX className="close-search" onClick={() => setSearch(false)} />
          </div>
        )}

        <FiSearch className="icon" onClick={() => setSearch(!search)} />
        <FiShoppingBag className="icon cart-icon" />
        <FiUser className="icon" />
      </div>
    </header>
  );
};

/* ================= SIDEBAR ================= */

const Sidebar = ({ sidebar, setSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className={`sidebar ${sidebar ? "open" : ""}`}>
      <FiX className="close" onClick={() => setSidebar(false)} />

      <ul className="sidebar-menu">
        {/* Home */}
        <li>
          <div className="menu-title" onClick={() => toggleMenu(0)}>
            <span>Home</span>
            <span>{openMenu === 0 ? "-" : "+"}</span>
          </div>

          <ul className={`submenu ${openMenu === 0 ? "open" : ""}`}>
            <li>Home 1</li>
            <li>Home 2</li>
            <li>Home 3</li>
          </ul>
        </li>

        {/* Shop */}
        <li>
          <div className="menu-title" onClick={() => toggleMenu(1)}>
            <span>Shop</span>
            <span>{openMenu === 1 ? "-" : "+"}</span>
          </div>

          <ul className={`submenu ${openMenu === 1 ? "open" : ""}`}>
            <li>Shop Grid</li>
            <li>Shop List</li>
            <li>Shop Detail</li>
          </ul>
        </li>

        {/* Product */}
        <li>
          <div className="menu-title" onClick={() => toggleMenu(2)}>
            <span>Product</span>
            <span>{openMenu === 2 ? "-" : "+"}</span>
          </div>

          <ul className={`submenu ${openMenu === 2 ? "open" : ""}`}>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </li>

        {/* Normal Item */}
        <li className="single-link">Contact</li>
      </ul>
    </div>
  );
};

/* ================= SLIDER ================= */

const SliderBox = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        slidesPerView={1}
        loop
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      <div className="slider-nav">
        <button className="custom-prev">
          <FiArrowLeft />
        </button>

        <button className="custom-next">
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

/* ================= ACCORDION ================= */

const Accordion = () => {
  const [active, setActive] = useState(0); // first open

  return (
    <div className="accordion">
      {accordionData.map((item, i) => (
        <div key={i} className={`acc-item ${active === i ? "active" : ""}`}>
          <h4 onClick={() => setActive(active === i ? null : i)}>
            {item.title}
            <span>{active === i ? "-" : "+"}</span>
          </h4>

          <div className="acc-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ================= BANNER ================= */

const Header_02_Banner = () => {
  return (
    <div className="banner">
      {/* LEFT */}
      <div className="banner-left">
        <span>{bannerData.tag}</span>

        <h1>{bannerData.title}</h1>

        <p>{bannerData.desc}</p>

        <h2>${bannerData.price}</h2>

        <button>Purchase Now</button>
      </div>

      {/* CENTER */}
      <div className="banner-center">
        <SliderBox />
      </div>

      {/* RIGHT */}
      <div className="banner-right">
        <Accordion />
      </div>
    </div>
  );
};

/* ================= MAIN APP ================= */

function Header_02() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="header-02-section">
        <div className="container custom-container">
          <div className="header-02-wrapper">
            <Header setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <Header_02_Banner />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header_02;
