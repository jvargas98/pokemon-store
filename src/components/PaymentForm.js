/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { CartContext } from "./CartContext";
import { OrdersContext } from "./OrdersContext";

const PaymentForm = () => {
  const [cart, setCart] = useContext(CartContext);
  const [orders, setOrders] = useContext(OrdersContext);
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    window
      .fetch(`${process.env.REACT_APP_STRIPE_SERVER}create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const billingDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    if (!stripe || !elements) {
      return;
    }

    setPaymentLoading(true);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      },
    });

    setPaymentLoading(false);

    if (paymentResult.error) {
      Swal.fire({
        title: "Error!",
        text: paymentResult.error.message,
        icon: "error",
      });
    } else {
      // eslint-disable-next-line no-lonely-if
      if (paymentResult.paymentIntent.status === "succeeded") {
        setOrders((currentState) => [...currentState, ...cart]);
        setCart([]);
        Swal.fire({
          title: "Success!",
          text: "Payment succeeded",
          icon: "success",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="emailInput">Email</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={isPaymentLoading}
        className="btn btn-primary"
      >
        {isPaymentLoading ? "Loading..." : "Pay"}
      </button>
    </form>
  );
};

export default PaymentForm;
