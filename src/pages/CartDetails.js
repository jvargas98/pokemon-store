/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import CartList from "../components/CartList";

function CartDetails() {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="container mt-4">
      <h3>Cart</h3>
      <CartList cartList={cart} total={totalPrice} />
    </div>
  );
}

export default CartDetails;
