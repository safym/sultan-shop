export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  imageAlt: string;
  imageCredit: string;
  measurementType: string;
  measurementValue: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  category: Array<string>
}

export async function getProducts(): Promise<Product[]> {
  const results = await fetch("products.json");
  const products = results.json();
  return products;
}

export type CartItems = { [productID: string]: number };
export type CheckoutResponse = { success: boolean; error?: string };

export async function checkout(items: CartItems): Promise<CheckoutResponse> {
  const modifier = Object.keys(items).length > 0 ? "success" : "error";
  const url = `/checkout-${modifier}.json`;
  await sleep(500);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error);
  }
  return data as CheckoutResponse;
}

const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));
