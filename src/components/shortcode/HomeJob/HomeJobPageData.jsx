import React from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

import { HiUserGroup } from "react-icons/hi";

import { FaBell, FaBookmark, FaFileAlt } from "react-icons/fa";

import { FaRegUser, FaFileUpload, FaSearch } from "react-icons/fa";

// jobDreamData.js

import people1 from "../../../assets/images/homejob/jobpeople-img1.png";
import people2 from "../../../assets/images/homejob/jobpeople-img2.png";
import dreamImg from "../../../assets/images/homejob/jobdream-img.png";
import foryou1 from "../../../assets/images/homejob/foryoudetailimg1.png";
import foryou2 from "../../../assets/images/homejob/foryoudetailimg2.png";
import foryou3 from "../../../assets/images/homejob/foryoudetailimg3.png";
import foryou4 from "../../../assets/images/homejob/foryoudetailimg4.png";
import jobtrustedlogo1 from "../../../assets/images/homejob/jobtrustedlogo1.png";
import jobtrustedlogo2 from "../../../assets/images/homejob/jobtrustedlogo2.png";
import jobtrustedlogo3 from "../../../assets/images/homejob/jobtrustedlogo3.png";
import jobtrustedlogo4 from "../../../assets/images/homejob/jobtrustedlogo4.png";
import jobtrustedlogo5 from "../../../assets/images/homejob/jobtrustedlogo5.png";
import jobtrustedlogo6 from "../../../assets/images/homejob/jobtrustedlogo6.png";

import jobteamsliderImg1 from "../../../assets/images/homejob/jobteamslider_img1.png";
import jobteamsliderImg2 from "../../../assets/images/homejob/jobteamslider_img2.jpg";
import jobteamsliderImg3 from "../../../assets/images/homejob/jobteamslider_img3.jpg";
import jobteamsliderImg4 from "../../../assets/images/homejob/jobteamslider_img4.jpg";
import jobteamnavImg1 from "../../../assets/images/homejob/jobteamnavimg-1.png";
import jobteamnavImg2 from "../../../assets/images/homejob/jobteamnavimg-2.png";
import jobteamnavImg3 from "../../../assets/images/homejob/jobteamnavimg-3.png";
import jobteamnavImg4 from "../../../assets/images/homejob/jobteamnavimg-4.png";
import jobspeakerShape1 from "../../../assets/images/homejob/jobspeaker_shape1img.png";
import jobspeakerShape2 from "../../../assets/images/homejob/jobquestionshape1.png";

export const heroContentDataSction1 = {
  tag: "No.1 Jobseeker Platform",
  title: "Build",
  highlight: "Your Dream",
  subtitle: "Career With Us !",
  image: dreamImg,
};

export const radioOptionsDataSction1 = [
  {
    id: 1,
    label: "Full Time",
  },
  {
    id: 2,
    label: "Part Time",
  },
];

export const jobTitlesDataSction1 = [
  {
    id: 1,
    title: "PHP Developer",
  },
  {
    id: 2,
    title: "Frontend Developer",
  },
  {
    id: 3,
    title: "Backend Developer",
  },
  {
    id: 4,
    title: "Java Developer",
  },
];

export const categoriesJobDataSction1 = [
  {
    id: 1,
    category: "Senior Developer",
  },
  {
    id: 2,
    category: "Junior Developer",
  },
  {
    id: 3,
    category: "2+ Experience",
  },
  {
    id: 4,
    category: "Fresher",
  },
];

export const peopleImagesDataSction1 = [
  {
    id: 1,
    image: people1,
  },
  {
    id: 2,
    image: people2,
  },
];

export const peopleStatusDataSction1 = {
  totalPeople: "87K+",
  title: "People Hired",
};

// popularCategoriesData

export const popularCategoriesData = [
  {
    id: 1,
    title: "Education Training",
    positions: 6,
    reverse: false,
    icon: <FaBookOpen size={50} color="#685CFC" />,
  },

  {
    id: 2,
    title: "Development",
    positions: 8,
    reverse: true,
    icon: <FaLaptopCode size={50} color="#685CFC" />,
  },

  {
    id: 3,
    title: "Business Management",
    positions: 10,
    reverse: false,
    icon: <FaBriefcase size={50} color="#685CFC" />,
  },

  {
    id: 4,
    title: "Online Learning",
    positions: 12,
    reverse: true,
    icon: <FaGraduationCap size={50} color="#685CFC" />,
  },
];

//  jobForYouData

export const jobForYouSectionData = [
  {
    id: 1,
    image: foryou1,
    title: "Account Manager",
  },

  {
    id: 2,
    image: foryou2,
    title: "Graphics Designer",
  },

  {
    id: 3,
    image: foryou3,
    title: "Data Entry",
  },

  {
    id: 4,
    image: foryou4,
    title: "High Tech Pvt.Ltd.",
  },
];

//  findJobButtonData

export const findJobButtonData = [
  {
    id: 1,
    title: "Get notified",
    icon: <FaBell />,
  },

  {
    id: 2,
    title: "Bookmark Jobs",
    icon: <FaBookmark />,
  },

  {
    id: 3,
    title: "Apply with your Resume",
    icon: <FaFileAlt />,
  },
];

// jobWorkingProcessData

export const jobWorkingProcessData = {
  heading: "Our Working Process",

  description:
    "Convallis gravida odio viverra nisi, aliquam sem netus. Sed at semper at lacus. Nam integer nunc pellentesque nunc pulvinadonec scelerisque. Malesuada massa facilisis aliquam nunc ut nisl tincidunt nibh. Massa feugiat vitae habitant metus viverra. Praesent massa.",

  youtubeId: "ozyQvYYBKFk",
};

//  trustedLogoGroupsData

export const trustedLogoGroupsData = {
  left: [
    {
      id: 1,
      img: jobtrustedlogo1,
      alt: "jobtrusted-img",
      className: "",
    },
    {
      id: 2,
      img: jobtrustedlogo2,
      alt: "jobtrusted-img",
      className: "jobtruestedulmar_right",
    },
    {
      id: 3,
      img: jobtrustedlogo3,
      alt: "jobtrusted-img",
      className: "",
    },
  ],

  right: [
    {
      id: 4,
      img: jobtrustedlogo4,
      alt: "jobtrusted-img",
      className: "",
    },
    {
      id: 5,
      img: jobtrustedlogo5,
      alt: "jobtrusted-img",
      className: "jobtruestedulmar_left",
    },
    {
      id: 6,
      img: jobtrustedlogo6,
      alt: "jobtrusted-img",
      className: "",
    },
  ],
};

//  jobTrustedPlansData

export const jobTrustedPlansData = [
  {
    id: 1,
    title: "Basic Jobs",
    price: "4",
    duration: "Months",
    features: [
      "1 job posting",
      "0 featured job",
      "Premium Support 24/7",
      "Job displayed for 20 days",
    ],
    btnText: "Find A Job",
  },
  {
    id: 2,
    title: "Standard Jobs",
    price: "10",
    duration: "Months",
    features: [
      "1 job posting",
      "0 featured job",
      "Premium Support 24/7",
      "Job displayed for 20 days",
    ],
    btnText: "Find A Job",
  },
  {
    id: 3,
    title: "Golden Jobs",
    price: "15",
    duration: "Months",
    features: [
      "1 job posting",
      "0 featured job",
      "Premium Support 24/7",
      "Job displayed for 20 days",
    ],
    btnText: "Find A Job",
  },
];

//  teamDescription

export const teamDescription =
  "Convallis gravida odio viverra nisi, aliquam sem netus. Sed atlacus. Nam integer nunc pellentesque nunc pulvinadonec scelerisque. Malesuada massa facilisis aliquam nunc ut nisl tincidunt nibh. Massa feugiat vitae habitant metus viverra. Praesent massa to habitant sapien odio ac scelerisque praesent id.";

// jobTeamData

export const jobTeamData = [
  {
    id: 1,
    image: jobteamsliderImg1,
    alt: "jobteamslider_img1",
    heading: "Our Awesome Team",
    name: "Danielle Bryant",
    designation: "CEO Of Company",
    description:
      "Danielle Bryant is a highly experienced CEO with more than 10 years of leadership in the corporate industry. She focuses on innovation, teamwork, and helping businesses grow successfully across global markets.",
  },

  {
    id: 2,
    image: jobteamsliderImg2,
    alt: "jobteamslider_img2",
    heading: "Creative Team Member",
    name: "Michael Anderson",
    designation: "Senior Developer",
    description:
      "Michael Anderson is a passionate frontend and backend developer who loves building scalable web applications. He specializes in React, Node.js, and creating user-friendly digital experiences.",
  },

  {
    id: 3,
    image: jobteamsliderImg3,
    alt: "jobteamslider_img3",
    heading: "Professional Experts",
    name: "Sophia Williams",
    designation: "UI/UX Designer",
    description:
      "Sophia Williams creates modern and attractive user interfaces with a strong focus on user experience. Her creative designs help brands build strong digital identities and customer engagement.",
  },

  {
    id: 4,
    image: jobteamsliderImg4,
    alt: "jobteamslider_img4",
    heading: "Meet Our Leaders",
    name: "James Robert",
    designation: "Marketing Head",
    description:
      "James Robert leads marketing strategies and brand campaigns with innovative ideas. He has extensive experience in digital marketing, business promotion, and audience engagement strategies.",
  },
];

// jobTeamNavData

export const jobTeamNavData = [
  {
    id: 1,
    image: jobteamnavImg1,
    alt: "",
  },
  {
    id: 2,
    image: jobteamnavImg2,
    alt: "",
  },
  {
    id: 3,
    image: jobteamnavImg3,
    alt: "",
  },
  {
    id: 4,
    image: jobteamnavImg4,
    alt: "",
  },
];

//  jobSpeakerData

export const jobSpeakerData = [
  {
    id: 1,
    icon: <HiUserGroup />,
    title: "Are You Recruiting?",
    description:
      "Your next role could be with one of these top leading organizations",
    btnText: "Apply Now",
    btnLink: "/",
    shape1: jobspeakerShape1,
    shape2: jobspeakerShape2,
  },
  {
    id: 2,
    icon: <FaBriefcase />,
    title: "Looking For A Job?",
    description:
      "Find your dream job with trusted companies and grow your career faster.",
    btnText: "Apply Now",
    btnLink: "/",
    shape1: jobspeakerShape1,
    shape2: jobspeakerShape2,
  },
];

// jobProcessData

export const jobProcessData = [
  {
    id: 1,
    className: "jobprocess_innerbox",
    icon: <FaRegUser />,
    title: "Create Account",
    description: "Risus commodo viverra and maecenas accumsan lacus vel facilisis.",
    btnText: "Apply Now",
    btnLink: "#",
  },
  {
    id: 2,
    className: "",
    icon: <FaFileUpload />,
    title: "Upload Resume",
    description: "Risus commodo viverra and maecenas accumsan lacus vel facilisis.",
    btnText: "Apply Now",
    btnLink: "#",
  },
  {
    id: 3,
    className: "",
    icon: <FaSearch />,
    title: "Search Job",
    description: "Risus commodo viverra and maecenas accumsan lacus vel facilisis.",
    btnText: "Apply Now",
    btnLink: "#",
  },
];