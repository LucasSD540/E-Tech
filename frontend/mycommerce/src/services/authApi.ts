import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: "include",
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userCredentials) => ({
        url: "/api/user/auth/login/",
        method: "POST",
        body: userCredentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/api/user/auth/logout/",
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/user/create/",
        method: "POST",
        body: userData,
      }),
    }),
    isAuthenticated: builder.query({
      query: () => ({
        url: "/api/user/auth/me/",
      }),
    }),
    deleteAccount: builder.mutation({
      query: () => ({
        url: "/api/user/delete/",
        method: "DELETE",
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/api/user/change-password/",
        method: "POST",
        body: data,
      }),
    }),
    changeInfo: builder.mutation({
      query: (data) => ({
        url: "/api/user/update/",
        method: "PATCH",
        body: data,
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
  useChangeInfoMutation,
} = authApi;
