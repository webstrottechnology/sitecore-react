import partner1 from "../../../assets/images/partner/partner-logo1.png";
import partner2 from "../../../assets/images/partner/partner-logo2.png";
import partner3 from "../../../assets/images/partner/partner-logo3.png";
import partner4 from "../../../assets/images/partner/partner-logo4.png";
import partner5 from "../../../assets/images/partner/partner-logo5.png";
import partner6 from "../../../assets/images/partner/partner-logo6.png";

import social1 from "../../../assets/images/homecafe/social1.png";
import social2 from "../../../assets/images/homecafe/social2.png";
import social3 from "../../../assets/images/homecafe/social3.png";
import social4 from "../../../assets/images/homecafe/social4.png";
import social5 from "../../../assets/images/homecafe/social5.png";
import social6 from "../../../assets/images/homecafe/social6.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaShoppingCart,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaVimeoV,
  FaPinterestP,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { IoLocation } from "react-icons/io5";

import { FaXTwitter } from "react-icons/fa6";
import f10logo from "../../../assets/images/footer10-logo.svg";

import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

import jobFooterLogo from "../../../assets/images/homejob/jobfooter_logo.png";
import jobFooterGoogleImg from "../../../assets/images/homejob/jobfooter_googleimg.png";
import jobFooterAppStoreImg from "../../../assets/images/homejob/jobfooter_appstoreimg.png";

import footerIcon from "../../../assets/images/homeEvent/icon.png";
import footerLogo from "../../../assets/images/homeEvent/foter-logo.png";

export const footerOneLinks = [
  {
    title: "Company",
    links: [
      { title: "About", url: "/" },
      { title: "Press and Media", url: "/" },
      { title: "Careers", url: "/" },
      { title: "Partners", url: "/" },
      { title: "Legal", url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Help Center", url: "/" },
      { title: "Terms of Service", url: "/" },
      { title: "Hire a Partner", url: "/" },
      { title: "Shopify Community", url: "/" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API Documentation", url: "/" },
      { title: "Salesforce.dev", url: "/" },
      { title: "Office Hours", url: "/" },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "Shop", url: "/" },
      { title: "Salesforce Plus", url: "/" },
      { title: "Linkpop", url: "/" },
      { title: "Shopify for Enterprise", url: "/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "Online Store Builder", url: "/" },
      { title: "Website Builder", url: "/" },
      { title: "Ecommerce Website", url: "/" },
    ],
  },
];

export const footerDataTwo = {
  title: "Bottom\nTo\nTop",

  addresses: [
    {
      heading: "Mr Mark Bolton",
      lines: ["1120 Fifth Avenue", "New York City", "NY 10128", "USA"],
    },
    {
      heading: "Next Web Sales Office",
      lines: ["Port Canto Marina", "06200 Nice", "France"],
    },
  ],

  centerText: "CONTACT US",

  socials: ["Instagram", "Facebook", "Twitter", "YouTube"],

  bottom: {
    copyright: "© 2026 Web. All rights reserved.",
    logo: "m",
    links: ["Terms & Condition", "Privacy", "FAQ"],
  },
};

export const footerDataThree = {
  socialLinks: [
    { icon: <FaFacebookF />, url: "/", label: "Facebook" },
    { icon: <FaXTwitter />, url: "/", label: "Twitter" },
    { icon: <FaLinkedinIn />, url: "/", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "/", label: "Instagram" },
  ],
  footerLinks: [
    { title: "Home", url: "/" },
    { title: "Buyers", url: "/" },
    { title: "Sellers", url: "/" },
    { title: "Our team", url: "/" },
    { title: "About Us", url: "/" },
  ],
  contactInfo: [
    { title: "123 Example Road", url: "/" },
    { title: "New York, NY 12345", url: "/" },
    { title: "email@example.com", url: "/" },
    { title: "(555) 555-5555", url: "/" },
  ],
};

export const footerDataFour = [
  {
    title: "Explore",
    links: [
      "Templates",
      "From Figma to Dora",
      "Dora AI Beta",
      "Dora AI – Figma Plugin",
    ],
  },
  {
    title: "Resources",
    links: [
      "Updates",
      "Help Center",
      "Pricing",
      "Contact",
      "Dora Community",
      "Become an Ambassador",
      "Educational Discounts",
    ],
  },
  {
    title: "Company",
    links: ["Terms & Conditions", "Privacy"],
  },
];

export const footerDataFive = {
  brand: {
    name: "Demo template",
    badge: "New Demo template is here!",
    description: "Showcase your projects, services and expertise with impact.",
    buttons: [
      { label: "Buy Now", type: "primary", icon: <FaShoppingCart /> },
      { label: "Demo", type: "outline", icon: <FaArrowRight /> },
    ],
  },

  columns: [
    {
      title: "Start pages",
      links: [
        "Main home",
        "Software development company",
        "Freelancer portfolio",
        "Digital agency",
        "Creative design studio",
        "Personal portfolio",
        "Web agency",
        "Creative developer",
        "Designer",
      ],
    },
    {
      title: "Portfolio",
      links: ["Works simple", "Works masonry", "Project details"],
    },
    {
      title: "Insights pages",
      links: ["Blog standard", "Blog creative", "Single post"],
    },
    {
      title: "Inner pages",
      links: [
        "About me",
        "About us",
        "Services",
        "Our team",
        "Pricing plans",
        "Frequently asked questions",
        "404 error page",
        "Contact",
      ],
    },
  ],

  moreTemplates: [
    {
      title: "Blayden - Personal Portfolio & Resume HTML Template",
    },
    {
      title: "Ignite - Portfolio and Landing Page Template",
    },
    {
      title: "Braxton - Personal Portfolio & Resume HTML Template",
    },
  ],
};

export const footerDataSix = {
  brand: {
    name: "Demoso",
    description:
      "Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion.",
    awards: [
      { count: "18", label: "Clutch Awards" },
      { count: "5", label: "Awwwards" },
    ],
  },

  columns: [
    {
      title: "Services",
      links: [
        "Customer Experience",
        "Training Programs",
        "Business Strategy",
        "Training Program",
        "ESG Consulting",
        "Development Hub",
      ],
    },
    {
      title: "Resources",
      links: [
        "Contact us",
        "Team Member",
        "Recognitions",
        "Careers",
        "News",
        "Feedback",
      ],
    },
  ],

  newsletter: {
    title: "Subscribe to Our Newsletter.",
    placeholder: "Enter email",
    checkbox: "Agree to our Terms & Condition?",
  },

  contact: [
    {
      icon: FaPhoneAlt,
      text: "+1 (009) 544-7818",
    },
    {
      icon: FaEnvelope,
      text: "info@Demo.com",
    },
  ],

  socials: [
    { icon: FaFacebookF, link: "/" },
    { icon: FaInstagram, link: "/" },
    { icon: FaXTwitter, link: "/" },
    { icon: FaLinkedinIn, link: "/" },
  ],

  copyright: "© 2026 Demo All right reserved",
};

export const footerDataSeven = {
  newsletter: {
    title: "Get In Touch",
    desc: "Don’t miss any updates of our new templates and extensions.!",
    placeholder: "Email",
    button: "Subscribe",
  },

  download: {
    title: "Download",
    links: [
      "Company",
      "Android App",
      "ios App",
      "Desktop",
      "Projects",
      "My tasks",
    ],
  },

  help: {
    title: "Help",
    links: [
      "FAQ",
      "Term & conditions",
      "Reporting",
      "Documentation",
      "Support Policy",
      "Privacy",
    ],
  },

  social: {
    title: "Team Solutions",
    icons: [
      { icon: <FaFacebookF />, link: "/" },
      { icon: <FaXTwitter />, link: "/" },
      { icon: <FaVimeoV />, link: "/" },
      { icon: <FaPinterestP />, link: "/" },
    ],
  },

  bottom: {
    left: "© SawLand Inc.. 2026 All rights reserved.",
    right: (
      <>
        Made with <FaHeart /> in <a href="/">Demo Themes</a>
      </>
    ),
  },
};

export const footerDataEight = {
  about: {
    title: "Let’s Talk",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.",
    socials: [
      { icon: <FaXTwitter />, link: "/" },
      { icon: <FaFacebookF />, link: "/" },
      { icon: <FaPinterestP />, link: "/" },
      { icon: <FaInstagram />, link: "/" },
    ],
  },
  quickLinks: {
    title: "Quick Link",
    links: ["About Us", "Our Team", "Our Portfolio", "Careers", "Contact Us"],
  },
  newsletter: {
    title: "Get the latest inspiration & insights",
    placeholder: "Email Address",
  },
  address: {
    title: "Address",
    text: "4140 Parker Rd. Allentown, New Mexico 31134",
  },
  support: {
    title: "Support",
    links: ["needhelp@company.com", "(+123) 456789 00"],
  },
  copyright: "© 2026 Copyright Reserved by Demo.com",
};

export const footerDataNine = [
  {
    type: "links",
    title: "Links",
    content: [
      { label: "About", url: "/" },
      { label: "Services", url: "/" },
      { label: "RSVP", url: "/" },
      { label: "Gallery", url: "/" },
      { label: "Get Quote", url: "/" },
      { label: "Contact", url: "/" },
    ],
  },
  {
    type: "center",
    title: "Habibi",
    description:
      "We can’t wait to see all of our beloved friends and relatives at our wedding.",
    social: [
      { icon: <FaFacebookF />, url: "/" },
      { icon: <FaXTwitter />, url: "/" },
      { icon: <FaInstagram />, url: "/" },
    ],
  },
  {
    type: "contact",
    title: "Contact",
    email: "Habibi@wpoceans.com",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
];

export const footerDataTen = [
  {
    type: "social",
    logo: f10logo, // ✅ IMAGE PATH
    title: "Get connected\nwith Aigocy on social",
    subtitle: "Don't miss our new updates!",
    items: [
      { name: "Twitter / X", icon: FaXTwitter, url: "/" },
      { name: "Facebook", icon: FaFacebookF, url: "/" },
      { name: "Instagram", icon: FaInstagram, url: "/" },
      { name: "LinkedIn", icon: FaLinkedinIn, url: "/" },
    ],
  },
  {
    type: "bottom",
    menu: [
      { title: "About", url: "/" },
      { title: "Services", url: "/" },
      { title: "Works", url: "/" },
      { title: "Contact", url: "/" },
    ],
    copyright: "© 2026 Aigocy. All Rights Reserved.",
    icon: FaArrowUp,
  },
];

export const SiteCorefooterLinks = {
  partners: [
    { img: partner1 },
    { img: partner2 },
    { img: partner3 },
    { img: partner4 },
    { img: partner5 },
    { img: partner6 },
  ],

  description:
    "Our inspired solutions have helped shape modern acoustic design. Alluring spaces, internationally recognised for their architectura.",

  categories: [
    { name: "Accordion", link: "/components/accordion" },
    { name: "Alert", link: "/components/alert" },
    { name: "Button", link: "/components/button" },
    { name: "Testimonial", link: "/components/testimonial" },
    { name: "Pricing Table", link: "/components/pricingPlan" },
  ],

  usefulLinks: [
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Our Blog", link: "/blog-page" },
    { name: "Team", link: "/team-single" },
    { name: "Product", link: "/product-with-sidebar" },
  ],

  moreInfo: [
    { name: "Contact Us", link: "/Contact" },
    { name: "Login/Register", link: "/login" },
    { name: "Cart", link: "/cart" },
    { name: "Checkout", link: "/checkout" },
    { name: "404 Error", link: "/404" },
  ],

  social: [
    { icon: "fa-whatsapp", link: "https://web.whatsapp.com/" },
    { icon: "fa-instagram", link: "https://www.instagram.com/" },
    { icon: "fa-facebook", link: "https://www.facebook.com/" },
    { icon: "fa-twitter", link: "https://x.com/" },
  ],

  support: {
    text: "Help & Support",
    phone: "+22 54792 01479",
  },
};

export const SitecoreCafeFooterData = {
  contact: [
    {
      id: 1,
      icon: <FaPhoneAlt />,
      text: "+48 35461 35480",
      link: "tel:+483546135480",
    },
    {
      id: 2,
      icon: <MdEmail />,
      text: "aprl132@example.com",
      link: "mailto:aprl132@example.com",
    },
    {
      id: 2,
      icon: <IoLocation />,
      text: "2462 Williams LaneWichita, KS 67202",
      link: "#",
    },
  ],
  quickLinks: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Blog", path: "/blog-page" },
    { name: "Our Team", path: "/team-single" },
    { name: "Portfolio", path: "/portfolio-details" },
    { name: "Product", path: "/product-with-sidebar" },
    { name: "Login/Register", path: "/login" },
  ],

  moreinfo: [
    { name: "Contact Us", path: "/Contact" },
    { name: "Comming Soon", path: "/coming-soon" },
    { name: "Checkout", path: "/checkout" },
    { name: "404 Error", path: "/404" },
  ],
  socials: [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <FaXTwitter />, link: "https://x.com/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/feed/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
  ],
  instagram: [social1, social2, social3, social4, social5, social6],
};

//  jobFooterData

export const jobFooterData = {
  footerColumns: [
    {
      id: 1,
      title: "For Candidate",
      links: [
        { id: 1, title: "Browse Job", link: "#" },
        { id: 2, title: "Account", link: "#" },
        { id: 3, title: "Browse Categories", link: "#" },
        { id: 4, title: "Resume", link: "#" },
        { id: 5, title: "Job List", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Find Jobs",
      links: [
        { id: 1, title: "US Jobs", link: "#" },
        { id: 2, title: "Canada Jobs", link: "#" },
        { id: 3, title: "UK Jobs", link: "#" },
        { id: 4, title: "Jobs in Deuts", link: "#" },
        { id: 5, title: "Emplois En Fance", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Useful links",
      links: [
        { id: 1, title: "About Us", link: "/about-us" },
        { id: 2, title: "Contact Us", link: "/contact-us" },
        { id: 3, title: "Services", link: "/service-single" },
        { id: 4, title: "Product", link: "/product-single-01" },
        { id: 5, title: "Team", link: "/team-single" },
      ],
    },
  ],

  contactInfo: {
    title: "Contact Info",
    items: [
      {
        id: 1,
        title: "email@example.com",
        href: "mailto:email@example.com",
        icon: <FaEnvelope />,
      },
      {
        id: 2,
        title: "+108890795411",
        href: "tel:8890795411",
        icon: <FaPhoneAlt />,
      },
      {
        id: 3,
        title: "5,Road ,ST. VA 3040, USA",
        href: "#",
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  appBox: {
    logo: jobFooterLogo,
    logoAlt: "job-footer-logo",
    logoLink: "#",
    title: "Download App",
    googleImg: jobFooterGoogleImg,
    googleAlt: "google_btn_img",
    appStoreImg: jobFooterAppStoreImg,
    appStoreAlt: "google_btn_img",
  },

  support: {
    phone: "3465739809",
  },

  socialLinks: [
    { id: 1, link: "#", icon: <FaWhatsapp /> },
    { id: 2, link: "#", icon: <FaInstagram /> },
    { id: 3, link: "#", icon: <FaFacebookF /> },
    { id: 4, link: "#", icon: <FaXTwitter /> },
  ],

  policyLinks: [
    { id: 1, title: "Privacy Policy", link: "#" },
    { id: 2, title: "Terms of Services", link: "#" },
    { id: 3, title: "Our Sitemap", link: "#" },
  ],

  copyright: {
    brand: "SITECORE.",
    link: "#",
  },
};

//  HomeeventFooterData

export const eventFooterData = {
  newsletter: {
    icon: footerIcon,
    iconAlt: "icon",
    title: "Subscribe to our Newsletter",
    placeholder: "Enter Your Email Address",
    buttonText: "Subscribe",
  },

  logoSection: {
    logo: footerLogo,
    logoAlt: "logo",
    link: "/",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },

  footerLinks: [
    {
      id: 1,
      title: "Useful Links",
      links: [
        {
          id: 1,
          label: "About Us",
          link: "/about-us",
        },
        {
          id: 2,
          label: "Services",
          link: "/service1",
        },
        {
          id: 3,
          label: "Our Blog",
          link: "/blog-with-sidebar",
        },
        {
          id: 4,
          label: "Portfolio",
          link: "/portfolio-3-column",
        },
      ],
    },

    {
      id: 2,
      title: "Page's",
      links: [
        {
          id: 1,
          label: "team",
          link: "/team01",
        },
        {
          id: 2,
          label: "Coming Soon",
          link: "/coming-soon",
        },
        {
          id: 3,
          label: "Login Register",
          link: "/login-register",
        },
        {
          id: 4,
          label: "Contact",
          link: "/contact-us",
        },
      ],
    },
  ],

  contactSection: {
    title: "Contact",

    items: [
      {
        id: 1,
        icon: <FaPhoneAlt />,
        label: "(+800) 1234 5678 90",
        href: "tel:1234567890",
      },

      {
        id: 2,
        icon: <FaEnvelope />,
        label: "support@sitecore.com",
        href: "mailto:abc@example.com",
      },

      {
        id: 3,
        icon: <FaMapMarkerAlt />,
        label: "94A Oxford St, Paddington NSW 2025, Australia",
        href: "#",
      },
    ],
  },

  copyright: {
    brand: "Sitecore",
    year: "2026-27",
    link: "#",
  },

  socialLinks: [
    {
      id: 1,
      icon: <FaInstagram />,
      link: "#",
    },

    {
      id: 2,
      icon: <FaFacebookF />,
      link: "#",
    },

    {
      id: 3,
      icon: <FaTwitter />,
      link: "#",
    },

    {
      id: 4,
      icon: <FaPinterestP />,
      link: "#",
    },
  ],
};
