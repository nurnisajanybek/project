import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  oneProduct: null,
  search: "",
  currentPage: 1,
  totalPages: 1,
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
    setSearch(state, action) {
      state.search = action.payload;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});
export const { setProducts, setOneProduct, setSearch, setPage, setTotalPages } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
