import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import thumb1 from "../../../assets/images/blog-img/thumbnail1.jpg";
import thumb2 from "../../../assets/images/blog-img/thumbnail2.jpg";
import thumb3 from "../../../assets/images/blog-img/thumbnail3.jpg";
import thumb4 from "../../../assets/images/blog-img/thumbnail4.jpg";
import thumb5 from "../../../assets/images/blog-img/thumbnail5.jpg";
import thumb6 from "../../../assets/images/blog-img/thumbnail6.jpg";

export const Blogcategories = [
  { name: "Show all", count: 20, active: true, link: "/blog" },
  { name: "Business", count: 32, link: "/blog/business" },
  { name: "Inspiration", count: 11, link: "/blog/inspiration" },
  { name: "News", count: 28, link: "/blog/news" },
  { name: "Photography", count: 20, link: "/blog/photography" },
  { name: "Creative", count: 28, link: "/blog/creative" },
];

export const BlogrecentPosts = [
  {
    img: thumb1,
    title: "Large image files can slow down your website.",
    date: "05 May2026",
    link: "/image-post",
  },
  {
    img: thumb2,
    title: " which may lead to a poor user experience.",
    date: "05 May2026",
    link: "/image-post",
  },
  {
    img: thumb3,
    title: "They longer on your page and interacting with your content.",
    date: "05 May2026",
    link: "/image-post",
  },
];

export const BlogpopularPosts = [
  {
    img: thumb4,
    title: "Maintaining a uniform color, design elements, and image quality.",
    date: "05 May2026",
    link: "/image-post",
  },
  {
    img: thumb5,
    title: "People are naturally drawn to visual content to perform better.",
    date: "05 May2026",
    link: "/image-post",
  },
  {
    img: thumb6,
    title: "Image-based posts not only make your content more appealing.",
    date: "05 May2026",
    link: "/image-post",
  },
];

export const BlogTags = [
  { name: "Poultry", link: "/tag/poultry" },
  { name: "Travel", link: "/tag/travel" },
  { name: "Breeder", link: "/tag/breeder" },
  { name: "Feed", link: "/tag/feed" },
  { name: "Chicks", link: "/tag/chicks" },
];

export const BlogsocialIcons = [
  { icon: <FaFacebookF />, link: "https://facebook.com" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  { icon: <FaXTwitter />, link: "https://twitter.com" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
];

export const Blognewsletter = {
  title: "Newsletter",
  desc: "Subscribe to our MailChimp newsletter and stay up to date with all events coming straight in your mailbox.",
  placeholder: "Your Email Address",
  button: "Submit",
};
