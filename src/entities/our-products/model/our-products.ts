import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';
import { ProductItems } from 'shared/api/mock.api/models';

interface OurProductsModelState {
  productItems: ProductItems[];
  pageNumber: number;
  linkTag: string;
  activeCategory: number;
}

const initialState: OurProductsModelState = {
  productItems: [],
  pageNumber: 1,
  linkTag: '',
  activeCategory: 0,
};

const ourProductsModel = createSlice({
  name: 'ourProducts',
  initialState,
  reducers: {
    setProductItems: (state, { payload }: PayloadAction<ProductItems[]>) => {
      state.productItems = payload;
    },
    setPageNumber: (state, { payload }: PayloadAction<number>) => {
      state.pageNumber = payload;
    },
    setLinkTag: (state, { payload }: PayloadAction<string>) => {
      state.linkTag = payload;
    },
    setActiveCategory: (state, { payload }: PayloadAction<number>) => {
      state.activeCategory = payload;
    },
    filterProductItems: (state, { payload }: PayloadAction<string>) => {
      state.productItems = state.productItems.filter((obj) => obj.category === payload);
    },
  },
});

export const selectOurProducts = (state: RootState) => state.ourProducts;

export const { setProductItems, setPageNumber, setLinkTag, setActiveCategory, filterProductItems } =
  ourProductsModel.actions;

export const reducer = ourProductsModel.reducer;
