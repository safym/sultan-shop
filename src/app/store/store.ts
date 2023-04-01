import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../slices/filterSlice';
import loadingSlice from '../slices/loadingSlice';
import cartReducer from './../slices/cartSlice';
import productsReducer from './../slices/productsSlice';
import sortReducer from './../slices/sortSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    sort: sortReducer,
    filter: filterSlice,
    loading: loadingSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;