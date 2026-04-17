import breakfastImg from "../../../assets/images/homecafe/breakfast.png";
import testi1 from "../../../assets/images/homecafe/testi1.png";
import testi2 from "../../../assets/images/homecafe/testi2.png";
import testi3 from "../../../assets/images/homecafe/testi3.png";
import brand1 from "../../../assets/images/homecafe/brand1.png";
import brand2 from "../../../assets/images/homecafe/brand2.png";
import brand3 from "../../../assets/images/homecafe/brand3.png";
import brand4 from "../../../assets/images/homecafe/brand4.png";
import g1 from "../../../assets/images/homecafe/gallery1.png";
import g2 from "../../../assets/images/homecafe/gallery2.png";
import g3 from "../../../assets/images/homecafe/gallery3.png";
import g4 from "../../../assets/images/homecafe/gallery4.png";
import g5 from "../../../assets/images/homecafe/gallery5.png";
import g6 from "../../../assets/images/homecafe/gallery6.png";
import g7 from "../../../assets/images/homecafe/gallery7.png";
import videoSrc from "../../../assets/images/homecafe/webstrot.mp4";
import videoImg from "../../../assets/images/homecafe/v-img.png";
import playIcon from "../../../assets/images/homecafe/play-icon.png";
import pauseIcon from "../../../assets/images/homecafe/pause.png";
import team1 from "../../../assets/images/homecafe/team1.png";
import team2 from "../../../assets/images/homecafe/team2.png";
import team3 from "../../../assets/images/homecafe/team3.png";
import team4 from "../../../assets/images/homecafe/team4.png";
import team5 from "../../../assets/images/homecafe/team5.png";
import team6 from "../../../assets/images/homecafe/team6.png";
import offer1 from "../../../assets/images/homecafe/offer1.png";
import offer2 from "../../../assets/images/homecafe/offer2.png";
import offer3 from "../../../assets/images/homecafe/offer3.png";
import about1 from "../../../assets/images/homecafe/about1.png";
import about2 from "../../../assets/images/homecafe/about2.png";
import about3 from "../../../assets/images/homecafe/about3.png";
import about4 from "../../../assets/images/homecafe/about4.png";

import { FaUtensils, FaMusic, FaHamburger } from "react-icons/fa";

import sliderImg from "../../../assets/images/homecafe/slider1.png";

export const HomeCafetestimonialData = {
  titleSmall: "Testimonials",
  titleMain: "What our customers are talking about us",
  buttonText: "View More Details",
  buttonLink: "/quote-post",

  testimonials: [
    {
      id: 1,
      image: testi1,
      text: "Continually productize compelling quality for packed with Elated productize compelling quality for packed with all Elated Theme Setting up to website and creating pages. Continually productize compelling quality for packed with Elated productize compelling quality for packed with all Elated Theme Setting up to website and creating pages.",
      name: "Mathew E. Sanborn",
      role: "Customer",
      active: true,
    },
    {
      id: 2,
      image: testi2,
      text: "Integer venenatis urna sit amet orci condimentum, ac interdum odio bibendum. Suspendisse eget eros finibus, facilisis orci et, lobortis nulla. Sed luctus, turpis a fermentum vehicula, ligula nulla venenatis felis, in tincidunt turpis augue vel urna. Fusce id magna sed dui ultricies accumsan.",
      name: "Jhon Mass",
      role: "Customer",
      active: false,
    },
    {
      id: 3,
      image: testi3,
      text: "Curabitur finibus risus in quam rhoncus gravida. Sed posuere eros in orci consequat tincidunt. Aenean sed mi feugiat, laoreet eros eu, tincidunt dui. Etiam consequat quam a sapien venenatis, eget hendrerit libero pellentesque. Nunc ut sapien id erat efficitur tincidunt. Donec sit amet justo.",
      name: "Jhon Mass",
      role: "Customer",
      active: false,
    },
  ],
};

export const HomeCafebreakfastData = {
  titleSmall: "What We Have",
  titleMain: "All you need for perfect breakfast",
  awards: {
    count: "35+",
    title: "Winning Awards",
    description: "Beetroot And Datterini, Goat Cheese, Ricotta",
  },
  descriptionShort:
    "Our proximity to the abundant riches ofthe sea and Portugal’s excellent produce. Our proximity to the abundant.",
  descriptionLong:
    "Passages gaks of Lofrem the Ipsum availaasble, busat the majority have suffered alteration in some form sages gaks injected. There are many variations of passages gaks of Lofrem the Ipsum availaasble, busat the majority have suffered alteration in some form sages gaks injected.",
  image: breakfastImg, // ✅ correct
  imageTitle: "Sitecore Cafe",
  buttonText: "Learn More",
  buttonLink: "/product-with-sidebar",
};

export const HomeCafeBrandData = [
  { id: 1, img: brand1 },
  { id: 2, img: brand2 },
  { id: 3, img: brand3 },
  { id: 4, img: brand4 },
];

export const HomeCafeGalleryData = {
  titleSmall: "Our Gallery",
  titleMain: "Enjoy Every Moment",
  buttonText: "View Our Gallery",
  buttonLink: "/portfolio",

  gallery: [
    {
      type: "step1",
      images: [g1, g2],
    },
    {
      type: "step2",
      images: [
        g3,
        {
          nested: [g4, g5],
        },
      ],
    },
    {
      type: "step1",
      images: [g6, g7],
    },
  ],
};

export const HomeCafeVideoData = {
  video: videoSrc,
  thumbnail: videoImg,
  playIcon: playIcon,
  pauseIcon: pauseIcon,
};

export const HomeCafeChefData = [
  { id: 1, name: "Sandra Witcher", role: "Senior Chef", image: team1 },
  { id: 2, name: "Chris J. Anderson", role: "Junior Chef", image: team2 },
  { id: 3, name: "Miguel S. Bryant", role: "Manager", image: team3 },
  { id: 4, name: "Boyd R. Macdougall", role: "Senior Chef", image: team4 },
  { id: 5, name: "Alliey Smith", role: "Junior Chef", image: team5 },
  { id: 6, name: "Miguel S. Bryant", role: "Expert Chef", image: team6 },
];

export const HomeCafeMenuTabs = [
  { id: "product", label: "All Products" },
  { id: "coffees", label: "Coffees" },
  { id: "drinks", label: "Drinks" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "soups", label: "Soups" },
  { id: "barger", label: "Barger" },
  { id: "pizza", label: "Pizza" },
];

export const HomeCafeMenuItems = {
  product: [
    {
      title: "Prickly Pear Tonic",
      desc: "Beetroot And Datterini, Goat Cheese, Ricotta",
      price: "$25.50",
    },
    {
      title: "Charred Seabass",
      desc: "Orange glazed chicory, saffron rice, pepper sauce",
      price: "$30.00",
    },
    {
      title: "Crispy Skin Chicken",
      desc: "House made kimchi, sriracha mayo",
      price: "$45.50",
    },
    {
      title: "Purple Corn Tostada",
      desc: "Beetroot And Datterini, Goat Cheese, Ricotta",
      price: "$34.00",
    },
    {
      title: "Dessert platter",
      desc: "Chef’s selection of sweets.Serves ",
      price: "$55.00",
    },
    {
      title: "Fried Chicken bun",
      desc: "Beetroot And Datterini, Goat Cheese, Ricotta",
      price: "$62.00",
    },
    {
      title: "Honey Glazed Salmon",
      desc: "lotus root, green beans, baby sweet peppers",
      price: "$77.00",
    },
  ],

  coffees: [
    {
      title: "Coffee Latte",
      desc: "Fresh milk with espresso",
      price: "$10.00",
    },
    {
      title: "Crispy Skin Chicken",
      desc: "House made kimchi, sriracha mayo",
      price: "$45.50",
    },
    {
      title: "Purple Corn Tostada",
      desc: "Beetroot And Datterini, Goat Cheese, Ricotta",
      price: "$34.00",
    },
    {
      title: "Dessert platter",
      desc: "Chef’s selection of sweets.Serves ",
      price: "$55.00",
    },
  ],

  drinks: [
    {
      title: "Orange Juice",
      desc: "Freshly squeezed",
      price: "$8.00",
    },
    {
      title: "Crispy Skin Chicken",
      desc: "House made kimchi, sriracha mayo",
      price: "$45.50",
    },
  ],

  sandwiches: [
    {
      title: "Chicken Sandwich",
      desc: "Grilled chicken with veggies",
      price: "$15.00",
    },
    {
      title: "Coffee Latte",
      desc: "Fresh milk with espresso",
      price: "$10.00",
    },
    {
      title: "Crispy Skin Chicken",
      desc: "House made kimchi, sriracha mayo",
      price: "$45.50",
    },
    {
      title: "Purple Corn Tostada",
      desc: "Beetroot And Datterini, Goat Cheese, Ricotta",
      price: "$34.00",
    },
  ],

  soups: [
    {
      title: "Tomato Soup",
      desc: "Hot and spicy",
      price: "$12.00",
    },
    {
      title: "Purple Corn Tostada",
      desc: "Beetroot And Datterini, Goat Cheese, Ricotta",
      price: "$34.00",
    },
    {
      title: "Dessert platter",
      desc: "Chef’s selection of sweets.Serves ",
      price: "$55.00",
    },
    {
      title: "Honey Glazed Salmon",
      desc: "lotus root, green beans, baby sweet peppers",
      price: "$77.00",
    },
  ],

  barger: [
    {
      title: "Beef Burger",
      desc: "Juicy grilled beef",
      price: "$18.00",
    },
  ],

  pizza: [
    {
      title: "Cheese Pizza",
      desc: "Mozzarella cheese loaded",
      price: "$20.00",
    },
    {
      title: "Farmhouse Pizza",
      desc: "Veggies and cheese",
      price: "$22.00",
    },
  ],
};

export const HomeCafeOfferData = [
  {
    id: 1,
    title: "Conferences",
    image: offer1,
  },
  {
    id: 2,
    title: "Birthday Parties",
    image: offer2,
  },
  {
    id: 3,
    title: "Kittie Parties",
    image: offer3,
  },
  {
    id: 4,
    title: "Birthday Parties",
    image: offer2,
  },
  {
    id: 5,
    title: "Kittie Parties",
    image: offer3,
  },
];

export const HomeCafeAboutData = {
  titleSmall: "About Us",
  titleMain: "Welcome To Our Luxury Sitecore Cafe.",
  description:
    "Our proximity to the abundant riches of the sea and Portugal's excellent produce.",

  experience: [
    {
      id: 1,
      number: "20",
      title: "Years of Experience",
      desc: "All the Lorem Ipsum generators on the Internet tend to repeat.",
    },
    {
      id: 2,
      number: "250",
      title: "Daily Visitors",
      desc: "Curabitur finibus risus in quam rhoncus gravida.",
    },
  ],

  bottomText: "Lets our food satisfy your stomach.",
  buttonText: "Learn More",

  images: {
    main: about2,
    small1: about3,
    small2: about4,
    side: about1,
  },
};

export const HomeCafeServiceData = [
  {
    id: 1,
    icon: FaUtensils,
    title: "Delicious Foods",
    desc: "Curabitur at augue suscipit, blandit justo sit amet, fringilla lorem. Praesent sed varius nulla.",
  },
  {
    id: 2,
    icon: FaMusic,
    title: "Live Music",
    desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
  },
  {
    id: 3,
    icon: FaHamburger,
    title: "Unique Recipes",
    desc: "In eu erat sed ligula dapibus lacinia. Mauris eget tellus sit amet eros dapibus convallis.",
  },
];

export const HomeCafeSliderData = {
  smallTitle: "Desire food",
  mainTitle: "Three Breakfast idea to",
  highlight: "control your appetite",
  mainTitleEnd: "all day",

  description:
    "Ut enim ad minam eni am quis nostrud exercitation ullaco laboris.",

  buttonText: "Book a Table",

  contactText: "Contact Us",
  phone: "+48 35461 35480",

  image: sliderImg,
};
