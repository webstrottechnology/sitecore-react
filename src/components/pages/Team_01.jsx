import React from 'react'
import { FormTwelve } from '../shortcode/forms/Form'
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import {Team12 } from '../shortcode/teams/Teams'
import { AboutBannerBreadCrumb } from '../shortcode/breadcrumb/Breadcrumb';
import Pagination from '../shortcode/pagination/Pagination';

const Team_01 = () => {
  return (
    <>

      <AboutBannerBreadCrumb
        title="Team 01"
        bgImage={sitecoreBg}
      />
     <Team12/>
     <Pagination/>
      <FormTwelve />
    </>
  )
}

export default Team_01 ;