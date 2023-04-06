import { Product } from "../slices/productsSlice"
import { formData } from "../../components/AdminPage/types"

export const BASE_URL = 'https://ayyansea.com/api/'
export const LOCAL_URL = 'products.json'

export async function getProducts(url: string): Promise<Product[]> {
  const results = await fetch(url)
  const products = results.json()

  return products
}

export async function createProduct(productData: formData) {
  const url = `${BASE_URL}products`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData),
    })

    return response
  } catch (error) {
    console.error(error)
  }
}

export async function deleteProduct(productId: string) {
  const url = `${BASE_URL}products/${productId}`

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function editProduct(productData: formData) {
  const url = `${BASE_URL}products/${productData.id}`

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData),
    })

    return response
  } catch (error) {
    console.error(error)
  }
}