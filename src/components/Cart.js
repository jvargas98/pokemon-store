import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <div className="p-2">
        <ul className="list-group list-group-flush">
          {cart.map((item) => (
            <li className="list-group-item">{item.name}</li>
          ))}
        </ul>
        <br />
        <span>Total: ${totalPrice}</span>
        <br />
        <div className="dropdown-divider" />
        <Link to="/cart" className="btn btn-link w-100">
          View cart
        </Link>
      </div>
    </div>
  );
};

export default Cart;
