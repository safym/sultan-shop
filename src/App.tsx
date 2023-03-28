import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './scss/app.css'

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import Layout from './components/Layout';
import ProductDetails from "./components/pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={ <ProductDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
