import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/user/",
  credentials: "include",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userCredentials) => ({
        url: "auth/login/",
        method: "POST",
        body: userCredentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout/",
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "create/",
        method: "POST",
        body: userData,
      }),
    }),
    isAuthenticated: builder.query({
      query: () => ({
        url: "auth/me/",
      }),
    }),
    deleteAccount: builder.mutation({
      query: () => ({
        url: "delete/",
        method: "DELETE",
      }),
    }),
    changePassword: builder.mutation({
      query: () => ({
        url: "change-password/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useIsAuthenticatedQuery,
  useDeleteAccountMutation,
  useChangePasswordMutation,
} = authApi;
