import React from 'react'
import { FormTwelve } from '../shortcode/forms/Form'
import sitecoreBg from "../../assets/images/sitecoreBreadCrumb_bg_img.png";
import {Team13 } from '../shortcode/teams/Teams'
import { ProgressEight } from '../shortcode/progress/Progress'
import { AboutBannerBreadCrumb } from '../shortcode/breadcrumb/Breadcrumb';

const TeamSingle = () => {
  return (
    <>
      <AboutBannerBreadCrumb
        title="Team Single"
        bgImage={sitecoreBg}
      />
     <Team13/>
     <ProgressEight/>
      <FormTwelve />
    </>
  )
}

export default TeamSingle