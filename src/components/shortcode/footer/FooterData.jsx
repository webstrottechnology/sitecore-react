import partner1 from "../../../assets/images/partner/partner-logo1.png";
import partner2 from "../../../assets/images/partner/partner-logo2.png";
import partner3 from "../../../assets/images/partner/partner-logo3.png";
import partner4 from "../../../assets/images/partner/partner-logo4.png";
import partner5 from "../../../assets/images/partner/partner-logo5.png";
import partner6 from "../../../assets/images/partner/partner-logo6.png";

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

import { FaXTwitter } from "react-icons/fa6";
import f10logo from "../../../assets/images/footer10-logo.svg";

export const footerOneLinks = [
  {
    title: "Company",
    links: [
      { title: "About", url: "Javascript:0" },
      { title: "Press and Media", url: "Javascript:0" },
      { title: "Careers", url: "Javascript:0" },
      { title: "Partners", url: "Javascript:0" },
      { title: "Legal", url: "Javascript:0" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Help Center", url: "Javascript:0" },
      { title: "Terms of Service", url: "Javascript:0" },
      { title: "Hire a Partner", url: "Javascript:0" },
      { title: "Shopify Community", url: "Javascript:0" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API Documentation", url: "Javascript:0" },
      { title: "Salesforce.dev", url: "Javascript:0" },
      { title: "Office Hours", url: "Javascript:0" },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "Shop", url: "Javascript:0" },
      { title: "Salesforce Plus", url: "Javascript:0" },
      { title: "Linkpop", url: "Javascript:0" },
      { title: "Shopify for Enterprise", url: "Javascript:0" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "Online Store Builder", url: "Javascript:0" },
      { title: "Website Builder", url: "Javascript:0" },
      { title: "Ecommerce Website", url: "Javascript:0" },
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
    { icon: <FaFacebookF />, url: "Javascript:0", label: "Facebook" },
    { icon: <FaTwitter />, url: "Javascript:0", label: "Twitter" },
    { icon: <FaLinkedinIn />, url: "Javascript:0", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "Javascript:0", label: "Instagram" },
  ],
  footerLinks: [
    { title: "Home", url: "Javascript:0" },
    { title: "Buyers", url: "Javascript:0" },
    { title: "Sellers", url: "Javascript:0" },
    { title: "Our team", url: "Javascript:0" },
    { title: "About Us", url: "Javascript:0" },
  ],
  contactInfo: [
    { title: "123 Example Road", url: "Javascript:0" },
    { title: "New York, NY 12345", url: "Javascript:0" },
    { title: "email@example.com", url: "Javascript:0" },
    { title: "(555) 555-5555", url: "Javascript:0" },
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
    { icon: FaFacebookF, link: "Javascript:0" },
    { icon: FaInstagram, link: "Javascript:0" },
    { icon: FaXTwitter, link: "Javascript:0" },
    { icon: FaLinkedinIn, link: "Javascript:0" },
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
      { icon: <FaTwitter />, link: "/" },
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
      { icon: <FaTwitter />, link: "/" },
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
      { label: "About", url: "Javascript:0" },
      { label: "Services", url: "Javascript:0" },
      { label: "RSVP", url: "Javascript:0" },
      { label: "Gallery", url: "Javascript:0" },
      { label: "Get Quote", url: "Javascript:0" },
      { label: "Contact", url: "Javascript:0" },
    ],
  },
  {
    type: "center",
    title: "Habibi",
    description:
      "We can’t wait to see all of our beloved friends and relatives at our wedding.",
    social: [
      { icon: <FaFacebookF />, url: "Javascript:0" },
      { icon: <FaTwitter />, url: "Javascript:0" },
      { icon: <FaInstagram />, url: "Javascript:0" },
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
      { name: "Twitter / X", icon: FaXTwitter, url: "Javascript:0" },
      { name: "Facebook", icon: FaFacebookF, url: "Javascript:0" },
      { name: "Instagram", icon: FaInstagram, url: "Javascript:0" },
      { name: "LinkedIn", icon: FaLinkedinIn, url: "Javascript:0" },
    ],
  },
  {
    type: "bottom",
    menu: [
      { title: "About", url: "Javascript:0" },
      { title: "Services", url: "Javascript:0" },
      { title: "Works", url: "Javascript:0" },
      { title: "Contact", url: "Javascript:0" },
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
    { icon: "fa-whatsapp", link: "Javascript:0" },
    { icon: "fa-instagram", link: "Javascript:0" },
    { icon: "fa-facebook", link: "Javascript:0" },
    { icon: "fa-twitter", link: "Javascript:0" },
  ],

  support: {
    text: "Help & Support",
    phone: "+22 54792 01479",
  },
};
