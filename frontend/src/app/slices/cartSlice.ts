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
      let addedItem = state.cartItems.find((item) => item.id === productId)

      if (addedItem) {
        const itemIndex = state.cartItems.findIndex(item => item.id === productId)

        const updatedItems = [
          ...state.cartItems.slice(0, itemIndex),
          {
            ...state.cartItems[itemIndex],
            count: state.cartItems[itemIndex].count + 1,
            total: (state.cartItems[itemIndex].count + 1) * state.cartItems[itemIndex].price,
          },
          ...state.cartItems.slice(itemIndex + 1),
        ];

        return {
          cartItems: updatedItems,
          totalCount: getTotalCartCount(updatedItems),
          totalPrice: getTotalCartPrice(updatedItems)
        };
      } else {
        const newItem = {
            id: productId,
            price: productPrice,
            count: 1,
            total: productPrice,
          }

        const updatedItems = [...state.cartItems, newItem]

        return Object.assign({}, state, {
          cartItems: updatedItems,
          totalCount: getTotalCartCount(updatedItems),
          totalPrice: getTotalCartPrice(updatedItems)
        });
      }
    },
    minusItem: (state, action) => {
      const productId = action.payload.item.id;
      let addedItem = state.cartItems.find((item) => item.id === productId)

      if (addedItem) {
        const itemIndex = state.cartItems.findIndex(item => item.id === productId)

        const updatedItems = [
          ...state.cartItems.slice(0, itemIndex),
          {
            ...state.cartItems[itemIndex],
            count: state.cartItems[itemIndex].count - 1,
            total: (state.cartItems[itemIndex].count - 1) * state.cartItems[itemIndex].price
          },
          ...state.cartItems.slice(itemIndex + 1),
        ];

        return {
          cartItems: updatedItems,
          totalCount: getTotalCartCount(updatedItems),
          totalPrice: getTotalCartPrice(updatedItems)
        };
      } 
    },
    removeItem: (state, action) => {
      const productId = action.payload.item.id;
      let addedItem = state.cartItems.find((item) => item.id === productId)

      if (addedItem) {
        const updatedItems = state.cartItems.filter((item) => item.id !== productId)

        return {
          cartItems: updatedItems,
          totalCount: getTotalCartCount(updatedItems),
          totalPrice: getTotalCartPrice(updatedItems)
        };
      }
    },
  },
});


export const getTotalCartCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};

export const getTotalCartPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const { addItem, minusItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;