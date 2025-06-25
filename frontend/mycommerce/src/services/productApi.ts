import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    fetchProduct: builder.query({
      query: () => "api/product/list/",
    }),
    fetchDetailProduct: builder.query({
      query: (id) => `api/product/detail/${id}`,
    }),
  }),
});

export const { useFetchProductQuery, useFetchDetailProductQuery } = productApi;
