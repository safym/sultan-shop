import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface CartItem {
  id: string;
  count: number;
  price: number;
  total: number;
}

// export interface CartState {
//   cartItems: CartItem[];
//   totalPrice: number;
// }

const CartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [] as CartItem[],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload.item.id;
      const productPrice = action.payload.item.price;
      const addedItem = state.cartItems.find((item) => item.id === productId)

      if (addedItem) {
        addedItem.count++;
        addedItem.total = getTotalItemPrice(addedItem);
      } else {
        state.cartItems.push({
          id: productId,
          price: productPrice,
          count: 1,
          total: productPrice,
        });
      }

      state.totalPrice = getTotalCartPrice(state.cartItems)
    },
    minusItem: (state, action) => {
      const productId = action.payload.item.id;
      const addedItem = state.cartItems.find((item) => item.id === productId)

      if (addedItem) {
        addedItem.count--;
        addedItem.total = getTotalItemPrice(addedItem);
      }

      state.totalPrice = getTotalCartPrice(state.cartItems)
    },
    removeItem: (state, action) => {
      const productId = action.payload.item.id;

      state.cartItems = state.cartItems.filter((item) => item.id !== productId)

      state.totalPrice = getTotalCartPrice(state.cartItems)
    }
  },
});

export const getTotalCartPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const getTotalItemPrice = (item: CartItem) => {
  return item.count * item.price;
};

export const { addItem, minusItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;