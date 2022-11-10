import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseRoutes } from 'shared/lib';

interface navbarModelState {
  activePage: string;
}

const initialState: navbarModelState = {
  activePage: baseRoutes.HOME,
};

const navbarModel = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActivePage: (state, { payload }: PayloadAction<string>) => {
      state.activePage = payload;
    },
  },
});

export const { setActivePage } = navbarModel.actions;
export const reducer = navbarModel.reducer;
