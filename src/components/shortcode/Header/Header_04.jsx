import React, { useEffect, useState } from "react";
import "./Header_04.scss";

const Header_04 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`headerFour ${scrolled ? "scrolled" : ""}`}>
        <div className="headerFour-inner">
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
      <div className={`headerFour-mobile ${menuOpen ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button className="mobile-cta">Get Started</button>
      </div>
    </>
  );
};

export default Header_04;
