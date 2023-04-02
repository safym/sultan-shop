import { Product } from "../slices/productsSlice";
import { formData } from "../../components/AdminPage/AdminPage"
import { Form } from "react-router-dom";

const BASE_URL = 'https://ayyansea.com/api/'

export async function getProducts(): Promise<Product[]> {
  const results = await fetch("https://ayyansea.com/api/products");

  // artificial delay for skeletons
  await sleep(1000);

  const products = results.json();
  return products;
}

export type CheckoutResponse = { success: boolean; error?: string };

export async function createProduct(productData: formData): Promise<CheckoutResponse> {
 
  const url = `https://ayyansea.com/api/products`;

  console.log(productData)
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData),
    });
    const data = await response.json();

    return data as CheckoutResponse;
  } catch (error) {
    console.error(error)
  }
}

const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));
