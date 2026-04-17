import businessImg from "../../../assets/images/inner-pages/img6.png";

import {
  FaGlobe,
  FaBalanceScale,
  FaComments,
  FaBolt,
  FaCheckCircle,
  FaRing,
  FaGem,
  FaPhoneAlt,
  FaChartLine,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";
import watchMain from "../../../assets/images/watch-main.png";
import watch1 from "../../../assets/images/watch-1.jpg";
import watch2 from "../../../assets/images/watch-2.jpg";
import watch3 from "../../../assets/images/watch-3.jpg";

import ringImg1 from "../../../assets/images/feature7-1.jpg";
import ringImg2 from "../../../assets/images/feature7-2.jpg";
import coupleImg from "../../../assets/images/feature7-couple.png";

import aboutImg1 from "../../../assets/images/about1.png";
import aboutImg2 from "../../../assets/images/about2.png";
import signatureImg from "../../../assets/images/signature.png";

import mainImg from "../../../assets/images/business-circle.png";
import smallImg from "../../../assets/images/feature12-small.png";

import officeImg from "../../../assets/images/feature10-office.png";

import aboutImg from "../../../assets/images/about-img.png";

import feature12ImgMain from "../../../assets/images/feature12-main.png";
import feature12ImgSmall from "../../../assets/images/feature12-small.png";

/* ---------------- FEATURE DATA ONE ---------------- */

export const FeaturesData = [
  {
    id: 1,
    icon: FaGlobe,
    title: "Global Access",
    description:
      "Access your platform from anywhere in the world with fast and secure connectivity across all devices.",
  },
  {
    id: 2,
    icon: FaBalanceScale,
    title: "Reliable Performance",
    description:
      "Enjoy stable and optimized performance designed to handle high traffic and deliver consistent results.",
  },
];

/* ---------------- FEATURE DATA TWO ---------------- */

export const features2Left = [
  {
    id: 1,
    icon: FaGlobe,
    title: "Global Access",
    subtitle: "Use it anywhere anytime.",
  },
  {
    id: 2,
    icon: FaComments,
    title: "Live Chat",
    subtitle: "Instant team support.",
  },
  {
    id: 3,
    icon: FaBolt,
    title: "Fast Speed",
    subtitle: "Lightning quick performance.",
  },
];

export const features2Right = [
  {
    id: 1,
    icon: FaBalanceScale,
    title: "Secure System",
    subtitle: "Safe and protected data.",
  },
  {
    id: 2,
    icon: FaComments,
    title: "Smart Tools",
    subtitle: "Boost your productivity.",
  },
  {
    id: 3,
    icon: FaGlobe,
    title: "Wide Reach",
    subtitle: "Grow without limits.",
  },
];

/* ---------------- FEATURE DATA THREE ---------------- */

export const FeaturesData3 = {
  heading: "PERFORMANCE DRIVEN DESIGN",
  description1:
    "Engineered for speed and agility, our Terra M delivers exceptional performance on both paved roads and rugged terrain.",
  description2:
    "The advanced carbon frame ensures an optimal balance of strength, comfort, and lightweight control, while the integrated LOCKR system securely stores your essentials.",
  buttonText: "LEARN MORE",
};

/* ---------------- FEATURE DATA FOUR ---------------- */

export const FeaturesData4 = {
  tag: "Promotions up to 60%",
  title: "Level Up Your Style With Our",
  highlighted: "Summer Collections",
  description:
    "Fashion is always of the time in which you live. It is not something standing alone. But the grand problem, the most important problem, is to rejuvenate women.",
  buttonText: "Discover Now",
};

/* ---------------- FEATURE DATA FIVE ---------------- */

export const FeatureData5 = {
  offer: "UP TO 50% OFF",
  title: "Elegance Is An",
  highlighted: "Attitude",
  description:
    "We are happy to introduce our newest watch collection. They come in different sizes and colors, and all feature a stainless steel back.",
  buttonText: "ORDER NOW",

  watches: [
    {
      id: 1,
      image: watchMain,
    },
    {
      id: 2,
      image: watch1,
    },
    {
      id: 3,
      image: watch2,
    },
    {
      id: 4,
      image: watch3,
    },
  ],
};

/* ---------------- FEATURE DATA SIX ---------------- */

export const FeatureData6 = {
  tag: "WHY CHOOSE US",
  title: "Modern Interior",
  highlighted: "Solutions",
  description:
    "We deliver smart and stylish interior solutions that elevate your living experience.",

  items: [
    {
      id: 1,
      icon: FaCheckCircle,
      title: "Premium Quality",
      subtitle: "Top-notch materials & finishing",
    },
    {
      id: 2,
      icon: FaBolt,
      title: "Fast Execution",
      subtitle: "Quick & reliable project delivery",
    },
    {
      id: 3,
      icon: FaGlobe,
      title: "Global Design",
      subtitle: "Inspired by world-class interiors",
    },
  ],
};

/* ---------------- FEATURE DATA SEVEN ---------------- */

export const FeatureData7 = {
  leftGrid: [
    {
      id: 1,
      type: "card",
      icon: FaRing,
      title: "Exclusive Rings",
      description:
        "Discover beautifully handcrafted rings designed with precision, elegance, and timeless appeal for every occasion.",
    },
    {
      id: 2,
      type: "image",
      image: ringImg1,
    },
    {
      id: 3,
      type: "image",
      image: ringImg2,
    },
    {
      id: 4,
      type: "card",
      icon: FaGem,
      title: "Wedding Collection",
      description:
        "Explore our premium wedding collection featuring fine diamonds and exquisite designs crafted to celebrate your special moments.",
    },
  ],

  center: {
    tag: "ABOUT US",
    title: "Crafting Fine Jewellery Since 1990",
    description:
      "For over three decades, we have been creating elegant and meaningful jewellery pieces that reflect love, heritage, and craftsmanship. Our commitment to quality materials and detailed artistry ensures every piece becomes a timeless treasure.",
    buttonText: "KNOW MORE",
  },

  rightImage: coupleImg,
};

/* ---------------- FEATURE DATA EIGHT ---------------- */

export const FeatureData8 = {
  tag: "MORE ABOUT US",

  title: "Empowering You to Feel",
  highlighted: "Your Best Every Day",

  description:
    "Porttitor ornare fermentum aliquam pharetra ut facilisis gravida risus suscipit. dui feugiat fusce conubia ridiculus tristique parturient natoque vulputate risus.",

  checklist: [
    { id: 1, text: "24/7 Call Services Available", icon: FaCheckCircle },
    { id: 2, text: "Great Skilled Consultant", icon: FaCheckCircle },
    { id: 3, text: "Expert Team Members", icon: FaCheckCircle },
  ],

  phone: {
    label: "Call us anytime",
    number: "+256 56778.5678",
    icon: FaPhoneAlt,
  },

  signature: {
    name: "Jonathan Doe",
    image: signatureImg,
  },

  images: {
    main: aboutImg1,
    overlay: aboutImg2,
  },
};

/* ---------------- FEATURE DATA NINE ---------------- */

export const FeatureData9 = {
  tag: "BUSINESS CONSULTANCY",

  title: "We know how to manage",
  highlighted: "business globally",

  description:
    "We help businesses grow and expand globally with smart strategies, expert consultants and 24/7 support.",

  buttonText: "Contact Us",

  features: [
    {
      id: 1,
      icon: FaChartLine,
      title: "Best Business Consulting",
      subtitle: "Helping brands grow worldwide",
    },
    {
      id: 2,
      icon: FaUsers,
      title: "Expert Team Members",
      subtitle: "Highly skilled professionals",
    },
    {
      id: 3,
      icon: FaHeadset,
      title: "24/7 Customer Support",
      subtitle: "Always here to help you",
    },
  ],

  images: {
    main: mainImg,
    small: smallImg,
  },
};

/* ---------------- FEATURE DATA TEN ---------------- */

export const FeatureData10 = {
  title: "Welcome to Our HTML UI Kit",
  subtitle:
    "A modern and versatile UI kit designed to help you build responsive, high-quality websites with ease. Crafted for developers and designers who value performance, flexibility, and clean architecture. Every component is thoughtfully structured to ensure scalability and seamless integration into your projects.",
  image: officeImg,

  cards: [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Our mission is to simplify web development by delivering well-structured, reusable, and scalable components. We focus on reducing development time while maintaining high standards of design consistency, performance optimization, and user experience.",
    },
    {
      id: 2,
      title: "Our Ideas",
      description:
        "We believe in combining creativity with technology to build intuitive and engaging interfaces. Our ideas revolve around minimal design principles, smooth interactions, and adaptable layouts that work perfectly across devices and platforms.",
    },
    {
      id: 3,
      title: "Our History",
      description:
        "With years of hands-on experience in web design and development, our journey has been shaped by innovation and continuous improvement. We have refined our UI kit to align with modern standards, ensuring reliability, efficiency, and long-term usability.",
    },
  ],
};

/* ---------------- FEATURE DATA ELEVEN ---------------- */

export const FeatureData11 = {
  sectionTitle: "About Us",

  heading: "We turn information into actionable",

  description:
    "In today's digital landscape, a well-developed website serves as the cornerstone of any successful business presence. Website development goes beyond just coding—it's about creating a digital storefront that engages visitors, builds trust, and drives conversions. From intuitive navigation and fast loading speeds to mobile responsiveness and search engine optimization, every aspect of development contributes to how potential customers perceive and interact with your brand.Website development is the technical implementation of web design concepts into functional, interactive experiences. It begins with front-end technologies like HTML, CSS, and JavaScript that structure content, apply styling, and enable dynamic behavior in the browser. ",

  services: [
    {
      id: 1,
      title: "Web & App Development",
    },
    {
      id: 2,
      title: "Online Media Marketing",
    },
    {
      id: 3,
      title: "Social Media Marketing",
    },
  ],

  progress: [
    {
      id: 1,
      title: "Digital Strategy",
      percentage: 65,
    },
    {
      id: 2,
      title: "Financial Services",
      percentage: 75,
    },
    {
      id: 3,
      title: "Financial Services",
      percentage: 90,
    },
  ],

  image: {
    src: aboutImg,
    alt: "Team working together",
  },
};

/* ---------------- FEATURE DATA TWELEVE ---------------- */

export const FeatureData12 = {
  tag: "Stay Connected",

  title: "We help to stay connected",
  highlighted: "with your audience",

  description:
    "It transforms creative concepts into functional digital experiences through a combination of coding, design integration, and technical problem-solving. Whether building a simple blog or a complex e-commerce platform, effective website development ensures your online presence is fast, secure, accessible, and tailored to meet both user needs and business goals. ",

  buttonText: "Get In Touch",

  images: {
    main: feature12ImgMain,
    secondary: feature12ImgSmall,
  },
};

/* ---------------- FEATURE DATA THIRTEEN ---------------- */

export const connectBusinessData = {
  title: "That Connect Your Business To Your Audience",
  description:
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Our proximity to the abundant riches of the sea and Portugal's excellent produce.",
  image: businessImg,

  listLeft: ["Clever System", "Smart Diversification", "Google Fonts"],

  listRight: ["Great Timing", "Credit Cards", "We Are Everywhere"],
};

/* ---------------- FEATURE DATA FOURTEEN ---------------- */

import portfolioImg from "../../../assets/images/portfolio/portfolioDetailsImg.png";

export const portfolioDetails = {
  category: "Food Recipe",
  title: "Food Heaven Restaurant and Recipe HTML Template",
  description: [
    "Food Heaven is a stylish and modern HTML template designed for restaurants, cafes, and food bloggers who want to showcase their delicious cuisine and mouth-watering recipes online. With its clean and elegant design, Food Heaven offers a range of features and functionalities, including menu displays, recipe pages, online reservations, and social media integration. Whether you're looking to build a new website or update an existing one, Food Heaven is the perfect choice for food lovers who want to share their passion for great food with the world.",
    "It is a complete bootstrap 5 based html item with all minimum required contents for a restaurant. The template is also fully documented and supported through comments section. For easier manipulation of SCSS files. The Food Heaven is scalable and more options & updates will be available in future based on buyers' request. We are really glad to introduce you Food Heaven. Thanks!",
  ],
  image: portfolioImg,
  alt: "portfolio-img",
  buttonText: "View Website",
  buttonLink: "/about-us",
};
