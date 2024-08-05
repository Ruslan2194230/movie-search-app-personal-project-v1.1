import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "3373af60a4ee1fe7510a1a61c11380e1";

export const personsApi = createApi({
  reducerPath: "personsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getPersonDetails: builder.query({
      query: (personId) =>
        `person/${personId}?api_key=${API_KEY}&language=en-US`,
    }),
    getPersonMovieDetails: builder.query({
      query: (personId) =>
        `person/${personId}/movie_credits?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});

export const { useGetPersonDetailsQuery, useGetPersonMovieDetailsQuery } =
  personsApi;
