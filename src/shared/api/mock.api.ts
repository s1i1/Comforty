import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductItems, TopCategoriesItems } from './models';

interface getItemsProps {
  pageNumber: number;
  tag?: string;
  limit: number;
}

export const mockApi = createApi({
  reducerPath: 'mockapi/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://636379b08a3337d9a2deb7e0.mockapi.io/',
  }),
  endpoints: (build) => ({
    getItems: build.query<ProductItems[], getItemsProps>({
      query: ({ pageNumber, tag, limit }) => ({
        url: 'items',
        params: {
          page: pageNumber,
          limit: limit,
          sortBy: '',
          order: 'desc',
          filter: tag,
        },
      }),
    }),
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

export const { useGetItemsQuery, useGetTopCategoriesQuery } = mockApi;
