import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TopCategoriesItems } from './models';

interface getItemsProps {
  pageNumber: number;
  tag?: string;
  limit: number;
}

export const mockApiSecondary = createApi({
  reducerPath: 'mockApiSecondary/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://636a45a0b10125b78fd5e078.mockapi.io/',
  }),
  endpoints: (build) => ({
    getTopCategories: build.query<TopCategoriesItems[], getItemsProps>({
      query: ({ pageNumber, limit }) => ({
        url: 'top-categories',
        params: {
          page: pageNumber,
          limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetTopCategoriesQuery } = mockApiSecondary;
