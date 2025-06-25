import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resetPasswordApi = createApi({
  reducerPath: "resetPasswordApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (email) => ({
        url: "api/user/reset-password/",
        method: "POST",
        body: email,
      }),
    }),
    confirmReset: builder.mutation({
      query: ({ uid, token, new_password }) => ({
        url: `api/user/reset-password-confirm/${uid}/${token}/`,
        method: "POST",
        body: { new_password },
      }),
    }),
  }),
});

export const { useSendEmailMutation, useConfirmResetMutation } =
  resetPasswordApi;
