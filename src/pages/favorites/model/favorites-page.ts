import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';
import { CartProductsItems } from 'pages/cart/model';

const LS_FAVORITES_KEY = 'rfk';

interface FavoritesPageModelItems {
  favoritesItems: CartProductsItems[];
}

const initialState: FavoritesPageModelItems = {
  favoritesItems: JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) ?? '[]'),
};

const favoritesPageModel = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      const findDuplicate = state.favoritesItems.find((obj) => obj.id === payload.id);

      if (findDuplicate) return;

      state.favoritesItems.push(payload);
      localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(state.favoritesItems));
    },
    removeFavorite: (state, { payload }: PayloadAction<string>) => {
      state.favoritesItems = state.favoritesItems.filter((obj) => {
        return obj.id !== payload;
      });
      localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(state.favoritesItems));
    },
  },
});

export const selectFavoritesPage = (state: RootState) => state.favorites;

export const { addFavorites, removeFavorite } = favoritesPageModel.actions;
export const reducer = favoritesPageModel.reducer;
