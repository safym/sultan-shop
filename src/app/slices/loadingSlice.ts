import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: true
}

const CartSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.isLoading = action.payload
    }
  },
})

export const { setLoading } = CartSlice.actions;

export default CartSlice.reducer;