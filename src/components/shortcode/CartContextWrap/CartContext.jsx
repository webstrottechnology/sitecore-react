import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // 🔥 localStorage se load (refresh pe bhi rahe)
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔥 save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => Number(item.id) === Number(product.id));

      if (exist) {
        return prev.map((item) =>
          Number(item.id) === Number(product.id)
            ? { ...item, qty: item.qty + 0 }
            : item,
        );
      } else {
        return [
          ...prev,
          {
            ...product,
            id: Number(product.id),
            price: Number(product.price),
            qty: 1,
          },
        ];
      }
    });
  };

  // ✅ REMOVE ITEM
  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id)),
    );
  };

  // ✅ INCREASE QTY
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        Number(item.id) === Number(id) ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // ✅ DECREASE QTY
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        Number(item.id) === Number(id) && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item,
      ),
    );
  };

  // ✅ TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  // ✅ TOTAL COUNT (better than length)
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        increaseQty,
        decreaseQty,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
