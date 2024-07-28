import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "3373af60a4ee1fe7510a1a61c11380e1";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => `trending/movie/week?api_key=${API_KEY}`,
    }),
    getMovieByQuery: builder.query({
      query: ({ query, page }) =>
        `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`,
    }),
    getMovieById: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    }),
    getCastMovie: builder.query({
      query: (movieId) =>
        `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    }),
    getReviewsMovie: builder.query({
      query: (movieId) =>
        `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMovieByQueryQuery,
  useGetMovieByIdQuery,
  useGetCastMovieQuery,
  useGetReviewsMovieQuery,
} = moviesApi;
