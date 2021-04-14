/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="row">
      {pokemonList?.map((pokemon) => {
        return (
          <div className="col-12 col-sm-4 col-lg-3 my-3">
            <Link
              to={`/pokemon/${pokemon.url.match(/\/pokemon\/(\d+)\//)[1]}`}
              className="text-reset text-decoration-none"
            >
              <PokemonListItem pokemon={pokemon} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
};

PokemonList.defaultProps = {
  pokemonList: undefined,
};

export default PokemonList;
