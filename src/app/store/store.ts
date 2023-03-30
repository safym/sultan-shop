import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './../slices/cartSlice';
import productsReducer from './../slices/productsSlice';
import sortReducer from './../slices/sortSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;