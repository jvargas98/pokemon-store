/* eslint-disable react/forbid-prop-types */
import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import PaymentForm from "../components/PaymentForm";

function Checkout() {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center">
        <div className="col-6">
          <h3>Checkout</h3>
          <div className="align-items-center">
            <h5>Total: ${totalPrice}.00</h5>
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
