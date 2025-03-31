import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resetPasswordApi = createApi({
  reducerPath: "resetPasswordApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/user/" }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (email) => ({
        url: "reset-password/",
        method: "POST",
        body: email,
      }),
    }),
    confirmReset: builder.mutation({
      query: ({ uid, token, new_password }) => ({
        url: `reset-password-confirm/${uid}/${token}/`,
        method: "POST",
        body: { new_password },
      }),
    }),
  }),
});

export const { useSendEmailMutation, useConfirmResetMutation } =
  resetPasswordApi;
