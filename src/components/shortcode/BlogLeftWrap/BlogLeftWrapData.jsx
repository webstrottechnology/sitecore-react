import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
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
    title: "Lorem Ipsum is simply dummy text of the printing",
    date: "05 May 2024",
    link: "/blog/post-1",
  },
  {
    img: thumb2,
    title: "Use our free Lorem Ipsum Generator if you are looking",
    date: "05 May 2024",
    link: "/blog/post-2",
  },
  {
    img: thumb3,
    title: "Etiam eu ultrices lacus. Suspendisse id tincidunt.",
    date: "05 May 2024",
    link: "/blog/post-3",
  },
];

export const BlogpopularPosts = [
  {
    img: thumb4,
    title: "Lorem Ipsum is simply dummy text of the printing",
    date: "05 May 2024",
    link: "/blog/post-4",
  },
  {
    img: thumb5,
    title: "Use our free Lorem Ipsum Generator if you are looking",
    date: "05 May 2024",
    link: "/blog/post-5",
  },
  {
    img: thumb6,
    title: "Etiam eu ultrices lacus. Suspendisse id tincidunt.",
    date: "05 May 2024",
    link: "/blog/post-6",
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
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
];

export const Blognewsletter = {
  title: "Newsletter",
  desc: "Subscribe to our MailChimp newsletter and stay up to date with all events coming straight in your mailbox.",
  placeholder: "Your Email Address",
  button: "Submit",
};
