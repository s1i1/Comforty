import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';
import { CartProductsItems } from 'pages/cart/model';

const LS_CART_KEY = 'rck';

interface CartPageState {
  cartProducts: CartProductsItems[];
}

const initialState: CartPageState = {
  cartProducts: JSON.parse(localStorage.getItem(LS_CART_KEY) ?? '[]'),
};

const cartPageModel = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProducts: (state, { payload }: PayloadAction<CartProductsItems>) => {
      const findDuplicate = state.cartProducts.find((obj) => obj.id === payload.id);

      if (findDuplicate) return;

      state.cartProducts.push(payload);
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartProducts));
    },
    removeCartProduct: (state, { payload }: PayloadAction<string>) => {
      state.cartProducts = state.cartProducts.filter((obj) => {
        return obj.id !== payload;
      });
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartProducts));
    },
    removeAllProducts: (state) => {
      state.cartProducts = [];
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartProducts));
    },

    incrementCount: (state, { payload }: PayloadAction<string>) => {
      state.cartProducts = state.cartProducts.map((obj) => {
        if (obj.id === payload) {
          obj.count++;
        }
        return obj;
      });
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartProducts));
    },

    decrementCount: (state, { payload }: PayloadAction<string>) => {
      state.cartProducts = state.cartProducts.map((obj) => {
        if (obj.id === payload) {
          obj.count--;
        }
        return obj;
      });
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cartProducts));
    },
  },
});

export const selectCartPage = (state: RootState) => state.cart;

export const {
  setCartProducts,
  removeCartProduct,
  removeAllProducts,
  incrementCount,
  decrementCount,
} = cartPageModel.actions;
export const reducer = cartPageModel.reducer;
