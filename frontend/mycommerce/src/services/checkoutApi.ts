import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/payments/",
});

export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery,
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (orderData) => ({
        url: "create-checkout-session/",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useCheckoutMutation } = checkoutApi;
