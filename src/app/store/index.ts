import { configureStore } from '@reduxjs/toolkit';
import { mockApi, mockApiSecondary } from 'shared/api';
import { searchModel } from 'features/search-product';
import { navbarModel } from 'features/navbar';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    [mockApiSecondary.reducerPath]: mockApiSecondary.reducer,
    search: searchModel.reducer,
    navbar: navbarModel.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware, mockApiSecondary.middleware),
});
