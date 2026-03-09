import { Routes, Route } from "react-router-dom";
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
import BlogPage from "./components/pages/blogPage";

const App = () => {
  return (
    <>
      {/* HEADER ALWAYS */}
      <Header_05 />

      {/* PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/team-01" element={<Team_01 />} />
        <Route path="/team-02" element={<Team_02 />} />
        <Route path="/team-single" element={<TeamSingle />} />
        <Route path="/services" element={<Services_01 />} />
        <Route path="/services-single" element={<ServiceSingle />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/login" element={<FormEleven />} />
        <Route path="/components/*" element={<ComponentsPage />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/blog-page" element={<BlogPage />} />
      </Routes>

      {/* FOOTER ALWAYS */}
      <Sitecorefooter />
    </>
  );
};

export default App;
