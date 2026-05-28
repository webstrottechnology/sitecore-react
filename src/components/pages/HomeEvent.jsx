import React, { useState, useEffect } from "react";
import EventSliderSection, {
  EventAboutSection,
  EventBlogSection,
  EventCounterSection,
  EventJoinSection,
  EventMeetMarketSection,
  EventPartnerSection,
  EventPricingSection,
  EventScheduleSection,
  EventSpeakersSection,
  EventTestimonialSection,
} from "../shortcode/HomeEvent/HomeEventPage";
import { HoomeEventFooter } from "../shortcode/footer/Footer";
import HeaderEvent from "../shortcode/Header/HeaderEvent";

const HomeEvent = () => {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);
  return (
    <div>
      <HeaderEvent direction={direction} setDirection={setDirection} />
      <EventSliderSection />
      <EventCounterSection />
      <EventMeetMarketSection />
      <EventSpeakersSection />
      <EventAboutSection />
      <EventJoinSection />
      <EventPricingSection />
      <EventScheduleSection />
      <EventTestimonialSection />
      <EventBlogSection />
      <EventPartnerSection />
      <HoomeEventFooter />
    </div>
  );
};

export default HomeEvent;
