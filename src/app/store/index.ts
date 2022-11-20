import { configureStore } from '@reduxjs/toolkit';
import { mockApi, mockApiSecondary } from 'shared/api';
import { searchModel } from 'features/search-product';
import { navbarModel } from 'features/navbar';
import { ourProductsModel } from 'entities/our-products';
import { categoriesModel } from 'features/categories';
import { headerModel } from 'widgets/header';
import { cartPageModel } from 'pages/cart';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    [mockApiSecondary.reducerPath]: mockApiSecondary.reducer,
    search: searchModel.reducer,
    navbar: navbarModel.reducer,
    ourProducts: ourProductsModel.reducer,
    categories: categoriesModel.reducer,
    header: headerModel.reducer,
    cart: cartPageModel.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware, mockApiSecondary.middleware),
});
