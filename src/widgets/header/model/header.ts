import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';

type HeaderModelState = {
  scroll: number;
};

const initialState: HeaderModelState = {
  scroll: 0,
};

const headerModel = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setScroll: (state, { payload }: PayloadAction<number>) => {
      state.scroll = payload;
    },
  },
});

export const selectHeader = (state: RootState) => state.header;

export const { setScroll } = headerModel.actions;

export const reducer = headerModel.reducer;
