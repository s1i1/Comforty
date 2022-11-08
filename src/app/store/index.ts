import { configureStore } from '@reduxjs/toolkit';
import { mockApi, mockApiSecondary } from 'shared/api';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    [mockApiSecondary.reducerPath]: mockApiSecondary.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware, mockApiSecondary.middleware),
});
