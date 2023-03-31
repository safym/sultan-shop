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

export interface ProductsState {
  productsItems: Product[];
}

const initialState: ProductsState = {
  productsItems: [],
};

const productsSlice = createSlice({
  initialState,
  name: "productsItems",
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach(product => {
        const IsAdded = state.productsItems.find((item) => item.id === product.id)

        if (!IsAdded) {
          state.productsItems.push(product);
        }
      })
    }
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;