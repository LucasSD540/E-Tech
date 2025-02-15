import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    fetchProduct: builder.query({
      query: () => "product/list/",
    }),
    fetchDetailProduct: builder.query({
      query: (id) => `product/detail/${id}`,
    }),
  }),
});

export const { useFetchProductQuery, useFetchDetailProductQuery } = productApi;
