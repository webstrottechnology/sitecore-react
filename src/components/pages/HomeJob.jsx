import React from "react";
import JobDreamSection, {
  FindJobSection,
  JobForYouSection,
  JobProcessSection,
  JobSpeakerSection,
  JobTeamSection,
  JobTrustedSection,
  JobWorkingProcessSection,
  PopularCategoriesSection,
} from "../shortcode/HomeJob/HomeJobPage";

const HomeJob = () => {
  return (
    <div>
      <JobDreamSection />
      <PopularCategoriesSection />
      <JobForYouSection />
      <FindJobSection />
      <JobWorkingProcessSection />
      <JobTrustedSection />
      <JobTeamSection />
      <JobSpeakerSection />
      <JobProcessSection />
    </div>
  );
};

export default HomeJob;
