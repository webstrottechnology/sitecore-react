import blogImg1 from "../../../assets/images/blog-img/blog_image_page1.png";
import slider1 from "../../../assets/images/blog-img/blog_image_page_slider1.png";
import slider2 from "../../../assets/images/blog-img/blog_image_page_slider2.png";
import slider3 from "../../../assets/images/blog-img/blog_image_page_slider3.png";

export const blogArticles = [
  /* IMAGE BLOG */
  {
    id: 1,
    type: "image",
    img: blogImg1,
    date: "25",
    month: "Mar",

    title: "Navigating Change: Strategies for Corporate Resilience in2026",
    desc: "Modern development practices emphasize clean code architecture, version control systems like Git, and frameworks such as React, Angular, or Vue.js that streamline development and enhance performance.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/image-post",
  },

  /* SLIDER BLOG */
  {
    id: 5,
    type: "slider",
    images: [slider1, slider2, slider3],
    date: "21",
    month: "Mar",

    title:
      "Embracing Diversity and Inclusion: Building a Better Workplace - Slider",
    desc: " On the back end, server-side languages such as PHP, Python, or Node.js work with databases to handle data processing, user authentication, and content management. Modern development practices emphasize clean code architecture.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/slider-post",
  },
  /* YOUTUBE BLOG */
  {
    id: 2,
    type: "youtube",
    video: "https://www.youtube.com/embed/ZrGzRmcIFcU",
    date: "24",
    month: "Mar",

    title: "The Power of Collaboration: Fostering a Culture of Teamwork",
    desc: "Whether building a simple blog or a complex e-commerce platform, effective website development ensures your online presence is fast, secure, accessible, and tailored to meet both user needs and business goals.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/youtube-post",
  },

  /* VIMEO BLOG */
  {
    id: 3,
    type: "vimeo",
    video: "https://player.vimeo.com/video/306705787?h=84d2ae9af9",
    date: "23",
    month: "Mar",

    title:
      "Employee Wellness: Prioritizing Health and Happiness in the Workplace - Vimeo Video",
    desc: "Developers write code using languages like HTML, CSS, and JavaScript to create everything from the layout you see to the buttons you click. Whether you're starting a blog, opening an online store.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/vimeo-post",
  },

  /* AUDIO BLOG */
  {
    id: 4,
    type: "audio",
    audio:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1553650693&color=%23ff5500",
    date: "22",
    month: "Mar",

    title:
      "Corporate Social Responsibility: Making an Impact Beyond Business - Audio",
    desc: "In today's digital landscape, a well-developed website serves as the cornerstone of any successful business presence. Website development goes beyond just coding—it's about creating a digital storefront that engages visitors.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/audio-post",
  },

  /* QUOTE BLOG */
  {
    id: 6,
    type: "quote",

    quote:
      "THE BLINDING SPLENDOR OF THE DIAMOND. THE MIGHTY POWER OF THE ROCKET.",
    author: "Awesome Author",

    link: "/quote-post",
  },
];
