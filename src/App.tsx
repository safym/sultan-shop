import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css'

import Products from "./features/products/Products";
import Home from "./features/home/Home";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <BrowserRouter>

      {/* temporary header */}
      <NavLink to="/">
        home
      </NavLink>
      <br />
      <NavLink to="/products">
        products
      </NavLink>
      <br />
      <NavLink to="/cart">
        cart
      </NavLink>
      {/* temporary header */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
