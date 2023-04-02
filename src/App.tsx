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
import { setLoading } from "./app/slices/loadingSlice"
import AdminPage from "./components/AdminPage/AdminPage"
import { setRelevant } from "./app/slices/relevantSlice"

function App() {
  // load product data from json to redux state
  const dataIsRelevant = useState(useAppSelector((state) => state.relevant.isRelevant))
  const dispatch = useAppDispatch()

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(setLoading(true))
      dispatch(setProducts(products))
      dispatch(setLoading(false))
      dispatch(setRelevant(true))
    })
  }, [dataIsRelevant])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />}/>
          <Route path="/edit/" element={<AdminPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
