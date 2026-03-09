import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./ComponentsPage.scss";

// ACCORDION
import Accordian, {
  AccordianTwo,
  AccordianThree,
  AccordianFour,
  AccordionFive,
  AccordionSix,
  AccordionSeven,
  AccordianNine,
  AccordionTen,
  AccordianEight,
} from "../shortcode/accordian/Accordian";

// COUNTER
import CounterOne, {
  CounterTwo,
  CounterThree,
  CounterFour,
  CounterFive,
  CounterSix,
  CounterEight,
  CounterSeven,
} from "../shortcode/counters/Counter";

// PROGRESS
import ProgressOne, {
  ProgressTwo,
  ProgressThree,
  ProgressFour,
  ProgressFive,
  ProgressSix,
  ProgressSeven,
  ProgressEight,
} from "../shortcode/progress/Progress";

// Testimonial
import Testimonial, {
  Testimonial8,
  Testimonial5,
  Testimonial4,
  Testimonial9,
  Testimonial7,
  Testimonial6,
  Testimonial10,
  Testimonial3,
  Testimonial2,
  Testimonial11,
} from "../shortcode/testimonial/Testimonial";

import FooterOne, {
  FooterEight,
  FooterFive,
  FooterFour,
  FooterNine,
  FooterSeven,
  FooterSix,
  FooterTen,
  FooterThree,
  FooterTwo,
  Sitecorefooter,
} from "../shortcode/footer/Footer";

import PricingPlan, {
  PricingPlan2,
  PricingPlan3,
  PricingPlan4,
  PricingPlan5,
  PricingPlan6,
  PricingPlan7,
  PricingPlan8,
  PricingPlan9,
  PricingPlan10,
} from "../shortcode/pricingPlan/PricingPlan";

import Tabs, {
  Tabs2,
  Tabs3,
  Tabs4,
  Tabs5,
  Tabs6,
  Tabs7,
  Tabs8,
  Tabs9,
  Tabs10,
} from "../shortcode/tab/Tabs";

import SocialIcons, {
  SocialIcons2,
  SocialIcons3,
  SocialIcons4,
  SocialIcons5,
  SocialIcons6,
  SocialIcons7,
  SocialIcons8,
  SocialIcons9,
  SocialIcons10,
} from "../shortcode/social-icon/SocialIcons";

import List, {
  List2,
  List3,
  List4,
  List5,
  List6,
  List7,
  List8,
  List9,
  List10,
} from "../shortcode/list/List";

import Breadcrumb, {
  Breadcrumb2,
  Breadcrumb3,
  Breadcrumb4,
  Breadcrumb5,
  Breadcrumb6,
  Breadcrumb7,
  Breadcrumb8,
  Breadcrumb9,
  Breadcrumb10,
  AboutBannerBreadCrumb,
} from "../shortcode/breadcrumb/Breadcrumb";

import Features, {
  Features2,
  Features3,
  Features4,
  Features5,
  Features6,
  Features7,
  Features8,
  Features9,
  Features10,
  Features11,
  Features12,
  ConnectBusiness,
} from "../shortcode/features/Feature";

import Banner, {
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  Banner8,
  Banner9,
  Banner10,
} from "../shortcode/banner/Banner";

import Heading, {
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading7,
  Heading8,
  Heading9,
  Heading10,
} from "../shortcode/headings/Heading";

import FormOne, {
  FormEight,
  FormEleven,
  FormFive,
  FormFour,
  FormNine,
  FormSeven,
  FormTen,
  FormThree,
  FormTwelve,
  FormTwo,
} from "../shortcode/forms/Form";
import Teams, {
  Teams2,
  Teams3,
  Team4,
  Team5,
  Team6,
  Team7,
  Team8,
  Team9,
  Team10,
  Team11,
  Team12,
  Team13,
} from "../shortcode/teams/Teams";
import Portfolio1, {
  Portfolio2,
  Portfolio3,
} from "../shortcode/portfolio/Portfolio";
import Header_01 from "../shortcode/Header/Header_01";
import Header_02 from "../shortcode/Header/Header_02";
import Header_04 from "../shortcode/Header/Header_04";
import Header_05 from "../shortcode/Header/Header_05";
import Services, {
  MobileAppDesign,
  ServicesGrid,
  WhyChooseUs,
} from "../shortcode/services/Services";

import Youtube from "../shortcode/youtube/Youtube";

import Blog, {
  BlogSectionOne,
  BlogSectionThree,
  BlogSectionTwo,
} from "../shortcode/blog/Blog";


import NewsLetter from "../shortcode/newsletter/Newsletter";

import FeatureWithIconOne, {
  FeatureWithIconEight,
  FeatureWithIconFive,
  FeatureWithIconFour,
  FeatureWithIconNine,
  FeatureWithIconSeven,
  FeatureWithIconSix,
  FeatureWithIconTen,
  FeatureWithIconThree,
  FeatureWithIconTwo,
  SitecorefeatureItems,
} from "../shortcode/FeaturesWithIcon/FeatureWithIcon";
import AlertOne, {
  AlertEight,
  AlertFive,
  AlertFour,
  AlertSeven,
  AlertSix,
  AlertThree,
  AlertTwo,
} from "../shortcode/Alert/Alert";
import ErrorPage from "../shortcode/404Pages/ErrorPage";
import ComingSoon from "../shortcode/commingSoon/ComingSoon";
import HistoricalFiction from "../shortcode/thumbnails/HistoricalFiction";
import AboutInfo from "../shortcode/aboutInfo/AboutInfo";
import AboutTestimonial from "../shortcode/aboutTestimonial/AboutTestimonial";
import AboutFeatures from "../shortcode/aboutFeatures/AboutFeatures";
import AboutBrandStory from "../shortcode/aboutBrandStory/AboutBrandStory";
import AboutVideo from "../shortcode/aboutVideo/AboutVideo";
import Pagination from "../shortcode/pagination/Pagination";
import BlogLeftAsideBox from "../shortcode/BlogLeftWrap/BlogLeftWrap";
import BlogRightAsideBox from "../shortcode/BlogRightWrap/BlogRightWrap";
import BlogSinglepage from "../shortcode/BlogMainPage/BlogSidebar";

const ComponentsPage = () => {
  return (
    <div className="components-page">
      {/* MENU */}

      {/* ROUTES */}
      <Routes>
        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="accordion" />} />

        <Route
          path="accordion"
          element={
            <>
              <Accordian />
              <AccordianTwo />
              <AccordianThree />
              <AccordianFour />
              <AccordionFive />
              <AccordionSix />
              <AccordionSeven />
              <AccordianEight />
              <AccordianNine />
              <AccordionTen />
            </>
          }
        />

        <Route
          path="header"
          element={
            <>
              <Header_01 />
              <Header_02 />
              <Header_04 />
              <Header_05 />
            </>
          }
        />

        <Route
          path="counter"
          element={
            <>
              <CounterOne />
              <CounterTwo />
              <CounterThree />
              <CounterFour />
              <CounterFive />
              <CounterSix />
              <CounterSeven />
              <CounterEight />
            </>
          }
        />

        <Route
          path="progress"
          element={
            <>
              <ProgressOne />
              <ProgressTwo />
              <ProgressThree />
              <ProgressFour />
              <ProgressFive />
              <ProgressSix />
              <ProgressSeven />
              <ProgressEight />
            </>
          }
        />

        <Route
          path="Testimonial"
          element={
            <>
              <Testimonial />
              <Testimonial4 />
              <Testimonial2 />
              <Testimonial5 />
              <Testimonial3 />
              <Testimonial6 />
              <Testimonial7 />
              <Testimonial8 />
              <Testimonial9 />
              <Testimonial10 />
              <Testimonial11 />
            </>
          }
        />

        <Route
          path="pricingPlan"
          element={
            <>
              <PricingPlan />
              <PricingPlan3 />
              <PricingPlan4 />
              <PricingPlan5 />
              <PricingPlan6 />
              <PricingPlan7 />
              <PricingPlan2 />
              <PricingPlan8 />
              <PricingPlan9 />
              <PricingPlan10 />
            </>
          }
        />

        <Route
          path="footer"
          element={
            <>
              <FooterOne />
              <FooterTwo />
              <FooterThree />
              <FooterFour />
              <FooterFive />
              <FooterSix />
              <FooterSeven />
              <FooterEight />
              <Sitecorefooter />
              <FooterNine />
              <FooterTen />
            </>
          }
        />

        <Route
          path="breadcrumb"
          element={
            <>
              <Breadcrumb />
              <Breadcrumb2 />
              <Breadcrumb3 />
              <Breadcrumb4 />
              <Breadcrumb5 />
              <Breadcrumb6 />
              <Breadcrumb7 />
              <Breadcrumb8 />
              <Breadcrumb9 />
              <Breadcrumb10 />
              <AboutBannerBreadCrumb />
            </>
          }
        />

        <Route
          path="tabs"
          element={
            <>
              <Tabs />
              <Tabs2 />
              <Tabs3 />
              <Tabs4 />
              <Tabs5 />
              <Tabs6 />
              <Tabs7 />
              <Tabs8 />
              <Tabs9 />
              <Tabs10 />
            </>
          }
        />

        <Route
          path="teams"
          element={
            <>
              <Teams />
              <Teams2 />
              <Teams3 />
              <Team4 />
              <Team5 />
              <Team6 />
              <Team7 />
              <Team8 />
              <Team9 />
              <Team10 />
              <Team11 />
              <Team12 />
              <Team13 />
            </>
          }
        />

        <Route
          path="portfolio"
          element={
            <>
              <Portfolio1 />
              <Portfolio2 />
              <Portfolio3 />
            </>
          }
        />

        <Route
          path="social-icons"
          element={
            <>
              <SocialIcons />
              <SocialIcons2 />
              <SocialIcons3 />
              <SocialIcons4 />
              <SocialIcons5 />
              <SocialIcons6 />
              <SocialIcons7 />
              <SocialIcons8 />
              <SocialIcons9 />
              <SocialIcons10 />
            </>
          }
        />

        <Route
          path="form"
          element={
            <>
              <FormOne />
              <FormTwo />
              <FormThree />
              <FormFour />
              <FormFive />
              <FormSeven />
              <FormEight />
              <FormNine />
              <FormTen />
              <FormEleven />
              <FormTwelve />
            </>
          }
        />

        <Route
          path="list"
          element={
            <>
              <List />
              <List2 />
              <List3 />
              <List4 />
              <List5 />
              <List6 />
              <List7 />
              <List8 />
              <List9 />
              <List10 />
            </>
          }
        />

        <Route
          path="features"
          element={
            <>
              <Features />
              <Features2 />
              <Features3 />
              <Features4 />
              <Features5 />
              <Features6 />
              <Features7 />
              <Features8 />
              <Features9 />
              <Features10 />
              <Features11 />
              <Features12 />
              <ConnectBusiness />
            </>
          }
        />

        <Route
          path="banner"
          element={
            <>
              <Banner />
              <Banner2 />
              <Banner3 />
              <Banner4 />
              <Banner5 />
              <Banner6 />
              <Banner7 />
              <Banner8 />
              <Banner9 />
              <Banner10 />
            </>
          }
        />

        <Route
          path="heading"
          element={
            <>
              <Heading />
              <Heading2 />
              <Heading3 />
              <Heading4 />
              <Heading5 />
              <Heading6 />
              <Heading7 />
              <Heading8 />
              <Heading9 />
              <Heading10 />
            </>
          }
        />

        <Route
          path="services"
          element={
            <>
              <Services />
              <WhyChooseUs />
              <ServicesGrid />
              <MobileAppDesign />
            </>
          }
        />

        <Route
          path="youtube"
          element={
            <>
              <Youtube />
            </>
          }
        />

        <Route
          path="blog"
          element={
            <>
              <Blog />
              <BlogSectionOne />
              <BlogSectionTwo />
              <BlogSectionThree />
            </>
          }
        />

        <Route
          path="newsLetter"
          element={
            <>
              <NewsLetter />
            </>
          }
        />

        <Route
          path="aboutInfo"
          element={
            <>
              <AboutInfo />
            </>
          }
        />

        <Route
          path="aboutTestimonial"
          element={
            <>
              <AboutTestimonial />
            </>
          }
        />

        <Route
          path="aboutFeatures"
          element={
            <>
              <AboutFeatures />
            </>
          }
        />

        <Route
          path="aboutBrandStory"
          element={
            <>
              <AboutBrandStory />
            </>
          }
        />

        <Route
          path="aboutVideo"
          element={
            <>
              <AboutVideo />
            </>
          }
        />

        <Route
          path="features-with-icon"
          element={
            <>
              <FeatureWithIconOne />
              <FeatureWithIconTwo />
              <FeatureWithIconThree />
              <FeatureWithIconFour />
              <FeatureWithIconFive />
              <FeatureWithIconSix />
              <FeatureWithIconSeven />
              <FeatureWithIconEight />
              <FeatureWithIconNine />
              <FeatureWithIconTen />
              <SitecorefeatureItems />
            </>
          }
        />
        <Route
          path="alert"
          element={
            <>
              <AlertOne />
              <AlertTwo />
              <AlertThree />
              <AlertFour />
              <AlertFive />
              <AlertSix />
              <AlertSeven />
              <AlertEight />
            </>
          }
        />
        <Route
          path="errorpage"
          element={
            <>
              <ErrorPage />
            </>
          }
        />
        <Route
          path="comingsoon"
          element={
            <>
              <ComingSoon />
            </>
          }
        />
        <Route
          path="thumbnails"
          element={
            <>
              <HistoricalFiction/>
            </>
          }
        />
        <Route
          path="pagination"
          element={
            <>
              <Pagination />
            </>
          }
        />
        <Route
          path="BlogLeftWrap"
          element={
            <>
              <BlogLeftAsideBox />
            </>
          }
        />

        <Route
          path="BlogRightWrap"
          element={
            <>
              <BlogRightAsideBox />
            </>
          }
        />

        <Route
          path="BlogMainPage"
          element={
            <>
              <BlogSinglepage />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default ComponentsPage;
