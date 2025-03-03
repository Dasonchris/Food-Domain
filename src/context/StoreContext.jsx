import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import React from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [CartItem, setCartItem] = useState({});

  const addtoCart = (itemId) => {
    if (CartItem[itemId]) {
      setCartItem((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    } else {
      setCartItem((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    if (CartItem[itemId] === 1) {
      setCartItem((prev) => {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      });
    } else if (CartItem[itemId] > 0) {
      setCartItem((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    }
  };

  const contextValue = {
    food_list,
    CartItem,
    addtoCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// export default StoreContextProvider;
