import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';

const initialState = {
  value: '',
};

export const searchModel = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const selectSearch = (state: RootState) => state.search;

export const { setSearchValue } = searchModel.actions;

export const reducer = searchModel.reducer;
