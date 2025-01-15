import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const PAGE_ITEMS = 15;

export interface RelevantState {
  currentPage: number;
}

const initialState: RelevantState = {
  currentPage: 1
}

const RelevntSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    }
  },
})

export const { setCurrentPage } = RelevntSlice.actions;

export default RelevntSlice.reducer;