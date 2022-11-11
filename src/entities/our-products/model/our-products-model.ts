import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OurProductsModelState {
  pageNumber: number;
  linkTag: string;
}

const initialState: OurProductsModelState = {
  pageNumber: 1,
  linkTag: '',
};

const ourProductsModel = createSlice({
  name: 'ourProductsModel',
  initialState,
  reducers: {
    setPageNumber: (state, { payload }: PayloadAction<number>) => {
      state.pageNumber = payload;
    },
    setLinkTag: (state, { payload }: PayloadAction<string>) => {
      state.linkTag = payload;
    },
  },
});

export const { setPageNumber, setLinkTag } = ourProductsModel.actions;

export const reducer = ourProductsModel.reducer;
