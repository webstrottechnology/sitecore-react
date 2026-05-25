import React, { useState, useEffect } from "react";

import JobDreamSection, {
  FindJobSection,
  JobBlogSection,
  JobForYouSection,
  JobProcessSection,
  JobQuestionSection,
  JobSpeakerSection,
  JobSubscribeSection,
  JobTeamSection,
  JobTrustedSection,
  JobWorkingProcessSection,
  PopularCategoriesSection,
} from "../shortcode/HomeJob/HomeJobPage";

import { HomeJobFooter } from "../shortcode/footer/Footer";
import HeaderJob from "../shortcode/Header/HeaderJob";

const HomeJob = () => {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  return (
    <div>
      <HeaderJob direction={direction} setDirection={setDirection} />
      <JobDreamSection />
      <PopularCategoriesSection />
      <JobForYouSection />
      <FindJobSection />
      <JobWorkingProcessSection />
      <JobTrustedSection />
      <JobTeamSection />
      <JobSpeakerSection />
      <JobProcessSection />
      <JobBlogSection />
      <JobQuestionSection />
      <JobSubscribeSection />
      <HomeJobFooter />
    </div>
  );
};

export default HomeJob;