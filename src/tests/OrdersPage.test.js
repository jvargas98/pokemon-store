import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";
import Orders from "../pages/Orders";

test("renders orders page", () => {
  render(
    <App>
      <Orders />
    </App>
  );
  const ordersElement = screen.getByText(/orders/i);
  expect(ordersElement).toBeInTheDocument();
});
