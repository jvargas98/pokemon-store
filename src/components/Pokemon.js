/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

const Pokemon = ({ id, name, stats }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const pokemon = { name, price: id, id };
    setCart((currentState) => [...currentState, pokemon]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-sm-6">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            className="card-img-top mx-auto my-auto d-block"
            alt="..."
          />
        </div>
        <div className="col-12 col-sm-6">
          <h2>{name}</h2>
          <p>${id}.00</p>
          <ul className="list-group">
            {stats.map((stat) => (
              <li className="list-group-item">
                {stat.stat.name}
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-label={stat.stat.name}
                    style={{ width: `${stat.base_stat}%` }}
                    aria-valuenow={stat.base_stat}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div>
            <button
              type="button"
              className="btn btn-primary mt-4 w-100"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  stats: PropTypes.array,
};

Pokemon.defaultProps = {
  stats: [],
};

export default Pokemon;
