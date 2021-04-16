import React, { useState } from "react";
import PropTypes from "prop-types";

export const OrdersContext = React.createContext();

const OrdesProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  return (
    <OrdersContext.Provider value={[orders, setOrders]}>
      {children}
    </OrdersContext.Provider>
  );
};

OrdesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OrdesProvider;
