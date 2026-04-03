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
import playIcon from "../../../assets/images/homecafe/pause.webp";

export const HomeCafetestimonialData = {
  titleSmall: "Testimonials",
  titleMain: "What our customers are talking about us",
  buttonText: "View More Details",
  buttonLink: "/testimonials",

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
  buttonLink: "/about",
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
  buttonLink: "/gallery",

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
  buttonIcon: playIcon,
};
