/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CartListItem from "./CartListItem";

const CartList = ({ cartList, total }) => {
  return (
    <div className="row">
      <div className="col-6">
        <ul className="list-group list-group-flush">
          {cartList.map((item) => (
            <CartListItem item={item} />
          ))}
        </ul>
      </div>
      <div className="col-6">
        <h5>Total</h5>
        <h3>${total}.00</h3>
        <Link to="/checkout" className="btn btn-primary">
          Checkout
        </Link>
      </div>
    </div>
  );
};

CartList.propTypes = {
  cartList: PropTypes.array,
  total: PropTypes.number.isRequired,
};

CartList.defaultProps = {
  cartList: undefined,
};

export default CartList;
