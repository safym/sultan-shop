import { HashRouter,  Routes, Route} from "react-router-dom"

import './styles/app.css'

import { useAppDispatch, useAppSelector } from "./app/hooks"
import { useEffect, useState } from "react"

import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import Layout from './components/Layout'
import ProductDetails from "./components/ProductDetails/ProductDetails"
import AdminPage from "./components/AdminPage/AdminPage"

import { BASE_URL, LOCAL_URL, getProducts } from "./app/data/api"

import { setProducts } from "./app/slices/productsSlice"
import { setLoading } from "./app/slices/loadingSlice"
import { setRelevant } from "./app/slices/relevantSlice"


function App() {
  // load product data from json to redux state
  const dataIsRelevant = useState(useAppSelector((state) => state.relevant.isRelevant))
  const dispatch = useAppDispatch()

  const urlAPI = `${BASE_URL}products`

  useEffect(() => {
    dispatch(setLoading(true))

    getProducts(urlAPI).then((products) => {

      if (!products.length) {
        getProducts(LOCAL_URL).then((localProducts) => {
          dispatch(setProducts(localProducts))
        })  
      } else {
        console.log('load', products)
        dispatch(setProducts(products))
      }

      dispatch(setLoading(false))
    })
    
    dispatch(setRelevant(true))
  }, [dataIsRelevant])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/edit/" element={<AdminPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
