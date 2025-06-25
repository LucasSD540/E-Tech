import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: "include",
});

export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery,
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (orderData) => ({
        url: "api/payments/create-checkout-session/",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useCheckoutMutation } = checkoutApi;
