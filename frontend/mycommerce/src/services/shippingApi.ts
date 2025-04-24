import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/shipping/",
});

export const shippingApi = createApi({
  reducerPath: "shippingApi",
  baseQuery,
  endpoints: (builder) => ({
    calculateShipping: builder.mutation({
      query: (orderData) => ({
        url: "calculate-shipping/",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useCalculateShippingMutation } = shippingApi;
