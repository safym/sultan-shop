import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductFiltersState {
  minPrice: number;
  maxPrice: number;
  manufacturers: string[];
  category: string;
}

const initialState: ProductFiltersState = {
  minPrice: 0,
  maxPrice: 100000,
  manufacturers: [],
  category: '',
};

const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setManufacturer: (state, action: PayloadAction<Array<string>>) => {
      const manufacturers = action.payload

      manufacturers.map((item) => {
        if (!state.manufacturers.includes(item)) {
          state.manufacturers.push(item);
        }
      })
    },
    removeManufacturer: (state, action: PayloadAction<string>) => {
      const manufacturer = action.payload

      state.manufacturers = state.manufacturers.filter((item) => item !== manufacturer)
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.category = "";
    },
    removeFilters: (state) => {
      state.category = initialState.category;
      state.manufacturers = initialState.manufacturers;
      state.maxPrice = initialState.maxPrice;
      state.minPrice = initialState.minPrice
    }
  },
});

export const {
  setMinPrice,
  setMaxPrice,
  setManufacturer,
  removeManufacturer,
  setCategory,
  removeCategory,
  removeFilters
} = FiltersSlice.actions;

export default FiltersSlice.reducer;