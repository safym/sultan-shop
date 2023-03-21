import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem{
  [id: string]: number;
}

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