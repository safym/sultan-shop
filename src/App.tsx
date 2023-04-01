import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import './scss/app.css'

import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import Layout from './components/Layout'
import ProductDetails from "./components/ProductDetails/ProductDetails"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { useEffect, useState } from "react"
import { getProducts } from "./app/data/api"
import { setProducts } from "./app/slices/productsSlice"
import EditProduct from "./components/EditProduct/EditProduct"

function App() {
  // load product data from json to redux state
  const dispatch = useAppDispatch()

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(setProducts(products))

    })
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />}/>
          <Route path="/products/:productId/edit/" element={<EditProduct />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
