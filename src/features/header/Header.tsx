import React from 'react';
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Header: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <header>
       <NavLink to="/">
        home
      </NavLink>
      <br />
      <NavLink to="/products">
        products
      </NavLink>
      <br />
      <NavLink to="/cart">
        cart ({Object.keys(cartItems).length})
      </NavLink>
    </header>
  );
}

export default Header;