/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import PokemonList from "../components/PokemonList";

function Orders() {
  const [cart, setCart, orders, setOrders] = useContext(CartContext);

  return (
    <div className="container">
      <h1>Orders</h1>
      <PokemonList pokemonList={orders} />
    </div>
  );
}

export default Orders;
