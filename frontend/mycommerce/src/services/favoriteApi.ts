import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/favorite/",
  credentials: "include",
});

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  baseQuery,
  endpoints: (builder) => ({
    addFavorite: builder.mutation({
      query: (productId) => ({
        url: "create/",
        method: "POST",
        body: productId,
      }),
    }),
    listFavorite: builder.query({
      query: () => ({
        url: "list/",
      }),
    }),
    deleteFavorite: builder.mutation({
      query: (productId) => ({
        url: `delete/${productId}/`,
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
