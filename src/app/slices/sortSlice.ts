import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ENUM_SORT {
  priceAsc = '+number',
  priceDesc = '-number',
  nameAsc = '+string',
  nameDesc = '-string'
}


const SORT_TYPES: sortTypeItem = {
  priceAsc: {type: 'number', direction: 1},
  priceDesc: {type: 'number', direction: -1},
  nameAsc: {type: 'string', direction: 1},
  nameDesc: {type: 'string', direction: -1}
}

export interface sortSpec {
  type: string;
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
  { title: "По цене 🡑", type: SORT_TYPES.priceAsc },
  { title: "По цене 🡓", type: SORT_TYPES.priceDesc },
  { title: "По алфавиту 🡑", type: SORT_TYPES.nameAsc },
  { title: "По алфавиту 🡓", type: SORT_TYPES.nameDesc },
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