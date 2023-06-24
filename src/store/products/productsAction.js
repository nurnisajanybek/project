import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { setOneProduct, setProducts } from "./productsSlice";

export const getProducts = createAsyncThunk(
  "@products/getProducts",
  async (_, { dispatch }) => {
    const { data } = await axios.get(API);
    dispatch(setProducts(data));
  }
);
export const addProduct = createAsyncThunk(
  "@products/addProduct",
  async (newProduct, { dispatch }) => {
    await axios.post(API, newProduct);
    dispatch(getProducts());
  }
);
export const getOneProduct = createAsyncThunk(
  "@products/getOneProduct",
  async (id, { dispatch }) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch(setOneProduct(data));
  }
);
export const editOneProduct = createAsyncThunk(
  "@products/editOneProduct",
  async (editedProduct, { dispatch }) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    dispatch(getOneProduct(editedProduct.id));
  }
);
export const deleteOneProduct = createAsyncThunk(
  "@products/deleteOneProduct",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/${id}`);
    dispatch(getProducts());
  }
);
