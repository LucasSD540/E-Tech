import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    fetchCategory: builder.query({
      query: () => "api/category/list/",
    }),
  }),
});

export const { useFetchCategoryQuery } = categoryApi;
