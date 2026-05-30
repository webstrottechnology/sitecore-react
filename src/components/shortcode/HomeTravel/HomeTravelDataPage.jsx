import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FaCalendarDays,
  FaFaceSmile,
  FaTrophy,
  FaXTwitter,
} from "react-icons/fa6";

import aboutBigImg from "../../../assets/images/homeTravel/about1.png";
import aboutSmallImg from "../../../assets/images/homeTravel/about2.png";
import tab1 from "../../../assets/images/homeTravel/tab1.png";
import tab2 from "../../../assets/images/homeTravel/tab2.png";
import tab3 from "../../../assets/images/homeTravel/tab3.png";
import tab4 from "../../../assets/images/homeTravel/tab4.png";
import tab5 from "../../../assets/images/homeTravel/tab5.png";
import tab6 from "../../../assets/images/homeTravel/tab6.png";
import tab7 from "../../../assets/images/homeTravel/tab7.png";
import tab8 from "../../../assets/images/homeTravel/tab8.png";
import tab9 from "../../../assets/images/homeTravel/tab9.png";
import tab10 from "../../../assets/images/homeTravel/tab10.png";
import tab11 from "../../../assets/images/homeTravel/tab11.png";
import Packagetab1 from "../../../assets/images/homeTravel/tab1.png";
import Packagetab2 from "../../../assets/images/homeTravel/tab2.png";
import Packagetab3 from "../../../assets/images/homeTravel/tab3.png";
import Packagetab4 from "../../../assets/images/homeTravel/tab4.png";
import Packagetab5 from "../../../assets/images/homeTravel/tab5.png";
import adventureImg from "../../../assets/images/homeTravel/adventure.png";
import gallery1 from "../../../assets/images/homeTravel/gallery1.png";
import gallery2 from "../../../assets/images/homeTravel/gallery2.png";
import gallery3 from "../../../assets/images/homeTravel/gallery3.png";
import gallery4 from "../../../assets/images/homeTravel/gallery4.png";
import gallery5 from "../../../assets/images/homeTravel/gallery5.png";
import shapeImg from "../../../assets/images/homeTravel/shape.png";
import blog1 from "../../../assets/images/homeTravel/blog1.png";
import blog2 from "../../../assets/images/homeTravel/blog2.png";
import blog3 from "../../../assets/images/homeTravel/blog3.png";
import blog4 from "../../../assets/images/homeTravel/blog4.png";
import contactImg from "../../../assets/images/homeTravel/contact.png";
import brand1 from "../../../assets/images/homeTravel/brand1.png";
import brand2 from "../../../assets/images/homeTravel/brand2.png";
import brand3 from "../../../assets/images/homeTravel/brand3.png";
import brand4 from "../../../assets/images/homeTravel/brand4.png";
import testi1 from "../../../assets/images/homeTravel/testi1.png";
import testi2 from "../../../assets/images/homeTravel/testi2.png";
import testi3 from "../../../assets/images/homeTravel/testi3.png";

export const bannerSocialData = [
  {
    id: 1,
    link: "#",
    icon: <FaXTwitter />,
  },
  {
    id: 2,
    link: "#",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    link: "#",
    icon: <FaFacebookF />,
  },
];

export const bannerCounterData = [
  {
    id: 1,
    count: 12,
    title: "Year Of Experience",
    icon: <FaCalendarDays />,
  },
  {
    id: 2,
    count: 250,
    title: "Satisfied Client",
    icon: <FaFaceSmile />,
  },
  {
    id: 3,
    count: 28,
    title: "Total Calls",
    icon: <FaTrophy />,
  },
];

export const travelAboutData = {
  bigImg: aboutBigImg,
  smallImg: aboutSmallImg,
  subTitle: "About Us",
  title: "We Helping you to find your location",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  buttonText: "Read More",
  buttonLink: "/about-us",
};

export const holidayPackageData = [
  {
    id: 1,
    items: [
      {
        id: 1,
        count: "100 +",
        title: "Holiday Package",
      },
      {
        id: 2,
        count: "15",
        title: "Elite Airlines",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        id: 1,
        count: "201",
        title: "Luxury Hotel",
      },
      {
        id: 2,
        count: "120 M+",
        title: "Satisfied Treveler",
      },
    ],
  },
];

export const travelJourneyData = {
  heading: {
    subTitle: "Our Journey",
    title: "We Helping you to find your location",
  },

  timelineDates: [
    { year: "2025", date: "16/01/2014" },
    { year: "2025", date: "28/02/2025" },
    { year: "2025", date: "20/04/2025" },
    { year: "2020", date: "20/05/2020" },
    { year: "2019", date: "09/07/2019" },
    { year: "2018", date: "30/08/2018" },
    { year: "2017", date: "15/09/2017" },
    { year: "2016", date: "01/11/2016" },
    { year: "2015", date: "10/12/2015" },
    { year: "2014", date: "19/01/2014" },
    { year: "2013", date: "03/03/2013" },
  ],

  timelineEvents: [
    {
      year: "2025",
      image: tab1,
      alt: "img",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula orci a risus auctor, ut dignissim urna facilisis. Integer vel sapien in urna cursus viverra. Nullam bibendum metus at felis cursus, a finibus magna eleifend. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique.",
    },
    {
      year: "2025",
      image: tab2,
      alt: "img",
      description:
        "Nam et dui in purus varius malesuada. Sed vel urna eu felis condimentum cursus ut sit amet ipsum. Duis at libero vitae elit finibus suscipit ac a enim. Fusce tincidunt mi vitae justo facilisis, eget scelerisque purus malesuada. Proin scelerisque nisl eget odio vulputate malesuada.",
    },
    {
      year: "2025",
      image: tab3,
      alt: "img",
      description:
        "Sed non orci ac sapien malesuada tincidunt. Maecenas sagittis, est ac vehicula laoreet, neque risus dictum libero, et tincidunt risus ligula eget lectus. Cras nec magna facilisis, blandit erat non, tristique risus. Donec ac felis id lorem pharetra tincidunt. Vivamus euismod, mi ac fermentum.",
    },
    {
      year: "2020",
      image: tab4,
      alt: "img",
      description:
        "Etiam interdum ex id nulla auctor lobortis. Curabitur at augue suscipit, blandit justo sit amet, fringilla lorem. Praesent sed varius nulla. Nullam convallis orci quis urna consequat, ut tristique justo luctus. Duis nec est ac arcu sodales bibendum ut in justo. Ut rhoncus lacinia.",
    },
    {
      year: "2019",
      image: tab5,
      alt: "img",
      description:
        "In eu erat sed ligula dapibus lacinia. Mauris eget tellus sit amet eros dapibus convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Curabitur cursus eros sit amet nibh posuere, ut pellentesque nulla vehicula. Aenean ac feugiat dolor.",
    },
    {
      year: "2018",
      image: tab6,
      alt: "img",
      description:
        "Nunc ac sem lacinia, bibendum libero at, tempus lectus. Aliquam tempus tincidunt nisl nec vulputate. Nullam at felis et odio dapibus facilisis. Aenean ut ligula sed nisi convallis accumsan. Nullam ac felis sed risus pellentesque posuere. Aliquam sagittis est ut mauris tincidunt fermentum.",
    },
    {
      year: "2017",
      image: tab7,
      alt: "img",
      description:
        "Integer venenatis urna sit amet orci condimentum, ac interdum odio bibendum. Suspendisse eget eros finibus, facilisis orci et, lobortis nulla. Sed luctus, turpis a fermentum vehicula, ligula nulla venenatis felis, in tincidunt turpis augue vel urna. Fusce id magna sed dui ultricies accumsan.",
    },
    {
      year: "2016",
      image: tab8,
      alt: "img",
      description:
        "Nullam vel mauris vel ipsum malesuada suscipit. Morbi rutrum tortor at magna pellentesque, ut aliquam metus rhoncus. Donec sit amet orci vel magna consequat egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pharetra nisl in turpis hendrerit.",
    },
    {
      year: "2015",
      image: tab9,
      alt: "img",
      description:
        "Curabitur finibus risus in quam rhoncus gravida. Sed posuere eros in orci consequat tincidunt. Aenean sed mi feugiat, laoreet eros eu, tincidunt dui. Etiam consequat quam a sapien venenatis, eget hendrerit libero pellentesque. Nunc ut sapien id erat efficitur tincidunt. Donec sit amet justo.",
    },
    {
      year: "2014",
      image: tab10,
      alt: "img",
      description:
        "Praesent mollis sapien ac ultricies auctor. Integer sagittis ligula vel nulla tempor, sit amet auctor ligula tempor. Sed scelerisque tortor nec magna vulputate, id posuere sem tristique. Mauris et magna vitae urna pretium aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    },
    {
      year: "2013",
      image: tab11,
      alt: "img",
      description:
        "Nam et dui in purus varius malesuada. Sed vel urna eu felis condimentum cursus ut sit amet ipsum. Duis at libero vitae elit finibus suscipit ac a enim. Fusce tincidunt mi vitae justo facilisis, eget scelerisque purus malesuada. Proin scelerisque nisl eget odio vulputate malesuada.",
    },
  ],
};

const packagesOne = [
  {
    image: Packagetab1,
    alt: "img",
    title: "Thailand",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$699",
  },
  {
    image: Packagetab2,
    alt: "img",
    title: "Srilanka",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$799",
  },
  {
    image: Packagetab3,
    alt: "img",
    title: "Dubai",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$999",
  },
  {
    image: Packagetab4,
    alt: "img",
    title: "Europe",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$799",
  },
  {
    image: Packagetab5,
    alt: "img",
    title: "Africa",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$1000",
  },
];

const packagesTwo = [
  {
    image: Packagetab5,
    alt: "img",
    title: "Africa",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$1000",
  },
  {
    image: Packagetab4,
    alt: "img",
    title: "Europe",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$799",
  },
  {
    image: Packagetab3,
    alt: "img",
    title: "Dubai",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$999",
  },
  {
    image: Packagetab2,
    alt: "img",
    title: "Srilanka",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$799",
  },
  {
    image: Packagetab1,
    alt: "img",
    title: "Thailand",
    startingText: "Starting From",
    personText: "Per Person",
    price: "$699",
  },
];

export const travelBestPackageData = {
  heading: {
    subTitle: "Our Best Packages",
    title: "Explore best selling packages for",
  },

  tabs: [
    {
      id: "nav-home",
      tabId: "nav-home-tab",
      label: "1 to 3 days",
      packages: packagesOne,
    },
    {
      id: "nav-profile",
      tabId: "nav-profile-tab",
      label: "4 to 6 days",
      packages: packagesTwo,
    },
    {
      id: "nav-contact",
      tabId: "nav-contact-tab",
      label: "7 to 9 days",
      packages: packagesOne,
    },
    {
      id: "nav-day",
      tabId: "nav-day-tab",
      label: "10 to 12 days",
      packages: packagesTwo,
    },
  ],
};

export const adventureTravelData = {
  image: adventureImg,
  imageAlt: "img",

  subTitle: "Adeventure Travel",

  title: "We Are hire to Unforgettable Travel Experiences",

  description:
    "Cras nec magna facilisis, blandit erat non, tristique risus. Donec ac felis id lorem pharetra tincidunt. Vivamus euismod, mi ac fermentum.",

  bulletPoints: [
    "The Road Best Traveled",
    "A Summer Spent Seaside",
    "Adeventures With Mia",
  ],

  buttonText: "Read More",
};

export const travelGalleryData = {
  heading: {
    subTitle: "Gallery",
    title: "Start Planning Your Next Trip",
    description:
      "Etiam interdum ex id nulla auctor lobortis. Curabitur at augue suscipit, blandit justo sit amet, fringilla lorem. Praesent sed varius nulla",
  },

  galleryColumns: [
    {
      images: [
        {
          image: gallery1,
          alt: "team1_img",
          title: "image1",
        },
      ],
    },
    {
      images: [
        {
          image: gallery2,
          alt: "team1_img",
          title: "image1",
        },
        {
          image: gallery3,
          alt: "team1_img",
          title: "image1",
        },
      ],
    },
    {
      images: [
        {
          image: gallery4,
          alt: "team1_img",
          title: "image1",
        },
        {
          image: gallery5,
          alt: "team1_img",
          title: "image1",
        },
      ],
    },
  ],
};

export const travelClearData = {
  heading: {
    subTitle: "Clear Price",
    title: "Affordable Travel Packages",
    description:
      "Nullam vel mauris vel ipsum malesuada suscipit. Morbi rutrum tortor at magna pellentesque, ut aliquam metus rhoncus.",
  },

  packages: [
    {
      delay: "100ms",
      shapeImage: shapeImg,
      shapeAlt: "shape",
      name: "Half Board",
      price: "$ 50",
      duration: "/day",
      features: [
        "Transfers from airport",
        "Minimum 3 star hotel",
        "Alcoholic beveragers",
        "Incl. museum tickets",
        "Meals in Restaurants",
      ],
      buttonText: "View Trip",
    },
    {
      delay: "200ms",
      shapeImage: shapeImg,
      shapeAlt: "shape",
      name: "All Expensives",
      price: "$ 36",
      duration: "/day",
      features: [
        "Meals in restaurants",
        "Alcoholic beverages",
        "Minimum 3 star hotel",
        "Transfers from airport",
        "Incl. museum tickets",
      ],
      buttonText: "View Trip",
    },
    {
      delay: "300ms",
      shapeImage: shapeImg,
      shapeAlt: "shape",
      name: "Full Board",
      price: "$ 68",
      duration: "/day",
      tag: "Popular",
      features: [
        "Transfers from airport",
        "Minimum 3 star hotel",
        "Alcoholic beveragers",
        "Incl. museum tickets",
        "Meals in Restaurants",
      ],
      buttonText: "View Trip",
    },
  ],
};

export const travelBlogData = {
  heading: {
    subTitle: "Blog",
    title: "Watch Our Best Blogs",
    description:
      "Aenean ut ligula sed nisi convallis accumsan. Nullam ac felis sed risus pellentesque posuere. Aliquam sagittis est ut mauris tincidunt fermentum.",
  },

  leftBlog: {
    image: blog1,
    alt: "img",
    link: "blog-without-sidebar.html",
    date: "June 8, 2026",
    rating: 4,
    title: "Explore the all world",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    highlight: "Thailand",
    buttonText: "Read More",
  },

  rightBlogs: [
    {
      image: blog2,
      alt: "img",
      link: "blog-without-sidebar.html",
      date: "Aug 16,2026",
      rating: 4,
      title: "Explore the world",
      description:
        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .",
      buttonText: "Read More",
    },
    {
      image: blog3,
      alt: "img",
      link: "blog-without-sidebar.html",
      date: "Aug 16,2026",
      rating: 4,
      title: "Dignissim urna facilisis",
      description: "Nunc ac sem lacinia, bibendum libero at, tempus lectus.",
      buttonText: "Read More",
    },
    {
      image: blog4,
      alt: "img",
      link: "blog-without-sidebar.html",
      date: "Aug 16,2026",
      rating: 4,
      title: "Nullam at felis",
      description:
        "Aliquam tempus tincidunt nisl nec vulputate. Nullam at felis et odio dapibus facilisis. Aenean ut ligula sed nisi convallis accumsan.",
      buttonText: "Read More",
    },
  ],
};

export const travelContactData = {
  heading: {
    subTitle: "Contact Us",
    title: "Start Planning Your Next Trip",
    description:
      "Sed non orci ac sapien malesuada tincidunt. Maecenas sagittis, est ac vehicula laoreet, neque risus dictum libero, et tincidunt risus ligula eget lectus.",
  },

  image: contactImg,
  imageAlt: "img",

  formTitle: "Get In Touch",

  fields: [
    {
      colClass: "col-md-6 col-12",
      label: "Your Name*",
      type: "text",
      placeholder: "Enter Here",
    },
    {
      colClass: "col-md-6 col-12",
      label: "Phone Number*",
      type: "text",
      placeholder: "Enter Here",
    },
    {
      colClass: "col-md-6 col-12",
      label: "Email Address*",
      type: "email",
      placeholder: "Enter Here",
    },
    {
      colClass: "col-md-6 col-12",
      label: "Subject*",
      type: "text",
      placeholder: "Enter Here",
    },
    {
      colClass: "col-md-12 col-12",
      label: "Message*",
      type: "textarea",
      cols: "30",
      rows: "4",
    },
  ],

  buttonText: "Send Message",

  phone: "123-456-7890",
  phoneLink: "tel:123-456-7890",

  email: "mail@website.com",
  emailLink: "mailto:abc@example.com",
};

export const travelBrandData = {
  title: "Brand",

  brands: [
    {
      image: brand1,
      alt: "brand",
    },
    {
      image: brand2,
      alt: "brand",
    },
    {
      image: brand3,
      alt: "brand",
    },
    {
      image: brand4,
      alt: "brand",
    },
  ],
};

export const travelTestimonialData = {
  heading: {
    subTitle: "Testimonial",
    title: "Review's from our customers",
    description:
      "Integer venenatis urna sit amet orci condimentum, ac interdum odio bibendum. Suspendisse eget eros finibus, facilisis orci et, lobortis nulla.",
  },

  testimonials: [
    {
      image: testi1,
      alt: "img",
      name: "james warren",
      designation: "traveler",
      rating: 4,
      description:
        "“In eu erat sed ligula dapibus lacinia. Mauris eget tellus sit amet eros dapibus convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.”",
    },
    {
      image: testi2,
      alt: "img",
      name: "Willie C. Saavedra",
      designation: "traveler",
      rating: 4,
      description:
        "“Nunc ac sem lacinia, bibendum libero at, tempus lectus. Aliquam tempus tincidunt nisl nec vulputate. Nullam at felis et odio dapibus facilisis. Aenean ut ligula sed nisi convallis accumsan. ”",
    },
    {
      image: testi3,
      alt: "img",
      name: "Burton S. Nguyen",
      designation: "traveler",
      rating: 4,
      description:
        "“Nullam vel mauris vel ipsum malesuada suscipit. Morbi rutrum tortor at magna pellentesque, ut aliquam metus rhoncus. Donec sit amet orci vel magna consequat egestas.”",
    },
  ],
};
