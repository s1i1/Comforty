import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';
import { CategoryItems, CategoriesModelState } from 'features/categories/model';

const initialState: CategoriesModelState = {
  currentCategory: { title: 'All Categories', category: '' },
};

const categoriesModel = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCurrentCategory: (state, { payload }: PayloadAction<CategoryItems>) => {
      state.currentCategory = payload;
    },
  },
});

export const selectCategories = (state: RootState) => state.categories;

export const { setCurrentCategory } = categoriesModel.actions;
export const reducer = categoriesModel.reducer;
