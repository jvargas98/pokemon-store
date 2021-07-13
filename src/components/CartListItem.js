/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";

const CartListItem = ({ item }) => {
  return (
    <li className="list-group-item list-group-item-action d-flex align-items-center">
      <p className="m-0">
        ${item.id} {item.name}
      </p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
        className="ml-auto"
        style={{ width: "30px" }}
        alt="..."
      />
    </li>
  );
};

CartListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CartListItem;
