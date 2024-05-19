import React, { useState, createContext } from "react";

import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(20);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const reduceQuantity = (product) => {
    const indexes = [];
    for (item of cart) {
      if (item.id === product.id) {
        const index = cart.indexOf(item);
        indexes.push(index);
      }
    }
    const indexToRemove = indexes.length - 1;
    const newCart = cart.filter((item, index) => {
      return index !== indexToRemove;
    });
    setCart(newCart);
  };

  const removeProductFromCart = (product) => {
    const indexes = [];

    for (item of cart) {
      if (item.id === product.id) {
        const index = cart.indexOf(item);
        indexes.push(index);
      }
    }

    const newCart = cart.filter((item, index) => {
      return !indexes.includes(index);
    });
    setCart(newCart);
  };

  const getUniqueCart = (cart) => {
    const uniqueProducts = [];

    for (product of cart) {
      const existingProduct = uniqueProducts.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        uniqueProducts.push({ ...product, quantity: 1 });
      }
    }
    return uniqueProducts;
  };

  const getSubTotalPrice = () => {
    var price = 0;
    cart.forEach((product) => {
      price += product.price;
    });
    return price;
  };

  const getDeliveryFee = () => {
    const deliveryFee = cart.length * 2;
    return deliveryFee;
  };

  const getTotalPrice = () => {
    var totalPrice = 0;
    var price = 0;
    if (cart.length < 1) {
      return totalPrice;
    } else {
      cart.forEach((product) => {
        price += product.price;
      });

      var deliveryFee = getDeliveryFee();
      var subtotalPrice = getSubTotalPrice();

      totalPrice = subtotalPrice - deliveryFee - discount;
      return totalPrice;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        reduceQuantity,
        removeProductFromCart,
        setCart,
        getUniqueCart,
        getSubTotalPrice,
        discount,
        getDeliveryFee,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
