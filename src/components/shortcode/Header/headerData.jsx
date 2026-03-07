

// Images Import (Correct Path)
import banner1 from "../../../assets/images/header-2-banner-img-01.png";
import banner2 from "../../../assets/images/header-2-banner-img-01.png";
import banner3 from "../../../assets/images/header-2-banner-img-01.png";


import {
  FiZap,
  FiShoppingBag,
  FiBell,
  FiBookOpen,
  FiBriefcase,
  FiHelpCircle,
  FiAlertTriangle,
  FiUsers,
  FiLock,
  FiCoffee,
  FiShield,
  FiMessageCircle,
  FiImage,
  FiFigma,
  FiPlay,
  FiMapPin,
  FiDatabase,
  FiGrid,
  FiLayout,
} from "react-icons/fi";


export const navMenu = [
  { title: "Home", link: "/" },

  {
    title: "Pages",
    dropdown: [
      { title: "About Us", link: "/about" },
      { title: "Team", link: "/team" },
      { title: "Pricing", link: "/pricing" },
    ],
  },

  {
    title: "Services",
    dropdown: [
      { title: "Consulting", link: "/consulting" },
      { title: "Finance", link: "/finance" },
      { title: "Marketing", link: "/marketing" },
    ],
  },

  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

export const sidebarInfo = {
  phone: "+880123456789",
  email: "example@gmail.com",
  website: "www.webexample.com",
  address: "13/A, New Pro State, NYC",
};



export const Menus = [
  {
    name: "Home",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Design",
        desc: "Responsive design",
        icon: FiGrid,
      },
      {
        name: "Management",
        desc: "Site control",
        icon: FiZap,
      },
      {
        name: "Navigation",
        desc: "Link pages",
        icon: FiLayout,
      },
      {
        name: "CMS",
        desc: "Management content",
        icon: FiDatabase,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pages",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Marketplace",
        desc: "Browse templates",
        icon: FiShoppingBag,
      },
      {
        name: "Meetups",
        desc: "Upcoming events",
        icon: FiMapPin,
      },
      {
        name: "Updates",
        desc: "Changelog",
        icon: FiBell,
      },
      {
        name: "Academy",
        desc: "Watch lessons",
        icon: FiPlay,
      },
      {
        name: "Blog",
        desc: "Posts",
        icon: FiBookOpen,
      },
      {
        name: "Figma",
        desc: "Plugin",
        icon: FiFigma,
      },
      {
        name: "Experts",
        desc: "Jobs",
        icon: FiBriefcase,
      },
      {
        name: "Gallery",
        desc: "Images",
        icon: FiImage,
      },
    ],
    gridCols: 3,
  },
  {
    name: "portfolio",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: FiHelpCircle,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: FiMessageCircle,
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: FiAlertTriangle,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Blog",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: FiShield,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: FiUsers,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: FiCoffee,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: FiLock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Shop",
  },
  {
    name: "Shortcode",
  },
   {
    name: "Contact",
  },
];



// header_02 section data start 

export const NavBarMenu = [
    {
        id: 1,
        title: "Pricing",
        link: "#"
    },
]


export const bannerData = {
    title: "User Interface",
    tag: "3D Elements",
    desc: "A professional 3D design libraries for designers.",
    price: 68.00,
};
export const sliderData = [
    {
        id: 1,
        img: banner1,
    },
    {
        id: 2,
        img: banner2,
    },
    {
        id: 3,
        img: banner3,
    },
];
export const accordionData = [
    {
        title: "Overview",
        content: "Beautiful 3D UI Desgin Kit enables effotless ceration of stunning 3D UI illustations with pre-desgined elements , assets, and intuitive tools.",
    },
    {
        title: "Highlights",
        content: "High quality 3D components",
    },
    {
        title: "Reviews",
        content: "4.9 Rating from users",
    },
];

export const menuData = [
    "Home",
    "Shop",
    "Products",
    "About",
    "Contact",
];