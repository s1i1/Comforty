import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/types';
import { ProductItems } from 'shared/api/mock.api/models';

interface OurProductsModelState {
  productItems: ProductItems[];
  pageNumber: number;
  linkTag: string;
}

const initialState: OurProductsModelState = {
  productItems: [],
  pageNumber: 1,
  linkTag: '',
};

export const categoryNames = [
  { title: 'All', link: '' },
  { title: 'Newest', link: 'newest' },
  { title: 'Trending', link: 'trending' },
  { title: 'Best Sellers', link: 'bestSeller' },
  { title: 'Featured', link: 'featured' },
];

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
    filterProductItems: (state, { payload }: PayloadAction<string>) => {
      state.productItems = state.productItems.filter((obj) => obj.category === payload);
    },
  },
});

export const selectOurProducts = (state: RootState) => state.ourProducts;

export const { setProductItems, setPageNumber, setLinkTag, filterProductItems } =
  ourProductsModel.actions;

export const reducer = ourProductsModel.reducer;
