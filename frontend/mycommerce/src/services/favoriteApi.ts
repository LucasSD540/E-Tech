import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: "include",
});

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  baseQuery,
  endpoints: (builder) => ({
    addFavorite: builder.mutation({
      query: (productId) => ({
        url: "api/favorite/create/",
        method: "POST",
        body: productId,
      }),
    }),
    listFavorite: builder.query({
      query: () => ({
        url: "api/favorite/list/",
      }),
    }),
    deleteFavorite: builder.mutation({
      query: (productId) => ({
        url: `api/favorite/delete/${productId}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddFavoriteMutation,
  useListFavoriteQuery,
  useDeleteFavoriteMutation,
} = favoriteApi;
