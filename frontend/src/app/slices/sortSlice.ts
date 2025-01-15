import { createSlice } from '@reduxjs/toolkit';

const SORT_TYPES: sortTypeItem = {
  priceAsc: {field: 'price', direction: 1},
  priceDesc: {field: 'price', direction: -1},
  nameAsc: {field: 'brand', direction: 1},
  nameDesc: {field: 'brand', direction: -1}
}

export interface sortSpec {
  field: string;
  direction: number;
} 

export interface sortTypeItem {
  [name: string]: sortSpec;
}

export interface sortItem {
  title: string;
  type: sortSpec;
}

export const sortList: sortItem[] = [
  { title: "Сначала дешевле", type: SORT_TYPES.priceAsc },
  { title: "Сначала дороже", type: SORT_TYPES.priceDesc },
  { title: "По алфавиту от А до Я", type: SORT_TYPES.nameAsc },
  { title: "По алфавиту от Я до А", type: SORT_TYPES.nameDesc },
]

const initialState: sortItem = sortList[0]

const CartSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.title = action.payload.item.title;
      state.type = action.payload.item.type;
    },
  },
});

export const { setSort } = CartSlice.actions;

export default CartSlice.reducer;