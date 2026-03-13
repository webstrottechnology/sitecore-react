import React from "react";

import { Banner11 } from "../shortcode/banner/Banner";
import { Team11 } from "../shortcode/teams/Teams";
import { Portfolio3 } from "../shortcode/portfolio/Portfolio";
import Brand from "../shortcode/brand/Brand";
import { Features11, Features12 } from "../shortcode/features/Feature";
import Services, { WhyChooseUs } from "../shortcode/services/Services";
import Youtube from "../shortcode/youtube/Youtube";
import { Testimonial11 } from "../shortcode/testimonial/Testimonial";
import Newsletter from "../shortcode/newsLetter/NewsLetter";
import Blog from "../shortcode/blog/Blog";
const Home = () => {
  return (
    <>
      <Banner11 />
      <Brand />
      <Features11 />
      <Services />
      <Features12 />
      <Youtube />
      <WhyChooseUs />
      <Team11 />
      <Newsletter />
      <Portfolio3 />
      <Testimonial11 />
      <Blog />
    </>
  );
};

export default Home;
