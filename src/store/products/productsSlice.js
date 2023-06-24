import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  oneProduct: null,
};

export const productsSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setOneProduct(state, action) {
      state.oneProduct = action.payload;
    },
  },
});
export const { setProducts, setOneProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
