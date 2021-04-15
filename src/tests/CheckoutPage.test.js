import React from "react";
import { render, screen } from "@testing-library/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CartProvider from "../components/CartContext";
import Checkout from "../pages/Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

test("renders checkout page", () => {
  render(
    <Elements stripe={stripePromise}>
      <CartProvider>
        <Checkout />
      </CartProvider>
    </Elements>
  );
  const checkoutElement = screen.getByText(/checkout/i);
  expect(checkoutElement).toBeInTheDocument();
});
