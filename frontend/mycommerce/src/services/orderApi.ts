import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: "include",
});

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery,
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "api/order/create/",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
