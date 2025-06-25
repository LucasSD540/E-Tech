import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
});

export const shippingApi = createApi({
  reducerPath: "shippingApi",
  baseQuery,
  endpoints: (builder) => ({
    calculateShipping: builder.mutation({
      query: (orderData) => ({
        url: "api/shipping/calculate-shipping/",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useCalculateShippingMutation } = shippingApi;
