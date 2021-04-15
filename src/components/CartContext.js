import React, { useState } from "react";
import PropTypes from "prop-types";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart, orders, setOrders]}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CartProvider;
