import React, { useState, useEffect } from "react";
import api from "../Api";
import PokemonList from "../components/PokemonList";

function Home() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true, error: null });

      try {
        const pokemons = await api.pokemons.list();
        setState({ loading: false, data: pokemons.results });
      } catch (e) {
        setState({ loading: false, error: e });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <PokemonList pokemonList={state.data} />
    </div>
  );
}

export default Home;
