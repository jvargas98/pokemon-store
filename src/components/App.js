import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:pokemonId" component={PokemonDetails} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
