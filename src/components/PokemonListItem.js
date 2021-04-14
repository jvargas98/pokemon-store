/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

const PokemonListItem = ({ pokemon }) => {
  return (
    <div className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemon.url.match(/\/pokemon\/(\d+)\//)[1]
        }.png`}
        className="card-img-top w-50 mx-auto d-block"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
      </div>
    </div>
  );
};

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonListItem;
