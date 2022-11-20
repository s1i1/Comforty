//@ts-nocheck
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';

const initialState = {
  cartProducts: [],
};

const cartPageModel = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProducts: (state, { payload }) => {
      state.cartProducts.push(payload);
    },
  },
});

export const selectCartPage = (state: RootState) => state.cart;

export const { setCartProducts } = cartPageModel.actions;
export const reducer = cartPageModel.reducer;
