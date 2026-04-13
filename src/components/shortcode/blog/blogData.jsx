// src/data/newsData.js

import leftBlogImg1 from "../../../assets/images/left_blog_img1.png";
import leftBlogImg2 from "../../../assets/images/left_blog_img2.png";
import leftBlogImg3 from "../../../assets/images/left_blog_img3.png";

import rightBlogImg1 from "../../../assets/images/right_blog_img1.png";
import rightBlogImg2 from "../../../assets/images/right_blog_img2.png";
import rightBlogImg3 from "../../../assets/images/right_blog_img3.png";
import rightBlogImg4 from "../../../assets/images/right_blog_img4.png";
import rightBlogImg5 from "../../../assets/images/right_blog_img5.png";

import img1 from "../../../assets/images/blog-img/blog_slider_img1.png";
import img2 from "../../../assets/images/blog-img/blog_slider_img2.png";
import img3 from "../../../assets/images/blog-img/blog_slider_img3.png";
import img4 from "../../../assets/images/blog-img/blog_slider_img4.png";

import imgA1 from "../../../assets/images/blog-img/blogpostA_img1.png";
import imgA2 from "../../../assets/images/blog-img/blogpostA_img2.png";
import imgA3 from "../../../assets/images/blog-img/blogpostA_img3.png";

import imgB1 from "../../../assets/images/blog-img/blogpostB1_img.png";
import imgB2 from "../../../assets/images/blog-img/blogpostB2_img.png";
import imgB3 from "../../../assets/images/blog-img/blogpostB3_img.png";

/* ---------------- BLOG DATA ONE ---------------- */

export const HomeBlogData = {
  leftSliderBlog: [
    {
      id: 1,
      title: "How To Manage Business Online",
      date: "Feb 8, 2026",
      image: leftBlogImg1,
      tag: "Breaking News",
      description: `"I can't do that" is a phrase often used when faced with difficult tasks. 
However, it's essential to remember that we are often more capable than we think. 
What may seem insurmountable today could become achievable with time and effort.`,
    },
    {
      id: 2,
      title: "Digital Marketing Trends in 2026",
      date: "Feb 9, 2026",
      image: leftBlogImg2,
      tag: "Trending",
      description: `Digital marketing continues to evolve rapidly. Businesses are focusing 
on AI-driven campaigns, personalized content, and data analytics to improve 
customer engagement and conversion rates.`,
    },
    {
      id: 3,
      title: "Startup Growth Strategies That Work",
      date: "Feb 7, 2026",
      image: leftBlogImg3,
      tag: "Featured",
      description: `Startups need smart strategies to scale effectively. From building 
strong teams to leveraging technology and customer feedback, sustainable growth 
requires planning and adaptability.`,
    },
  ],

  rightListBlog: [
    {
      id: 4,
      title: "The most popular new mobile application",
      date: " Feb 10, 2026",
      image: rightBlogImg1,
      category: "Technology",
    },
    {
      id: 5,
      title: "Design Break Through Upgrades Products",
      date: " August 12, 2026",
      image: rightBlogImg2,
      category: "Design",
    },
    {
      id: 6,
      title: "Three quarters of construction workers",
      date: " April 1, 2026",
      image: rightBlogImg3,
      category: "Construction",
    },
    {
      id: 7,
      title: "Company launches new software Channel",
      date: " May 4, 2026",
      image: rightBlogImg4,
      category: "Software",
    },
    {
      id: 8,
      title: "Design Break Through Upgrades Products",
      date: " August 7, 2026",
      image: rightBlogImg5,
      category: "Design",
    },
  ],
};

export const blogDataOne = [
  {
    id: 1,
    type: "image",
    date: "15 July",
    author: "R.K Roy",
    title: "Why Is Anti-Aging Serum So Effective After 30?",
    image: img1,
    link: "/blog/anti-aging-serum",
  },
  {
    id: 2,
    type: "slider",
    date: "05 July",
    author: "Jhons Roy",
    title: "Acne And Top Natural Components To Treat It With",
    images: [img2, img3, img4],
    link: "/blog/acne-natural-treatment",
  },
  {
    id: 3,
    type: "video",
    date: "11 July",
    author: "Oly Mark",
    title: "Hand-Made Glowing Skin With Love, Just For You!",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    link: "/blog/glowing-skin",
  },
];

export const blogDataTwo = [
  {
    id: 1,
    type: "image",
    author: "By Author",
    comments: "08",
    title: "Construction Safety Workshops: Empowering Workers.",
    image: imgA1,
    link: "/blog/construction-safety",
  },
  {
    id: 2,
    type: "slider",
    author: "By Author",
    comments: "08",
    title: "Building Renovation Tips: Enhancing Strength and Efficiency.",
    images: [imgA3, imgA2, imgA1],
    link: "/blog/building-renovation",
  },
  {
    id: 3,
    type: "video",
    author: "By Author",
    comments: "08",
    title: "Construction Consulting: Expert Guidance for Your Project.",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    link: "/blog/construction-consulting",
  },
];

export const blogDataThree = [
  {
    id: 1,
    image: imgB1,
    date: "25",
    month: "Mar",
    author: "admin",
    comments: 2,
    title: "Workplace Safety Concerns: The Plight of Construction Workers",
    link: "image-post",
  },
  {
    id: 2,
    image: imgB2,
    date: "26",
    month: "Mar",
    author: "admin",
    comments: 2,
    title: "Large-Scale Projects and Construction Worker Challenges",
    link: "image-post",
  },
  {
    id: 3,
    image: imgB3,
    date: "27",
    month: "Mar",
    author: "admin",
    comments: 2,
    title: "Understanding the Risk: Construction Workers on Large Projects",
    link: "image-post",
  },

  {
    id: 4,
    image: imgB1,
    date: "27",
    month: "June",
    author: "admin",
    comments: 2,
    title: "Large-Scale Projects and Construction Worker Challenges",
    link: "image-post",
  },

  {
    id: 3,
    image: imgB2,
    date: "27",
    month: "April",
    author: "admin",
    comments: 2,
    title: "Workplace Safety Concerns: The Plight of Construction Workers",
    link: "image-post",
  },
];

export const blogDataFour = [
  {
    id: 1,
    image: imgB1,
    date: "25",
    month: "Mar",
    author: "admin",
    comments: 2,
    title: "Workplace Safety Concerns: The Plight of Construction Workers",
    link: "image-post",
  },
  {
    id: 2,
    image: imgB2,
    date: "26",
    month: "Mar",
    author: "admin",
    comments: 2,
    title: "Large-Scale Projects and Construction Worker Challenges",
    link: "image-post",
  },
  {
    id: 3,
    image: imgB3,
    date: "27",
    month: "Mar",
    author: "admin",
    comments: 2,
    title: "Understanding the Risk: Construction Workers on Large Projects",
    link: "image-post",
  },

  {
    id: 4,
    image: imgB1,
    date: "27",
    month: "June",
    author: "admin",
    comments: 2,
    title: "Understanding the Risk: Construction Workers on Large Projects",
    link: "image-post",
  },

  {
    id: 3,
    image: imgB2,
    date: "27",
    month: "April",
    author: "admin",
    comments: 2,
    title: "Understanding the Risk: Construction Workers on Large Projects",
    link: "image-post",
  },
];
