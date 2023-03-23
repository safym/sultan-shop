import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css'

import Home from "./features/home/Home";
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";
import Layout from './features/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
