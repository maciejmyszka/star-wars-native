import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starshipsSlice = createApi({
  reducerPath: 'starshipsSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllStarships: builder.query({
      query: (page) => (page ? `starships/?page=${page}` : 'starships'),
    } as any),
    getSingleStarship: builder.query({
      query: (id) => `starships/${id}`,
    } as any),
  }),
});

export const { useGetSingleStarshipQuery, useGetAllStarshipsQuery } =
  starshipsSlice;
