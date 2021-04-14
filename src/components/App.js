import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartProvider from "./CartContext";
import Layout from "./Layout";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";
import CartDetails from "../pages/CartDetails";

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/pokemon/:pokemonId"
              component={PokemonDetails}
            />
            <Route exact path="/cart" component={CartDetails} />
          </Switch>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
