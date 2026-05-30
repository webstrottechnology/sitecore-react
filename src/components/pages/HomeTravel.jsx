import { useState, useEffect } from "react";
import TravelTopBannerSection, {
  AdventureTravelSection,
  TravelAboutSection,
  TravelBestPackageSection,
  TravelBlogSection,
  TravelBrandSection,
  TravelClearSection,
  TravelContactSection,
  TravelGallerySection,
  TravelJourneySection,
  TravelTestimonialSection,
} from "../shortcode/HomeTravel/HomeTravelPage";
import { HomeTravelFooter } from "../shortcode/footer/Footer";
import HeaderTravel from "../shortcode/Header/HeaderTravel";

const HomeTravel = () => {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);
  return (
    <div>
      <HeaderTravel direction={direction} setDirection={setDirection} />
      <TravelTopBannerSection />
      <TravelAboutSection />
      <TravelJourneySection />
      <TravelBestPackageSection />
      <AdventureTravelSection />
      <TravelGallerySection />
      <TravelClearSection />
      <TravelTestimonialSection />
      <TravelBlogSection />
      <TravelContactSection />
      <TravelBrandSection />
      <HomeTravelFooter />
    </div>
  );
};

export default HomeTravel;
