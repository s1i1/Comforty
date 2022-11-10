import { configureStore } from '@reduxjs/toolkit';
import { mockApi, mockApiSecondary } from 'shared/api';
import { searchModel } from 'features/search-product';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    [mockApiSecondary.reducerPath]: mockApiSecondary.reducer,
    search: searchModel.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware, mockApiSecondary.middleware),
});
