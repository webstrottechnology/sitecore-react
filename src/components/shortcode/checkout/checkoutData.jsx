import ShopCartThumbnail from "../../../assets/images/inner-pages/ShopCartThumbnail.webp";

export const productData = {
  name: "Bovans Browns",
  qty: 2,
  price: 40,
  image: ShopCartThumbnail,
};

export const shippingOptions = [
  {
    id: "flateRate",
    label: "Flate Rate",
    price: 40,
  },
  {
    id: "localPickup",
    label: "Local Pickup",
    price: 40,
  },
];

export const paymentMethods = [
  {
    id: "bankTransfer",
    title: "Direct Bank Transfer",
    description: "Make your payment directly into our bank account.",
  },
  {
    id: "cashDelivery",
    title: "Cash On Delivery",
  },
  {
    id: "chequePayments",
    title: "Cheque Payments",
  },
  {
    id: "paypal",
    title: "Paypal",
  },
];
