import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface CartItem{
  [id: string]: number;
}


export interface CartState {
  totalPrice: number;
  items: CartItem[];
}

export const getMemoizedNumItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    console.log("calling getMemoizedNumItems");
    let numItems = 0;
    for (let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
);

const CartSlice = createSlice({
    name: 'cartItems',
    initialState: {
      cartItems: {} as CartItem,
    },
    reducers: {
        addItem: (state, action) => {
          const productId = action.payload.item.id;

          console.log(action.payload)
          if (state.cartItems[productId]) {
            state.cartItems[productId]++;
          } else {
            state.cartItems[productId] = 1;
          }
        },
        removeItem: (state, action) => {
            delete state.cartItems[action.payload.id];
        }
    },
});

export const {addItem, removeItem} = CartSlice.actions;

export default CartSlice.reducer;