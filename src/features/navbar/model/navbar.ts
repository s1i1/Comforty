import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface navbarModelState {
  activePage: number;
}

const initialState: navbarModelState = {
  activePage: 0,
};

const navbarModel = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActivePage: (state, { payload }: PayloadAction<number>) => {
      state.activePage = payload;
    },
  },
});

export const { setActivePage } = navbarModel.actions;
export const reducer = navbarModel.reducer;
