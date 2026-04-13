import product1 from "../../../assets/images/product/product_img1.jpg";
import product2 from "../../../assets/images/product/product_img2.jpg";
import product3 from "../../../assets/images/product/product_img3.jpg";
import product4 from "../../../assets/images/product/product_img4.jpg";
import product5 from "../../../assets/images/product/product_img5.jpg";
import product6 from "../../../assets/images/product/product_img6.png";
import product7 from "../../../assets/images/product/product_img7.png";
import product8 from "../../../assets/images/product/product_img8.png";
import product9 from "../../../assets/images/product/product_img9.png";

export const categories = [
  "Historical Fiction",
  "Short Stories",
  "Children's Literature",
  "Science Fiction",
  "Autobiography",
  "Literary fiction",
  "Graphic novel",
  "Non-fiction",
];

export const authors = [
  { name: "Arthur Gonzalez", count: "01" },
  { name: "Dana Chambers", count: "50" },
  { name: "Ernesto Wade", count: "12" },
  { name: "Karla Newman", count: "15" },
  { name: "Misty Figueroa", count: "06" },
  { name: "Rita James", count: "12" },
  { name: "Suzanne Casey", count: "26" },
];

export const products = [
  {
    id: 1,
    img: product1,
    category: "Historical Fiction",
    title: "Acts of Love and War",
    link: "/product-single-01",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 2,
    img: product2,
    category: "Historical Fiction",
    title: "The Book of Lost Friends",
    link: "/product-single-01",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 3,
    img: product3,
    category: "Science Fiction",
    title: "The Big Book of Science",
    link: "/product-single-01",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 4,
    img: product4,
    category: "Historical Fiction",
    title: "Best Beloved",
    link: "/product-single-01",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 5,
    img: product5,
    category: "Historical Fiction",
    title: "Acts of Love and War",
    link: "/product-single-01",
    price: "$44.00",
    oldPrice: "$66.50",
  },
  {
    id: 6,
    img: product6,
    category: "Historical Fiction",
    title: "The Book of Lost Friends",
    link: "/product-single-01",
    price: "$77.00",
    oldPrice: "$68.50",
  },
  {
    id: 7,
    img: product7,
    category: "Historical Fiction",
    title: "Acts of Love and War",
    link: "/product-single-01",
    price: "$79.00",
    oldPrice: "$98.50",
  },
  {
    id: 8,
    img: product8,
    category: "Historical Fiction",
    title: "The Book of Lost Friends",
    link: "/product-single-01",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 9,
    img: product9,
    category: "The Big Book of Science",
    title: "Best Beloved",
    link: "/product-single-01",
    price: "$23.00",
    oldPrice: "$25.50",
  },
];

export const reviewRatings = [
  { star: 5, count: 10, link: "/reviews?rating=5" },
  { star: 4, count: 25, link: "/reviews?rating=4" },
  { star: 3, count: 2, link: "/reviews?rating=3" },
  { star: 2, count: 0, link: "/reviews?rating=2" },
  { star: 1, count: 0, link: "/reviews?rating=1" },
];
