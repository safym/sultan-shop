import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  imageAlt: string;
  imageCredit: string;
  measurement: {
    type: string;
    value: string;
  };
  barcode: string;
  manufacturer: string;
  brand: string;
  category: Array<string>
}

export interface ProductItems {
  [id: string]: Product
}

export interface ProductsState {
  productsItems: ProductItems;
}


const initialState: ProductsState = {
  productsItems: {},
};

const productsSlice = createSlice({
  initialState,
  name: "productsItems",
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach(product => {
        state.productsItems[product.id] = product;
      })
    }
  },
});

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;