import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    fetchCategory: builder.query({
      query: () => "category/list/",
    }),
  }),
});

export const { useFetchCategoryQuery } = categoryApi;
