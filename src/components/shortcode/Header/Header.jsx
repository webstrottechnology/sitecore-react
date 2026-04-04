import React, { useEffect, useState } from "react";
import "./Header.scss";
import { RiMenuLine, RiCloseLine, RiSearchLine, RiArrowDownSLine , RiUserLine} from "react-icons/ri";
import { navMenu, sidebarInfo } from "./headerData";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="header">
        <nav className="nav container">

          {/* LOGO */}
          <div className="nav__logo">Logo</div>

          {/* MENU */}
          <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`}>
            <ul className="nav__list">
              <li><a className="nav__link" href="#">Home</a></li>
              <li><a className="nav__link" href="#">About us</a></li>
              <li><a className="nav__link" href="#">Services</a></li>
              <li><a className="nav__link" href="#">Featured</a></li>
              <li><a className="nav__link" href="#">Contact</a></li>
            </ul>

            <RiCloseLine
              className="nav__close"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* ACTIONS */}
          <div className="nav__actions">
            <RiSearchLine onClick={() => setSearchOpen(true)} />
            <RiUserLine onClick={() => setLoginOpen(true)} />
            <RiMenuLine
              className="nav__toggle"
              onClick={() => setMenuOpen(true)}
            />
          </div>

        </nav>
      </header>


      {/* ================= SEARCH ================= */}
      <div className={`search ${searchOpen ? "show-search" : ""}`}>
        <form className="search__form">
          <RiSearchLine className="search__icon" />
          <input
            type="search"
            className="search__input"
            placeholder="What are you looking for?"
          />
        </form>

        <RiCloseLine
          className="search__close"
          onClick={() => setSearchOpen(false)}
        />
      </div>

      {/* ================= LOGIN ================= */}
      <div className={`login ${loginOpen ? "show-login" : ""}`}>
        <form className="login__form">
          <h2 className="login__title">Log In</h2>

          <div className="login__group">
            <div className="login__item">
              <label className="login__label">Email</label>
              <input className="login__input" type="email" />
            </div>

            <div className="login__item">
              <label className="login__label">Password</label>
              <input className="login__input" type="password" />
            </div>
          </div>

          <button className="login__button">Log In</button>
        </form>

        <RiCloseLine
          className="login__close"
          onClick={() => setLoginOpen(false)}
        />
      </div>
    </>
  );
};




const HeaderTwo = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`headerTwo ${scrolled ? "scrolled" : ""}`}>
        <div className="headerTwo-inner">
          <div className="logo">
            Fox<span>Bat</span>
          </div>

          <nav className="navLinks">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>

          <div className="actions">
            <button className="cta">Get Started</button>

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`headerTwo-mobile ${menuOpen ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button className="mobile-cta">Get Started</button>
      </div>
    </>
  );
};

const HeaderThree = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);

  return (
    <>
      <header className="headerThree">
        <div className="container">
          <div className="logo">Invena</div>

          {/* DESKTOP NAV */}
          <nav className="nav">
            {navMenu.map((item, i) =>
              item.dropdown ? (
                <div className="dropdown" key={i}>
                  <span onClick={() => setActiveDrop(activeDrop === i ? null : i)}>
                    {item.title} <RiArrowDownSLine />
                  </span>

                  <ul className={activeDrop === i ? "show" : ""}>
                    {item.dropdown.map((drop, d) => (
                      <li key={d}>{drop.title}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a key={i} href={item.link}>{item.title}</a>
              )
            )}
          </nav>

          <div className="actions">
            <RiSearchLine onClick={() => setSearchOpen(true)} />
            <RiMenuLine onClick={() => setSidebarOpen(true)} />
          </div>
        </div>
      </header>

      {/* SEARCH */}
      <div className={`searchTop ${searchOpen ? "show" : ""}`}>
        <input placeholder="Search..." />
        <RiCloseLine onClick={() => setSearchOpen(false)} />
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <RiCloseLine className="close" onClick={() => setSidebarOpen(false)} />

        <h3>Get In Touch</h3>
        <p>{sidebarInfo.phone}</p>
        <p>{sidebarInfo.email}</p>
        <p>{sidebarInfo.website}</p>
        <p>{sidebarInfo.address}</p>
      </div>
    </>
  );
};


export default Header;
export { HeaderTwo , HeaderThree}


