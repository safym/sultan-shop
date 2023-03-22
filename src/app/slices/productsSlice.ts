import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../data/api";

export interface ProductsState {
  productsItems: { [id: string]: Product };
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