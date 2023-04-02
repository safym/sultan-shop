import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RelevantState {
  isRelevant: boolean;
}

const initialState: RelevantState = {
  isRelevant: true
}

const RelevntSlice = createSlice({
  name: 'relevant',
  initialState,
  reducers: {
    setRelevant: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.isRelevant = action.payload
    }
  },
})

export const { setRelevant } = RelevntSlice.actions;

export default RelevntSlice.reducer;