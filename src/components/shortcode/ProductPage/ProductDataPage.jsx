import product1 from "../../../assets/images/product/product_img1.jpg";
import product2 from "../../../assets/images/product/product_img2.jpg";
import product3 from "../../../assets/images/product/product_img3.jpg";
import product4 from "../../../assets/images/product/product_img4.jpg";

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
    link: "/product-single",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 2,
    img: product2,
    category: "Historical Fiction",
    title: "The Book of Lost Friends",
    link: "/product-single",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 3,
    img: product3,
    category: "Science Fiction",
    title: "The Big Book of Science",
    link: "/product-single",
    price: "$23.00",
    oldPrice: "$25.50",
  },
  {
    id: 4,
    img: product4,
    category: "Historical Fiction",
    title: "Best Beloved",
    link: "/product-single",
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
