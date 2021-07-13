import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartProvider from "./CartContext";
import OrdersProvider from "./OrdersContext";
import Layout from "./Layout";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";
import CartDetails from "../pages/CartDetails";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

function App() {
  return (
    <Router>
      <CartProvider>
        <OrdersProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/pokemon/:pokemonId"
                component={PokemonDetails}
              />
              <Route exact path="/cart" component={CartDetails} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/orders" component={Orders} />
            </Switch>
          </Layout>
        </OrdersProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
