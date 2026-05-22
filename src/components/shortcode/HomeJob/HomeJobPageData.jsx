import React from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

import {
  FaBell,
  FaBookmark,
  FaFileAlt,
} from "react-icons/fa";

// jobDreamData.js

import people1 from "../../../assets/images/homejob/jobpeople-img1.png";
import people2 from "../../../assets/images/homejob/jobpeople-img2.png";
import dreamImg from "../../../assets/images/homejob/jobdream-img.png";
import foryou1 from "../../../assets/images/homejob/foryoudetailimg1.png";
import foryou2 from "../../../assets/images/homejob/foryoudetailimg2.png";
import foryou3 from "../../../assets/images/homejob/foryoudetailimg3.png";
import foryou4 from "../../../assets/images/homejob/foryoudetailimg4.png";

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