import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TopCategoriesItems, DiscountItems, AboutUsItems } from './models';

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
    getDiscountItems: build.query<DiscountItems[], getItemsProps>({
      query: ({ pageNumber, limit }) => ({
        url: 'discount-items',
        params: {
          page: pageNumber,
          limit: limit,
        },
      }),
    }),
    getAboutUs: build.query<AboutUsItems[], getItemsProps>({
      query: ({ pageNumber, limit }) => ({
        url: 'about-us',
        params: {
          page: pageNumber,
          limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetTopCategoriesQuery, useGetDiscountItemsQuery, useGetAboutUsQuery } =
  mockApiSecondary;
