import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

import Header_05 from "./components/shortcode/Header/Header_05";
import { Sitecorefooter } from "./components/shortcode/footer/Footer";
import CartProvider from "./components/shortcode/CartContextWrap/CartContext";
import ScrollToTop from "./ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Lazy Load Pages
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Team_01 = lazy(() => import("./components/pages/Team_01"));
const Team_02 = lazy(() => import("./components/pages/Team_02"));
const TeamSingle = lazy(() => import("./components/pages/TeamSingle"));
const Services_01 = lazy(() => import("./components/pages/Services_01"));
const ServiceSingle = lazy(() => import("./components/pages/ServiceSingle"));
const ComponentsPage = lazy(() =>
  import("./components/pages/ComponentsPage")
);
const ContactUs = lazy(() => import("./components/pages/ContactUs"));

const PortfolioDetails = lazy(() =>
  import("./components/pages/PortfolioDetails")
);

const PortfolioColumn3 = lazy(() =>
  import("./components/pages/PortfolioColumn3")
);

const PortfolioColumn4 = lazy(() =>
  import("./components/pages/PortfolioColumn4")
);

const BlogPage = lazy(() => import("./components/pages/BlogPage"));
const BlogImagePage = lazy(() =>
  import("./components/pages/BlogImagePage")
);

const BlogVideoPage = lazy(() =>
  import("./components/pages/BlogVideoPage")
);

const BlogSliderPage = lazy(() =>
  import("./components/pages/BlogSliderPage")
);

const BlogVimeoPage = lazy(() =>
  import("./components/pages/BlogVimeoPage")
);

const BlogAudioPage = lazy(() =>
  import("./components/pages/BlogAudioPage")
);

const BlogQuotePage = lazy(() =>
  import("./components/pages/BlogQuotePage")
);

const ProductGridPage = lazy(() =>
  import("./components/pages/ProductGridPage")
);

const ErrorPage = lazy(() =>
  import("./components/shortcode/404Pages/ErrorPage")
);

const ComingSoon = lazy(() =>
  import("./components/shortcode/commingSoon/ComingSoon")
);

const ShopCart = lazy(() => import("./components/pages/cart"));
const Checkout = lazy(() => import("./components/pages/Checkout"));

const ProductSingle01 = lazy(() =>
  import("./components/pages/ProductSingle01")
);

const ProductSingle02 = lazy(() =>
  import("./components/pages/ProductSingle02")
);

const HomeMedical = lazy(() =>
  import("./components/pages/HomeMedical")
);

const HomeCafe = lazy(() =>
  import("./components/pages/HomeCafe")
);

const HomeJob = lazy(() =>
  import("./components/pages/HomeJob")
);

const FormEleven = lazy(() =>
  import("./components/shortcode/forms/Form").then((module) => ({
    default: module.FormEleven,
  }))
);

const App = () => {
  const location = useLocation();

const hideLayoutRoutes = ["/home-cafe", "/home-medical", "/home-job"];

  const shouldHideLayout = hideLayoutRoutes.some(
    (route) => route === location.pathname
  );

  const [direction, setDirection] = useState("ltr");

  // ✅ Direction Change
  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  // ✅ AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <CartProvider>
      <ScrollToTop />

      {/* ✅ Header */}
      {!shouldHideLayout && (
        <Header_05
          direction={direction}
          setDirection={setDirection}
        />
      )}

      {/* ✅ Page Loader */}
      <Suspense
        fallback={
          <div className="loader">
            Loading...
          </div>
        }
      >
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

          <Route path="/contact" element={<ContactUs />} />

          <Route
            path="/portfolio-details"
            element={<PortfolioDetails />}
          />

          <Route
            path="/portfolio-3-column"
            element={<PortfolioColumn3 />}
          />

          <Route
            path="/portfolio-4-column"
            element={<PortfolioColumn4 />}
          />

          <Route path="/blog-page" element={<BlogPage />} />
          <Route path="/image-post" element={<BlogImagePage />} />
          <Route path="/youtube-post" element={<BlogVideoPage />} />
          <Route path="/slider-post" element={<BlogSliderPage />} />
          <Route path="/vimeo-post" element={<BlogVimeoPage />} />
          <Route path="/audio-post" element={<BlogAudioPage />} />
          <Route path="/quote-post" element={<BlogQuotePage />} />

          <Route
            path="/product-with-sidebar"
            element={<ProductGridPage />}
          />

          <Route path="/coming-soon" element={<ComingSoon />} />

          <Route path="/cart" element={<ShopCart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="/product-single-01"
            element={<ProductSingle01 />}
          />

          <Route
            path="/product-single-02"
            element={<ProductSingle02 />}
          />

          <Route path="/home-medical" element={<HomeMedical />} />
          <Route path="/home-cafe" element={<HomeCafe />} />
          <Route path="/home-job" element={<HomeJob />} />

          {/* ✅ 404 Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>

      {/* ✅ Footer */}
      {!shouldHideLayout && <Sitecorefooter />}
    </CartProvider>
  );
};

export default App;