import { Product } from "../slices/productsSlice";
import { formData } from "../../components/AdminPage/types"

const BASE_URL = 'https://ayyansea.com/api/'

export async function getProducts(): Promise<Product[]> {
  const url = `${BASE_URL}products`;
  const results = await fetch(url);

  // artificial delay for skeletons
  await sleep(1000);

  const products = results.json();
  return products;
}

export async function createProduct(productData: formData) {
  const url = `${BASE_URL}products`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData),
    });

    return response;
  } catch (error) {
    console.error(error)
  }
}

export async function deleteProduct(productId: string) {
  const url = `${BASE_URL}products/${productId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error)
  }
}

export async function editProduct(productData: formData) {
  const url = `${BASE_URL}products/${productData.id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData),
    });

    return response;
  } catch (error) {
    console.error(error)
  }
}

const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));
