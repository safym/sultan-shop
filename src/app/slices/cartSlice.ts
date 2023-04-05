import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  count: number;
  price: number;
  total: number;
}

export interface CartState {
  cartItems: CartItem[];
  totalCount: number;
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [] as CartItem[],
  totalCount: 0,
  totalPrice: 0
}

const CartSlice = createSlice({
  name: 'cartItems',
  initialState,
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
      state.totalCount = getTotalCartCount(state.cartItems)
    },
    minusItem: (state, action) => {
      const productId = action.payload.item.id
      const addedItem = state.cartItems.find((item) => item.id === productId)

      if (addedItem) {
        addedItem.count--
        addedItem.total = getTotalItemPrice(addedItem)
      }

      state.totalCount = getTotalCartCount(state.cartItems)
      state.totalPrice = getTotalCartPrice(state.cartItems)
    },
    removeItem: (state, action) => {
      const productId = action.payload.item.id;

      state.cartItems = state.cartItems.filter((item) => item.id !== productId)

      state.totalCount = getTotalCartCount(state.cartItems)
      state.totalPrice = getTotalCartPrice(state.cartItems)
    }
  },
});


export const getTotalCartCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};

export const getTotalCartPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const getTotalItemPrice = (item: CartItem) => {
  return item.count * item.price;
};

export const { addItem, minusItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;