import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css'

import Header from "./features/header/Header";
import Home from "./features/home/Home";
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
