import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductItems } from './models';

interface GetItemsProps {
  pageNumber: number;
  limit: number;
  tag?: string;
  searchProduct?: string;
}

interface GetItemsParams {
  page: number;
  limit: number;
  sortBy: string;
  order: string;
  filter?: string;
  title?: string;
}

export const mockApi = createApi({
  reducerPath: 'mockapi/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://636379b08a3337d9a2deb7e0.mockapi.io/',
  }),
  endpoints: (build) => ({
    getItems: build.query<ProductItems[], GetItemsProps>({
      query: ({ pageNumber, tag, limit, searchProduct }) => {
        const params: GetItemsParams = {
          page: pageNumber,
          limit: limit,
          sortBy: 'rating',
          order: 'ask',
        };

        if (tag) params.filter = tag;
        if (searchProduct) params.title = searchProduct;

        return {
          url: 'items',
          params: params,
        };
      },
    }),
  }),
});

export const { useGetItemsQuery } = mockApi;
