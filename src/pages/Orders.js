/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { OrdersContext } from "../components/OrdersContext";
import PokemonList from "../components/PokemonList";

function Orders() {
  const [orders] = useContext(OrdersContext);

  return (
    <div className="container">
      <h1>Orders</h1>
      <PokemonList pokemonList={orders} />
    </div>
  );
}

export default Orders;
