import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './scss/app.css'

import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Layout from './components/Layout';

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
