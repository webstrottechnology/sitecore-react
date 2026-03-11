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
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/blog-detail",
  },

  /* YOUTUBE BLOG */
  {
    id: 2,
    type: "youtube",
    video: "https://www.youtube.com/embed/ZrGzRmcIFcU",
    date: "24",
    month: "Mar",

    title: "The Power of Collaboration: Fostering a Culture of Teamwork",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/blog-detail-video",
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
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/blog-detail-vimeo",
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
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/blog-detail-audio",
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
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

    author: "admin",
    comments: 2,
    category: "Events",

    link: "/blog-detail-slider",
  },

  /* QUOTE BLOG */
  {
    id: 6,
    type: "quote",

    quote:
      "THE BLINDING SPLENDOR OF THE DIAMOND. THE MIGHTY POWER OF THE ROCKET.",
    author: "Awesome Author",

    link: "/blog-detail-quote",
  },
];