import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface CartItem{
  [id: string]: number;
}


export interface CartState {
  totalPrice: number;
  items: CartItem[];
}

const CartSlice = createSlice({
    name: 'cartItems',
    initialState: {
      cartItems: {} as CartItem,
    },
    reducers: {
        addItem: (state, action) => {
          const productId = action.payload.item.id;

          if (state.cartItems[productId]) {
            state.cartItems[productId]++;
          } else {
            state.cartItems[productId] = 1;
          }
        },
        minusItem: (state, action) => {
          const productId = action.payload.item.id;

          if (state.cartItems[productId]) {
            state.cartItems[productId]--;
          }
        },
        removeItem: (state, action) => {
            delete state.cartItems[action.payload.id];
        }
    },
});

export const {addItem, minusItem, removeItem} = CartSlice.actions;

export default CartSlice.reducer;