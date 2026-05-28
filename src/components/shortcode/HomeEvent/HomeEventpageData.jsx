import designIcon from "../../../assets/images/homeEvent/design1.png";
import slideImg1 from "../../../assets/images/homeEvent/slide1.png";
import slideImg2 from "../../../assets/images/homeEvent/slide2.png";
import marketImg1 from "../../../assets/images/homeEvent/market1.png";
import marketImg2 from "../../../assets/images/homeEvent/market2.png";
import speaker1 from "../../../assets/images/homeEvent/speaker1.png";
import speaker2 from "../../../assets/images/homeEvent/speaker2.png";
import speaker3 from "../../../assets/images/homeEvent/speaker3.png";
import speaker4 from "../../../assets/images/homeEvent/speaker4.png";
import speaker5 from "../../../assets/images/homeEvent/speaker5.png";
import joinImg1 from "../../../assets/images/homeEvent/join1.png";
import joinImg2 from "../../../assets/images/homeEvent/join2.png";
import joinImg3 from "../../../assets/images/homeEvent/join3.png";
import shapeImg from "../../../assets/images/homeEvent/shape.png";
import shapeImg1 from "../../../assets/images/homeEvent/shape1.png";
import shapeImg2 from "../../../assets/images/homeEvent/shape2.png";
import reviewImg from "../../../assets/images/homeEvent/review.png";
import scheduleImg1 from "../../../assets/images/homeEvent/schedule1.png";
import scheduleImg2 from "../../../assets/images/homeEvent/schedule2.png";
import scheduleImg3 from "../../../assets/images/homeEvent/schedule3.png";
import scheduleImg4 from "../../../assets/images/homeEvent/schedule4.png";
import polygonImg from "../../../assets/images/homeEvent/polygon.png";
import blogImg from "../../../assets/images/homeEvent/blog.png";
import royalLogo from "../../../assets/images/homeEvent/royal.png";
import testiImg1 from "../../../assets/images/homeEvent/testi.png";
import testiImg2 from "../../../assets/images/homeEvent/testi2.png";
import testiImg3 from "../../../assets/images/homeEvent/testi3.png";
import blogImg1 from "../../../assets/images/homeEvent/blog1.png";
import blogImg2 from "../../../assets/images/homeEvent/blog2.png";
import blogImg3 from "../../../assets/images/homeEvent/blog3.png";
import blogImg4 from "../../../assets/images/homeEvent/blog4.png";
import partnerImg1 from "../../../assets/images/homeEvent/partner1.png";
import partnerImg2 from "../../../assets/images/homeEvent/partner2.png";
import partnerImg3 from "../../../assets/images/homeEvent/partner3.png";
import partnerImg4 from "../../../assets/images/homeEvent/partner4.png";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMicrophoneAlt,
  FaChair,
} from "react-icons/fa";

export const eventSliderData = {
  icon: designIcon,
  iconAlt: "icon",
  subTitle: "Go make it",
  title: "THE LARGEST CONFERENCE IN EUROPE",
  description:
    "World's most influential media, entertainment & technology show inspirational speakers including game changing",
  placeholder: "sitecore123@gmail.com",
  buttonText: "Register Now",

  slides: [
    {
      id: 1,
      className: "event-slide1",
      image: slideImg1,
      alt: "img",
    },
    {
      id: 2,
      className: "event-slide2",
      image: slideImg2,
      alt: "img",
    },
  ],
};

export const eventCounterData = {
  smallTitle: "Event",
  title: "Event Countdown Begin",
  dateText: "28 - 30 June, 2026, India",
  countdownDate: "2026-06-28T00:00:00",
  buttonText: "Buy Ticket",
  buttonLink: "#",
};

export const eventMeetMarketData = [
  {
    id: 1,
    wrapperClass: "meet-market wow fadeinUp",
    delay: "100ms",
    smallTitle: "Event",
    title: "Event Countdown Begin",
    description:
      "Influential media, entertainment & technology show inspirational speakers including game changing not just a large-scale.",
    image: marketImg1,
    alt: "img",
    imagePosition: "bottom",
  },
  {
    id: 2,
    wrapperClass: "meet-market1 wow fadeinUp",
    delay: "200ms",
    smallTitle: "Event",
    title: "Learn Even More",
    description:
      "Sed non orci ac sapien malesuada tincidunt. Maecenas sagittis, est ac vehicula laoreet, neque risus dictum libero, et tincidunt risus ligula eget lectus.",
    image: marketImg2,
    alt: "img",
    imagePosition: "top",
  },
];

export const eventSpeakersData = {
  heading: {
    smallTitle: "Speakers",
    title: "These Experts will Inspire you to Create Future",
  },

  speakers: [
    {
      id: 1,
      image: speaker1,
      alt: "img",
      name: "Bruno Le Maire",
      designation: "Minister for the Economy & Finance",
      link: "/team-single",
    },

    {
      id: 2,
      image: speaker2,
      alt: "img",
      name: "Holly Ransom",
      designation: "CEO, Emergent",
      link: "/team-single",
    },

    {
      id: 3,
      image: speaker3,
      alt: "img",
      name: "Jim Whitehurst",
      designation: "Chief Executive Officer, Red Hat",
       link: "/team-single",
    },

    {
      id: 4,
      image: speaker4,
      alt: "img",
      name: "Jane McGonigal",
      designation: "Director, Game Development Ins.",
       link: "/team-single",
    },

    {
      id: 5,
      image: speaker5,
      alt: "img",
      name: "Ginni Rometty",
      designation: "CEO, IBM",
       link: "/team-single",
    },
  ],

  button: {
    text: "View All Speaker",
     link: "/team-single",
  },
};

export const eventAboutData = {
  heading: {
    smallTitle: "Event",

    title: "About Live Event",

    description:
      "Influential media, entertainment & technology show inspirational speakers including game changing not just a large-scale conference, but a large educational hub on digital technologies for business, where people communicate, get inspired and find ready-made.",
  },

  aboutItems: [
    {
      id: 1,
      className: "",
      number: "01",
      icon: <FaMapMarkerAlt />,
      title: "Mumbai",
      subtitle: "India",
    },

    {
      id: 2,
      className: "yellow",
      number: "02",
      icon: <FaCalendarAlt />,
      title: "1st-5th June",
      subtitle: "2025",
    },

    {
      id: 3,
      className: "blue",
      number: "03",
      icon: <FaMicrophoneAlt />,
      title: "24 Speakers",
      subtitle: "Experts",
    },

    {
      id: 4,
      className: "green",
      number: "04",
      icon: <FaChair />,
      title: "500",
      subtitle: "Confirm",
    },
  ],
};

export const eventJoinData = {
  heading: {
    smallTitle: "Event",
    title: "Why you should Join Event",
    description:
      "Entertainment & technology show inspirational speakers including game changing not just a large-scale conference but a large educational hub. How you transform your business as tech, consumer, habits industry dynamic change, Find out from those leading the charge.",
  },

  highlightText:
    "habits industry dynamic change, Find out from those leading the charge.",

  buttonText: "Join Event",
  buttonLink: "#",

  images: [
    {
      id: 1,
      image: joinImg1,
      alt: "img",
      delay: "100ms",
    },
    {
      id: 2,
      image: joinImg2,
      alt: "img",
      delay: "300ms",
    },
    {
      id: 3,
      image: joinImg3,
      alt: "img",
      delay: "400ms",
    },
  ],
};

export const eventPricingData = {
  heading: {
    smallTitle: "Event",

    title: "Pricing List",

    description:
      "Influential media, entertainment & technology show inspirational speakers including game changing not just a large-scale conference, but a large educational hub on digital technologies for business, where people communicate, get inspired and find ready-made.",
  },

  pricingCards: [
    {
      id: 1,
      wrapperClass: "pricing-main-wrapper wow fadeinUp",
      delay: "100ms",

      shape: shapeImg,

      title: "Standard Psss",

      ticketText: "153 Tickets Available",

      reviewImg: reviewImg,

      price: "$50",

      numberClass: "",

      features: [
        "Entrance",
        "Coffee Break",
        "Lunch on all days",
        "Certificate",
        "Acsess to all areas",
        "Workshop",
      ],
    },

    {
      id: 2,
      wrapperClass: "pricing-main-wrapper top-pricing wow fadeinUp",

      delay: "200ms",

      shape: shapeImg1,

      title: "Platinum Pass",

      ticketText: "153 Tickets Available",

      reviewImg: reviewImg,

      price: "$95",

      numberClass: "pink-number",

      features: [
        "Entrance",
        "Coffee Break",
        "Lunch on all days",
        "Certificate",
        "Acsess to all areas",
        "Workshop",
      ],
    },

    {
      id: 3,
      wrapperClass: "pricing-main-wrapper wow fadeinUp",

      delay: "300ms",

      shape: shapeImg2,

      title: "Standard Psss",

      ticketText: "153 Ticket Available",

      reviewImg: reviewImg,

      price: "$75",

      numberClass: "voilet-number",

      features: [
        "Entrance",
        "Coffee Break",
        "Lunch on all days",
        "Certificate",
        "Acsess to all areas",
        "Workshop",
      ],
    },
  ],
};

export const eventScheduleData = {
  heading: {
    smallTitle: "Event",
    title: "Event Schedule",
    description:
      "Influential media, entertainment & technology show inspirational speakers including game changing not just a large-scale conference, but a large educational hub on digital technologies for business, where people communicate, get inspired and find ready-made.",
  },

  schedules: [
    {
      id: 1,
      delay: "100ms",
      image: scheduleImg1,
      alt: "img",
      title: "Eugene Krahn",
      description:
        "World is committed to making participation in the event a harass ment free experience for everyone, regardless of level experience gender, gender identity and expression.",
      speaker: "Betty W. Schwartz",
      time: "10:30 - 01:30",
      location: "Business Hall No. 01",
    },
    {
      id: 2,
      delay: "300ms",
      image: scheduleImg2,
      alt: "img",
      title: "Philip Snow",
      description:
        "Nunc ac sem lacinia, bibendum libero at, tempus lectus. Aliquam tempus tincidunt nisl nec vulputate. Nullam at felis et odio dapibus facilisis.",
      speaker: "Betty W. Schwartz",
      time: "10:30 - 01:30",
      location: "Business Hall No. 01",
    },
    {
      id: 3,
      delay: "200ms",
      image: scheduleImg3,
      alt: "img",
      title: "Harold Odell",
      description:
        "Aenean ut ligula sed nisi convallis accumsan. Nullam ac felis sed risus pellentesque posuere. Aliquam sagittis est ut mauris tincidunt fermentum.",
      speaker: "Betty W. Schwartz",
      time: "10:30 - 01:30",
      location: "Business Hall No. 01",
    },
    {
      id: 4,
      delay: "400ms",
      image: scheduleImg4,
      alt: "img",
      title: "Helen D. Decker",
      description:
        "Nullam vel mauris vel ipsum malesuada suscipit. Morbi rutrum tortor at magna pellentesque, ut aliquam metus rhoncus.",
      speaker: "Betty W. Schwartz",
      time: "10:30 - 01:30",
      location: "Business Hall No. 01",
    },
  ],

  sidebar: {
    title: "Michael J. Boyer",
    polygonImg: polygonImg,
    dates: [
      { id: 1, date: "June 1, 2026", day: "Saturday" },
      { id: 2, date: "June 1, 2026", day: "Saturday" },
      { id: 3, date: "June 1, 2026", day: "Saturday" },
    ],
    buttonText: "Buy Ticket",
    buttonLink: "#",
  },

  blogSidebar: {
    image: blogImg,
    imageAlt: "blog",
    logo: royalLogo,
    logoAlt: "logo",
    title: "Luxurious Banquet Halls",
    subtitle: "For conference In 2026",
    buttonText: "Buy Ticket",
    buttonLink: "#",
    website: "Examplebanquwts.com",
  },

  downloadButton: {
    text: "Download Schedule",
    link: "#",
  },
};

export const eventTestimonialData = [
  {
    id: 1,
    description:
      "“ Continually productize compelling quality for packed with Elated productize compelling quality for packed with all Elated Theme Setting up to website and creating pages.”",
    name: "William B. Butts",
    designation: "Sr. Graphic Designer",
    rating: 4,
    image: testiImg1,
  },

  {
    id: 2,
    description:
      "“This theme is packed with features that continually productize compelling quality, ensuring that each element of your site stands out.”",
    name: "William B. Butts",
    designation: "Sr. Graphic Designer",
    rating: 4,
    image: testiImg2,
  },

  {
    id: 3,
    description:
      "“Creating a website and designing pages can be an intricate process, but with the Elated Theme, it becomes a seamless and enjoyable experience.”",
    name: "William B. Butts",
    designation: "Sr. Graphic Designer",
    rating: 4,
    image: testiImg3,
  },
];

export const eventBlogData = [
  {
    id: 1,
    delay: "200ms",
    showHeading: true,
    headingSmall: "Event",
    headingTitle: "Our Blog",
    blogs: [
      {
        id: 1,
        image: blogImg1,
        alt: "img",
        category: "Development",
        title: "How to create a Professional Website in Simple Step",
        link: "/blog-with-sidebar",
        author: "By Admin",
        date: "12 june 2026",
        comments: "04",
        description:
          "World is committed to making participation in the event a harass ment free experience for everyone, regardless of level experience gender, gender identity and expression...",
        btnText: "Read More",
      },
    ],
  },
  {
    id: 2,
    delay: "100ms",
    showHeading: false,
    blogs: [
      {
        id: 1,
        image: blogImg2,
        alt: "img",
        category: "Development",
        title: "What is the first step in creating a professional website",
        link: "/blog-with-sidebar",
        author: "By Admin",
        date: "12 june 2026",
        comments: "04",
        description:
          "The first step is to define your website’s purpose and goals. Decide what you want to achieve with your website, who your target audience is, and what key features and content you need.",
        btnText: "Read More",
      },
    ],
  },
  {
    id: 3,
    delay: "300ms",
    showHeading: false,
    blogs: [
      {
        id: 1,
        image: blogImg3,
        alt: "img",
        category: "Development",
        title: "How do I choose a domain name",
        link: "/blog-with-sidebar",
        author: "By Admin",
        date: "12 june 2026",
        comments: "04",
        description:
          "Choose a domain name that is short, memorable, and relevant to your business or the content of your website. It should be easy to spell and pronounce. Check the availability of the domain name using domain registration sites and ensure it’s unique.",
        btnText: "Read More",
      },
      {
        id: 2,
        image: blogImg4,
        alt: "img",
        category: "Development",
        title: "What should I consider when selecting a web hosting provider",
        link: "/blog-with-sidebar",
        author: "By Admin",
        date: "12 june 2026",
        comments: "04",
        description:
          "Consider factors such as reliability, speed, customer support, security, scalability, and cost. Look for reviews and recommendations to find a reputable hosting provider that meets your needs and budget.",
        btnText: "Read More",
      },
    ],
  },
];

export const eventPartnerData = [
  {
    id: 1,
    image: partnerImg1,
    alt: "img",
  },
  {
    id: 2,
    image: partnerImg2,
    alt: "img",
  },
  {
    id: 3,
    image: partnerImg3,
    alt: "img",
  },
  {
    id: 4,
    image: partnerImg4,
    alt: "img",
  },
];
