import React from "react";
import JobDreamSection, {
  FindJobSection,
  JobForYouSection,
  PopularCategoriesSection,
} from "../shortcode/HomeJob/HomeJobPage";

const HomeJob = () => {
  return (
    <div>
      <JobDreamSection />
      <PopularCategoriesSection />
      <JobForYouSection />
      <FindJobSection />
    </div>
  );
};

export default HomeJob;
