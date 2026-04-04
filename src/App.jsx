import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./components/shortcode/ThemeSwitcher/ThemeSwitcher";
import DirectionSwitcher from "./components/shortcode/DirectionSwitcher/Direction";
import Home from "./components/pages/Home";
import Header_05 from "./components/shortcode/Header/Header_05";
import { Sitecorefooter } from "./components/shortcode/footer/Footer";
import ErrorPage from "./components/shortcode/404Pages/ErrorPage";
import ComingSoon from "./components/shortcode/commingSoon/ComingSoon";
import ComponentsPage from "./components/pages/ComponentsPage";
import About from "./components/pages/About";
import Team_01 from "./components/pages/Team_01";
import Team_02 from "./components/pages/Team_02";
import TeamSingle from "./components/pages/TeamSingle";
import Services_01 from "./components/pages/Services_01";
import { FormEleven } from "./components/shortcode/forms/Form";
import ContactUs from "./components/pages/ContactUs";
import ServiceSingle from "./components/pages/ServiceSingle";
import PortfolioDetails from "./components/pages/PortfolioDetails";
import BlogPage from "./components/pages/BlogPage";
import PortfolioColumn3 from "./components/pages/PortfolioColumn3";
import PortfolioColumn4 from "./components/pages/PortfolioColumn4";
import BlogImagePage from "./components/pages/BlogImagePage";
import ShopCart from "./components/pages/cart";
import BlogVedioPage from "./components/pages/BlogVedioPage";
import BlogSliderPage from "./components/pages/BlogSliderPage";
import BlogVimeoPage from "./components/pages/BlogVimeoPage";
import BlogAudioPage from "./components/pages/BlogAudioPage";
import BlogQuotePage from "./components/pages/BlogQuotePage";
import ProductGridPage from "./components/pages/ProductGridPage";
import Checkout from "./components/pages/Checkout";
import ProductSingle01 from "./components/pages/ProductSingle01";
import ProductSingle02 from "./components/pages/ProductSingle02";
import HeaderMedical from "./components/pages/HeaderMedical";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const location = useLocation();
  const hideLayoutRoutes = ["/home-medical"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation speed
      once: true, // animation only once
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <>
      {/* GLOBAL HEADER */}
      {!shouldHideLayout && (
        <Header_05 direction={direction} setDirection={setDirection} />
      )}
      {/* PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/team-01" element={<Team_01 />} />
        <Route path="/team-02" element={<Team_02 />} />
        <Route path="/team-single" element={<TeamSingle />} />
        <Route path="/services" element={<Services_01 />} />
        <Route path="/services-single" element={<ServiceSingle />} />
        <Route path="/login" element={<FormEleven />} />
        <Route path="/components/*" element={<ComponentsPage />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/portfolio-3-column" element={<PortfolioColumn3 />} />
        <Route path="/portfolio-4-column" element={<PortfolioColumn4 />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/image-post" element={<BlogImagePage />} />
        <Route path="/youtube-post" element={<BlogVedioPage />} />
        <Route path="/slider-post" element={<BlogSliderPage />} />
        <Route path="/vimeo-post" element={<BlogVimeoPage />} />
        <Route path="/audio-post" element={<BlogAudioPage />} />
        <Route path="/quote-post" element={<BlogQuotePage />} />
        <Route path="/product-with-sidebar" element={<ProductGridPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-single-01" element={<ProductSingle01 />} />
        <Route path="/product-single-02" element={<ProductSingle02 />} />
        <Route path="/home-medical" element={<HeaderMedical />} />
      </Routes>
      {/* FOOTER ALWAYS */}
      {!shouldHideLayout && <Sitecorefooter />}
    </>
  );
};

export default App;
