import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesSlice = createApi({
  reducerPath: 'moviesSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: (page) => (page ? `films/?page=${page}` : 'films'),
    } as any),
    getSingleMovie: builder.query({
      query: (id) => `films/${id}`,
    } as any),
  }),
});

export const { useGetSingleMovieQuery, useGetAllMoviesQuery } = moviesSlice;
