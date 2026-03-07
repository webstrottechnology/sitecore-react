import aboutUs01 from "../../../assets/images/aboutUs_icon01.png";
import aboutUs02 from "../../../assets/images/aboutUs_icon02.png";
import aboutUs03 from "../../../assets/images/aboutUs_icon03.png";

/* ---------------- ABOUT US DATA ---------------- */

export const AboutUsData = {
  badge: "About Company",
  heading: "We turn information into actionable",
  subText: "The purpose of lorem ipsum is to create",

  experience: {
    years: 20,
    label: "Years",
    description: "Of Experiences",
    details:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },

  buttonText: "Learn More",

  services: [
    {
      id: 1,
      title: "Medical Counseling",
      description:
        "You need to be sure there isn't anything embarrassing hidden in the middle of text.",
      icon: aboutUs01,
    },
    {
      id: 2,
      title: "Qualified Doctors",
      description:
        "Use reliable tools to check for hidden or inappropriate content.",
      icon: aboutUs02,
    },
    {
      id: 3,
      title: "Emergency Services",
      description:
        "Double-checking content ensures professionalism and avoids potential issues.",
     icon: aboutUs03,
    },
  ],
};
