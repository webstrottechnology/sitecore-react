import React from "react";
import { AboutBannerBreadCrumb } from "../shortcode/breadcrumb/Breadcrumb";
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import { Team12 } from "../shortcode/teams/Teams";
import Pagination from "../shortcode/pagination/Pagination";
import { FormTwelve } from "../shortcode/forms/Form";

const Team_02 = () => {
  return (
    <>
      <AboutBannerBreadCrumb title="Team 02" bgImage={sitecoreBg} />
      <Team12 />
      <Pagination />
      <FormTwelve />
    </>
  );
};

export default Team_02;
