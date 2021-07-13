/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../Api";
import Pokemon from "../components/Pokemon";

function PokemonDetails(props) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true, error: null });

      try {
        const pokemons = await api.pokemons.read(props.match.params.pokemonId);
        setState({ loading: false, data: pokemons });
      } catch (e) {
        setState({ loading: false, error: e });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Pokemon
        id={state.data?.id}
        name={state.data?.name}
        stats={state.data?.stats}
      />
    </div>
  );
}

PokemonDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PokemonDetails;
