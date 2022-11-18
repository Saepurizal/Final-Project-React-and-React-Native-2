import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";

const initialState = {
  cart: [],
  loading: false,
};

export const cartUser = createAsyncThunk("cart/cartUser", async (id) => {
    console.log(id)
    id = 1;
    const API = getAPI({req: `carts/user/${id}`});
    const res = await axios.get(API);
    return res.data;
});

const cartUserSlice = createSlice({
  name: "cartuser",
  initialState,
  reducers: {},
  extraReducers: {
    [cartUser.pending]: (state) => {
      state.isLoading = true;
    },
    [cartUser.fulfilled]: (state, { payload }) => {
      state.cart = payload;
      state.isLoading = false;
    },
    [cartUser.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default cartUserSlice.reducer;
