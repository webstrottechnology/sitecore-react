import blogImg1 from "../../../assets/images/blog-img/blog_image_page1.png";
import slider1 from "../../../assets/images/blog-img/blog_image_page_slider1.png";
import slider2 from "../../../assets/images/blog-img/blog_image_page_slider2.png";
import slider3 from "../../../assets/images/blog-img/blog_image_page_slider3.png";

export const blogArticles = [
  {
    id: 1,
    type: "image",
    img: blogImg1,
    title: "Navigating Change: Strategies for Corporate Resilience in 2024",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "25",
    month: "Mar",
    author: "admin",
    comments: 2,
    category: "Events",
    tag: "Multimedia",
    link: "/blog-detail",
  },

  {
    id: 2,
    type: "youtube",
    video: "https://www.youtube.com/embed/ZrGzRmcIFcU",
    title: "The Power of Collaboration: Fostering a Culture of Teamwork",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "24",
    month: "Mar",
    author: "admin",
    comments: 2,
    category: "Events",
    tag: "Multimedia",
    link: "/blog-detail-video",
  },

  {
    id: 3,
    type: "vimeo",
    video: "https://player.vimeo.com/video/306705787?h=84d2ae9af9",
    title:
      "Employee Wellness: Prioritizing Health and Happiness in the Workplace - Vimeo video",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "23",
    month: "Mar",
    author: "admin",
    comments: 2,
    category: "Events",
    tag: "Multimedia",
    link: "/blog-detail-vimeo",
  },

  {
    id: 4,
    type: "audio",
    audio:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1553650693&color=%23ff5500",
    title:
      "Corporate Social Responsibility: Making an Impact Beyond Business - Audio",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "22",
    month: "Mar",
    author: "admin",
    comments: 2,
    category: "Events",
    tag: "Multimedia",
    link: "/blog-detail-audio",
  },

  {
    id: 5,
    type: "slider",
    images: [slider1, slider2, slider3],
    title:
      "Embracing Diversity and Inclusion: Building a Better Workplace - Slider",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "21",
    month: "Mar",
    author: "admin",
    comments: 2,
    category: "Events",
    tag: "Multimedia",
    link: "/blog-detail-slider",
  },

  {
    id: 6,
    type: "quote",
    quote:
      "THE BLINDING SPLENDOR OF THE DIAMOND. THE MIGHTY POWER OF THE ROCKET.",
    author: "Awesome Author",
    link: "/blog-detail-quote",
  },
];