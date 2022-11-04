import { configureStore } from '@reduxjs/toolkit';
import { mockApi } from 'shared/api/mock.api';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApi.middleware),
});
