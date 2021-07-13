import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CartProvider from "../components/CartContext";
import CartDetails from "../pages/CartDetails";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

test("renders CartDetails page", () => {
  render(
    <Elements stripe={stripePromise}>
      <CartProvider>
        <Router>
          <CartDetails />
        </Router>
      </CartProvider>
    </Elements>
  );
  const cartDetailsElement = screen.getByText(/checkout/i);
  expect(cartDetailsElement).toBeInTheDocument();
});
