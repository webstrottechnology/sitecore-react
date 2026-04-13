import BlogImageSinglePage from "../../../assets/images/blog-img/BlogImageSinglePage.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import profile1 from "../../../assets/images/blog-img/blog_profile1.png";
import profile2 from "../../../assets/images/blog-img/blog_profile2.png";
import profile3 from "../../../assets/images/blog-img/blog_profile3.png";
import profile4 from "../../../assets/images/blog-img/blog_profile4.png";
import profile5 from "../../../assets/images/blog-img/blog_profile5.png";
import profile6 from "../../../assets/images/blog-img/blog_profile6.png";

export const blogDetail = {
  image: BlogImageSinglePage,
  date: "25",
  month: "Mar",
  title: "Lipsum generator: Lorem Ipsum - All the facts",
  titleLink: "/blog-detail",
  author: "By admin",
  authorLink: "/author/admin",
  commentsCount: 6,
  commentsLink: "#comments",

  categories: [
    { name: "Events", link: "/category/events" },
    { name: "Multimedia", link: "/category/multimedia" },
  ],
};

export const blogParagraphs = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "scrambled it to make a type specimen book. It has survived not only five  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "Various versions have evolved over the years, sometimes by accident, sometimes on purpose. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
];

export const tags = [
  {
    name: "Poultry",
    link: "/tag/poultry",
    active: true,
  },
  {
    name: "Travel",
    link: "/tag/travel",
    active: false,
  },
];

export const socialIcons = [
  {
    icon: FaFacebookF,
    alt: "facebook",
    link: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    alt: "instagram",
    link: "https://instagram.com",
  },
  {
    icon: FaLinkedinIn,
    alt: "linkedin",
    link: "https://linkedin.com",
  },
  {
    icon: FaXTwitter,
    alt: "twitter",
    link: "https://twitter.com",
  },
  {
    icon: FaYoutube,
    alt: "youtube",
    link: "https://youtube.com",
  },
];

export const comments = [
  {
    name: "Frankie S. Stowell",
    img: profile1,
    profileLink: "/user/frankie",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    date: "05 May 2026",
    shareLink: "#",
    shareText: "Share",
  },
  {
    name: "Deborah E. Peck",
    img: profile2,
    profileLink: "/user/deborah",
    text: "It is a long established fact that a reader will be distracted by the readable content.",
    date: "05 May 2026",
    shareLink: "#",
    shareText: "Share",
  },
  {
    name: "Tracy W. Williams",
    img: profile3,
    profileLink: "/user/tracy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "05 May 2026",
    shareLink: "#",
    shareText: "Share",
  },
  {
    name: "Gail J. Higgins",
    img: profile4,
    profileLink: "/user/gail",
    text: "It is a long established fact that a reader will be distracted.",
    date: "05 May 2026",
    shareLink: "#",
    shareText: "Share",
  },
  {
    name: "Gregory M. Ford",
    img: profile5,
    profileLink: "/user/gregory",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "05 May 2026",
    shareLink: "#",
    shareText: "Share",
  },
  {
    name: "Marjorie B. Krieger",
    img: profile6,
    profileLink: "/user/marjorie",
    text: "Various versions have evolved over the years.",
    date: "05 May 2026",
    shareLink: "#",
    shareText: "Share",
  },
];

export const blogVedioDetail = {
  type: "video",

  videoUrl: "https://www.youtube.com/embed/ZrGzRmcIFcU?si=KWGZDwFdnT3ccvx-",

  date: "25",
  month: "Mar",

  title: "Lipsum generator: Lorem Ipsum - All the facts",
  titleLink: "/blog-detail",

  author: "admin",
  authorLink: "/author/admin",

  commentsCount: 6,
  commentsLink: "#comments",

  categories: [
    { name: "Events", link: "/category/events" },
    { name: "Multimedia", link: "/category/multimedia" },
  ],
};

export const blogVimeoDetail = {
  type: "video",

  videoUrl: "https://player.vimeo.com/video/306705787?h=84d2ae9af9",

  date: "25",
  month: "Mar",

  title: "Lipsum generator: Lorem Ipsum - All the facts",
  titleLink: "/blog-detail",

  author: "admin",
  authorLink: "/author/admin",

  commentsCount: 6,
  commentsLink: "#comments",

  categories: [
    { name: "Events", link: "/category/events" },
    { name: "Multimedia", link: "/category/multimedia" },
  ],
};

export const blogAudioDetail = {
  type: "video",

  videoUrl:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1553650693&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true",

  date: "25",
  month: "Mar",

  title: "Lipsum generator: Lorem Ipsum - All the facts",
  titleLink: "/blog-detail",

  author: "admin",
  authorLink: "/author/admin",

  commentsCount: 6,
  commentsLink: "#comments",

  categories: [
    { name: "Events", link: "/category/events" },
    { name: "Multimedia", link: "/category/multimedia" },
  ],
};

import slide1 from "../../../assets/images/blog-img/blog_image_page_slider1.png";
import slide2 from "../../../assets/images/blog-img/blog_image_page_slider2.png";
import slide3 from "../../../assets/images/blog-img/blog_image_page_slider3.png";

export const blogSliderDetail = {
  id: 1,
  type: "slider",

  images: [slide1, slide2, slide3],

  date: "25",
  month: "Mar",

  title: "Lipsum generator: Lorem Ipsum - All the facts",
  titleLink: "/blog-detail",

  author: "admin",
  authorLink: "/author/admin",

  commentsCount: 6,
  commentsLink: "#comments",

  categories: [
    { name: "Events", link: "/category/events" },
    { name: "Multimedia", link: "/category/multimedia" },
  ],
};

import { ImLink } from "react-icons/im";

export const blogQuoteDetail = {
  quote:
    "THE BLINDING SPLENDOR OF THE DIAMOND. THE MIGHTY POWER OF THE ROCKET.",
  author: "Awesome Author",
  link: "/blog-detail-quote",
  icon: ImLink,
};
